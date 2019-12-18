import '../styles/main.scss';
import { setup, onScroll, onResize } from './modules/scroll-controller';

const init = () => {
  setup();
  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onResize);
};

init();
