import { LogicalSide } from "@common/logical-side";
import { NetworkMessageRegistry } from "@common/network/registry";

async function bootstrap() {
  LogicalSide.current = LogicalSide.PLUGIN;

  figma.ui.onmessage = NetworkMessageRegistry.handleIncomingMessage;

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
