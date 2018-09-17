var linkWrite = document.querySelector(".catalog__button");
var linkWrite2 = document.querySelector(".catalog__button2");
var linkWrite3 = document.querySelector(".catalog__button3");
var popupWrite = document.querySelector(".popup__fixed-overlay");
var popupYes = document.querySelector(".popup-yes__fixed-overlay");
var buttonOrder = document.querySelector(".popup__button-order");
var closePopup = document.querySelector(".popup__close");
var closePopupOverlay = document.querySelector(".popup__fixed-overlay");
var form = popupWrite.querySelector("form");
var login = popupWrite.querySelector("[name=login]");
var email = form.querySelector("[name=email]");
var textarea = form.querySelector("textarea");
var linkMenu = document.querySelector(".main-nav__toggle");
var linkMenu2 = document.querySelector(".main-nav__toggle-close");
var openMenu = document.querySelector(".main-nav");



linkMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  openMenu.classList.add("main-nav--opened");
  openMenu.classList.remove("main-nav--closed");
})

linkMenu2.addEventListener("click", function (evt) {
  evt.preventDefault();
  openMenu.classList.remove("main-nav--opened");
  openMenu.classList.add("main-nav--closed");
})

linkWrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("modal-show");
});

linkWrite2.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("modal-show");
});

linkWrite3.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("modal-show");
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.remove("modal-show");
  });


form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !textarea.value) {
    evt.preventDefault();
  }
  });


buttonOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupYes.classList.add("modal-show");
  popupWrite.classList.remove("modal-show");
  });

popupYes.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupYes.classList.remove("modal-show");

  });