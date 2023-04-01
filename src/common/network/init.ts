import * as Networker from "monorepo-networker";
import { NetworkMessages } from "@common/network/messages";
import { NetworkSide } from "@common/network/sides";

export const initializeNetwork = Networker.createInitializer({
  messagesRegistry: NetworkMessages.registry,

  initTransports: function (register) {
    register(NetworkSide.PLUGIN, NetworkSide.UI, (message) => {
      figma.ui.postMessage(message);
    });

    register(NetworkSide.UI, NetworkSide.PLUGIN, (message) => {
      parent.postMessage({ pluginMessage: message }, "*");
    });
  },
});
