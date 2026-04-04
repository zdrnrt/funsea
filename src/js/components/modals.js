import { Fancybox } from "@fancyapps/ui/dist/fancybox/";

const fancyBoxStyle = {
  "--fancybox-backdrop-bg": "rgb(27 27 27 / 50%)"
}

// кастомная модалка для авторизации
Fancybox.bind(".js-auth-trigger", {
  closeButton: false,
  dragToClose: false,
  closeExisting: false,
  mainStyle: {
    "--f-toolbar-padding": "0",
    "--f-html-padding": "0",
    "--f-html-bg": "transparent",
    ...fancyBoxStyle
  }
});

// кастомная галерея для превью
Fancybox.bind('.js-detail-gallery', {
  mainStyle: {
    ...fancyBoxStyle
  },
  Carousel: {
    Toolbar: {
      display: {
        right: ["close"],
      },
    },
  },
});

// настройка для всех модалок
Fancybox.bind('[data-fancybox]', {
  mainStyle: {
    ...fancyBoxStyle
  },
})