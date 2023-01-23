/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/bannersFunctionality.js":
/*!****************************************!*\
  !*** ./src/js/bannersFunctionality.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bannersScroll)
/* harmony export */ });
// Scrolling banners
function bannersScroll() {
  var banner = document.getElementById("banner");
  var banner2 = document.getElementById("banner2");
  var bannerHTML = banner.querySelectorAll("h3, span");
  var bannerHTML2 = banner2.querySelectorAll("h3, span");
  window.onscroll = function () {
    var posBanner = banner.getBoundingClientRect();
    //console.log(bannerHTML);
    if (posBanner.top > 0 && posBanner.top < window.innerHeight) {
      var calculated = posBanner.top / window.innerHeight * 400;
      bannerHTML.forEach(function (bH) {
        bH.style.transform = "translateX(-".concat(calculated, "%)");
      });
      bannerHTML2.forEach(function (bH) {
        bH.style.transform = "translateX(".concat(calculated, "%)");
      });
    }
  };
}

/***/ }),

/***/ "./src/js/dataAnalysisFunctionality.js":
/*!*********************************************!*\
  !*** ./src/js/dataAnalysisFunctionality.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dataAnalysis)
/* harmony export */ });
// Data Analysis functionality
function dataAnalysis() {
  var dataAnalysis = document.getElementById("dataNav");
  var dataAnalysisChildren = dataAnalysis.querySelectorAll("li");
  var dataContainer = document.querySelectorAll(".dataContainer");

  // console.log(
  // 	"dataAnalysisChildren",
  // 	dataAnalysisChildren,
  // 	"dataContainer",
  // 	dataContainer
  // );

  Array.from(dataAnalysisChildren).forEach(function (child, index) {
    child.addEventListener("click", function () {
      //console.log("index", index);
      dataAnalysisChildren.forEach(function (dC) {
        dC.classList.remove("active");
      });
      dataContainer[index].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      //navSelection.classList.toggle("active");

      child.classList.add("active");
    });
  });
}

/***/ }),

/***/ "./src/js/faqFunctionality.js":
/*!************************************!*\
  !*** ./src/js/faqFunctionality.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ faqFunction)
/* harmony export */ });
// FAQ functionality
function faqFunction() {
  var FAQ = document.getElementById("FAQ");
  var questionsFAQ = FAQ.querySelectorAll("button");
  var arrowsFAQ = FAQ.querySelectorAll(".arrow");
  var answersFAQ = FAQ.querySelectorAll("h2");
  Array.from(questionsFAQ).forEach(function (question, index) {
    question.addEventListener("click", function () {
      //console.log("index", index);
      arrowsFAQ[index].classList.toggle("active");
      answersFAQ[index].classList.toggle("active");
      //answersFAQ[index].style.display = "none";
    });
  });
}

/***/ }),

/***/ "./src/js/galleryFunctionality.js":
/*!****************************************!*\
  !*** ./src/js/galleryFunctionality.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ galleryFunction)
/* harmony export */ });
// Main Gallery functionality
function galleryFunction() {
  var mainGalleryImages = document.getElementById("images");
  var mainGalleryBullets = document.getElementById("bullets");
  var mainGalleryImagesChildren = mainGalleryImages.childNodes;
  var mainGalleryBulletsChildren = mainGalleryBullets.querySelectorAll(".bullet");
  Array.from(mainGalleryImagesChildren).forEach(function (child, index) {
    mainGalleryImagesChildren[1].style.opacity = "1";
    mainGalleryImagesChildren[1].style.transform = "translateX(".concat(window.innerWidth / 3, "px) scale(1.5)");
    child.addEventListener("click", function (e) {
      clickFocusImg(child, index, mainGalleryImages, mainGalleryBulletsChildren);
    });
  });

  // Secondary Gallery  Functionality
  var secondaryGalleryImages = document.getElementById("secondaryImages");
  var secondaryGalleryBullets = document.getElementById("secondaryBullets");
  var secondaryGalleryImagesChildren = secondaryGalleryImages.childNodes;
  var secondaryGalleryBulletsChildren = secondaryGalleryBullets.querySelectorAll(".bullet");
  Array.from(secondaryGalleryImagesChildren).forEach(function (child, index) {
    secondaryGalleryImagesChildren[1].style.opacity = "1";
    secondaryGalleryImagesChildren[1].style.transform = "translateX(".concat(window.innerWidth / 3, "px) scale(1.5)");
    child.addEventListener("click", function (e) {
      clickFocusImg(child, index, secondaryGalleryImages, secondaryGalleryBulletsChildren);
    });
  });
  function clickFocusImg(child, index, images, bullets) {
    var galImages = images.querySelectorAll("img");
    var calculated = window.innerWidth / 3.5 - (index - 1) * window.innerWidth / 6;
    //console.log(mainGalleryBulletsChildren);
    //console.log(index);
    bullets.forEach(function (bC) {
      bC.classList.remove("active");
    });
    bullets[(index - 1) / 2].classList.add("active");
    galImages.forEach(function (t) {
      t.style.transform = "translateX(".concat(calculated, "px) scale(1)");
      t.style.opacity = "0.5";
      t.addEventListener("hover", function () {
        return t.style.opacity = "1";
      });
    });
    child.style.transform = "translateX(".concat(calculated, "px) scale(1.5)");
    child.style.opacity = "1";
  }
}

/***/ }),

