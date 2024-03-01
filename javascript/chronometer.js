class Chronometer {
  constructor() {
    // ... your code goes here
    (this.currentTime = 0), (this.intervalID = null);
  }

  start(callback) {
    // ... your code goes here
    if (callback) {
      this.intervalID = setInterval(() => {
        this.currentTime++;
        callback();
      }, 1000);
    } else {
      this.intervalID = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value < 10 ? '0' + value : value.toString();
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalID);
  }

  reset() {
    this.currentTime = 0;
    // reset HTML

    const minDecElement = document.getElementById('minDec');
    const minUniElement = document.getElementById('minUni');
    const secDecElement = document.getElementById('secDec');
    const secUniElement = document.getElementById('secUni');

    minDecElement.innerText = '0';
    minUniElement.innerText = '0';
    secDecElement.innerText = '0';
    secUniElement.innerText = '0';
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
