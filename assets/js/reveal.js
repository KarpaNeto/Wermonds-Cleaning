window.addEventListener("scroll", scrollReveal);
function scrollReveal() {
	var revealPoint = 150;
	var revealElement = document.querySelectorAll("section");
	for (var i = 0; i < revealElement.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
		} else {
			revealElement[i].classList.remove("active");
		}
	}
}


scrollReveal();