/***/ "./src/js/navbarFunctionality.js":
/*!***************************************!*\
  !*** ./src/js/navbarFunctionality.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navBarFunction)
/* harmony export */ });
// Navbar functionality
function navBarFunction() {
  var navBar = document.getElementById("navBar").querySelector("div");
  var navSelection = document.getElementById("navSelection");
  var navSelectionItems = navSelection.querySelectorAll("li");
  var intro = document.getElementById("intro");
  var featuresPage = document.getElementById("featuresPage");
  var dataAnalysisPage = document.getElementById("dataAnalysisPage");
  var bannersNavPin = document.getElementById("bannersNavPin");
  var elenaPage = document.getElementById("elenaPage");
  var recurringRevenue = document.getElementById("recurringRevenue");
  //let itemPosition;
  function navScroll(item) {
    // itemPosition = item.getBoundingClientRect().top;
    // console.log("itemPosition", itemPosition);
    // window.scrollTo({
    // 	top: itemPosition,
    // 	behavior: "smooth",
    // });
    item.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    navSelection.classList.toggle("active");
  }
  navSelectionItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      console.log(index, "clicked");
      switch (index) {
        case 0:
          navScroll(intro);
          break;
        case 1:
          navScroll(featuresPage);
          break;
        case 2:
          navScroll(dataAnalysisPage);
          break;
        case 3:
          navScroll(bannersNavPin);
          break;
        case 4:
          navScroll(elenaPage);
          break;
        case 5:
          navScroll(recurringRevenue);
          break;
        case 6:
          navScroll(FAQ);
          break;
        default:
          console.log("something went wrong");
          break;
      }
    });
  });
  navBar.addEventListener("click", function () {
    navSelection.classList.toggle("active");
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SharpGrotesk-Book25.otf */ "./src/fonts/SharpGrotesk-Book25.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Silverfake.otf */ "./src/fonts/Silverfake.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Figtree-Regular.otf */ "./src/fonts/Figtree-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/YellowStar.svg */ "./src/assets/YellowStar.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/GrayStar.svg */ "./src/assets/GrayStar.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/GrayStar2.svg */ "./src/assets/GrayStar2.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: SharpGrotesk;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n@font-face {\n  font-family: Silverfake;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n\n@font-face {\n  font-family: Figtree;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); }\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: SharpGrotesk; }\n\nbody {\n  overflow-x: hidden;\n  background-color: lightgray; }\n\n.container {\n  width: 100%;\n  display: flex; }\n\n.miniContainer {\n  width: 55%;\n  margin: auto;\n  z-index: 0; }\n\n.miniContainerFiller {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: center;\n  width: 22.5%;\n  margin: auto; }\n\n.mb-3vw {\n  margin-bottom: 3vw; }\n\n.mb-5vw {\n  margin-bottom: 5vw; }\n\n.mb-10vw {\n  margin-bottom: 10vw; }\n\n.mb-30vw {\n  margin-bottom: 30vw; }\n\n.p-2vw {\n  padding: 2vw; }\n\nh1 {\n  font-size: 3vw;\n  text-align: center; }\n\nh2 {\n  text-align: center;\n  font-size: 1.2vw; }\n\nh3 {\n  font-size: 1vw; }\n\n.star {\n  display: inline-block;\n  position: relative; }\n\n.conicGradient {\n  background: radial-gradient(circle at 85% 10%, #51535a 0%, #0d1321 60%);\n  border-radius: 5vw; }\n\n.yellowBG {\n  color: black;\n  position: relative;\n  white-space: pre; }\n  .yellowBG::after {\n    display: block;\n    background-color: #d8fd56;\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: -1vw;\n    content: \"\";\n    width: 100%;\n    height: 4vw;\n    border-radius: 1vw;\n    padding: 0 1vw;\n    transform: rotate(-1deg); }\n\n.whiteText {\n  color: white; }\n\n.videoDiv {\n  margin: auto;\n  width: 85%; }\n  .videoDiv .video {\n    border-radius: 5vw;\n    width: 100%; }\n\n.requestDemo {\n  background-color: #5965ce;\n  font-size: 1vw;\n  color: white;\n  height: 4vw;\n  width: 12vw;\n  border-radius: 1.5vw;\n  border-style: none;\n  cursor: pointer;\n  font-family: Figtree; }\n\n#navBar {\n  width: 100vw;\n  position: fixed;\n  height: 7vw;\n  background-color: #1e1e1e;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8vw;\n  padding-right: 8vw;\n  color: white;\n  top: 0;\n  z-index: 2; }\n  #navBar div {\n    display: flex; }\n  #navBar h1 {\n    font-size: 1.5vw; }\n  #navBar img {\n    height: 2vw;\n    margin-right: 1vw;\n    cursor: pointer; }\n    #navBar img:hover {\n      animation: pulse 0.5s;\n      animation-timing-function: linear; }\n\n#navSelection {\n  display: flex;\n  position: fixed;\n  transition: transform 1s;\n  top: 7vw;\n  z-index: 2;\n  transform-origin: top;\n  transform: scaleY(0); }\n  #navSelection #back {\n    background-color: white; }\n  #navSelection ul li {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    width: 100vw;\n    background-color: #1e1e1e;\n    font-size: 2vw;\n    padding: 1.5vw 0;\n    color: white;\n    cursor: pointer;\n    text-decoration: none; }\n    #navSelection ul li:hover {\n      transition: background-color 1s;\n      background-color: white;\n      color: #1e1e1e; }\n\n#navSelection.active {\n  transform: scaleY(1);\n  transform-origin: top; }\n\n@keyframes pulse {\n  0% {\n    transform: scale(1); }\n  50% {\n    transform: scale(1.3); }\n  100% {\n    transform: scale(1); } }\n\n#intro {\n  margin-top: 15vw;\n  align-items: center;\n  justify-content: center; }\n  #intro h1 {\n    font-size: 3.5vw;\n    font-family: Silverfake; }\n  #intro h2 {\n    font-family: Figtree; }\n  #intro .yellowBG {\n    font-family: Silverfake; }\n  #intro .miniContainer {\n    align-items: center;\n    justify-content: center;\n    align-self: center; }\n    #intro .miniContainer #wooCommerceDiv {\n      height: 3vw;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-top: 1vw; }\n      #intro .miniContainer #wooCommerceDiv img {\n        height: 1.5vw; }\n    #intro .miniContainer .star {\n      font-size: 2vw;\n      top: 0.35vw;\n      margin-right: 0.5vw;\n      color: #5965ce; }\n  #intro button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: auto; }\n\n#featuresPage {\n  background-color: white;\n  border-radius: 5vw;\n  padding: 6.5vw 2.5vw; }\n  #featuresPage .miniContainer h2 {\n    font-family: Figtree; }\n\n#yellowStar {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 12vw 12vw;\n  width: 12vw;\n  height: 12vw;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  color: #6e905d; }\n  #yellowStar div {\n    display: flex;\n    flex-direction: row;\n    align-self: center;\n    top: 1.5vw;\n    position: relative;\n    margin-bottom: 0.5vw; }\n    #yellowStar div .star {\n      margin: 0 1vw;\n      font-size: 2vw;\n      top: 1.3vw; }\n  #yellowStar h1 {\n    font-size: 3vw; }\n  #yellowStar h2 {\n    font-size: 2.2vw; }\n  #yellowStar h3 {\n    font-size: 1.2vw; }\n\n#noCode {\n  position: relative;\n  background-color: #ff4005;\n  border-radius: 1.5vw;\n  display: flex;\n  flex-direction: column;\n  top: -3vw;\n  align-self: center;\n  text-align: center;\n  border: 1px solid white;\n  outline: 1px solid #ff4005;\n  padding: 1vw 2vw;\n  color: white;\n  transform: rotate(-15deg); }\n  #noCode h1 {\n    font-size: 1.5vw; }\n  #noCode h2 {\n    font-size: 2vw; }\n\n#mainGallery {\n  display: block;\n  user-select: none; }\n  #mainGallery #images {\n    display: flex;\n    overflow: hidden;\n    height: 80vw;\n    align-items: center; }\n    #mainGallery #images img {\n      transition: 1s;\n      transform: translateX(140%);\n      width: 25vw;\n      margin: 0 4vw;\n      left: 40%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-wrap: nowrap;\n      opacity: 0.5; }\n      #mainGallery #images img:hover {\n        opacity: 1; }\n  #mainGallery #bullets {\n    display: flex;\n    width: 25%;\n    align-self: center;\n    margin: 0 auto;\n    justify-content: space-between; }\n    #mainGallery #bullets .bullet {\n      height: 2vw;\n      width: 2vw;\n      border-radius: 50%;\n      background-color: #a0a0a0;\n      transition: 1s; }\n    #mainGallery #bullets .bullet.active {\n      background-color: #424242;\n      transform: scale(1.3); }\n\n#dataAnalysisPage {\n  display: block; }\n  #dataAnalysisPage .miniContainer h2 {\n    font-family: Figtree; }\n  #dataAnalysisPage #grayStar {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: 12vw 12vw;\n    width: 12vw;\n    height: 12vw;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    color: #e0ff6c;\n    justify-content: center; }\n    #dataAnalysisPage #grayStar h1 {\n      font-size: 1vw; }\n    #dataAnalysisPage #grayStar h2 {\n      font-size: 2vw; }\n  #dataAnalysisPage #ezpz {\n    background-color: #ff4005;\n    display: flex;\n    flex-direction: column;\n    align-self: center;\n    text-align: center;\n    border: 1px solid white;\n    outline: 3px solid #ff4005;\n    width: 10vw;\n    transform: rotate(15deg);\n    color: #ffffff;\n    padding: 0.5vw 0; }\n    #dataAnalysisPage #ezpz div {\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n      #dataAnalysisPage #ezpz div h1 {\n        font-size: 0.6vw; }\n      #dataAnalysisPage #ezpz div img {\n        margin: 0 0.5vw;\n        height: 1.5vw; }\n    #dataAnalysisPage #ezpz h2 {\n      font-size: 1vw; }\n  #dataAnalysisPage .sticky {\n    position: sticky;\n    top: 10vw; }\n  #dataAnalysisPage #dataNav {\n    display: flex;\n    top: 7vw;\n    color: white;\n    text-shadow: -3px 3px 0 #000, 3px 3px 0 #000, 3px -3px 0 #000;\n    font-size: 1.5vw;\n    padding-left: 3vw; }\n    #dataAnalysisPage #dataNav li {\n      list-style: none;\n      padding: 2vw;\n      position: relative;\n      cursor: pointer;\n      font-family: Figtree; }\n    #dataAnalysisPage #dataNav li::after {\n      content: \"\";\n      position: absolute;\n      background-color: #5965ce;\n      opacity: 0;\n      width: 80%;\n      height: 0.5vw;\n      left: 12%;\n      top: 80%; }\n    #dataAnalysisPage #dataNav li.active::after {\n      opacity: 1; }\n  #dataAnalysisPage .dataContainer {\n    display: flex;\n    width: 80vw;\n    margin: 20vw 0vw 0vw 5vw;\n    justify-content: space-between;\n    transition: 1s; }\n    #dataAnalysisPage .dataContainer .dataDescription {\n      color: white;\n      width: 30vw; }\n      #dataAnalysisPage .dataContainer .dataDescription h1 {\n        font-size: 2.5vw;\n        text-align: left;\n        margin-bottom: 2vw; }\n      #dataAnalysisPage .dataContainer .dataDescription h2 {\n        font-size: 1vw;\n        font-family: Figtree;\n        text-align: justify; }\n    #dataAnalysisPage .dataContainer .dataImage {\n      width: 20vw;\n      display: flex;\n      flex-direction: column; }\n      #dataAnalysisPage .dataContainer .dataImage img {\n        width: 100%; }\n      #dataAnalysisPage .dataContainer .dataImage button {\n        position: relative;\n        bottom: 10vw;\n        margin: auto;\n        border: none;\n        border-radius: 5vw;\n        background-color: #ae33b6;\n        color: white;\n        font-size: 1vw;\n        padding: 1vw 2vw;\n        width: 14vw; }\n\n.banners {\n  position: relative;\n  display: flex;\n  text-align: center;\n  width: 103vw;\n  overflow: hidden;\n  padding: 2vw;\n  left: -2vw;\n  transform: translateX(-1vw); }\n  .banners h3 {\n    width: 22vw;\n    transform: translateX(160vw);\n    font-size: 2vw;\n    transition: 0.5s; }\n  .banners .star {\n    transform: translateX(160vw);\n    transition: 0.5s;\n    width: 22vw; }\n  .banners #banner {\n    display: flex;\n    align-items: center;\n    background-color: #0d1321;\n    color: white;\n    padding: 4vw 0;\n    transform: rotate(-2deg);\n    z-index: 1;\n    left: -10vw; }\n    .banners #banner .star {\n      color: #d8fd56; }\n  .banners #banner2 {\n    display: flex;\n    align-items: center;\n    background-color: #d8fd56;\n    color: #071013;\n    padding: 4vw 0;\n    transform: rotate(2deg);\n    z-index: 0; }\n    .banners #banner2 .star {\n      color: #6d79e2; }\n\n#elenaPage .miniContainer h2 {\n  font-family: Figtree; }\n\n#elenaPage #heartContainer {\n  display: flex; }\n  #elenaPage #heartContainer h3 {\n    color: white;\n    font-size: 3vw; }\n  #elenaPage #heartContainer img {\n    height: 3vw;\n    margin: 0 1vw; }\n\n#smileyFace {\n  height: 10vw; }\n\n#realPeople {\n  position: relative;\n  top: -1vw;\n  background-color: #e0ff6c;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  text-align: center;\n  border-radius: 5vw;\n  border: 1px solid #808f85;\n  outline: 1px solid #e0ff6c;\n  transform: rotate(20deg);\n  color: #808f85;\n  padding: 0.5vw 1vw; }\n  #realPeople div {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center; }\n    #realPeople div h1 {\n      font-size: 0.8vw; }\n    #realPeople div .star {\n      font-size: 2vw;\n      top: 0.6vw; }\n  #realPeople h2 {\n    font-size: 1vw; }\n\n#secondaryGallery {\n  display: block; }\n  #secondaryGallery #secondaryImages {\n    display: flex;\n    overflow: hidden;\n    height: 80vw;\n    align-items: center; }\n    #secondaryGallery #secondaryImages img {\n      transition: 1s;\n      transform: translateX(140%);\n      width: 25vw;\n      margin: 0 4vw;\n      left: 40%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-wrap: nowrap;\n      opacity: 0.5; }\n      #secondaryGallery #secondaryImages img:hover {\n        opacity: 1; }\n  #secondaryGallery #secondaryBullets {\n    display: flex;\n    width: 25%;\n    align-self: center;\n    margin: 0 auto;\n    justify-content: space-between; }\n    #secondaryGallery #secondaryBullets .bullet {\n      height: 2vw;\n      width: 2vw;\n      border-radius: 50%;\n      background-color: #a0a0a0;\n      transition: 1s; }\n    #secondaryGallery #secondaryBullets .bullet.active {\n      background-color: #424242;\n      transform: scale(1.3); }\n\n#recurringRevenue {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: auto; }\n  #recurringRevenue .miniContainer:first-child {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #5965ce;\n    color: white;\n    width: 85vw;\n    border-radius: 4vw;\n    padding: 5vw 12vw; }\n    #recurringRevenue .miniContainer:first-child h1 {\n      font-size: 3vw; }\n  #recurringRevenue .miniContainer:last-child {\n    flex-direction: row;\n    display: flex; }\n  #recurringRevenue .requestDemo {\n    background-color: #0d1321;\n    margin-top: 5vw; }\n\n#icons {\n  display: flex;\n  position: relative;\n  top: -4vw;\n  left: 10vw; }\n  #icons #wavingHand {\n    left: 4vw;\n    width: 10vw;\n    height: 10vw;\n    position: relative; }\n  #icons #tryFree {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n    background-size: 12vw 12vw;\n    width: 12vw;\n    height: 12vw;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    color: #e0fd78;\n    justify-content: center; }\n    #icons #tryFree h1 {\n      font-size: 1vw; }\n    #icons #tryFree h2 {\n      font-size: 2.5vw; }\n\n#FAQ {\n  align-items: center; }\n  #FAQ h1 {\n    font-size: 3vw;\n    margin: 5vw; }\n  #FAQ h2 {\n    font-size: 1.5vw;\n    text-align: justify;\n    transform: scaleY(0);\n    height: 0;\n    opacity: 0;\n    transition-property: height, opacity, transform;\n    transition-duration: 1s;\n    display: block; }\n  #FAQ h2.active {\n    transform: scaleY(1);\n    opacity: 1;\n    height: 15vw;\n    transform-origin: top; }\n  #FAQ button {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n    margin: 1vw 0;\n    left: -5%;\n    width: 110%;\n    padding: 2.5vw;\n    border: none;\n    border-radius: 1.5vw;\n    background-color: white;\n    font-size: 1.5vw;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    cursor: pointer; }\n\n.arrow {\n  transform: rotate(180deg);\n  width: 0;\n  height: 0;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  border-bottom: 3px solid black;\n  transition: 1s; }\n\n.arrow.active {\n  transform: rotate(0deg); }\n\n#footer {\n  background-color: #1e1e1e;\n  color: white;\n  width: 100%;\n  border-radius: 6vw 6vw 0 0;\n  padding: 5vw 9vw 1vw 9vw; }\n  #footer img {\n    height: 3vw;\n    margin-right: 1vw; }\n  #footer h4 {\n    font-size: 2vw;\n    padding-bottom: 3vw; }\n  #footer h5 {\n    font-size: 1vw;\n    padding-bottom: 2vw;\n    font-family: Figtree; }\n  #footer #footerTop {\n    display: flex;\n    justify-content: space-between; }\n  #footer #footerLogo {\n    display: flex; }\n  #footer #divider {\n    height: 1px;\n    border-width: 0;\n    border-top: 2px solid #bbb;\n    border-radius: 5px; }\n  #footer hr {\n    margin-top: 5vw;\n    margin-bottom: 2vw; }\n  #footer #footerBottom {\n    display: flex;\n    font-size: 2vw; }\n    #footer #footerBottom h6 {\n      margin-right: 4vw;\n      font-family: Figtree; }\n    #footer #footerBottom h5 {\n      margin-right: 1vw;\n      text-decoration: underline; }\n", "",{"version":3,"sources":["webpack://./src/styles/_fonts.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_navigation.scss","webpack://./src/styles/_landingPage.scss","webpack://./src/styles/_featuresPage.scss","webpack://./src/styles/_dataAnalysisPage.scss","webpack://./src/styles/_bannerPage.scss","webpack://./src/styles/_elenaPage.scss","webpack://./src/styles/_recurringRevenuePage.scss","webpack://./src/styles/_faqPage.scss","webpack://./src/styles/_footer.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n\tfont-family: SharpGrotesk;\r\n\tsrc: url(../fonts/SharpGrotesk-Book25.otf);\r\n}\r\n@font-face {\r\n\tfont-family: Silverfake;\r\n\tsrc: url(../fonts/Silverfake.otf);\r\n}\r\n@font-face {\r\n\tfont-family: Figtree;\r\n\tsrc: url(../fonts/Figtree-Regular.otf);\r\n}\r\n","@import \"./fonts\";\r\n\r\n// Fundamental Content Styling\r\n* {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-family: SharpGrotesk;\r\n}\r\nbody {\r\n\toverflow-x: hidden;\r\n\tbackground-color: lightgray;\r\n}\r\n.container {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n}\r\n.miniContainer {\r\n\twidth: 55%;\r\n\tmargin: auto;\r\n\tz-index: 0;\r\n}\r\n.miniContainerFiller {\r\n\talign-items: center;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-content: center;\r\n\tjustify-content: center;\r\n\twidth: 22.5%;\r\n\tmargin: auto;\r\n}\r\n.mb-3vw {\r\n\tmargin-bottom: 3vw;\r\n}\r\n.mb-5vw {\r\n\tmargin-bottom: 5vw;\r\n}\r\n.mb-10vw {\r\n\tmargin-bottom: 10vw;\r\n}\r\n\r\n.mb-30vw {\r\n\tmargin-bottom: 30vw;\r\n}\r\n\r\n.p-2vw {\r\n\tpadding: 2vw;\r\n}\r\n\r\nh1 {\r\n\tfont-size: 3vw;\r\n\ttext-align: center;\r\n}\r\n\r\nh2 {\r\n\ttext-align: center;\r\n\tfont-size: 1.2vw;\r\n}\r\n\r\nh3 {\r\n\tfont-size: 1vw;\r\n}\r\n\r\n.star {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n}\r\n.conicGradient {\r\n\tbackground: radial-gradient(circle at 85% 10%, #51535a 0%, #0d1321 60%);\r\n\tborder-radius: 5vw;\r\n}\r\n.yellowBG {\r\n\tcolor: black;\r\n\tposition: relative;\r\n\twhite-space: pre;\r\n\t&::after {\r\n\t\tdisplay: block;\r\n\t\tbackground-color: #d8fd56;\r\n\t\tposition: absolute;\r\n\t\tz-index: -1;\r\n\t\ttop: 0;\r\n\t\tleft: -1vw;\r\n\t\tcontent: \"\";\r\n\t\twidth: 100%;\r\n\t\theight: 4vw;\r\n\t\tborder-radius: 1vw;\r\n\t\tpadding: 0 1vw;\r\n\t\ttransform: rotate(-1deg);\r\n\t}\r\n}\r\n//.yellowBG\r\n.whiteText {\r\n\tcolor: white;\r\n}\r\n.videoDiv {\r\n\tmargin: auto;\r\n\twidth: 85%;\r\n\r\n\t.video {\r\n\t\tborder-radius: 5vw;\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n.requestDemo {\r\n\tbackground-color: #5965ce;\r\n\tfont-size: 1vw;\r\n\tcolor: white;\r\n\theight: 4vw;\r\n\twidth: 12vw;\r\n\tborder-radius: 1.5vw;\r\n\tborder-style: none;\r\n\tcursor: pointer;\r\n\tfont-family: Figtree;\r\n}\r\n@import \"./navigation\";\r\n@import \"./landingPage\";\r\n@import \"./featuresPage\";\r\n@import \"./dataAnalysisPage\";\r\n@import \"./bannerPage\";\r\n@import \"./elenaPage\";\r\n@import \"./recurringRevenuePage\";\r\n@import \"./faqPage\";\r\n@import \"./footer\";\r\n","#navBar {\r\n\twidth: 100vw;\r\n\tposition: fixed;\r\n\theight: 7vw;\r\n\tbackground-color: #1e1e1e;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding-left: 8vw;\r\n\tpadding-right: 8vw;\r\n\tcolor: white;\r\n\ttop: 0;\r\n\tz-index: 2;\r\n\tdiv {\r\n\t\tdisplay: flex;\r\n\t}\r\n\th1 {\r\n\t\tfont-size: 1.5vw;\r\n\t}\r\n\timg {\r\n\t\theight: 2vw;\r\n\t\tmargin-right: 1vw;\r\n\t\tcursor: pointer;\r\n\t\t&:hover {\r\n\t\t\tanimation: pulse 0.5s;\r\n\t\t\tanimation-timing-function: linear;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n#navSelection {\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\n\ttransition: transform 1s;\r\n\ttop: 7vw;\r\n\tz-index: 2;\r\n\ttransform-origin: top;\r\n\ttransform: scaleY(0);\r\n\r\n\t#back {\r\n\t\tbackground-color: white;\r\n\t\t// height: 100px;\r\n\t\t// width: 100px;\r\n\t}\r\n\tul {\r\n\t\tli {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-self: center;\r\n\t\t\twidth: 100vw;\r\n\t\t\tbackground-color: #1e1e1e;\r\n\t\t\tfont-size: 2vw;\r\n\t\t\tpadding: 1.5vw 0;\r\n\t\t\tcolor: white;\r\n\t\t\tcursor: pointer;\r\n\t\t\ttext-decoration: none;\r\n\t\t\t//transform: 1s;\r\n\t\t\t&:hover {\r\n\t\t\t\ttransition: background-color 1s;\r\n\t\t\t\tbackground-color: white;\r\n\t\t\t\tcolor: #1e1e1e;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n#navSelection.active {\r\n\ttransform: scaleY(1);\r\n\ttransform-origin: top;\r\n}\r\n@keyframes pulse {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t50% {\r\n\t\ttransform: scale(1.3);\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n","#intro {\r\n\th1 {\r\n\t\tfont-size: 3.5vw;\r\n\t\tfont-family: Silverfake;\r\n\t}\r\n\th2 {\r\n\t\tfont-family: Figtree;\r\n\t}\r\n\t.yellowBG {\r\n\t\tfont-family: Silverfake;\r\n\t}\r\n\tmargin-top: 15vw;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\t.miniContainer {\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\talign-self: center;\r\n\t\t#wooCommerceDiv {\r\n\t\t\theight: 3vw;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tmargin-top: 1vw;\r\n\t\t\timg {\r\n\t\t\t\theight: 1.5vw;\r\n\t\t\t}\r\n\t\t}\r\n\t\t.star {\r\n\t\t\tfont-size: 2vw;\r\n\t\t\ttop: 0.35vw;\r\n\t\t\tmargin-right: 0.5vw;\r\n\t\t\tcolor: #5965ce;\r\n\t\t}\r\n\t}\r\n\tbutton {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tmargin: auto;\r\n\t}\r\n}\r\n","#featuresPage {\r\n\tbackground-color: white;\r\n\tborder-radius: 5vw;\r\n\tpadding: 6.5vw 2.5vw;\r\n\t.miniContainer {\r\n\t\th2 {\r\n\t\t\tfont-family: Figtree;\r\n\t\t}\r\n\t}\r\n}\r\n#yellowStar {\r\n\tbackground-image: url(\"../assets/YellowStar.svg\");\r\n\tbackground-size: 12vw 12vw;\r\n\twidth: 12vw;\r\n\theight: 12vw;\r\n\ttext-align: center;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\t//justify-content: center;\r\n\tcolor: #6e905d;\r\n\tdiv {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\talign-self: center;\r\n\t\ttop: 1.5vw;\r\n\t\tposition: relative;\r\n\t\tmargin-bottom: 0.5vw;\r\n\r\n\t\t.star {\r\n\t\t\tmargin: 0 1vw;\r\n\t\t\tfont-size: 2vw;\r\n\t\t\ttop: 1.3vw;\r\n\t\t}\r\n\t}\r\n\th1 {\r\n\t\tfont-size: 3vw;\r\n\t}\r\n\th2 {\r\n\t\tfont-size: 2.2vw;\r\n\t}\r\n\th3 {\r\n\t\tfont-size: 1.2vw;\r\n\t}\r\n}\r\n\r\n#noCode {\r\n\tposition: relative;\r\n\tbackground-color: #ff4005;\r\n\tborder-radius: 1.5vw;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\ttop: -3vw;\r\n\talign-self: center;\r\n\ttext-align: center;\r\n\tborder: 1px solid white;\r\n\toutline: 1px solid #ff4005;\r\n\tpadding: 1vw 2vw;\r\n\tcolor: white;\r\n\ttransform: rotate(-15deg);\r\n\th1 {\r\n\t\tfont-size: 1.5vw;\r\n\t}\r\n\th2 {\r\n\t\tfont-size: 2vw;\r\n\t}\r\n}\r\n\r\n#mainGallery {\r\n\tdisplay: block;\r\n\tuser-select: none;\r\n\t#images {\r\n\t\tdisplay: flex;\r\n\t\toverflow: hidden;\r\n\t\theight: 80vw;\r\n\t\talign-items: center;\r\n\r\n\t\timg {\r\n\t\t\ttransition: 1s;\r\n\t\t\ttransform: translateX(140%);\r\n\t\t\twidth: 25vw;\r\n\t\t\tmargin: 0 4vw;\r\n\t\t\tleft: 40%;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tflex-wrap: nowrap;\r\n\t\t\topacity: 0.5;\r\n\t\t\t&:hover {\r\n\t\t\t\topacity: 1;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t#bullets {\r\n\t\tdisplay: flex;\r\n\t\twidth: 25%;\r\n\t\talign-self: center;\r\n\t\tmargin: 0 auto;\r\n\t\tjustify-content: space-between;\r\n\t\t.bullet {\r\n\t\t\theight: 2vw;\r\n\t\t\twidth: 2vw;\r\n\t\t\tborder-radius: 50%;\r\n\t\t\tbackground-color: rgb(160, 160, 160);\r\n\t\t\ttransition: 1s;\r\n\t\t\t//cursor: pointer;\r\n\t\t\t// &:hover {\r\n\t\t\t// \tborder: 3px solid gray;\r\n\t\t\t// }\r\n\t\t}\r\n\t\t.bullet.active {\r\n\t\t\tbackground-color: rgb(66, 66, 66);\r\n\t\t\ttransform: scale(1.3);\r\n\t\t}\r\n\t}\r\n}\r\n","#dataAnalysisPage {\r\n\tdisplay: block;\r\n\r\n\t.miniContainer {\r\n\t\th2 {\r\n\t\t\tfont-family: Figtree;\r\n\t\t}\r\n\t}\r\n\t#grayStar {\r\n\t\tbackground-image: url(\"../assets/GrayStar.svg\");\r\n\t\tbackground-size: 12vw 12vw;\r\n\t\twidth: 12vw;\r\n\t\theight: 12vw;\r\n\t\ttext-align: center;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tcolor: #e0ff6c;\r\n\t\tjustify-content: center;\r\n\t\th1 {\r\n\t\t\tfont-size: 1vw;\r\n\t\t}\r\n\r\n\t\th2 {\r\n\t\t\tfont-size: 2vw;\r\n\t\t}\r\n\t}\r\n\r\n\t#ezpz {\r\n\t\tbackground-color: #ff4005;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-self: center;\r\n\t\ttext-align: center;\r\n\t\tborder: 1px solid white;\r\n\t\toutline: 3px solid #ff4005;\r\n\t\twidth: 10vw;\r\n\t\ttransform: rotate(15deg);\r\n\t\tcolor: #ffffff;\r\n\t\tpadding: 0.5vw 0;\r\n\t\tdiv {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\th1 {\r\n\t\t\t\tfont-size: 0.6vw;\r\n\t\t\t}\r\n\t\t\timg {\r\n\t\t\t\tmargin: 0 0.5vw;\r\n\t\t\t\theight: 1.5vw;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\th2 {\r\n\t\t\tfont-size: 1vw;\r\n\t\t}\r\n\t}\r\n\t.sticky {\r\n\t\tposition: sticky;\r\n\t\ttop: 10vw;\r\n\t}\r\n\t#dataNav {\r\n\t\tdisplay: flex;\r\n\t\ttop: 7vw;\r\n\t\tcolor: white;\r\n\t\ttext-shadow: -3px 3px 0 #000, 3px 3px 0 #000, 3px -3px 0 #000;\r\n\t\tfont-size: 1.5vw;\r\n\t\tpadding-left: 3vw;\r\n\t\tli {\r\n\t\t\tlist-style: none;\r\n\t\t\tpadding: 2vw;\r\n\t\t\tposition: relative;\r\n\t\t\tcursor: pointer;\r\n\t\t\tfont-family: Figtree;\r\n\t\t}\r\n\t\tli::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\tposition: absolute;\r\n\t\t\tbackground-color: #5965ce;\r\n\t\t\topacity: 0;\r\n\t\t\twidth: 80%;\r\n\t\t\theight: 0.5vw;\r\n\t\t\tleft: 12%;\r\n\t\t\ttop: 80%;\r\n\t\t}\r\n\t\tli.active::after {\r\n\t\t\topacity: 1;\r\n\t\t}\r\n\t}\r\n\t.noflex {\r\n\t}\r\n\t.dataContainer {\r\n\t\tdisplay: flex;\r\n\t\twidth: 80vw;\r\n\t\tmargin: 20vw 0vw 0vw 5vw;\r\n\t\tjustify-content: space-between;\r\n\t\ttransition: 1s;\r\n\t\t.dataDescription {\r\n\t\t\tcolor: white;\r\n\t\t\twidth: 30vw;\r\n\t\t\th1 {\r\n\t\t\t\tfont-size: 2.5vw;\r\n\t\t\t\ttext-align: left;\r\n\t\t\t\tmargin-bottom: 2vw;\r\n\t\t\t}\r\n\t\t\th2 {\r\n\t\t\t\tfont-size: 1vw;\r\n\t\t\t\tfont-family: Figtree;\r\n\t\t\t\ttext-align: justify;\r\n\t\t\t}\r\n\t\t}\r\n\t\t.dataImage {\r\n\t\t\twidth: 20vw;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\timg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t\tbutton {\r\n\t\t\t\tposition: relative;\r\n\t\t\t\tbottom: 10vw;\r\n\t\t\t\tmargin: auto;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tborder-radius: 5vw;\r\n\t\t\t\tbackground-color: #ae33b6;\r\n\t\t\t\tcolor: white;\r\n\t\t\t\tfont-size: 1vw;\r\n\t\t\t\tpadding: 1vw 2vw;\r\n\t\t\t\twidth: 14vw;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n",".banners {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\ttext-align: center;\r\n\twidth: 103vw;\r\n\toverflow: hidden;\r\n\tpadding: 2vw;\r\n\tleft: -2vw;\r\n\th3 {\r\n\t\twidth: 22vw;\r\n\t\ttransform: translateX(160vw);\r\n\t\tfont-size: 2vw;\r\n\t\ttransition: 0.5s;\r\n\t}\r\n\t.star {\r\n\t\ttransform: translateX(160vw);\r\n\t\ttransition: 0.5s;\r\n\t\twidth: 22vw;\r\n\t}\r\n\ttransform: translateX(-1vw);\r\n\r\n\t#banner {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tbackground-color: #0d1321;\r\n\t\tcolor: white;\r\n\t\tpadding: 4vw 0;\r\n\t\ttransform: rotate(-2deg);\r\n\t\tz-index: 1;\r\n\t\tleft: -10vw;\r\n\t\t.star {\r\n\t\t\tcolor: #d8fd56;\r\n\t\t}\r\n\t}\r\n\t#banner2 {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tbackground-color: #d8fd56;\r\n\t\tcolor: #071013;\r\n\t\tpadding: 4vw 0;\r\n\t\ttransform: rotate(2deg);\r\n\t\tz-index: 0;\r\n\r\n\t\t.star {\r\n\t\t\tcolor: #6d79e2;\r\n\t\t}\r\n\t}\r\n}\r\n","#elenaPage {\r\n\t.miniContainer {\r\n\t\th2 {\r\n\t\t\tfont-family: Figtree;\r\n\t\t}\r\n\t}\r\n\t#heartContainer {\r\n\t\tdisplay: flex;\r\n\t\th3 {\r\n\t\t\tcolor: white;\r\n\t\t\tfont-size: 3vw;\r\n\t\t}\r\n\t\timg {\r\n\t\t\theight: 3vw;\r\n\t\t\tmargin: 0 1vw;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n#smileyFace {\r\n\theight: 10vw;\r\n}\r\n\r\n#realPeople {\r\n\tposition: relative;\r\n\ttop: -1vw;\r\n\tbackground-color: #e0ff6c;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-self: center;\r\n\ttext-align: center;\r\n\tborder-radius: 5vw;\r\n\tborder: 1px solid #808f85;\r\n\toutline: 1px solid #e0ff6c;\r\n\t//width: 20vw;\r\n\ttransform: rotate(20deg);\r\n\tcolor: #808f85;\r\n\tpadding: 0.5vw 1vw;\r\n\r\n\tdiv {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\th1 {\r\n\t\t\tfont-size: 0.8vw;\r\n\t\t}\r\n\t\t.star {\r\n\t\t\tfont-size: 2vw;\r\n\t\t\t//margin: 0 1vw;\r\n\t\t\ttop: 0.6vw;\r\n\t\t}\r\n\t}\r\n\th2 {\r\n\t\tfont-size: 1vw;\r\n\t}\r\n}\r\n#secondaryGallery {\r\n\tdisplay: block;\r\n\t#secondaryImages {\r\n\t\tdisplay: flex;\r\n\t\toverflow: hidden;\r\n\t\theight: 80vw;\r\n\t\talign-items: center;\r\n\r\n\t\timg {\r\n\t\t\ttransition: 1s;\r\n\t\t\ttransform: translateX(140%);\r\n\t\t\twidth: 25vw;\r\n\t\t\tmargin: 0 4vw;\r\n\t\t\tleft: 40%;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tflex-wrap: nowrap;\r\n\t\t\topacity: 0.5;\r\n\t\t\t&:hover {\r\n\t\t\t\topacity: 1;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t#secondaryBullets {\r\n\t\tdisplay: flex;\r\n\t\twidth: 25%;\r\n\t\talign-self: center;\r\n\t\tmargin: 0 auto;\r\n\t\tjustify-content: space-between;\r\n\t\t.bullet {\r\n\t\t\theight: 2vw;\r\n\t\t\twidth: 2vw;\r\n\t\t\tborder-radius: 50%;\r\n\t\t\tbackground-color: rgb(160, 160, 160);\r\n\t\t\ttransition: 1s;\r\n\t\t}\r\n\t\t.bullet.active {\r\n\t\t\tbackground-color: rgb(66, 66, 66);\r\n\t\t\ttransform: scale(1.3);\r\n\t\t}\r\n\t}\r\n}\r\n","#recurringRevenue {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tmargin: auto;\r\n\t.miniContainer:first-child {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tbackground-color: #5965ce;\r\n\t\tcolor: white;\r\n\t\twidth: 85vw;\r\n\t\tborder-radius: 4vw;\r\n\t\tpadding: 5vw 12vw;\r\n\r\n\t\th1 {\r\n\t\t\tfont-size: 3vw;\r\n\t\t}\r\n\t}\r\n\t.miniContainer:last-child {\r\n\t\tflex-direction: row;\r\n\t\tdisplay: flex;\r\n\t}\r\n\t.requestDemo {\r\n\t\tbackground-color: #0d1321;\r\n\t\tmargin-top: 5vw;\r\n\t}\r\n}\r\n#icons {\r\n\tdisplay: flex;\r\n\tposition: relative;\r\n\ttop: -4vw;\r\n\tleft: 10vw;\r\n\r\n\t#wavingHand {\r\n\t\tleft: 4vw;\r\n\t\twidth: 10vw;\r\n\t\theight: 10vw;\r\n\t\tposition: relative;\r\n\t}\r\n\t#tryFree {\r\n\t\tbackground-image: url(\"../assets/GrayStar2.svg\");\r\n\t\tbackground-size: 12vw 12vw;\r\n\t\twidth: 12vw;\r\n\t\theight: 12vw;\r\n\t\ttext-align: center;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tcolor: #e0fd78;\r\n\t\tjustify-content: center;\r\n\t\th1 {\r\n\t\t\tfont-size: 1vw;\r\n\t\t}\r\n\t\th2 {\r\n\t\t\tfont-size: 2.5vw;\r\n\t\t}\r\n\t}\r\n}\r\n","#FAQ {\r\n\talign-items: center;\r\n\th1 {\r\n\t\tfont-size: 3vw;\r\n\t\tmargin: 5vw;\r\n\t}\r\n\th2 {\r\n\t\tfont-size: 1.5vw;\r\n\t\ttext-align: justify;\r\n\t\ttransform: scaleY(0);\r\n\t\theight: 0;\r\n\t\topacity: 0;\r\n\t\ttransition-property: height, opacity, transform;\r\n\t\ttransition-duration: 1s;\r\n\r\n\t\tdisplay: block;\r\n\t}\r\n\th2.active {\r\n\t\ttransform: scaleY(1);\r\n\t\topacity: 1;\r\n\t\theight: 15vw;\r\n\t\ttransform-origin: top;\r\n\t}\r\n\tbutton {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\t\tposition: relative;\r\n\t\tmargin: 1vw 0;\r\n\t\tleft: -5%;\r\n\t\twidth: 110%;\r\n\t\tpadding: 2.5vw;\r\n\t\tborder: none;\r\n\t\tborder-radius: 1.5vw;\r\n\t\tbackground-color: white;\r\n\t\tfont-size: 1.5vw;\r\n\t\tbox-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n\t\tcursor: pointer;\r\n\t}\r\n}\r\n.arrow {\r\n\ttransform: rotate(180deg);\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-left: 3px solid transparent;\r\n\tborder-right: 3px solid transparent;\r\n\tborder-bottom: 3px solid black;\r\n\ttransition: 1s;\r\n}\r\n.arrow.active {\r\n\ttransform: rotate(0deg);\r\n}\r\n","#footer {\r\n\tbackground-color: #1e1e1e;\r\n\tcolor: white;\r\n\twidth: 100%;\r\n\tborder-radius: 6vw 6vw 0 0;\r\n\tpadding: 5vw 9vw 1vw 9vw;\r\n\timg {\r\n\t\theight: 3vw;\r\n\t\tmargin-right: 1vw;\r\n\t}\r\n\th4 {\r\n\t\tfont-size: 2vw;\r\n\t\tpadding-bottom: 3vw;\r\n\t}\r\n\th5 {\r\n\t\tfont-size: 1vw;\r\n\t\tpadding-bottom: 2vw;\r\n\t\tfont-family: Figtree;\r\n\t}\r\n\t#footerTop {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\t#footerLogo {\r\n\t\tdisplay: flex;\r\n\t}\r\n\t#divider {\r\n\t\theight: 1px;\r\n\t\tborder-width: 0;\r\n\t\tborder-top: 2px solid #bbb;\r\n\t\tborder-radius: 5px;\r\n\t}\r\n\thr {\r\n\t\tmargin-top: 5vw;\r\n\t\tmargin-bottom: 2vw;\r\n\t}\r\n\t#footerBottom {\r\n\t\tdisplay: flex;\r\n\t\tfont-size: 2vw;\r\n\t\th6 {\r\n\t\t\tmargin-right: 4vw;\r\n\t\t\tfont-family: Figtree;\r\n\t\t}\r\n\t\th5 {\r\n\t\t\tmargin-right: 1vw;\r\n\t\t\ttext-decoration: underline;\r\n\t\t}\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/GalleryOne/main1.png":
/*!*****************************************!*\
  !*** ./src/assets/GalleryOne/main1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "main1.png";

/***/ }),

/***/ "./src/assets/GalleryOne/main2.png":
/*!*****************************************!*\
  !*** ./src/assets/GalleryOne/main2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "main2.png";

/***/ }),

