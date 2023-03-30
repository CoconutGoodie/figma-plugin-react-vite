import { LogicalSide } from "@common/logical-side";
import { NetworkMessage, TransportMessage } from "@common/network/message";

export namespace NetworkMessageRegistry {
  const messages: Map<string, NetworkMessage<any>> = new Map();

  function byName(name: string) {
    return messages.get(name);
  }

  export function handleIncomingMessage(
    transportMessage: TransportMessage<any>
  ) {
    const message = byName(transportMessage.type);

    if (message == null) {
      console.warn("Unknown message received ->", transportMessage.type);
    } else {
      const from = LogicalSide.byName(transportMessage.from)!;
      message.handle(transportMessage.payload, from);
    }
  }

  export function register<P>(message: NetworkMessage<P>) {
    messages.set(message.getName(), message);
    return message;
  }
}
