// What we wanna say.
const TEXT = 'Press me daddy';

// How we wanna say it.
const utterance = new SpeechSynthesisUtterance(TEXT);
utterance.lang = 'en-US';
utterance.pitch = 2;
utterance.rate = 0.85;

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