import { throttle, debounce } from '../utils/event-utils';

// div containing scrollable parallax sections
const container = document.getElementById('parallax-container');
// HTMLCollection of the scrollable parallax sections
const sections = document.getElementsByClassName('parallax-section');
// Scroll position on current section in px
let relativeScroll = 0;
// Added up height of preceding sections
let prevScroll = 0;
// Index (based on HTMLCollection) of currently active section
let currentSection = 0;

// Set active section and calc its vertical position
const calcProps = () => {
  // check for activation of next section
  if (relativeScroll > sections[currentSection].offsetHeight) {
    sections[currentSection].style.transform = `translate3d(0, -${sections[currentSection].offsetHeight}px, 0)`;
    prevScroll += sections[currentSection].offsetHeight;
    currentSection += 1;
  }
  // check for activation of previous section
  if (relativeScroll < 0) {
    sections[currentSection].style.transform = 'translate3d(0, 0, 0)';
    prevScroll -= sections[currentSection - 1].offsetHeight;
    currentSection -= 1;
  }
  // calc scroll position of current section
  relativeScroll = window.scrollY - prevScroll;
};

// 1. Calc added up height of parallax sections to define height of body
// 2. Assign z-index to every section
const setup = () => {
  let bodyHeight = 0;
  let zIndex = 0;
  for (let i = sections.length - 1; i >= 0; i -= 1) {
    const item = sections[i];
    item.style.zIndex = zIndex;
    zIndex += 10;
    bodyHeight += item.offsetHeight;
  }
  container.style.height = `${bodyHeight}px`;
};

// animate sections to simulate scroll
const onScroll = () => {
  calcProps();
  throttle(() => {
    sections[currentSection].style.transform = `translate3d(0, -${relativeScroll}px, 0)`;
  });
};

// reload page after resize
const onResize = () => {
  debounce(200, () => {
    window.location.reload(true);
  });
};

export { setup, onScroll, onResize };
