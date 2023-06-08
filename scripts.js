// What we wanna say.
const TEXT = 'Let the JavaScript cunsume you.'; // Misspelled on purpose for better pronunciation.

// How we wanna say it.
const utterance = new SpeechSynthesisUtterance(TEXT);
utterance.lang = 'en-US';
utterance.voice = speechSynthesis.getVoices().filter(voice => voice.name === 'Zarvox')[0];
utterance.pitch = 0.85;
utterance.rate = 0.65;

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

// Fuck with the title
const TITLE = 'ANTI-JAVASCRIPT-JAVASCRIPT-CLUB|'.split('');

const titleLoop = (count = 0, title = ['']) => {
  title = [...title, TITLE[count]];

  const nextCount = count === 33 ? 0 : count + 1;

  if (title.length === 18) title.shift();

  document.title = title.join(' ');

  setTimeout(() => titleLoop(nextCount, title), 300);
}

titleLoop();
