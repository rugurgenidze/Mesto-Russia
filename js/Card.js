"use strict";

class Card {
  constructor() {
    this.card = document.createElement("div");
    this.like = this.like.bind(this);
    this.remove = this.remove.bind(this);
  }

  createCard(element) {
    const markup = `
      <div class="place-card__image" style="background-image: url(${element.link})" data-url="${element.link}">
        <button class="place-card__delete-icon"></button>
      </div>
      <div class="place-card__description">
        <h3 class="place-card__name">${element.name}</h3>
        <button class="place-card__like-icon"></button>
      </div>
    `;
    this.card.insertAdjacentHTML('afterbegin', markup);
    this.card.classList.add("place-card");
    this.card.addEventListener("click", this.like);
    this.card.addEventListener("click", this.remove);
    return this.card;
  }

  like(evt) {
    if (evt.target.classList.contains("place-card__like-icon")) {
      evt.target.classList.toggle("place-card__like-icon_liked");
    }
  }

  remove(evt) {
    if (evt.target.classList.contains("place-card__delete-icon")) {
      evt.target.closest(".place-card").remove();
    }
  }
}
