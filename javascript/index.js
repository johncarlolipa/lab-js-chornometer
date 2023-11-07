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
  // Call printMilliseconds if you want to display milliseconds
  printMilliseconds();
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

// Add a click event listener to the left button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    // Start the chronometer
    chronometer.start(() => {
      printTime();
    });

    setStopBtn();
    setSplitBtn();
  } else {
    // Stop the chronometer
    chronometer.stop();

    setStartBtn();
    setResetBtn();
  }
});

// Add a click event listener to the right button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
  } else {
    // Record a split time
    const splitTime = chronometer.split();
    printSplit(splitTime);
  }
});

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerText = 'STOP';

  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.innerText = 'SPLIT';
}

function setSplitBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerText = 'START';

  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.innerText = 'RESET';
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerText = 'START';

  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.innerText = 'RESET';
}

function setResetBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerText = 'STOP';

  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.innerText = 'SPLIT';
}

function printSplit(splitTime) {
  const splitItem = document.createElement('li');
  splitItem.innerText = splitTime;
  splitsElement.appendChild(splitItem);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

// Add a click event listener to the right button ("SPLIT" button)
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    const splitTime = chronometer.split(); // Get the current split time
    appendSplitToList(splitTime); // Append the split time to the list
  }
});

function appendSplitToList(splitTime) {
  const splitsList = document.getElementById('splits'); 
  const splitItem = document.createElement('li'); 
  splitItem.className = 'list-item'; 
  splitItem.innerHTML = splitTime; 
  splitsList.appendChild(splitItem); 
}


btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
    printTime(); 
  }
});

function clearSplits() {
  const splitsList = document.getElementById('splits');
  splitsList.innerHTML = ''; 
}
