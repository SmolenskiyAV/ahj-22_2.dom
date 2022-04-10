/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
// TODO: write code here

(() => {
  let playing = true;
  let activeHole = 1;

  const stop = () => playing = true;
  const getHole = (index) => document.getElementById(`hole${index}`);
  const deactivateHole = (index) => getHole(index).className = 'hole';
  const activateHole = (index) => getHole(index).className = 'hole hole_has-mole';
  const next = () => setTimeout(() => {
    if (!playing) {
      return;
    }
    deactivateHole(activeHole);
    activeHole = Math.floor(1 + Math.random() * 9);
    activateHole(activeHole);
    next();
  }, 800);

  next();
})();

// for demonstration purpose only
export default function demo(value) {
  return value;
// eslint-disable-next-line eol-last
}