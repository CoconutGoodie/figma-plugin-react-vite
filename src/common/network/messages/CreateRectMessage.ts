import { NetworkSide } from "@common/network/sides";
import * as Networker from "monorepo-networker";

interface Payload {
  width: number;
  height: number;
}

export class CreateRectMessage extends Networker.MessageType<Payload> {
  public receivingSide(): Networker.Side {
    return NetworkSide.PLUGIN;
  }

  public handle(payload: Payload, from: Networker.Side): void {
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
