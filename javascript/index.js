const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.innerText = 'STOP';
    btnLeftElement.className = 'btn stop';
    btnRightElement.innerText = 'SPLIT';
    btnRightElement.className = 'btn split';
    chronometer.start(printTime);
  } else {
    btnLeftElement.innerText = 'START';
    btnLeftElement.className = 'btn start';
    btnRightElement.innerText = 'RESET';
    btnRightElement.className = 'btn reset';
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    minDecElement.innerText = '0';
    minUniElement.innerText = '0';
    secDecElement.innerText = '0';
    secUniElement.innerText = '0';
  } else {
    const splitTime = chronometer.split();
    const splitItem = document.createElement('li');
    splitItem.innerText = splitTime;
    splitsElement.appendChild(splitItem);
  }
});
