import { LogicalSide } from "@common/logical-side";
import { NetworkMessage } from "@common/network/message";
import { NetworkMessages } from "@common/network/messages";

interface Payload {
  count: number;
}

export class PingMessage extends NetworkMessage<Payload> {
  constructor() {
    super("ping");
  }

  public receivingSide(): LogicalSide {
    return LogicalSide.PLUGIN;
  }

  public handle(payload: Payload, from: LogicalSide): void {
    console.log(
      `${from.getName()} pinged us, when the count was  ${payload.count}!`
    );
    NetworkMessages.PONG.send({ count: payload.count });
  }
}
