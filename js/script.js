// Header

var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('.header_nav');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav_show');
    if (hamburger.classList.contains('fa-bars')) {
        hamburger.classList.add('fa-times');
        hamburger.classList.remove('fa-bars');
    } else {
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
    }
});
var header = document.querySelector('header');
var logo = document.querySelector('.header_image');

window.addEventListener('scroll', () => {
    var scroll = window.scrollY;
    if (scroll > 50) {
        header.classList.add('header_scroll');
    } else {
        header.classList.remove('header_scroll');
    }
})


var links = document.querySelectorAll('.header_link')
links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav_show');
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
    })
})

var onLoadSvg = async () => {
    await SVGInject(document.querySelectorAll("img.injectable"));
    var rellax = new Rellax('.rellax', {
        speed: -2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });

}
onLoadSvg();
AOS.init();

// FAQ Section

import { faqs } from '../db/faq.js';

var faqContainer = document.querySelector('.faq_questions');

faqs.forEach(faq => {
    var faqTemplate = faqContainer.querySelector('.faq_template').content.cloneNode(true);
    faqTemplate.querySelector('h5.faq_question').innerText = faq.q;
    faqTemplate.querySelector('p.faq_answer').innerText = faq.a;
    faqContainer.append(faqTemplate);
})





document.querySelectorAll('.section_heading').forEach(h2 => {
    h2.setAttribute('data-aos', "fade-right")
})
document.querySelectorAll('.section_desc').forEach(p => {
    p.setAttribute('data-aos', 'fade-right');
    p.setAttribute('data-aos-delay', '50');
})





// FAQ Section

var faqArray = document.querySelectorAll('.faq_header');

faqArray.forEach(faq => {
    faq.addEventListener('click', e => {
        var plus1 = faq.querySelector('.faq_plus1');
        // if (e.target !== faq) {
        //     faq.nextElementSibling.classList.remove('faq_clicked')
        //     plus1.classList.remove('faq_clicked')
        // }
        if (!faq.nextElementSibling.classList.contains('faq_clicked')) {
            faq.nextElementSibling.classList.add('faq_clicked')
            plus1.classList.add('faq_clicked')
        } else {
            faq.nextElementSibling.classList.remove('faq_clicked')
            plus1.classList.remove('faq_clicked')
        }
    })
})




// Pricing section

var priceCards = document.querySelectorAll('.pricing_grid .price');
var featuresCards = document.querySelectorAll('.features_grid .feature');

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
if (vw <= 1200) {
    priceCards.forEach(priceCard => {
        priceCard.removeAttribute('data-aos-delay');
        priceCard.setAttribute('data-aos', 'fade-up');
    })
    featuresCards.forEach(featureCards => {
        featureCards.removeAttribute('data-aos-delay');
        featureCards.setAttribute('data-aos', 'fade-up');
    })

}