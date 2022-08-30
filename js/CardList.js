"use strict";

class CardList {
  constructor(container, cards, createFunction) {
    this.container = container;
    this.cards = cards;
    this.createFunction = createFunction;
  }

  addCard(element) {
    const template = this.createFunction(element);
    this.container.appendChild(template);
  }

  render() {
   for (const element of this.cards) {
      this.addCard(element);
    }
  }
}
