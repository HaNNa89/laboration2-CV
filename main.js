window.addEventListener('DOMContentLoaded', main);

function main() {
    //addEventListeners();
    scrollToEducation();
    scrollToWorkHistory();
    scrollToContact();
    
    
}

/*function addEventListeners() {
    document.getElementById('education');
    document.getElementById('work');
    document.getElementById('contact');
} */  

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



