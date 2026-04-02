/*===== MENU SHOW =====*/
const showMenu = (toggleId, navbarId) => {
    const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId)

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('show')
        })
    }
}
showMenu('navbar-toggle', 'navbar-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navbarLink = document.querySelectorAll('.navbar_link')

function linkAction() {
    const navbarMenu = document.getElementById('navbar-menu')
    // When we click on each nav__link, we remove the show-menu class
    navbarMenu.classList.remove('show')
}
navbarLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.navbar_menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active')
        } else {
            sectionsClass.classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home_data, .about_image, .skills_subtitle, .skills_text', {});
sr.reveal('.home_image, .about_subtitle, .about_text, .skills_image', { delay: 400 });
sr.reveal('.home_social_icon', { interval: 200 });
sr.reveal('.skills_data, .certificate_image, .contact_input', { interval: 200 });



(function () {
    emailjs.init("M-nkIHnqWsEN4G40T");
})();

document.getElementById("contact_form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_1ocimds", "template_h9s2wto", this)
        .then(function () {
            alert("Email sent successfully!");
        }, function (error) {
            alert("Failed: " + JSON.stringify(error));
        });
});

