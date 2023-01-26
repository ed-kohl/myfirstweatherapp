/*Date*/

let apiKey="bd3bb6534458ba51b48c49f5155745b6";
let date = new Date() ;
console.log(date);


let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let day=days[date.getDay()];

let hours=date.getHours();
let minutes=date.getMinutes();

let h3=document.querySelector("#dayDis");
h3.innerHTML= `${day}`;
let h4=document.querySelector("#hourDis");
h4.innerHTML= `, ${hours}:${minutes}`;

function dayOfWeek(){
  let d1=document.querySelector("#day1");
let d2=document.querySelector("#day2");
let d3= document.querySelector("#day3");
let d4= document.querySelector("#day4");
let d5= document.querySelector("#day5");

if(day==`Monday`){
d1.innerHTML=`Tue`;
  d2.innerHTML=`Wed`;
  d3.innerHTML=`Thu`,
  d4.innerHTML=`Fri`,
  d5.innerHTML= `Sat`;
}else {}

if (day==`Tuesday`) {
  d1.innerHTML=`Wed`;
  d2.innerHTML=`Thu`;
  d3.innerHTML=`Fri`,
  d4.innerHTML=`Sat`,
  d5.innerHTML= `Sun`;
}else {}
if (day==`Wednesday`) {
  d1.innerHTML=`Thu`;
  d2.innerHTML=`Fri`;
  d3.innerHTML=`Sat`,
  d4.innerHTML=`Sun`,
  d5.innerHTML=`Mon`;
}else {}
if (day==`Thursday`) {
  d1.innerHTML=`Fri`;
  d2.innerHTML=`Sat`;
  d3.innerHTML=`Sun`,
  d4.innerHTML=`Mon`,
  d5.innerHTML=`Tue`;
}else {}
if (day==`Friday`) {
  d1.innerHTML=`Sat`;
  d2.innerHTML=`Sun`;
  d3.innerHTML=`Mon`,
  d4.innerHTML=`Tue`,
  d5.innerHTML= `Wed`;
}else {}
if (day==`Friday`) {
  d1.innerHTML=`Sat`;
  d2.innerHTML=`Sun`;
  d3.innerHTML=`Mon`,
  d4.innerHTML=`Tue`,
  d5.innerHTML=`Wed`;
}else {}
if (day==`Saturday`) {
  d1.innerHTML=`Sun`;
  d2.innerHTML=`Mon`;
  d3.innerHTML=`Tue`,
  d4.innerHTML=`Wed`,
  d5.innerHTML=`Thu`;
}else {}
if (day==`Sunday`) {
  d1.innerHTML=`Mon`;
  d2.innerHTML=`Tue`;
  d3.innerHTML=`Wed`,
  d4.innerHTML=`Thu`,
  d5.innerHTML=`Fri`;
}else {}
}



dayOfWeek()
/*Date */


function currentLocation(event){
  event.preventDefault();
let inputCity=document.querySelector("#label1");
let writtenName=document.querySelector("#cityDisplay");
writtenName.innerHTML=` ${inputCity.value}`;

  

 let urlLAT="https://api.openweathermap.org/geo/1.0/direct";
axios.get(`${urlLAT}?q=${inputCity.value}&limit=5&appid=${apiKey}`).then(longLAT);

}

function longLAT (responding){
  
  let latitude =`${responding.data[0].lat}`;
  let longitude =`${responding.data[0].lon}`;


let urlWeather =
  "https://api.openweathermap.org/data/2.5/weather";
  axios.get(`${urlWeather}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`).then(showTemperature);
 let weatherNextDayURL=
 "https://api.openweathermap.org/data/2.5/forecast";
  axios.get(`${weatherNextDayURL}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`).then(showNextDay);
}

function showTemperature(tempInLoc){
  let tempInLocation = Math.round(`${tempInLoc.data.main.temp}`);
  let tempFeel=Math.round(`${tempInLoc.data.main.feels_like}`);
  
let writtenbyUser=document.querySelector(`#cityDisplay`);
writtenbyUser.innerHTML=`${tempInLoc.data.name}`;
let countryOfCity=document.querySelector(`#countryDisplay`);
countryOfCity.innerHTML=` ${tempInLoc.data.sys.country}`;


  let currentTemp = document.querySelector(`#degrees`);
  currentTemp.innerHTML= `${tempInLocation} °C`;

  let feelTemp=document.querySelector(`#feelsLike`);
  feelTemp.innerHTML=`${tempFeel} °C`;

  let description =document.querySelector(`#weatherdesc`);
  description.innerHTML=`, current weather: ${tempInLoc.data.weather[0].description} `;
  


}



