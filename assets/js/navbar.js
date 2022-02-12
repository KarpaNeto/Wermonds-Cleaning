const navContainer = document.getElementById("navContainer");
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const navLink = document.querySelectorAll('.nav__links');

if (openBtn) {
    openBtn.addEventListener('click', () => {
        navContainer.classList.add('show-menu')
        openBtn.style.display = "none";
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        navContainer.classList.remove('show-menu');
        openBtn.style.display = "block";
    })
};
if (navLink) {
    navLink.forEach(function (e) {
        e.addEventListener('click', () => {
            navContainer.classList.remove('show-menu')
            openBtn.style.display = "block"
        })
    })
}
