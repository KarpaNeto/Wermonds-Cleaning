var navContainer = document.getElementById("navContainer");
var openBtn = document.getElementById('openBtn');
function openNav() {
    navContainer.style.right = "0";
    openBtn.style.display = "none";

}

function closeNav() {
    navContainer.style.right = "-500px";
    openBtn.style.display = "block";
}
