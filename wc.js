var time= document.querySelector('.time');


/* var hours=time.getHours();
var minutes=time.getMinutes();
var seconds=time.getSeconds();

var htmlhour= document.querySelector('.hour');
var htmlminute= document.querySelector('.minute');
var htmlsecond= document.querySelector('.second');

htmlhour.innerHTML=hours;
htmlminute.innerHTML=minutes;
htmlsecond.innerHTML=seconds;
 */

setInterval(() => {
    let time=new Date();
let hours=time.getHours();
let minutes=time.getMinutes();
let seconds=time.getSeconds();

let htmlhour= document.querySelector('.hour');
let htmlminute= document.querySelector('.minute');
let htmlsecond= document.querySelector('.second');

htmlhour.innerHTML=hours;
htmlminute.innerHTML=minutes;
htmlsecond.innerHTML=seconds;

if(seconds < 10){
    htmlsecond.innerHTML="0"+seconds;
} else if(minutes < 10){
    htmlminute.innerHTML="0"+minutes;
} else if(hours < 10){
    htmlhour.innerHTML="0"+hours;
} else if(hours > 12){
    htmlhour.innerHTML=hours-12;
}



    
}, 1000);

var dayname=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthname=['January', 'February','March','April','May','June','July','August','September','October','November','December'];
var htmlday= document.querySelector('.day');
var htmlfuldate= document.querySelector('.fuldate');
var htmlonlydate= htmlfuldate.querySelector('.onlydate');
var htmlmonthname= htmlfuldate.querySelector('.monthname');
var htmlyear=htmlfuldate.querySelector('.year');



setInterval(() => {
   var date= new Date();
 let day = date.getDay();
htmlday.innerHTML=`${dayname[day]}`;

let onlydatejs=date.getUTCDate();
htmlonlydate.innerHTML=`${onlydatejs}`;

let onlymonthnamejs=date.getMonth();
htmlmonthname.innerHTML=`${monthname[onlymonthnamejs]}`;
let onlyyearjs=date.getFullYear();
htmlyear.innerHTML=`${onlyyearjs}`; 
}, 1000);

/* Weather */

const weatherhtml=document.querySelector(".weather");

const weatherinfohtml=weatherhtml.querySelector(".weatherinfo");



const temphtml = weatherinfohtml.querySelector(".temp");
const temphtml2 = weatherinfohtml.querySelector(".temp2");

const locationhtml = weatherinfohtml.querySelector(".location");

const descriptionhtml = weatherinfohtml.querySelector(".description");
const searchhtml = weatherhtml.querySelector(".search");
const imagehtml = weatherhtml.querySelector(".current");


const apikey="865dd24273fb4307ab8111456251808";


setInterval(() => {
const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=Dhaka&aqi=no`;
fetch(url)
.then(response => response.json())
.then(data => {
 console.log(data); 
locationhtml.innerHTML=`${data.location.name}, ${data.location.country}`;
descriptionhtml.innerHTML=`${data.current.condition.text}`;

const imgurl=`https:${data.current.condition.icon}`;
 imagehtml.src= imgurl;


temphtml.innerHTML = `${data.current.temp_c}°C`;
temphtml2.innerHTML = `Feels Like: ${data.current.
feelslike_c}°C`;



}).catch(error => {
    console.log(error);}
)




    
}, 3000);


