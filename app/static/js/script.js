
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 2.5) {
      document.getElementById("octopusLogo").src = "/static/icones/logo2.png";
      navbar.classList.add('fixedMenu');
    } else {
      document.getElementById("octopusLogo").src = "/static/icones/polvinho1.png";
      navbar.classList.remove('fixedMenu');
    }
  }
  
  