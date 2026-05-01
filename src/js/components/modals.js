import { Fancybox } from "@fancyapps/ui/dist/fancybox/";

const fancyBoxStyle = {
  "--fancybox-backdrop-bg": "rgb(27 27 27 / 70%)"
}

const fancyBoxSettings = {
  dragToClose: false
}

// кастомная модалка для авторизации
Fancybox.bind(".js-auth-trigger", {
  ...fancyBoxSettings,
  closeButton: false,
  closeExisting: false,
  mainStyle: {
    "--f-toolbar-padding": "0",
    "--f-html-padding": "0",
    "--f-html-bg": "transparent",
    ...fancyBoxStyle
  }
});

// кастомная модалка для мобильного фильтра в каталоге
Fancybox.bind(".js-filter-trigger", {
  ...fancyBoxSettings,
  closeButton: false,
  closeExisting: true,
  dragToClose: false,
  
  mainStyle: {
    "--f-toolbar-padding": "0",
    "--f-html-padding": "0",
    "--f-html-bg": "transparent",
    ...fancyBoxStyle
  }
});

// кастомная галерея для превью
Fancybox.bind('.js-detail-gallery', {
  ...fancyBoxSettings,
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
  ...fancyBoxSettings,
  mainStyle: {
    ...fancyBoxStyle
  },
})