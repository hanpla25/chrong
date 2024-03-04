const clockBox = document.querySelector(".clock");
const span = clockBox.querySelector("span");

const updateTime = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  span.innerText = timeString;
};

updateTime();
setInterval(updateTime, 1000);