function showNextDay(weatherNext)
{

let temperature1=Math.round(`${weatherNext.data.list[1].main.temp}`)
let tempP1=document.querySelector("#temp1");
tempP1.innerHTML=`${temperature1} °C`;

let weatherDesc1=(`${weatherNext.data.list[1].weather[0].description}`)
let de1=document.querySelector("#desc1");
de1.innerHTML=`${weatherDesc1}`;



let temperature2=Math.round(`${weatherNext.data.list[2].main.temp}`)
let tempP2=document.querySelector ("#temp2");
tempP2.innerHTML=`${temperature2} °C`;

let weatherDesc2=(`${weatherNext.data.list[2].weather[0].description}`)
let de2=document.querySelector("#desc2");
de2.innerHTML=`${weatherDesc2}`;

let temperature3=Math.round(`${weatherNext.data.list[3].main.temp}`)
let tempP3=document.querySelector ("#temp3");
tempP3.innerHTML=`${temperature3} °C`;

let weatherDesc3=(`${weatherNext.data.list[3].weather[0].description}`)
let de3=document.querySelector("#desc3");
de3.innerHTML=`${weatherDesc3}`;

let temperature4=Math.round(`${weatherNext.data.list[4].main.temp}`)
let tempP4=document.querySelector ("#temp4");
tempP4.innerHTML=`${temperature4} °C`;

let weatherDesc4=(`${weatherNext.data.list[4].weather[0].description}`);
let de4=document.querySelector("#desc4");
de4.innerHTML=`${weatherDesc4}`;


let temperature5=Math.round(`${weatherNext.data.list[5].main.temp}`)
let tempP5=document.querySelector ("#temp5");
tempP5.innerHTML=`${temperature5} °C`;

let weatherDesc5=(`${weatherNext.data.list[5].weather[0].description}`)
let de5=document.querySelector("#desc5");
de5.innerHTML=`${weatherDesc5}`;


let s1=document.querySelector(`#symbol1`)
let mainWeather1=`${weatherNext.data.list[1].weather[0].main}`;

if (mainWeather1==="Clouds"){
s1.innerHTML=`🌤️`} else{};
if (mainWeather1==="Clear"){s1.innerHTML=`☀️`} else{};
if (mainWeather1==="Snow"){s1.innerHTML=`🌨️`} else{};
if (mainWeather1==="Rain"){s1.innerHTML=`🌧️`} else{};
if (mainWeather1==="Storm"){s1.innerHTML=`⛈️`}else{};

let s2=document.querySelector(`#symbol2`)
let mainWeather2=`${weatherNext.data.list[2].weather[0].main}`;

if (mainWeather2==="Clouds"){
s2.innerHTML=`🌤️`} else{};
if (mainWeather2==="Clear"){s2.innerHTML=`☀️`} else{};
if (mainWeather2==="Snow"){s2.innerHTML=`🌨️`} else{};
if (mainWeather2==="Rain"){s2.innerHTML=`🌧️`} else{};
if (mainWeather2==="Storm"){s2.innerHTML=`⛈️`}else{};

let s3=document.querySelector(`#symbol3`)
let mainWeather3=`${weatherNext.data.list[3].weather[0].main}`;

if (mainWeather3==="Clouds"){
s3.innerHTML=`🌤️`} else{};
if (mainWeather3==="Clear"){s3.innerHTML=`☀️`} else{};
if (mainWeather3==="Snow"){s3.innerHTML=`🌨️`} else{};
if (mainWeather3==="Rain"){s3.innerHTML=`🌧️`} else{};
if (mainWeather3==="Storm"){s3.innerHTML=`⛈️`}else{};


let s4=document.querySelector(`#symbol4`)
let mainWeather4=`${weatherNext.data.list[4].weather[0].main}`;

if (mainWeather4==="Clouds"){
s4.innerHTML=`🌤️`} else{};
if (mainWeather4==="Clear"){s4.innerHTML=`☀️`} else{};
if (mainWeather4==="Snow"){s4.innerHTML=`🌨️`} else{};
if (mainWeather4==="Rain"){s4.innerHTML=`🌧️`} else{};
if (mainWeather4==="Storm"){s4.innerHTML=`⛈️`}else{};

let s5=document.querySelector(`#symbol5`)
let mainWeather5=`${weatherNext.data.list[5].weather[0].main}`;

if (mainWeather5==="Clouds"){
s5.innerHTML=`🌤️`} else{};
if (mainWeather5==="Clear"){s5.innerHTML=`☀️`} else{};
if (mainWeather5==="Snow"){s5.innerHTML=`🌨️`} else{};
if (mainWeather5==="Rain"){s5.innerHTML=`🌧️`} else{};
if (mainWeather5==="Storm"){s5.innerHTML=`⛈️`}else{};






}







let buttonCity=document.querySelector("#searchInput");
buttonCity.addEventListener("click",currentLocation);

















function showUser(response) {
  console.log (response.data);
  console.log(response.data.main.temp);
  let currentDegrees= (Math.round(response.data.main.temp));
  let h5 = document.querySelector(`#degrees`)
  h5.innerHTML= `${currentDegrees} °C`;
 
  
}

function showCity(response){
  console.log(response.data[0].name);

  let city=document.querySelector("#cityDisplay");
  city.innerHTML = (response.data[0].name);
}


function currentTemp(){
  navigator.geolocation.getCurrentPosition ( handlePosition);

  function handlePosition (position) {
  let latITUDE = position.coords.latitude;
  console.log(latITUDE);
  let lonGITUDE = position.coords.longitude;
  console.log(lonGITUDE);
let weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather";
  axios.get(`${weatherUrl}?lat=${latITUDE}&lon=${lonGITUDE}&appid=${apiKey}&units=metric`).then(showUser);

  let reverseUrl="https://api.openweathermap.org/geo/1.0/reverse";
  axios.get(`${reverseUrl}?lat=${latITUDE}&lon=${lonGITUDE}&limit=5&appid=${apiKey}`).then(showCity);    
  
}}



let buttonCurrent=document.querySelector("#searchCurrentLocation");
buttonCurrent.addEventListener("click",currentTemp);



