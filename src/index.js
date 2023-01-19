import "./styles/main.scss";

// Icons and others
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

// Main Gallery functionality
const mainGalleryImages = document.getElementById("images");
const mainGalleryBullets = document.getElementById("bullets");

// mainGalleryImages.addEventListener("drag", e => {
// 	console.log(e.clientX);
// 	//galImages.style.transform = `translateX(${calculated + e.clientX}px) scale(1)`;
// });
const mainGalleryImagesChildren = mainGalleryImages.childNodes;
const mainGalleryBulletsChildren =
	mainGalleryBullets.querySelectorAll(".bullet");

Array.from(mainGalleryImagesChildren).forEach((child, index) => {
	mainGalleryImagesChildren[1].style.opacity = "1";
	mainGalleryImagesChildren[1].style.transform = `translateX(${
		window.innerWidth / 3
	}px) scale(1.5)`;
	child.addEventListener("click", e => {
		focusImg(child, index, mainGalleryImages, mainGalleryBulletsChildren);
	});
});

// Secondary Gallery  Functionality
const secondaryGalleryImages = document.getElementById("secondaryImages");
const secondaryGalleryBullets = document.getElementById("secondaryBullets");

const secondaryGalleryImagesChildren = secondaryGalleryImages.childNodes;
const secondaryGalleryBulletsChildren =
	secondaryGalleryBullets.querySelectorAll(".bullet");

Array.from(secondaryGalleryImagesChildren).forEach((child, index) => {
	secondaryGalleryImagesChildren[1].style.opacity = "1";
	secondaryGalleryImagesChildren[1].style.transform = `translateX(${
		window.innerWidth / 3
	}px) scale(1.5)`;
	child.addEventListener("click", e => {
		focusImg(
			child,
			index,
			secondaryGalleryImages,
			secondaryGalleryBulletsChildren
		);
	});
});

// Array.from(mainGalleryBulletsChildren).forEach((child, index) => {
// 	child.addEventListener("click", e => {
// 		focusMainImg(child, index);
// 	});
// });
function focusImg(child, index, images, bullets) {
	let galImages = images.querySelectorAll("img");
	let calculated =
		window.innerWidth / 3.5 - ((index - 1) * window.innerWidth) / 6;
	//console.log(mainGalleryBulletsChildren);
	console.log(index);
	bullets.forEach(bC => {
		bC.classList.remove("active");
	});
	bullets[(index - 1) / 2].classList.add("active");
	galImages.forEach(t => {
		t.style.transform = `translateX(${calculated}px) scale(1)`;
		t.style.opacity = "0.5";
		t.addEventListener("hover", () => (t.style.opacity = "1"));
	});

	child.style.transform = `translateX(${calculated}px) scale(1.5)`;
	child.style.opacity = "1";
}

// Data Analysis functionality
const dataAnalysis = document.getElementById("dataNav");
const dataAnalysisChildren = dataAnalysis.querySelectorAll("li");
const dataContainer = document.querySelectorAll(".dataContainer");

Array.from(dataAnalysisChildren).forEach((child, index) => {
	child.addEventListener("click", () => {
		//console.log("index", index);
		dataAnalysisChildren.forEach(dC => {
			dC.classList.remove("active");
		});
		dataContainer.forEach(dC => {
			dC.classList.remove("active");
		});
		child.classList.add("active");
		dataContainer[index].classList.add("active");
	});
});

console.log("dataAnalysisChildren", dataAnalysisChildren);
console.log("dataContainer", dataContainer);

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

// Scrolling banners
let banner = document.getElementById("banner");
let banner2 = document.getElementById("banner2");
let bannerHTML = banner.querySelectorAll("h3, span");
let bannerHTML2 = banner2.querySelectorAll("h3, span");

window.onscroll = () => {
	let posBanner = banner.getBoundingClientRect();
	//console.log(bannerHTML);
	if (posBanner.top > 0 && posBanner.top < window.innerHeight) {
		let calculated = (posBanner.top / window.innerHeight) * 400;
		bannerHTML.forEach(bH => {
			bH.style.transform = `translateX(-${calculated}%)`;
		});
		bannerHTML2.forEach(bH => {
			bH.style.transform = `translateX(${calculated}%)`;
		});
	}
};

// FAQ functionality
const FAQ = document.getElementById("FAQ");
const questionsFAQ = FAQ.querySelectorAll("button");
const arrowsFAQ = FAQ.querySelectorAll(".arrow");
const answersFAQ = FAQ.querySelectorAll("h2");

Array.from(questionsFAQ).forEach((question, index) => {
	question.addEventListener("click", () => {
		//console.log("index", index);
		arrowsFAQ[index].classList.toggle("active");
		answersFAQ[index].classList.toggle("active");
		//answersFAQ[index].style.display = "none";
	});
});
