// Navbar functionality
export default function navBarFunction() {
	const navBar = document.getElementById("navBar").querySelector("div");
	const navSelection = document.getElementById("navSelection");
	const navSelectionItems = navSelection.querySelectorAll("li");

	const intro = document.getElementById("intro");
	const featuresPage = document.getElementById("featuresPage");
	const dataAnalysisPage = document.getElementById("dataAnalysisPage");
	const bannersNavPin = document.getElementById("bannersNavPin");
	const elenaPage = document.getElementById("elenaPage");
	const recurringRevenue = document.getElementById("recurringRevenue");
	//let itemPosition;
	function navScroll(item) {
		// itemPosition = item.getBoundingClientRect().top;
		// console.log("itemPosition", itemPosition);
		// window.scrollTo({
		// 	top: itemPosition,
		// 	behavior: "smooth",
		// });
		item.scrollIntoView({ behavior: "smooth", block: "start" });
		navSelection.classList.toggle("active");
	}
	navSelectionItems.forEach((item, index) => {
		item.addEventListener("click", () => {
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
	navBar.addEventListener("click", () => {
		navSelection.classList.toggle("active");
	});
}
