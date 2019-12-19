import '../styles/main.scss';
import { setup, onScroll, onResize } from './modules/scroll-controller';

// Disable automatic restoration of scroll position
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// setup body height and z-index of sections
setup();

// set scroll positions
window.addEventListener('scroll', onScroll);

// reload page on resize
window.addEventListener('resize', onResize);
