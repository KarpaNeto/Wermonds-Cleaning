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


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    
    for(var i = 0; i< reveals.lenght; i++){
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.toggle('active');
        }
    }
}
