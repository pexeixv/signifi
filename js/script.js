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
    var scroll = this.scrollY;
    if (scroll > 50) {
        header.classList.add('header_scroll');
        logo.src = './img/logo.png'
    } else {
        header.classList.remove('header_scroll');
        logo.src = './img/logo.bib'
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



// FAQ Section

var faqs = [
    {
        'id': 1,
        'q': 'Question ',
        'a': 'Answer'
    },
    {
        'id': 1,
        'q': 'Question',
        'a': 'Answer'
    },
    {
        'id': 1,
        'q': 'Question',
        'a': 'Answer'
    },
    {
        'id': 1,
        'q': 'Question',
        'a': 'Answer'
    }, {
        'id': 1,
        'q': 'Question',
        'a': 'Answer'
    },
    {
        'id': 1,
        'q': 'Question',
        'a': 'Answer'
    },

]


var faqContainer = document.querySelector('.faq_questions');

faqs.forEach(faq => {
    var faqTemplate = faqContainer.querySelector('.faq_template').content.cloneNode(true);

    faqTemplate.querySelector('summary').innerText = faq.q;
    faqTemplate.querySelector('p').innerText = faq.a;
    faqContainer.append(faqTemplate);
})