let ticking = false;
const throttle = (callback) => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      callback();
      ticking = false;
    });
  }
  ticking = true;
};

let timer;
const debounce = (delay, callback) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    callback();
  }, delay);
};

export { throttle, debounce };
