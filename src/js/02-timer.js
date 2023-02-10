import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timeInput = document.getElementById('datetime-picker');
const button = document.querySelector('button[data-start]');
let timerId = null;
const timerEl = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
button.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < this.defaultDate) {
      window.alert('Please choose a date in the future');
    } else {
      button.disabled = false;
    }
  },
};

const timer = flatpickr(timeInput, options);

button.addEventListener('click', onStartTimer);

function onStartTimer() {
  timerId = setInterval(countDownTime, 1000);
}
function countDownTime() {
  const currentTime = new Date();
  const selectedTime = timer.selectedDates[0];
  const difference = selectedTime - currentTime;
  renderTimer(convertMs(difference));

  if (difference === 0) {
    clearInterval(timerId);
  }
}
function renderTimer({ days, hours, minutes, seconds }) {
  timerEl.days.textContent = `${days}`;
  timerEl.hours.textContent = `${hours}`;
  timerEl.minutes.textContent = `${minutes}`;
  timerEl.seconds.textContent = `${seconds}`;
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