/***/ "./src/assets/GalleryOne/main3.png":
/*!*****************************************!*\
  !*** ./src/assets/GalleryOne/main3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "main3.png";

/***/ }),

/***/ "./src/assets/GalleryOne/main4.png":
/*!*****************************************!*\
  !*** ./src/assets/GalleryOne/main4.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "main4.png";

/***/ }),

/***/ "./src/assets/GalleryOne/main5.png":
/*!*****************************************!*\
  !*** ./src/assets/GalleryOne/main5.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "main5.png";

/***/ }),

/***/ "./src/assets/GalleryOne/main6.png":
/*!*****************************************!*\
  !*** ./src/assets/GalleryOne/main6.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "main6.png";

/***/ }),

/***/ "./src/assets/GalleryThree/secondary1.png":
/*!************************************************!*\
  !*** ./src/assets/GalleryThree/secondary1.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "secondary1.png";

/***/ }),

/***/ "./src/assets/GalleryThree/secondary2.png":
/*!************************************************!*\
  !*** ./src/assets/GalleryThree/secondary2.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "secondary2.png";

/***/ }),

/***/ "./src/assets/GalleryThree/secondary3.png":
/*!************************************************!*\
  !*** ./src/assets/GalleryThree/secondary3.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "secondary3.png";

/***/ }),

