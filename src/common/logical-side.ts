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

  public static UI = new LogicalSide("UI");
  public static PLUGIN = new LogicalSide("Plugin");

  constructor(private name: string) {}

  public getName() {
    return this.name;
  }
}
