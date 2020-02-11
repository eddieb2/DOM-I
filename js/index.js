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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// Images //
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// Nav //
const links = document.querySelectorAll('a');
links[0].innerText = siteContent['nav']['nav-item-1'];
links[1].innerText = siteContent['nav']['nav-item-2'];
links[2].innerText = siteContent['nav']['nav-item-3'];
links[3].innerText = siteContent['nav']['nav-item-4'];
links[4].innerText = siteContent['nav']['nav-item-5'];
links[5].innerText = siteContent['nav']['nav-item-6'];

// Section CTA //
const ctaWords = document.querySelector('.cta-text h1');
ctaWords.innerText = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.innerText = siteContent['cta']['button'];

// Middle Top Headers //
const middleTop = document.querySelectorAll('.top-content .text-content h4');
middleTop[0].innerText = siteContent['main-content']['features-h4'];
middleTop[1].innerText = siteContent['main-content']['about-h4'];

// Middle Top Paragraphs //
const middleTopPara = document.querySelectorAll('.top-content .text-content p');
middleTopPara[0].innerText = siteContent['main-content']['features-content'];
middleTopPara[1].innerText = siteContent['main-content']['about-content'];

// Middle Bottom Header //
const middleBottom = document.querySelectorAll('.bottom-content .text-content h4');
middleBottom[0].innerText = siteContent['main-content']['services-h4'];
middleBottom[1].innerText = siteContent['main-content']['product-h4'];
middleBottom[2].innerText = siteContent['main-content']['vision-h4'];

// Middle Bottom Paragraphs //
const middleBottomPara = document.querySelectorAll('.bottom-content .text-content p');
middleBottomPara[0].innerText = siteContent['main-content']['services-content'];
middleBottomPara[1].innerText = siteContent['main-content']['product-content'];
middleBottomPara[2].innerText = siteContent['main-content']['vision-content'];

// Section Contact//
const contact = document.querySelector('.contact h4');
contact.innerText = siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].innerText = siteContent['contact']['address'];
contactInfo[1].innerText = siteContent['contact']['phone'];
contactInfo[2].innerText = siteContent['contact']['email'];

// Footer //
const footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright']

// Nav Color Change //
links.forEach(item => {
  item.style.color = 'green';
});

// New Nav Content //
const home = document.createElement('a');
home.textContent = 'Home';
const googleSearch = document.createElement('a');
googleSearch.textContent = 'Google Us!';
const navBar = document.querySelector('nav');
navBar.prepend(home);
navBar.appendChild(googleSearch);

// Change All P's font color //
const paras = document.querySelectorAll('.main-content p');
paras.forEach(item => {
  item.style.color = 'green';
  item.style.fontWeight = 'bold';
});

// Made The Google Us link take you to google //
const navLast = document.querySelectorAll('a');
navLast[7].href = 'https://www.google.com/search?sxsrf=ACYBGNQbwIqCXOae4d47avIscJU-GNl-GQ%3A1581385348199&source=hp&ei=hAZCXtbGCLGxytMPz_m2mAw&q=lambda+school&oq=lambda+school&gs_l=psy-ab.3..35i39l3j0l7.1160.4878..5193...1.0..0.93.903.15......0....1..gws-wiz.......0i131j0i22i30.4lQmJ2ZW684&ved=0ahUKEwjWmLe_r8jnAhWxmHIEHc-8DcMQ4dUDCAg&uact=5';

const newLinks = document.querySelectorAll('a');
newLinks.forEach(item => {
  item.style.color = 'green';
  item.style.fontStyle = 'italic';
  item.style.textDecoration = 'underline';
});

let test = document.getElementById("test");
  
// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "blue";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "green";
  }, 1000);
}, false);