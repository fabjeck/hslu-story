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

export default throttle;
