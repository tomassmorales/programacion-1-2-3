var slider = document.getElementById("slider");
var value = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function(){
	output.innerHTML = this.value;
}

slider.addEventListener("input", function(){
	var x = slider.value;
	var color =`linear-gradient(90deg, rgb(230, 67, 156) ${x}%, whitesmoke ${x}%)`;
	slider.style.background = color
})