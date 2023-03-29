import { LogicalSide } from "@common/logical-side";
import { Transports } from "@common/network/transports";

export interface TransportMessage<P> {
  type: string;
  from: string;
  payload: P;
}

export abstract class NetworkMessage<P> {
  constructor(private name: string) {}

  public getName() {
    return this.name;
  }

  public abstract receivingSide(): LogicalSide;

  public abstract handle(payload: P, from: LogicalSide): void;

  private createTransportMessage(payload: P): TransportMessage<P> {
    const currentSide = LogicalSide.current;
    return {
      type: this.getName(),
      from: currentSide.getName(),
      payload,
    };
  }

  public send(payload: P) {
    const currentSide = LogicalSide.current;
    const receivingSide = this.receivingSide();
    const message = this.createTransportMessage(payload);
    const delegate = Transports.getDelegate(currentSide, receivingSide);

    if (!delegate) {
      throw new Error(
        `Transportation from ${currentSide.getName()} to ${receivingSide.getName()} is not supported.`
      );
    }

    delegate(message);
  }
}
