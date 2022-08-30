"use strict";
(function () {
  const placesList = document.querySelector(".places-list");
  const inputTitle = document.forms.new.elements.name;
  const inputLink = document.forms.new.elements.link;
  const userInfoButton = document.querySelector(".user-info__button"); 
  const editButton = document.querySelector(".edit__button"); 
  const popup = document.querySelector(".popup");
  const userPopup = document.querySelector(".user__popup"); 
  const imagePopup = document.querySelector(".popup_images"); 
  const inputName = document.forms.edit.elements.user;
  const inputJob = document.forms.edit.elements.job;
  const userName = document.querySelector(".user-info__name");
  const userJob = document.querySelector(".user-info__job");
  
  const cardList = new CardList(placesList, initialCards, createPlace);
  const popupOne = new Popup(popup);
  const popupTwo = new Popup(userPopup);
  const popupThree = new BigImage(imagePopup);
  const userInfo = new UserInfo(inputName, inputJob);
  const popupValidator = new FormValidator(popup);
  const userPopupValidator = new FormValidator(userPopup);

  function addNewPlace(evt) {
    evt.preventDefault();
    const form = document.forms.new;
    const newPlace = new Card();
    const newCard = {
      name: inputTitle.value,
      link: inputLink.value,
    };
    placesList.appendChild(newPlace.createCard(newCard));
    form.reset();
    popupOne.close();
  }

  function createPlace(elem) {
    const card = new Card();
    return card.createCard(elem);
  }

  function addBigImage(event) {
    event.preventDefault();
    if (event.target.classList.contains("place-card__image")) {
      popupThree.open();
    }
  }

  function userProfile(evt) {
    evt.preventDefault();
    userInfo.updateUserInfo(userName, userJob);
    popupTwo.close();
  }

  popup.addEventListener("submit", addNewPlace);

  cardList.render();

  userInfoButton.addEventListener("click", popupOne.open);

  editButton.addEventListener("click", popupTwo.open);

  placesList.addEventListener("click", addBigImage);

  userInfo.setUserInfo(userName, userJob);

  userPopup.addEventListener("submit", userProfile);

  popupValidator.setEventListeners();

  userPopupValidator.setEventListeners();
})();
