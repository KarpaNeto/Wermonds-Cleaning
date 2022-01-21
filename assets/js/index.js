var navContainer = document.getElementById("navContainer");
var openBtn = document.getElementById('openBtn');
function openNav() {
    navContainer.style.right = "0";
    openBtn.style.display = "none";

}

function closeNav() {
    navContainer.style.right = "-1000px";
    openBtn.style.display = "flex";
}




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
