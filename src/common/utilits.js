export const AnchorSscroll = () => {
    // anchor scroll
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        event.preventDefault();

        var target = document.querySelector(link.getAttribute('href'));
        var offset = 0;

        if ( window.innerWidth < 1200 ) {
          offset = 90;
        }
  
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });
      });
    });
};

export const Accordion = () => {
  var acc = document.getElementsByClassName("mil-accordion-menu");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("mil-active");
      var panel = this.nextElementSibling;
      if (panel.style.height) {
        panel.style.height = null;
      } else {
        panel.style.height = panel.scrollHeight + "px";
      }
    };
  }
};

export const CurrentPageLabel = () => {
  var curLabel = document.querySelector(".mil-current-page");
  const curMenu = document.querySelector(".mil-main-menu ul li.mil-active > a");
  var curValue = '';

  if ( curMenu != undefined ) {
    curValue = curMenu.innerHTML;
  }

  curLabel.innerHTML = curValue;
};