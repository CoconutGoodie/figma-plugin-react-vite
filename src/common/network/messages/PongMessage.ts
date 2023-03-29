import { LogicalSide } from "@common/logical-side";
import { NetworkMessage } from "@common/network/message";

interface Payload {
  count: number;
}

export class PongMessage extends NetworkMessage<Payload> {
  constructor() {
    super("pong");
  }

  public receivingSide(): LogicalSide {
    return LogicalSide.UI;
  }

  public handle(payload: Payload, from: LogicalSide): void {
    console.log(`${from.getName()} ponged us, acknowledging ${payload.count}!`);
  }
}