/***/ "./src/assets/GalleryTwo/1.png":
/*!*************************************!*\
  !*** ./src/assets/GalleryTwo/1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1.png";

/***/ }),

/***/ "./src/assets/GalleryTwo/2.png":
/*!*************************************!*\
  !*** ./src/assets/GalleryTwo/2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2.png";

/***/ }),

/***/ "./src/assets/GalleryTwo/3.png":
/*!*************************************!*\
  !*** ./src/assets/GalleryTwo/3.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3.png";

/***/ }),

/***/ "./src/assets/GalleryTwo/4.png":
/*!*************************************!*\
  !*** ./src/assets/GalleryTwo/4.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4.png";

/***/ }),

/***/ "./src/assets/GalleryTwo/5.png":
/*!*************************************!*\
  !*** ./src/assets/GalleryTwo/5.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5.png";

/***/ }),

/***/ "./src/assets/GrayStar.svg":
/*!*********************************!*\
  !*** ./src/assets/GrayStar.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GrayStar.svg";

/***/ }),

/***/ "./src/assets/GrayStar2.svg":
/*!**********************************!*\
  !*** ./src/assets/GrayStar2.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "GrayStar2.svg";

/***/ }),

/***/ "./src/assets/Heart.svg":
/*!******************************!*\
  !*** ./src/assets/Heart.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Heart.svg";

/***/ }),

