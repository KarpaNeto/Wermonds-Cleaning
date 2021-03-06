





window.addEventListener("scroll", scrollReveal);
function scrollReveal() {
  var revealPoint = 150;
  var revealElement = document.querySelectorAll(".reveal");
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

const accordionItems = document.querySelectorAll(".faq__item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".faq__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".faq__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};





/*  SCROLL UP */

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 400) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp)