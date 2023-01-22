// Scrolling banners
export default function bannersScroll() {
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
}