/***/ "./src/assets/WooCommerce.svg":
/*!************************************!*\
  !*** ./src/assets/WooCommerce.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "WooCommerce.svg";

/***/ }),

/***/ "./src/assets/YellowStar.svg":
/*!***********************************!*\
  !*** ./src/assets/YellowStar.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "YellowStar.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./src/assets/smileyFace.png":
/*!***********************************!*\
  !*** ./src/assets/smileyFace.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "smileyFace.png";

/***/ }),

/***/ "./src/assets/wavingHand.png":
/*!***********************************!*\
  !*** ./src/assets/wavingHand.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wavingHand.png";

/***/ }),

/***/ "./src/assets/winkFace.svg":
/*!*********************************!*\
  !*** ./src/assets/winkFace.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "winkFace.svg";

/***/ }),

/***/ "./src/fonts/Figtree-Regular.otf":
/*!***************************************!*\
  !*** ./src/fonts/Figtree-Regular.otf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Figtree-Regular.otf";

/***/ }),

/***/ "./src/fonts/SharpGrotesk-Book25.otf":
/*!*******************************************!*\
  !*** ./src/fonts/SharpGrotesk-Book25.otf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "SharpGrotesk-Book25.otf";

/***/ }),

/***/ "./src/fonts/Silverfake.otf":
/*!**********************************!*\
  !*** ./src/fonts/Silverfake.otf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Silverfake.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _js_galleryFunctionality_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/galleryFunctionality.js */ "./src/js/galleryFunctionality.js");
