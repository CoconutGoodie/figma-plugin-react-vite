import { LogicalSide } from "@common/logical-side";
import { NetworkMessage } from "@common/network/message";

interface Payload {
  width: number;
  height: number;
}

export class CreateRectMessage extends NetworkMessage<Payload> {
  constructor() {
    super("create-rect");
  }

  public receivingSide(): LogicalSide {
    return LogicalSide.PLUGIN;
  }

  public handle(payload: Payload, from: LogicalSide): void {
    if (figma.editorType === "figma") {
      const rect = figma.createRectangle();
      rect.x = 0;
      rect.y = 0;
      rect.name = "Plugin Rectangle # " + Math.floor(Math.random() * 9999);
      rect.fills = [
        {
          type: "SOLID",
          color: {
            r: Math.random(),
            g: Math.random(),
            b: Math.random(),
          },
        },
      ];
      rect.resize(payload.width, payload.height);
      figma.currentPage.appendChild(rect);
      figma.viewport.scrollAndZoomIntoView([rect]);
      figma.closePlugin();
    }
  }
}
