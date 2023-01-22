// Data Analysis functionality
export default function dataAnalysis() {
	const dataAnalysis = document.getElementById("dataNav");
	const dataAnalysisChildren = dataAnalysis.querySelectorAll("li");
	const dataContainer = document.querySelectorAll(".dataContainer");

	// console.log(
	// 	"dataAnalysisChildren",
	// 	dataAnalysisChildren,
	// 	"dataContainer",
	// 	dataContainer
	// );

	Array.from(dataAnalysisChildren).forEach((child, index) => {
		child.addEventListener("click", () => {
			//console.log("index", index);
			dataAnalysisChildren.forEach(dC => {
				dC.classList.remove("active");
			});

			dataContainer[index].scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
			//navSelection.classList.toggle("active");

			child.classList.add("active");
		});
	});
}
