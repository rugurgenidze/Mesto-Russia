"use strict";

class BigImage extends Popup {
  open() {
    super.open();
    this.popup.querySelector(
      ".popup__conteiner"
    ).style.backgroundImage = `url(${event.target.dataset.url})`;
  }

  close() {
    this.popup.classList.remove("popup_is-opened");
  }
}
