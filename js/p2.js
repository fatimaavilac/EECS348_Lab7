function update() {
	var border_r = document.getElementById("border_r").value;
	var border_g = document.getElementById("border_g").value;
	var border_b = document.getElementById("border_b").value;
	var border_wid = document.getElementById("border_wid").value;
	var bg_r = document.getElementById("bg_r").value;
	var bg_g = document.getElementById("bg_g").value;
	var bg_b = document.getElementById("bg_b").value;

	document.getElementById("paragraph").style.borderColor = `rgb(${border_r}, ${border_g}, ${border_b})`;
	document.getElementById("paragraph").style.borderWidth = border_wid + 'px';
	document.getElementById("paragraph").style.color = `rgb(${bg_r}, ${bg_g}, ${bg_b})`;
}
