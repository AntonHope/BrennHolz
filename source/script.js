var linkWrite = document.querySelector(".catalog__button");
var linkWrite2 = document.querySelector(".catalog__button2");
var linkWrite3 = document.querySelector(".catalog__button3");
var popupWrite = document.querySelector(".popup__fixed-overlay");
var closePopup = document.querySelector(".popup__close");
var form = popupWrite.querySelector("form");
var login = popupWrite.querySelector("[name=login]");
var email = form.querySelector("[name=email]");
var textarea = form.querySelector("textarea");
var html = document.getElementsByTagName('body')[0];
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
  html.setAttribute('style', 'padding-right: 17px; overflow: hidden')
});

linkWrite2.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("modal-show");
  html.setAttribute('style', 'padding-right: 17px; overflow: hidden')

});

linkWrite3.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("modal-show");
  html.setAttribute('style', 'padding-right: 17px; overflow: hidden')
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.remove("modal-show");
  html.setAttribute('style', '')

  });

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.remove("modal-show");
  html.setAttribute('style', '')


  });














