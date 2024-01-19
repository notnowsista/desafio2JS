document.querySelector("#verificar").addEventListener("click", function() {
	const card1 = +document.querySelector("#card1").value;
	const card2 = +document.querySelector("#card2").value;
	const card3 = +document.querySelector("#card3").value;
	const total = card1 + card2 + card3;

	if (total <= 10) {
		document.querySelector(".mensaje-final").innerHTML = "Llevas " + total + "  unidades.";
	} else {
		document.querySelector(".mensaje-final").innerHTML = "Llevas demasiadas unidades.";
	}
});



