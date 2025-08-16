const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

window.addEventListener("click", (e) => {
	e.stopPropagation();
	console.log("Window clicked");
});

document.addEventListener("click", (e) => {
	e.stopPropagation();
	console.log("Document clicked");
});

document.body.addEventListener("click", (e) => {
	e.stopPropagation();
	console.log("Body clicked");
});

green.addEventListener("click", (e) => {
	e.stopPropagation();
	console.log("Green clicked");
});

pink.addEventListener("click", (e) => {
	e.stopPropagation();
	console.log("Pink clicked");
});

// blue.addEventListener("click", (e) => {
// 	e.stopPropagation();
// 	console.log("Blue clicked");
// });

// For allowing the event listener to run only once
blue.addEventListener(
	"click",
	(e) => {
		e.stopPropagation();
		console.log("Blue clicked");
	},
	{ once: true }
);
