const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");
const tempStatus = "Clouds";

// function to get the days of the week

const getCurrentDay = () => {
  let weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tues";
  weekday[3] = "Wedn";
  weekday[4] = "Thur";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  let currentDay = new Date();
  let day = weekday[currentDay.getDay()];
  return day;
};

// function to get the time and month
const getCurrentTime = () => {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentTime = new Date();
  let month = months[currentTime.getMonth()];
  let Year = currentTime.getFullYear();
  let hours = currentTime.getHours();
  let mins = currentTime.getMinutes();
  let period = "AM";
  if (hours > 12) {
    period = "PM";
    if (hours > 12) hours -= 12;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  return ` ${month} ${Year} | ${hours}:${mins} ${period}`;
};

curDate.innerHTML = getCurrentDay() + " |" + getCurrentTime();
