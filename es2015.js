"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var contactBtn = document.querySelectorAll('.contactBtn');
var sumbmitBtn = document.getElementById('sumbmitBtn');
var innerForm = document.getElementById('subForm');
var navbar = document.getElementById('navbar');
var burger = document.getElementById('burger');
var cross = document.getElementById('cross');
var ball = document.getElementById('ball');
var label = document.querySelector('.label');
var formArea = document.querySelector('.form-area');
var formCross = document.getElementById('from-cross');
var name1 = document.getElementById('name');
var modalArea = document.querySelector('.modal-area');
var nameValue = document.getElementById('name-value');
var email = document.getElementById('email'); //event listerner for contact button

contactBtn.forEach(function (contact) {
  contact.addEventListener('click', formSub);
});
burger.addEventListener('click', menu);
cross.addEventListener('click', up); // function for ontact button

innerForm.style.top = '-300px';

function formSub(e) {
  formArea.style.top = "10%";
}

sumbmitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  name1.innerHTML = "<b>".concat(nameValue.value, "</b>");
  modalArea.style.top = "10%";
  nameValue.value = "";
  email.value = "";
  formArea.style.top = "-390px";
  setTimeout(function () {
    modalArea.style.top = "-80px";
  }, 1600);
}); // function to come down 25vh

function menu() {
  var navList = document.getElementById('nav-list');
  navList.style.display = 'flex';
  navList.style.top = '0';
} // function for navlist to go up -25vh


function up() {
  var navList = document.getElementById('nav-list');
  navList.style.top = "-25vh";
} // click anywhre on navlist it will go up -27vh


var navList = document.getElementById('nav-list');
navList.addEventListener('click', function () {
  navList.style.top = "-27vh";
}); // typing anmitaion

var TypeWriter = function TypeWriter(txtElement, words) {
  var _this = this;

  var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

  _classCallCheck(this, TypeWriter);

  _defineProperty(this, "type", function () {
    // current index of word
    var current = _this.wordIndex % _this.words.length; // get full text of current word

    var fullTxt = _this.words[current]; // check is deleting

    if (_this.isDeleting) {
      // remove chracter
      _this.txt = fullTxt.substring(0, _this.txt.length - 1);
    } else {
      //add chracter
      _this.txt = fullTxt.substring(0, _this.txt.length + 1);
    } // insert txt in dom


    _this.txtElement.innerHTML = "<span class=\"txt\"> I'M <br>".concat(_this.txt, "</span>"); //  type speed

    var typeSpeed = 300;

    if (_this.isDeleting) {
      typeSpeed /= 2;
    } //if word is complet


    if (!_this.isDeleting && _this.txt == fullTxt) {
      typeSpeed = _this.wait;
      _this.isDeleting = true;
    } else if (_this.isDeleting && _this.txt === '') {
      _this.isDeleting = false;
      _this.wordIndex++;
      typeSpeed = 350;
    }

    setTimeout(function () {
      return _this.type();
    }, typeSpeed);
  });

  this.txtElement = txtElement;
  this.words = words;
  this.txt = ' ';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

document.addEventListener('DOMContentLoaded', init);

function init() {
  var txtElement = document.getElementById('txt-type');
  var words = JSON.parse(txtElement.getAttribute('data-words'));
  var wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement, words, wait);
} //change them


var black = document.querySelector('.black-bg');
var blackColor = document.querySelectorAll('.black');
var body = document.querySelector('.body');
label.addEventListener('click', function () {
  blackColor.forEach(function (balckbg) {
    balckbg.classList.toggle('hide');
  });
  body.classList.toggle('body-color');
  label.classList.toggle('color-white');
}); //from 

formCross.addEventListener('click', function () {
  formArea.style.top = "-390px";
});