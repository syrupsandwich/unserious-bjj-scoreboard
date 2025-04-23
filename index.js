let lScoreP = document.getElementById('left-score');
let rScoreP = document.getElementById('right-score');
let lAdvantageP = document.getElementById('left-advantage');
let rAdvantageP = document.getElementById('right-advantage');

let lScore = 0;
let rScore = 0;
let lAdvantage = 0;
let rAdvantage = 0;

function formatNumber(num){
  return num.toString().padStart(2, 0);
}

function updateScore(){
  lScoreP.textContent = formatNumber(lScore);
  rScoreP.textContent = formatNumber(rScore);
  lAdvantageP.textContent = '.' + formatNumber(lAdvantage);
  rAdvantageP.textContent = '.' + formatNumber(rAdvantage);
  lVerdict.textContent = '';
  rVerdict.textConcent = '';
};

let lPlus2Btn = document.getElementById('left-plus-2');
let lPlus3Btn = document.getElementById('left-plus-3');
let lPlus4Btn = document.getElementById('left-plus-4');
let rPlus2Btn = document.getElementById('right-plus-2');
let rPlus3Btn = document.getElementById('right-plus-3');
let rPlus4Btn = document.getElementById('right-plus-4');

lPlus2Btn.addEventListener('click', function(){
  lScore += 2;
  updateScore();
});

lPlus3Btn.addEventListener('click', function(){
  lScore += 3;
  updateScore();
});

lPlus4Btn.addEventListener('click', function(){
  lScore += 4;
  updateScore();
});

rPlus2Btn.addEventListener('click', function(){
  rScore += 2;
  updateScore();
});

rPlus3Btn.addEventListener('click', function(){
  rScore += 3;
  updateScore();
});

rPlus4Btn.addEventListener('click', function(){
  rScore += 4;
  updateScore();
});

let lAdvantageBtn = document.getElementById('left-plus-adv');
let rAdvantageBtn = document.getElementById('right-plus-adv');

lAdvantageBtn.addEventListener('click', function(){
  lAdvantage += 1;
  updateScore();
});

rAdvantageBtn.addEventListener('click', function(){
  rAdvantage += 1;
  updateScore();
});

let lPenaltyBtn = document.getElementById('left-penalty');
let lVerdict = document.getElementById('left-verdict');
lPenaltyBtn.addEventListener('click', function(){
  lVerdict.textContent = 'penalty';
})

let rPenaltyBtn = document.getElementById('right-penalty');
let rVerdict = document.getElementById('right-verdict');
rPenaltyBtn.addEventListener('click', function(){
  rVerdict.textContent = 'penalty';
})

let lSubmissionBtn = document.getElementById('left-submission');
lSubmissionBtn.addEventListener('click', function(){
  lVerdict.textContent = 'submission';
  deactivateButtons();
  pauseTimer();
});

let rSubmissionBtn = document.getElementById('right-submission');
rSubmissionBtn.addEventListener('click', function(){
  rVerdict.textContent = 'submission';
  deactivateButtons();
  pauseTimer();
});

let lDisqualificationBtn = document.getElementById('left-disqualification');
lDisqualificationBtn.addEventListener('click', function(){
  lVerdict.textContent = 'disqualified';
  deactivateButtons();
  pauseTimer();
});

let rDisqualificationBtn = document.getElementById('right-disqualification');
rDisqualificationBtn.addEventListener('click', function(){
  rVerdict.textContent = 'disqualified';
  deactivateButtons();
  pauseTimer();
});

function reactivateButtons(){
  lPenaltyBtn.removeAttribute('disabled');
  rPenaltyBtn.removeAttribute('disabled');
  lSubmissionBtn.removeAttribute('disabled');
  rSubmissionBtn.removeAttribute('disabled');
  lDisqualificationBtn.removeAttribute('disabled');
  rDisqualificationBtn.removeAttribute('disabled');
  lPlus2Btn.removeAttribute('disabled');
  rPlus2Btn.removeAttribute('disabled');
  lPlus3Btn.removeAttribute('disabled');
  rPlus3Btn.removeAttribute('disabled');
  lPlus4Btn.removeAttribute('disabled');
  rPlus4Btn.removeAttribute('disabled');
  lAdvantageBtn.removeAttribute('disabled');
  rAdvantageBtn.removeAttribute('disabled');
}

