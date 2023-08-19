const second = document.querySelector(".sec");
const minutes = document.querySelector(".min");
const hours = document.querySelector(".hour");
const hourInDate = document.querySelector("#dateAndClock .time .hourInDate");
const minInDate = document.querySelector(".minInDate");
const AM_PM = document.querySelector(".AM_PM");
const date = document.querySelector(".date p");
const day_night = document.querySelector(".day_night");
const container = document.querySelector("#container");
const clock = document.querySelector("#container #clock #clockCircle");
const dayNight = document.querySelector('.day_night');
const timeColor = document.querySelector("#dateAndClock .time");
const sun = document.querySelector('.day_night .fa-sun');
const moon = document.querySelector('.day_night .fa-moon');

let d;
let sec, min, hour, ap, month, day;

function analogClock() {
  d = new Date();
  sec = d.getSeconds();
  switch (d.getMonth()) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    default:
      month = "Dec";
      break;
  }
  switch (d.getDay()) {
    case 0:
        day = 'Sun'
        break;
    case 1:
        day = 'Mon'
        break;
    case 2:
        day = 'Tues'
        break;
    case 3:
        day = 'Wed'
        break;
    case 4:
        day = 'Thur'
        break;
    case 5:
        day = 'Fri'
        break;
    default:
        day = 'Sat'
        break;
  }
  second.style.transform = `rotate(${sec * 6}deg)`;

  min = d.getMinutes();
  minutes.style.transform = `rotate(${min * 6}deg)`;

  hour = d.getHours();
  hours.style.transform = `rotate(${hour * 30 + min / 2}deg)`;

  //Hour 
  if(hour >= 10){
    hourInDate.innerHTML = `${hour}`;
  }
  else{
    hourInDate.innerHTML = `0${hour}`;
  }
  //Min
  if(min >= 10){
    minInDate.innerHTML = `${min}`;
  }
  else{
    minInDate.innerHTML = `0${min}`;
  }
  //Second
  hour >= 12 ? (AM_PM.innerHTML = "PM") : (AM_PM.innerHTML = "AM");

  date.innerHTML = `${d.getDate()} ${month} ${d.getFullYear()} (${day})`;
}
setInterval(analogClock, 100);


function days(){
      container.style.backgroundColor = '#ECECF3';
      clock.style.boxShadow = '-6px -6px 16px #FFF, 6px 6px 16px hsla(240, 30%, 86%, 1), inset 6px 6px 16px hsla(240, 30%, 86%, 1), inset -6px -6px 16px #FFF'
      dayNight.style.boxShadow = 'inset -1px -1px 1px hsla(240, 0%, 100%, 1), inset 1px 1px 1px hsla(240, 30%, 86%, 1)'
      AM_PM.style.color = '#12123B'
      timeColor.style.color = '#12123B'
      date.style.color = '#12123B'
      sun.style.display = 'none'
      moon.style.display = 'block'
}
function night(){
      container.style.backgroundColor = '#25252D'
      clock.style.boxShadow = '6px 6px 16px hsla(240, 8%, 12%, 1), -6px -6px 16px hsla(240, 8%, 20%, 1), inset -6px -6px 16px hsla(240, 8%, 20%, 1), inset 6px 6px 12px hsla(240, 8%, 12%, 1)'
      dayNight.style.boxShadow = 'inset -1px -1px 1px hsla(240, 8%, 20%, 1), inset 1px 1px 1px hsla(240, 8%, 12%, 1)'
      AM_PM.style.color = '#fff'
      timeColor.style.color = '#fff'
      date.style.color = '#fff'
      moon.style.display = 'none'
      sun.style.display = 'block'
      sun.style.color = '#fff';
}

d = new Date();
h = d.getHours();
if(h >= 6 && h < 18){
  days();
}
else{
  night();
}
let toggel = true,l=1;
day_night.addEventListener('click',()=>{

    if(toggel && l%2==1){
      night();
    }
    else{
      days();
    }
    l++;
    if(l%2 == 0){
      console.log(l);
        toggel = false;
    }
    else{
        toggel = true;
    }
})
