
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 50) {
      document.getElementById("octopusLogo").src = "/static/icones/logo2.png";
      navbar.classList.add('fixedMenu');
    } else {
      document.getElementById("octopusLogo").src = "/static/icones/polvinho1.png";
      navbar.classList.remove('fixedMenu');
    }
  }
  
  