const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navItems = document.querySelectorAll('nav a')
navItems.forEach((anchor, index) => {
  anchor.textContent = siteContent.nav[`nav-item-${index + 1}`]
});

let topImage = document.getElementById("cta-img");
topImage.setAttribute('src', siteContent.cta["img-src"])

const topText = document.querySelector('.cta-text h1');
topText.textContent = siteContent.cta.h1

const btn = document.querySelector('.cta-text button');
btn.innerText = siteContent.cta.button;

let midPage = document.getElementById("middle-img");
midPage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let green = document.querySelectorAll("header nav a");
green.forEach(aGreen => {
  aGreen.style.color = "green";
});

let topContentH4 = document.querySelectorAll('.main-content .top-content H4');
topContentH4[0].textContent = siteContent['main-content']['features-h4']
topContentH4[1].textContent = siteContent['main-content']['about-h4']


let topContentP = document.querySelectorAll('.main-content .top-content p');
topContentP[0].textContent = siteContent['main-content']['features-content']
topContentP[1].textContent = siteContent['main-content']['about-content']

let bottomContentH4 = document.querySelectorAll('.main-content .bottom-content h4');
bottomContentH4[0].textContent = siteContent['main-content']['services-h4']
bottomContentH4[1].textContent = siteContent['main-content']['product-h4']
bottomContentH4[2].textContent = siteContent['main-content']['vision-h4']

let bottomContentP = document.querySelectorAll('.main-content .bottom-content p');
bottomContentP[0].textContent = siteContent['main-content']['services-content']
bottomContentP[1].textContent = siteContent['main-content']['product-content']
bottomContentP[2].textContent = siteContent['main-content']['vision-content']

const contactHeader = document.querySelectorAll('.contact h4');
contactHeader[0].innerText = siteContent.contact['contact-h4'];

const contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = siteContent.contact.address
contactContent[1].textContent = siteContent.contact.phone
contactContent[2].textContent = siteContent.contact.email

const footer = document.querySelector('footer');
footer.textContent = siteContent.footer.copyright;