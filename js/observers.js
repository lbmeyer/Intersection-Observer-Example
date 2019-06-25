const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const sectionOneOptions = {
  rootMargin: '-200px 0px 0px 0px',
};

/**
 * ------------------------------------------
 * observer for header
 * ------------------------------------------
 */
const sectionOneObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

/**
 * ------------------------------------------
 * observer for Faders
 * ------------------------------------------
 */
const appearOption = {
  threshold: 0,
  rootMargin: '0px 0px -300px 0px',
};
const appearOnScroll = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOption);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})