/* harmony import */ var _js_dataAnalysisFunctionality_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/dataAnalysisFunctionality.js */ "./src/js/dataAnalysisFunctionality.js");
/* harmony import */ var _js_bannersFunctionality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/bannersFunctionality */ "./src/js/bannersFunctionality.js");
/* harmony import */ var _js_faqFunctionality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/faqFunctionality */ "./src/js/faqFunctionality.js");
/* harmony import */ var _js_navbarFunctionality__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/navbarFunctionality */ "./src/js/navbarFunctionality.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_WooCommerce_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/WooCommerce.svg */ "./src/assets/WooCommerce.svg");
/* harmony import */ var _assets_winkFace_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/winkFace.svg */ "./src/assets/winkFace.svg");
/* harmony import */ var _assets_smileyFace_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/smileyFace.png */ "./src/assets/smileyFace.png");
/* harmony import */ var _assets_Heart_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/Heart.svg */ "./src/assets/Heart.svg");
/* harmony import */ var _assets_wavingHand_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/wavingHand.png */ "./src/assets/wavingHand.png");
/* harmony import */ var _assets_GalleryOne_main1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/GalleryOne/main1.png */ "./src/assets/GalleryOne/main1.png");
/* harmony import */ var _assets_GalleryOne_main2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/GalleryOne/main2.png */ "./src/assets/GalleryOne/main2.png");
/* harmony import */ var _assets_GalleryOne_main3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/GalleryOne/main3.png */ "./src/assets/GalleryOne/main3.png");
/* harmony import */ var _assets_GalleryOne_main4_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/GalleryOne/main4.png */ "./src/assets/GalleryOne/main4.png");
/* harmony import */ var _assets_GalleryOne_main5_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/GalleryOne/main5.png */ "./src/assets/GalleryOne/main5.png");
/* harmony import */ var _assets_GalleryOne_main6_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/GalleryOne/main6.png */ "./src/assets/GalleryOne/main6.png");
/* harmony import */ var _assets_GalleryTwo_1_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/GalleryTwo/1.png */ "./src/assets/GalleryTwo/1.png");
/* harmony import */ var _assets_GalleryTwo_2_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/GalleryTwo/2.png */ "./src/assets/GalleryTwo/2.png");
/* harmony import */ var _assets_GalleryTwo_3_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/GalleryTwo/3.png */ "./src/assets/GalleryTwo/3.png");
/* harmony import */ var _assets_GalleryTwo_4_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/GalleryTwo/4.png */ "./src/assets/GalleryTwo/4.png");
/* harmony import */ var _assets_GalleryTwo_5_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/GalleryTwo/5.png */ "./src/assets/GalleryTwo/5.png");
/* harmony import */ var _assets_GalleryThree_secondary1_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/GalleryThree/secondary1.png */ "./src/assets/GalleryThree/secondary1.png");
/* harmony import */ var _assets_GalleryThree_secondary2_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/GalleryThree/secondary2.png */ "./src/assets/GalleryThree/secondary2.png");
/* harmony import */ var _assets_GalleryThree_secondary3_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/GalleryThree/secondary3.png */ "./src/assets/GalleryThree/secondary3.png");






