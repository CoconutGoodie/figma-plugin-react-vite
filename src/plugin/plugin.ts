import { LogicalSide } from "@common/logical-side";
import { NetworkMessages } from "@common/network/messages";

async function bootstrap() {
  LogicalSide.current = LogicalSide.PLUGIN;

  figma.ui.onmessage = NetworkMessages.handleIncomingMessage;

  if (figma.editorType === "figma") {
    figma.showUI(__html__, {
      width: 800,
      height: 650,
      title: "My Figma Plugin!",
    });
  } else if (figma.editorType === "figjam") {
    figma.showUI(__html__, {
      width: 800,
      height: 650,
      title: "My FigJam Plugin!",
    });
  }

  console.log("Bootstrapped @", LogicalSide.current.getName());
}

bootstrap();
