import '../styles/main.scss';
import throttle from './utils/event-utils';

const sections = document.getElementsByClassName('parallax-section');
const container = document.getElementById('parallax-container');

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

const onScroll = () => {
  throttle(() => {
    sections[0].style.transform = `translate3d(0, -${window.scrollY}px, 0)`;
  });
};

const init = () => {
  setup();
  window.addEventListener('scroll', onScroll);
};

init();
