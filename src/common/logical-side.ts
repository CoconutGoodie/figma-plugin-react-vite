export class LogicalSide {
  private static currentLogicalSide: LogicalSide;

  public static get current() {
    return LogicalSide.currentLogicalSide;
  }
  public static set current(side) {
    if (LogicalSide.currentLogicalSide != null) {
      throw new Error("Logical side can be declared only once.");
    }
    LogicalSide.currentLogicalSide = side;
  }

  private static sides: Map<string, LogicalSide> = new Map();

  private static register(side: LogicalSide) {
    this.sides.set(side.getName(), side);
    return side;
  }

  public static byName(name: string) {
    return this.sides.get(name);
  }

  public static UI = this.register(new LogicalSide("UI"));
  public static PLUGIN = this.register(new LogicalSide("Plugin"));

  constructor(private name: string) {}

  public getName() {
    return this.name;
  }
}