(0,_js_galleryFunctionality_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_js_dataAnalysisFunctionality_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_js_bannersFunctionality__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_js_faqFunctionality__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_js_navbarFunctionality__WEBPACK_IMPORTED_MODULE_5__["default"])();

// Icons and widgets






var navImg = document.getElementById("navImg");
var footerImg = document.getElementById("footerImg");
var wooCommerce = document.getElementById("wooCommerce");
var winkFace1 = document.getElementById("winkFace1");
var winkFace2 = document.getElementById("winkFace2");
var smileyFace = document.getElementById("smileyFace");
var heart = document.getElementById("heart");
var wavingHand = document.getElementById("wavingHand");
navImg.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__;
footerImg.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__;
wooCommerce.src = _assets_WooCommerce_svg__WEBPACK_IMPORTED_MODULE_7__;
winkFace1.src = _assets_winkFace_svg__WEBPACK_IMPORTED_MODULE_8__;
winkFace2.src = _assets_winkFace_svg__WEBPACK_IMPORTED_MODULE_8__;
smileyFace.src = _assets_smileyFace_png__WEBPACK_IMPORTED_MODULE_9__;
heart.src = _assets_Heart_svg__WEBPACK_IMPORTED_MODULE_10__;
wavingHand.src = _assets_wavingHand_png__WEBPACK_IMPORTED_MODULE_11__;

// Gallery Images

// Main (Features) Gallery






