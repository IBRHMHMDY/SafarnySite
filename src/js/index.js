import "@fortawesome/fontawesome-free/js/all.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "../sass/style.scss";



console.log('Safarny Company');


function scrollMove(){
    if(document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").classList.add("notransparent");
    }else{
        document.getElementById("navbar").classList.remove("notransparent");
    }
}

window.onscroll = function(){
    scrollMove();
};

// Get the container element
var navbar = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
var links = navbar.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}