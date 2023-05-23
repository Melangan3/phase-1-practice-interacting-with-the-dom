//Create Timer 
const timerElement = document.getElementById('counter');

let timerValue = 0;
let timer = setInterval(() => {
  timerValue++;
  timerElement.textContent = timerValue;
}, 1000);

//Increment Timer
const minusButton = document.getElementById('minus');

minusButton.addEventListener('click', () => {
  timerValue--;
  timerElement.textContent = timerValue;
});

//Decrement Timer
const plusButton = document.getElementById('plus');

plusButton.addEventListener('click', () => {
  timerValue++;
  timerElement.textContent = timerValue;
});

// Ability to "like" a number
const heartButton = document.getElementById('heart');
const likesList = document.querySelector('.likes');

heartButton.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.textContent = `${timerValue} has been liked.`;
  likesList.appendChild(listItem);
});

// Ability to pause timer
const pauseButton = document.getElementById('pause');

let isPaused = false;
pauseButton.addEventListener('click', () => {
  isPaused = !isPaused;
  if (isPaused) {
    clearInterval(timer);
    minusButton.disabled = true;
    plusButton.disabled = true;
    heartButton.disabled = true;
    submitButton.disabled = true;
    pauseButton.textContent = 'resume';
  } else {
    timer = setInterval(() => {
      timerValue++;
      timerElement.textContent = timerValue;
    }, 1000);
    minusButton.disabled = false;
    plusButton.disabled = false;
    heartButton.disabled = false;
    submitButton.disabled = false;
    pauseButton.textContent = 'pause';
  }
});

// Ability to restart timer
const restartButton = document.createElement('button');

restartButton.textContent = 'restart';
document.body.appendChild(restartButton);

restartButton.addEventListener('click', () => {
  clearInterval(timer);
  timerValue = 0;
  timerElement.textContent = timerValue;
  minusButton.disabled = false;
  plusButton.disabled = false;
  heartButton.disabled = false;
  submitButton.disabled = false;
  pauseButton.disabled = false;
  pauseButton.textContent = 'pause';
  isPaused = false;
  timer = setInterval(() => {
    timerValue++;
    timerElement.textContent = timerValue;
  }, 1000);
});

// Ability to submit comments 
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');
const submitButton = document.getElementById('submit');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const commentText = commentInput.value;
  const commentItem = document.createElement('div');
  commentItem.textContent = commentText;
  commentList.appendChild(commentItem);
  commentInput.value = '';
});
