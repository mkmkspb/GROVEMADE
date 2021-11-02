const goUpButton = document.getElementById("goup");

window.addEventListener("scroll", function () {
	"use strict";

	if (scrollY > 1200) {
		goup.style.display = "block";
	} else {
		goup.style.display = "none";
	}
});


