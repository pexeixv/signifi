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


// Features section
import { features } from '../db/features.js';
var featuresGrid = document.querySelector('.features_grid');
features.forEach(feature => {
    var featureTemplate = document.querySelector('.feature_template').content.cloneNode(true);
    featureTemplate.querySelector('.feature_title').innerText = feature.name;
    featureTemplate.querySelector('.feature_desc').innerText = feature.desc;
    let card = featureTemplate.querySelector('.feature');
    feature.iconClasses.forEach(iconClass => {
        card.querySelector('.feature_icon').classList.add(iconClass);
    })
    card.setAttribute('data-aos', feature.data_aos);
    card.setAttribute('data-aos-delay', feature.data_aos_delay);
    featuresGrid.append(featureTemplate);
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

import { pricingPlans } from '../db/pricing.js';
var pricingGrid = document.querySelector('.pricing_grid');
pricingPlans.forEach(plan => {
    var priceTemplate = document.querySelector('.pricing_template').content.cloneNode(true);
    priceTemplate.querySelector('.price_title').innerText = plan.name;
    priceTemplate.querySelector('.price_desc').innerText = plan.desc;
    let card = priceTemplate.querySelector('.price');
    if (plan.emphasized)
        card.classList.add('price-emp');
    card.setAttribute('data-aos', plan.data_aos);
    card.setAttribute('data-aos-delay', plan.data_aos_delay);
    var i = 0;
    plan.features.forEach(feature => {
        if (i) {
            var divider = document.createElement('div');
            divider.classList.add('price_divider')
            priceTemplate.querySelector('.price_features_grid').append(divider);
        }
        i++;
        var priceFeatureTemplate = priceTemplate.querySelector('.price_feature_template').content.cloneNode(true)
        priceFeatureTemplate.querySelector('.price_feature').innerText = feature.featureName;
        priceFeatureTemplate.querySelector('.price_value').innerText = feature.featureValue;
        priceTemplate.querySelector('.price_features_grid').append(priceFeatureTemplate);
    })
    priceTemplate.querySelector('.price_rate').innerText = plan.price;
    priceTemplate.querySelector('.price_button').href = plan.link;
    pricingGrid.append(priceTemplate)
})


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