function deactivateButtons(){
  lPenaltyBtn.setAttribute('disabled', true);
  rPenaltyBtn.setAttribute('disabled', true);
  lSubmissionBtn.setAttribute('disabled', true);
  rSubmissionBtn.setAttribute('disabled', true);
  lDisqualificationBtn.setAttribute('disabled', true);
  rDisqualificationBtn.setAttribute('disabled', true);
  lPlus2Btn.setAttribute('disabled', true);
  rPlus2Btn.setAttribute('disabled', true);
  lPlus3Btn.setAttribute('disabled', true);
  rPlus3Btn.setAttribute('disabled', true);
  lPlus4Btn.setAttribute('disabled', true);
  rPlus4Btn.setAttribute('disabled', true);
  lAdvantageBtn.setAttribute('disabled', true);
  rAdvantageBtn.setAttribute('disabled', true);
}

let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function(){
  lScore = 0;
  rScore = 0;
  lAdvantage = 0;
  rAdvantage = 0;
  lVerdict.textContent = '';
  rVerdict.textContent = '';
  reactivateButtons();
  updateScore();
  resetTimer();
})

function resetTimer(){
  stopTimer();
  minutesInput.value = '00';
  secondsInput.value = '00';
}

let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
minutesInput.addEventListener('input', function(){
  if(minutesInput.value.length > 2){
    minutesInput.value = formatNumber(minutesInput.value.slice(1, 3));
  }
  if(minutesInput.value.length < 2){
    minutesInput.value = formatNumber(minutesInput.value);
  }
})

secondsInput.addEventListener('focusout', function(){
  if(secondsInput.valueAsNumber > 59){
    secondsInput.value = 59;
  }
})

secondsInput.addEventListener('input', function(){
  if(secondsInput.value.length > 2){
    secondsInput.value = formatNumber(secondsInput.value.slice(1, 3));
  }
  if(secondsInput.value.length < 2){
    secondsInput.value = formatNumber(secondsInput.value);
  }
})

let startTimerBtn = document.getElementById('start-timer');
let stopTimerBtn = document.getElementById('stop-timer');
let timerIntervalID;
startTimerBtn.addEventListener('click', function(){
  minutesInput.classList.add('non-click');
  secondsInput.classList.add('non-click');
  startTimerBtn.classList.add('non-click');
  stopTimerBtn.classList.remove('non-click');
  if(minutesInput.value === ''){
    minutesInput.value = '00';
  }
  if(secondsInput.value === ''){
    secondsInput.value = '00';
  }
  minutes = minutesInput.valueAsNumber;
  seconds = secondsInput.valueAsNumber;
  document.getElementById('time-display').classList.add('active');
  timerIntervalID = setInterval(incrementTimer, 1000);
});

function pauseTimer(){
  clearInterval(timerIntervalID);
};

function stopTimer(){
  minutesInput.classList.remove('non-click');
  secondsInput.classList.remove('non-click');
  startTimerBtn.classList.remove('non-click');
  stopTimerBtn.classList.add('non-click');
  document.getElementById('time-display').classList.remove('active');
  pauseTimer();
};

stopTimerBtn.addEventListener('click', stopTimer);

let minutes = 0;
let seconds = 0;

let volumeControl = document.getElementById('volume');
let airhorn = new Audio('./audio/airhorn.mp3');
airhorn.volume = volumeControl.valueAsNumber;

function incrementTimer(){
  if(seconds > 0){
    secondsInput.value = formatNumber(--seconds);
  }
  if (seconds === 0 && minutes > 0){
    minutesInput.value = formatNumber(--minutes);
    seconds = 59;
    secondsInput.value = formatNumber(seconds);
  }
  if (seconds === 0 && minutes === 0){
    pauseTimer();
    deactivateButtons();
    airhorn.play();
  }
  console.log(minutes, seconds);
}

volumeControl.addEventListener('input', function(){
  let lvl = volumeControl.valueAsNumber;
  airhorn.volume = lvl;
})
