let ticking = false;
export default (callback) => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      callback();
      ticking = false;
    });
  }
  ticking = true;
};
