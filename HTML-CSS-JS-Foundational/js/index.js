// When the document is ready, initialize the slick carousel for the product image container
$(document).ready(function () {
  $('.about-product-img-container').slick({
    autoplay: true,          // Automatically cycle through slides
    autoplaySpeed: 2000,     // Set the autoplay speed to 2 seconds
    dots: true,              // Display navigation dots
    arrows: true,            // Enable navigation arrows
    infinite: true,          // Enable infinite scrolling
    slidesToShow: 1,         // Show one slide at a time
    adaptiveHeight: true     // Adjust container height based on slide content
  });
});


// CONTACT US HOVER EFFECTS
const contactUsItems = ['mail', 'call', 'address'];

for (let i = 1; i <= contactUsItems.length; i++) {
  const contactUsElement = document.getElementById(`contact-us-${i}`);

  // Change the icon when the mouse enters
  contactUsElement.addEventListener('mouseenter', () => {
    contactUsElement.src = `images/icon_${contactUsItems[i - 1]}_02.png`;
  });

  // Revert the icon when the mouse leaves
  contactUsElement.addEventListener('mouseleave', () => {
    contactUsElement.src = `images/icon_${contactUsItems[i - 1]}_01.png`;
  });
}

// SOCIAL MEDIA HOVER EFFECTS
const socialMediaItems = ['fb', 'twitter', 'gplus', 'instagram', 'pinterest', 'tumblr', 'vimeo'];

for (let i = 0; i < socialMediaItems.length; i++) {
  const socialMediaElement = document.getElementById(`social-media-${socialMediaItems[i]}`);

  // Change the social media icon on hover
  socialMediaElement.addEventListener('mouseenter', () => {
    socialMediaElement.src = `images/icon_${socialMediaItems[i]}_02.png`;
  });

  // Revert the icon when the mouse leaves
  socialMediaElement.addEventListener('mouseleave', () => {
    socialMediaElement.src = `images/icon_${socialMediaItems[i]}_01.png`;
  });
}


// SCROLL FUNCTIONS
function adjustImagePosition(element, isTop = true) {
  const offset = element.clientHeight * (isTop ? 0.9 : 0.7); // Calculate offset based on height
  element.style[isTop ? 'top' : 'bottom'] = `-${offset}px`;
}

function translateImageX(image, isRight) {
  const scroll = window.scrollY; // Get vertical scroll value
  image.style.transform = `translateX(${isRight ? scroll : -scroll}px)`;
}

function translateImageRe(image, isRight) {
  const scroll = window.scrollY;
  image.style.transform = `translate(${isRight ? scroll : -scroll}px, ${-scroll}px)`;
}

function translateImageY(image, isRight) {
  const scroll = window.scrollY / 2.0;
  image.style.transform = `translateY(${isRight ? scroll : -scroll}px)`;
}

// TREES AND FOOTER SCROLL EFFECTS
const trees = document.getElementsByClassName('odd-section-trees');
const footers = document.getElementsByClassName('odd-section-footer');

for (const tree of trees) {
  window.addEventListener('load', () => adjustImagePosition(tree, true));
  window.addEventListener('resize', () => adjustImagePosition(tree, true));
  window.addEventListener('scroll', () => translateImageX(tree, true));
}
for (const footer of footers) {
  window.addEventListener('load', () => adjustImagePosition(footer, false));
  window.addEventListener('resize', () => adjustImagePosition(footer, false));
  window.addEventListener('scroll', () => translateImageX(footer, false));
}

// REINDEER SCROLL EFFECTS
const reindeer1 = document.getElementsByClassName('reindeer-image-1');
const reindeer2 = document.getElementsByClassName('reindeer-image-2');

for (const reindeer of reindeer1) {
  window.addEventListener('scroll', () => translateImageRe(reindeer, true));
}
for (const reindeer of reindeer2) {
  window.addEventListener('scroll', () => translateImageRe(reindeer, false));
}

// SNOW SCROLL EFFECTS
const snow1 = document.getElementsByClassName('snow-pattern-1');
const snow2 = document.getElementsByClassName('snow-pattern-2');


for (const snow of snow1) {
  window.addEventListener('scroll', () => translateImageY(snow, true));
}
for (const snow of snow2) {
  window.addEventListener('scroll', () => translateImageY(snow, false));
}

// NAVBAR JS FUNCTIONS
function aTagMouseEnter(tag) {
  const img = tag.querySelector('img');
  img.src = "images/menu_item_active.png"; // Change to active image
}

function aTagMouseLeave(tag) {
  const img = tag.querySelector('img');
  img.src = "images/menu_item_normal.png"; // Revert to normal image
}

// Select all anchor tags and attach hover event listeners
const aTags = [
  document.getElementById('first-a'),
  document.getElementById('second-a'),
  document.getElementById('third-a'),
  document.getElementById('fourth-a'),
  document.getElementById('fifth-a'),
  document.getElementById('sixth-a'),
  document.getElementById('seventh-a'),
  document.getElementById('eighth-a')
];

for (let i = 0; i < aTags.length; i++) {
  console.log(i, aTags[i]); // Log the index and element for debugging
  aTags[i].addEventListener('mouseenter', () => aTagMouseEnter(aTags[i]));
  aTags[i].addEventListener('mouseleave', () => aTagMouseLeave(aTags[i]));
}
