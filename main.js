const timeEl = document.getElementById("time");

const currentTime = new Date();
currentTime.setUTCHours(1);
currentTime.setUTCMinutes(33);
currentTime.setUTCSeconds(0);

const time = currentTime.getTime();

timeEl.innerHTML = time.toString();
