// DOM
const clockBox = document.querySelector(".clock");
const time = clockBox.querySelector(".time");
const daytext = clockBox.querySelector(".daytext");

// 함수
const updateTime = () => {
  const date = new Date();
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const monthNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const dayOfWeek = dayNames[date.getDay()];
  const month = monthNames[date.getMonth()];
  const dayOfMonth = date.getDate();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const timeString = `${hours}:${minutes}`;
  const dayString = `${month}월 ${dayOfMonth}일 ${dayOfWeek}요일`;
  time.innerText = timeString;
  daytext.innerText = dayString;
};

// 이벤트리스너
updateTime();
setInterval(updateTime, 1000);
