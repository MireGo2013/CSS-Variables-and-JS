var inputs = document.querySelectorAll("input");


inputs.forEach(input => input.addEventListener("change", inputUpdate));
inputs.forEach(input => input.addEventListener("mousemove", inputUpdate));

function inputUpdate() {
	var suffix = this.dataset.sizing || "";
	console.log(suffix);
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
