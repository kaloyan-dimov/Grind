import "./styles/main.scss";
import galleryFunction from "./js/galleryFunctionality.js";
import dataAnalysis from "./js/dataAnalysisFunctionality.js";
import bannersScroll from "./js/bannersFunctionality";
import faqFunction from "./js/faqFunctionality";
import navBarFunction from "./js/navbarFunctionality";

galleryFunction();
dataAnalysis();
bannersScroll();
faqFunction();
navBarFunction();

// Icons and widgets
import logoImgSrc from "./assets/logo.svg";
import wooCommerceSrc from "./assets/WooCommerce.svg";
import winkFaceSrc from "./assets/winkFace.svg";
import smileyFaceSrc from "./assets/smileyFace.png";
import heartSrc from "./assets/Heart.svg";
import wavingHandSrc from "./assets/wavingHand.png";

const navImg = document.getElementById("navImg");
const footerImg = document.getElementById("footerImg");
const wooCommerce = document.getElementById("wooCommerce");
const winkFace1 = document.getElementById("winkFace1");
const winkFace2 = document.getElementById("winkFace2");
const smileyFace = document.getElementById("smileyFace");
const heart = document.getElementById("heart");
const wavingHand = document.getElementById("wavingHand");

navImg.src = logoImgSrc;
footerImg.src = logoImgSrc;
wooCommerce.src = wooCommerceSrc;
winkFace1.src = winkFaceSrc;
winkFace2.src = winkFaceSrc;
smileyFace.src = smileyFaceSrc;
heart.src = heartSrc;
wavingHand.src = wavingHandSrc;

// Gallery Images

// Main (Features) Gallery
import mainGalleryOneSrc from "./assets/GalleryOne/main1.png";
import mainGalleryTwoSrc from "./assets/GalleryOne/main2.png";
import mainGalleryThreeSrc from "./assets/GalleryOne/main3.png";
import mainGalleryFourSrc from "./assets/GalleryOne/main4.png";
import mainGalleryFiveSrc from "./assets/GalleryOne/main5.png";
import mainGallerySixSrc from "./assets/GalleryOne/main6.png";

const mainGalleryOne = document.getElementById("mainGalleryOne");
const mainGalleryTwo = document.getElementById("mainGalleryTwo");
const mainGalleryThree = document.getElementById("mainGalleryThree");
const mainGalleryFour = document.getElementById("mainGalleryFour");
const mainGalleryFive = document.getElementById("mainGalleryFive");
const mainGallerySix = document.getElementById("mainGallerySix");

mainGalleryOne.src = mainGalleryOneSrc;
mainGalleryTwo.src = mainGalleryTwoSrc;
mainGalleryThree.src = mainGalleryThreeSrc;
mainGalleryFour.src = mainGalleryFourSrc;
mainGalleryFive.src = mainGalleryFiveSrc;
mainGallerySix.src = mainGallerySixSrc;

// DataCollection Gallery
import collectDataImgSrc from "./assets/GalleryTwo/1.png";
import leverageDataDataImgSrc from "./assets/GalleryTwo/2.png";
import segmentsDataDataImgSrc from "./assets/GalleryTwo/3.png";
import campaignsDataDataImgSrc from "./assets/GalleryTwo/4.png";
import analyseDataDataImgSrc from "./assets/GalleryTwo/5.png";

const collectDataImg = document.getElementById("collectDataImg");
const leverageDataDataImg = document.getElementById("leverageDataDataImg");
const segmentsDataDataImg = document.getElementById("segmentsDataDataImg");
const campaignsDataDataImg = document.getElementById("campaignsDataDataImg");
const analyseDataDataImg = document.getElementById("analyseDataDataImg");

collectDataImg.src = collectDataImgSrc;
leverageDataDataImg.src = leverageDataDataImgSrc;
segmentsDataDataImg.src = segmentsDataDataImgSrc;
campaignsDataDataImg.src = campaignsDataDataImgSrc;
analyseDataDataImg.src = analyseDataDataImgSrc;

// Secondary (Elena) Gallery
import secondaryGalleryOneSrc from "./assets/GalleryThree/secondary1.png";
import secondaryGalleryTwoSrc from "./assets/GalleryThree/secondary2.png";
import secondaryGalleryThreeSrc from "./assets/GalleryThree/secondary3.png";

const secondaryGalleryOne = document.getElementById("secondaryGalleryOne");
const secondaryGalleryTwo = document.getElementById("secondaryGalleryTwo");
const secondaryGalleryThree = document.getElementById("secondaryGalleryThree");

secondaryGalleryOne.src = secondaryGalleryOneSrc;
secondaryGalleryTwo.src = secondaryGalleryTwoSrc;
secondaryGalleryThree.src = secondaryGalleryThreeSrc;

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
