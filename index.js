function startTimer() {
  let minutes = 1;
  let seconds = 10;
  const timerElement = document.getElementById("timer");
  let timerInterval = setInterval(function () {
    timerElement.textContent = formatTime(minutes) + ":" + formatTime(seconds);
    seconds--;
    if (minutes === 0 && seconds === 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "00:00";
    } else if (seconds < 0) {
      minutes--;
      seconds = 59;
    }
  }, 1000);
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
}
window.onload = startTimer;
