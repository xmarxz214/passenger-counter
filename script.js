let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

const increment = () => {
	count += 1;
	countEl.textContent = count;
};

const save = () => {
	let countStr = count + " - ";
	saveEl.textContent += countStr;
	countEl.textContent = 0;
	count = 0;
};

const reset = () => {
	count = 0;
	saveEl.innerText = "Previous entries: ";
};
console.log("Let's count people on the subway");
