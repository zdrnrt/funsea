import { Fancybox } from "@fancyapps/ui/dist/fancybox/";

Fancybox.bind(".js-auth-trigger", {
  closeButton: false,
  dragToClose: false,
  closeExisting: false,
  mainStyle: {
    "--f-toolbar-padding": "0",
    "--f-html-padding": "0",
    "--f-html-bg": "transparent",
    "--fancybox-backdrop-bg": "rgb(27 27 27 / 50%)"
  }
});
