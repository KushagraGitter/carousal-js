// Import stylesheets
import './style.css';

const carousalButtons = document.querySelectorAll('[data-carousal-button]');

carousalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const offSet = button.dataset.carousalButton === 'prev' ? -1 : 1;
    const slides = button
      .closest('[data-carousal]')
      .querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offSet;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex > slides.children.length - 1) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
