const container = document.querySelector(".container");

const colors = [
	"red",
	"blue",
	"green",
	"yellow",
	"purple",
	"white",
	"orange",
	"silver",
	"pink",
];

for (let index = 0; index < 5000; index++) {
	const square = document.createElement("div");

	square.className = "square";

	square.addEventListener("mouseover", () => setColor(square));

	container.append(square);
}

function setColor(element) {
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.backgroundColor = "#1d1d1d";
	element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