var mainGalleryOne = document.getElementById("mainGalleryOne");
var mainGalleryTwo = document.getElementById("mainGalleryTwo");
var mainGalleryThree = document.getElementById("mainGalleryThree");
var mainGalleryFour = document.getElementById("mainGalleryFour");
var mainGalleryFive = document.getElementById("mainGalleryFive");
var mainGallerySix = document.getElementById("mainGallerySix");
mainGalleryOne.src = _assets_GalleryOne_main1_png__WEBPACK_IMPORTED_MODULE_12__;
mainGalleryTwo.src = _assets_GalleryOne_main2_png__WEBPACK_IMPORTED_MODULE_13__;
mainGalleryThree.src = _assets_GalleryOne_main3_png__WEBPACK_IMPORTED_MODULE_14__;
mainGalleryFour.src = _assets_GalleryOne_main4_png__WEBPACK_IMPORTED_MODULE_15__;
mainGalleryFive.src = _assets_GalleryOne_main5_png__WEBPACK_IMPORTED_MODULE_16__;
mainGallerySix.src = _assets_GalleryOne_main6_png__WEBPACK_IMPORTED_MODULE_17__;

// DataCollection Gallery





var collectDataImg = document.getElementById("collectDataImg");
var leverageDataDataImg = document.getElementById("leverageDataDataImg");
var segmentsDataDataImg = document.getElementById("segmentsDataDataImg");
var campaignsDataDataImg = document.getElementById("campaignsDataDataImg");
var analyseDataDataImg = document.getElementById("analyseDataDataImg");
collectDataImg.src = _assets_GalleryTwo_1_png__WEBPACK_IMPORTED_MODULE_18__;
leverageDataDataImg.src = _assets_GalleryTwo_2_png__WEBPACK_IMPORTED_MODULE_19__;
segmentsDataDataImg.src = _assets_GalleryTwo_3_png__WEBPACK_IMPORTED_MODULE_20__;
campaignsDataDataImg.src = _assets_GalleryTwo_4_png__WEBPACK_IMPORTED_MODULE_21__;
analyseDataDataImg.src = _assets_GalleryTwo_5_png__WEBPACK_IMPORTED_MODULE_22__;

// Secondary (Elena) Gallery



var secondaryGalleryOne = document.getElementById("secondaryGalleryOne");
var secondaryGalleryTwo = document.getElementById("secondaryGalleryTwo");
var secondaryGalleryThree = document.getElementById("secondaryGalleryThree");
secondaryGalleryOne.src = _assets_GalleryThree_secondary1_png__WEBPACK_IMPORTED_MODULE_23__;
secondaryGalleryTwo.src = _assets_GalleryThree_secondary2_png__WEBPACK_IMPORTED_MODULE_24__;
secondaryGalleryThree.src = _assets_GalleryThree_secondary3_png__WEBPACK_IMPORTED_MODULE_25__;

// function printMousePos(e) {
// 	var cursorX = e.clientX;
// 	var cursorY = e.clientY;
// 	console.log("X: " + cursorX + " Y: " + cursorY);
// }
// document.addEventListener("mouseup", printMousePos);
// document.addEventListener("mousedown", printMousePos);

// function trackMousePos() {}
// document.addEventListener("mousedown", () => {
// 	onmousemove = event => {
// 		var cursorX = event.clientX;
// 		var cursorY = event.clientY;
// 		console.log("X: " + cursorX + " Y: " + cursorY);
// 		onmouseup = e => {
// 			e.preventDefault();
// 		};
// 	};
// });
// document.addEventListener("mousedown", () => {
// 	document.addEventListener("mousemove", event => {
// 		var cursorX = event.clientX;
// 		var cursorY = event.clientY;
// 		console.log("X: " + cursorX + " Y: " + cursorY);
// 	});
// });
// "mousemove mousemove".split(" ").forEach(e => {
// 	document.addEventListener(e, event => {
// 		var cursorX = event.clientX;
// 		var cursorY = event.clientY;
// 		console.log("X: " + cursorX + " Y: " + cursorY);
// 	});
// });

// WROKS!!!!!!!!
// function moveGallery(event) {
// 	var cursorX = event.clientX;
// 	var cursorY = event.clientY;
// 	console.log("X: " + cursorX + " Y: " + cursorY);
// }

// window.onmousedown = () => {
// 	window.addEventListener("mousemove", move);
// 	//console.log("mouse button down");
// };
// window.onmouseup = () => {
// 	window.removeEventListener("mousemove", move);
// 	console.log("mouse button up");
// };

// mainGalleryImages.addEventListener("drag", e => {
// 	console.log(e.clientX);
// 	//galImages.style.transform = `translateX(${calculated + e.clientX}px) scale(1)`;
// });

/* WORKING DRAG FUNCTIONALITY, not compatible with click events
let isDragStart = false,
	prevPageX,
	prevScrollLeft;

const dragStart = e => {
	isDragStart = true;
	prevPageX = e.pageX;
	prevScrollLeft = mainGalleryImages.scrollLeft;
};

const dragging = e => {
	if (!isDragStart) return;
	e.preventDefault();
	let positionDiff = e.pageX - prevPageX;
	mainGalleryImages.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
	isDragStart = false;
};

mainGalleryImages.addEventListener("mousedown", dragStart);
mainGalleryImages.addEventListener("mousemove", dragging);
mainGalleryImages.addEventListener("mouseup", dragStop);
*/
// function moveGallery(event) {
// 	var cursorX = event.clientX;
// 	//console.log("X: " + cursorX);
// 	console.log(this.oldX > cursorX);
// 	//let style = window.getComputedStyle(mainGalleryImagesChildren[1]);
// 	let style2 = mainGalleryImagesChildren[1].getBoundingClientRect();

// 	// console.log(
// 	// 	"style.transform",
// 	// 	style,
// 	// 	"style.x",
// 	// 	style.x,
// 	// 	"style.rx",
// 	// 	style.rx,
// 	// 	"style.cx",
// 	// 	style.cx
// 	// );
// 	console.log("style2", style2.x);
// 	if (this.oldX > cursorX == true) {
// 		console.log("condition1");
// 		mainGalleryImagesChildren[1].style.transform = `translateX(${
// 			style2.x - 300
// 		}px) `;
// 	} else {
// 		console.log("condition2");
// 		mainGalleryImagesChildren[1].style.transform = `translateX(${
// 			style2.x + 100
// 		}px) `;
// 	}
// 	this.oldX = cursorX;
// }

// mainGalleryImages.onmousedown = () => {
// 	mainGalleryImages.addEventListener("mousemove", moveGallery);
// 	console.log("touch down");
// };
// mainGalleryImages.onmouseup = () => {
// 	mainGalleryImages.removeEventListener("mousemove", moveGallery);
// 	console.log("touch up");
// };

// mainGalleryImages.ontouchstart = () => {
// 	mainGalleryImages.addEventListener("touchstart", moveGallery);
// 	//console.log("mouse button down");
// };
// mainGalleryImages.ontouchend = () => {
// 	mainGalleryImages.removeEventListener("touchstart", moveGallery);
// 	console.log("mouse button up");
// };

// Array.from(mainGalleryBulletsChildren).forEach((child, index) => {
// 	child.addEventListener("click", e => {
// 		focusMainImg(child, index);
// 	});
// });

// console.log("dataAnalysisChildren", dataAnalysisChildren);
// console.log("dataContainer", dataContainer);

// setInterval(() => {
// 	//let banner = document.getElementById("banner");
// }, 200);
// onscroll = event => {
// 	let posBanner = banner.getBoundingClientRect();
// };
// window.onscroll = function (e) {
// 	// print "false" if direction is down and "true" if up
// 	console.log(this.oldScroll > this.scrollY);
// 	// const posBanner = getComputedStyle(banner).transform;
// 	// console.log("posBanner", posBanner);
// 	let posBanner = banner.getBoundingClientRect();
// 	if (posBanner.top > -150 && posBanner.top < 700) {
// 		let calculated = (posBanner.top / window.innerHeight) * 100;
// 		banner.style.transform = `translateX(${calculated}%)`;
// 		console.log("in frame", posBanner.top);
// 		console.log(window.innerHeight);
// 	}
// 	this.oldScroll = this.scrollY;

// 	//console.log("oldScroll", oldScroll, "scrollY", scrollY);
// };
})();

/******/ })()
;
//# sourceMappingURL=bundle12e3b03ffaa95acba807.js.map