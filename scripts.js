// What we wanna say.
const TEXT = 'Let the JavaScript cunsume you.'; // Misspelled on purpose for better pronunciation.

// How we wanna say it.
const utterance = new SpeechSynthesisUtterance(TEXT);
utterance.lang = 'en-US';
utterance.pitch = 0.85;
utterance.rate = 0.65;
// According to Web Speech API Errata (E11 2013-10-17), the voice list is loaded async to the page. 
// An onvoiceschanged event is fired when they are loaded.
// So, the trick is to set your voice from the callback for that event listener:
window.speechSynthesis.onvoiceschanged = function() {
  const voices = speechSynthesis.getVoices();
  const zarvox = voices.filter(voice => voice.name === 'Zarvox')[0];

  utterance.voice = zarvox;
};

// What we wanna do.
const handleClick = () => {
  window.speechSynthesis.speak(utterance);
}

// Debounce function.
const debounce = (callback, wait) => {
  let timeoutId = null;

  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

// Debounce the function.
const debouncedHandleClick = debounce(handleClick, 250);

// Fuck with the title.
const TITLE = 'ANTI-JAVASCRIPT-JAVASCRIPT-CLUB|'.split('');

const titleLoop = (count = 0, title = ['']) => {
  title = [...title, TITLE[count]];

  const nextCount = count === 33 ? 0 : count + 1;

  if (title.length === 18) title.shift();

  document.title = title.join(' ');

  setTimeout(() => titleLoop(nextCount, title), 300);
}

// You spin me right round.
titleLoop();
