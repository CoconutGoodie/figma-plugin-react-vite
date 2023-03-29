import { LogicalSide } from "@common/logical-side";

async function bootstrap() {
  LogicalSide.current = LogicalSide.PLUGIN;

  if (figma.editorType === "figma") {
    figma.showUI(__html__, {
      width: 350,
      height: 200,
      title: "My Figma Plugin!",
    });
  } else if (figma.editorType === "figjam") {
    figma.showUI(__html__, {
      width: 350,
      height: 200,
      title: "My FigJam Plugin!",
    });
  }

  console.log("Bootstrapped @", LogicalSide.current.getName());
}

bootstrap();
