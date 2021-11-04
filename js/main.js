// SLIDER

$(document).ready(function(){
	$('.featured_products-slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeigh: true,
		slidesToShow: 4,	
		slidesToScroll: 4,
		speed: 700,
		infinite: true,
		autoplay: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		swipe: true,
		touchThreshold: 15,
		touchMove: true,
	});
});

// GO UP BUTTON

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


