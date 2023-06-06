// What we wanna say.
const TEXT = 'Let the JavaScript cunsume you.';

// How we wanna say it.
const utterance = new SpeechSynthesisUtterance(TEXT);
utterance.lang = 'en-US';
utterance.voice = speechSynthesis.getVoices().filter(voice => voice.lang === 'en-US')[27];
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