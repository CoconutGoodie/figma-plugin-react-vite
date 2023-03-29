import { LogicalSide } from "@common/logical-side";
import { TransportMessage } from "@common/network/message";

export namespace Transports {
  type TransportDelegate<M extends TransportMessage<any>> = (
    message: M
  ) => void;

  const transports: Map<
    LogicalSide,
    Map<LogicalSide, TransportDelegate<any>>
  > = new Map();

  export function getDelegate(from: LogicalSide, to: LogicalSide) {
    return transports.get(from)?.get(to);
  }

  function register(
    from: LogicalSide,
    to: LogicalSide,
    delegate: TransportDelegate<any>
  ) {
    if (!transports.has(from)) transports.set(from, new Map());
    const delegates = transports.get(from)!;
    if (!delegates.has(to)) delegates.set(to, delegate);
  }

  register(LogicalSide.PLUGIN, LogicalSide.UI, (message) => {
    figma.ui.postMessage(message);
  });

  register(LogicalSide.UI, LogicalSide.PLUGIN, (message) => {
    parent.postMessage({ pluginMessage: message }, "*");
  });
}
