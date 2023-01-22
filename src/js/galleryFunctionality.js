// Main Gallery functionality
export default function galleryFunction() {
	const mainGalleryImages = document.getElementById("images");
	const mainGalleryBullets = document.getElementById("bullets");

	const mainGalleryImagesChildren = mainGalleryImages.childNodes;
	const mainGalleryBulletsChildren =
		mainGalleryBullets.querySelectorAll(".bullet");
	Array.from(mainGalleryImagesChildren).forEach((child, index) => {
		mainGalleryImagesChildren[1].style.opacity = "1";
		mainGalleryImagesChildren[1].style.transform = `translateX(${
			window.innerWidth / 3
		}px) scale(1.5)`;
		child.addEventListener("click", e => {
			clickFocusImg(
				child,
				index,
				mainGalleryImages,
				mainGalleryBulletsChildren
			);
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
			clickFocusImg(
				child,
				index,
				secondaryGalleryImages,
				secondaryGalleryBulletsChildren
			);
		});
	});
	function clickFocusImg(child, index, images, bullets) {
		let galImages = images.querySelectorAll("img");
		let calculated =
			window.innerWidth / 3.5 - ((index - 1) * window.innerWidth) / 6;
		//console.log(mainGalleryBulletsChildren);
		//console.log(index);
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
}
