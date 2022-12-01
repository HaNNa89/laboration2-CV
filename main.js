window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
    scrollToEducation();
    scrollToWorkHistory();
    scrollToContact();   
}

function addEventListeners() {
    document.getElementById('education');
    document.getElementById('work');
    document.getElementById('contact');
}   

function scrollToEducation() {
    const education = document.querySelector('education');
    education.addEventListener('click', function() {
        window.scrollTo({behavior:"smooth"});
    });
    
}

function scrollToWorkHistory() {
    const work = document.querySelector('work');
    work.addEventListener('click', function() {
        window.scrollTo({behavior:"smooth"});
    });
}

function scrollToContact() {
    const contact = document.querySelector('contact');
    contact.addEventListener('click', function() {
        window.scrollTo({behavior:"smooth"});
    });

}

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
      menu.classList.add("active");
      toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
  }

  toggle.addEventListener("click", toggleMenu, false);



