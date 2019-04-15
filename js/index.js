window.onscroll = function() {navbar_stick()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function navbar_stick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function hamburger() {
  var x = document.getElementById("navbar");
  if (x.className === "mynav") {
    x.className += " responsive";
  }
  else {
    x.className = "mynav";
  }
}
