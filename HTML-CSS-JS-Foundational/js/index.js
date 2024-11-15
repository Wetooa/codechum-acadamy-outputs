$(document).ready(function () {
  $('.about-product-img-container').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});


const contactUsItems = ['mail', 'call', 'address'];

for (let i = 1; i <= contactUsItems.length; i++) {
  const contactUsElement = document.getElementById(`contact-us-${i}`);

  contactUsElement.addEventListener('mouseenter', () => {
    contactUsElement.src = `images/icon_${contactUsItems[i - 1]}_02.png`;
  })
  contactUsElement.addEventListener('mouseleave', () => {
    contactUsElement.src = `images/icon_${contactUsItems[i - 1]}_01.png`;
  })
}


const socialMediaItems = ['fb', 'twitter', 'gplus', 'instagram', 'pinterest', 'tumblr', 'vimeo'];

for (let i = 0; i < socialMediaItems.length; i++) {
  const socialMediaElement = document.getElementById(`social-media-${socialMediaItems[i]}`);

  socialMediaElement.addEventListener('mouseenter', () => {
    socialMediaElement.src = `images/icon_${socialMediaItems[i]}_02.png`;
  })
  socialMediaElement.addEventListener('mouseleave', () => {
    socialMediaElement.src = `images/icon_${socialMediaItems[i]}_01.png`;
  })
}

const trees = document.getElementsByClassName('odd-section-trees');
const footers = document.getElementsByClassName('odd-section-footer');

function adjustImagePosition(element, isTop = true) {
  if (isTop) {
    const offset = element.clientHeight * (9 / 10.0)
    element.style.top = `-${offset}px`
  } else {
    const offset = element.clientHeight * (7 / 10.0)
    element.style.bottom = `-${offset}px`
  }
}

function translateImageX(image, isRight) {
  const scroll = window.scrollY;
  image.style.transform = `translateX(${isRight ? scroll : -scroll}px)`
}


function translateImageRe(image, isRight) {
  const scroll = window.scrollY;
  image.style.transform = `translate(${isRight ? scroll : -scroll}px, ${-scroll}px)`
}

for (const tree of trees) {
  window.addEventListener('load', () => adjustImagePosition(tree, true));
  window.addEventListener('resize', () => adjustImagePosition(tree, true));
  window.addEventListener("scroll", () => translateImageX(tree, true));
}

for (const footer of footers) {
  window.addEventListener('load', () => adjustImagePosition(footer, false));
  window.addEventListener('resize', () => adjustImagePosition(footer, false));
  window.addEventListener("scroll", () => translateImageX(footer, false));
}

const reindeer1 = document.getElementsByClassName('reindeer-image-1')
const reindeer2 = document.getElementsByClassName('reindeer-image-2')

for (const reindeer of reindeer1) {
  window.addEventListener('scroll', () => translateImageRe(reindeer, true))
}

for (const reindeer of reindeer2) {
  window.addEventListener('scroll', () => translateImageRe(reindeer, false))
}

const snow1 = document.getElementsByClassName('snow-pattern-1')
const snow2 = document.getElementsByClassName('snow-pattern-2')

function translateImageY(image, isRight) {
  const scroll = window.scrollY / 2.0;
  image.style.transform = `translateY(${isRight ? scroll : -scroll}px)`
}

for (const snow of snow1) {
  window.addEventListener('scroll', () => translateImageY(snow, true))
}

for (const snow of snow2) {
  window.addEventListener('scroll', () => translateImageY(snow, false))
}


function aTagMouseEnter(tag) {
  const img = tag.querySelector('img')
  img.src = "images/menu_item_active.png"
}

function aTagMouseLeave(tag) {
  const img = tag.querySelector('img')
  img.src = "images/menu_item_normal.png"
}

const aTags = [
  document.getElementById('first-a'),
  document.getElementById('second-a'),
  document.getElementById('third-a'),
  document.getElementById('fourth-a'),
  document.getElementById('fifth-a'),
  document.getElementById('sixth-a'),
  document.getElementById('seventh-a'),
  document.getElementById('eighth-a')
]

for (let i = 0; i < aTags.length; i++) {
  console.log(i, aTags[i])
  aTags[i].addEventListener('mouseenter', () => aTagMouseEnter(aTags[i]))
  aTags[i].addEventListener('mouseleave', () => aTagMouseLeave(aTags[i]))
}
