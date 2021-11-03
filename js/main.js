const goUpButton = document.getElementById("goup");

window.addEventListener("scroll", function () {
	"use strict";

	if (scrollY > 1200) {
		goup.style.display = "block";
	} else {
		goup.style.display = "none";
	}
});

goup.onclick = function () {
	"use strict";
	let count = 0;

	const scrollInterval = setInterval(function () {
		"use strict";

		window.scrollTo(0, scrollY - count);
		count++;

		if (scrollY == 0) {
			clearInterval(scrollInterval);
		}
	}, 10);
};
