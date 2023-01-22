// FAQ functionality
export default function faqFunction() {
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
}
