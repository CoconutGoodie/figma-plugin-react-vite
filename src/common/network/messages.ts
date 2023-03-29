import { LogicalSide } from "@common/logical-side";
import { NetworkMessage, TransportMessage } from "@common/network/message";
import { CreateRectMessage } from "@common/network/messages/CreateRectMessage";
import { PingMessage } from "@common/network/messages/PingMessage";
import { PongMessage } from "@common/network/messages/PongMessage";

export namespace NetworkMessages {
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

  function register<P>(message: NetworkMessage<P>) {
    messages.set(message.getName(), message);
    return message;
  }

  export const PING = register(new PingMessage());
  export const PONG = register(new PongMessage());
  export const CREATE_RECT = register(new CreateRectMessage());
}
