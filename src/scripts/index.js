import '../styles/main.scss';
import { setup, onScroll } from './modules/scroll-handler';

const init = () => {
  setup();
  window.addEventListener('scroll', onScroll);
};

init();
