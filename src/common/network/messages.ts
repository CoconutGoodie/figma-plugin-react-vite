import { CreateRectMessage } from "@common/network/messages/CreateRectMessage";
import { PingMessage } from "@common/network/messages/PingMessage";
import { PongMessage } from "@common/network/messages/PongMessage";
import { NetworkMessageRegistry as Registry } from "@common/network/registry";

export namespace NetworkMessages {
  export const PING = Registry.register(new PingMessage());
  export const PONG = Registry.register(new PongMessage());
  export const CREATE_RECT = Registry.register(new CreateRectMessage());
}
