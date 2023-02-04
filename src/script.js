/*API*/

let apiKey="bd3bb6534458ba51b48c49f5155745b6";
/*global variables*/
let date = new Date() ;
console.log(date);

let celsiusTemperature = null;
let tempDisplay=document.querySelector(`#degrees`);

let windS=null;
let windS1=null;
let windS2=null;
let windS3=null;
let windS4=null;
let windS5=null;
let tempFeel1=null;
let tempFeel2=null;
let tempFeel3=null;
let tempFeel4=null;
let tempFeel5=null;

let wiS=document.querySelector(`#windSpeed0`);

let mprosec=document.querySelector(`#mprosec`);
let kmproh=document.querySelector(`#kmproh`);

let celsiusTemperature1 = null; 
let tempP1=document.querySelector("#temp1")
let de1=document.querySelector("#desc1");
let tempMin1a=document.querySelector("#tempMin1");
let cels1= document.querySelector(`#celsius-link1a`);
let fah1=document.querySelector(`#fahrenheit-link1a`);
let humidN1a=document.querySelector("#humidN1");
let windS1a=document.querySelector("#windS1");

let celsiusTemperature2 = null;
let tempP2=document.querySelector("#temp2")
let de2=document.querySelector("#desc2");
let tempMin2a=document.querySelector("#tempMin2");
let cels2= document.querySelector(`#celsius-link2a`);
let fah2=document.querySelector(`#fahrenheit-link2a`);
let humidN2a=document.querySelector("#humidN2");
let windS2a=document.querySelector("#windS2");

let celsiusTemperature3 = null;
let tempP3=document.querySelector("#temp3")
let de3=document.querySelector("#desc3");
let tempMin3a=document.querySelector("#tempMin3");
let cels3= document.querySelector(`#celsius-link3a`);
let fah3=document.querySelector(`#fahrenheit-link3a`);
let humidN3a=document.querySelector("#humidN3");
let windS3a=document.querySelector("#windS3");

let celsiusTemperature4 = null;
let tempP4=document.querySelector("#temp4")
let de4=document.querySelector("#desc4");
let tempMin4a=document.querySelector("#tempMin4");
let cels4= document.querySelector(`#celsius-link4a`);
let fah4=document.querySelector(`#fahrenheit-link4a`);
let humidN4a=document.querySelector("#humidN4");
let windS4a=document.querySelector("#windS4");

let celsiusTemperature5 = null;
let tempP5=document.querySelector("#temp5")
let de5=document.querySelector("#desc5");
let tempMin5a=document.querySelector("#tempMin5");
let cels5= document.querySelector(`#celsius-link5a`);
let fah5=document.querySelector(`#fahrenheit-link5a`);;
let humidN5a=document.querySelector("#humidN5");
let windS5a=document.querySelector("#windS5");
/*displey of day of week*/
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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


/*determine current location*/
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


let buttonmprosec=document.querySelector(`#mprosec`);
let buttonkmproh=document.querySelector(`#kmproh`);
function mprosectokmproh(event){
  event.preventDefault()


  let windSpeedkm=Math.round(windS*3.6);
  wiS.innerHTML=`${windSpeedkm}`;
  

}

function kmprohtomprosec(event){
  event.preventDefault()

  wiS.innerHTML=`${windS}`;

}

buttonkmproh.addEventListener ("click", mprosectokmproh);
buttonmprosec.addEventListener ("click",kmprohtomprosec);

function showTemperature(tempInLoc){

  celsiusTemperature = Math.round(`${tempInLoc.data.main.temp}`);
  let tempFeel=Math.round(`${tempInLoc.data.main.feels_like}`);
  
let writtenbyUser=document.querySelector(`#cityDisplay`);
writtenbyUser.innerHTML=`${tempInLoc.data.name}`;
let countryOfCity=document.querySelector(`#countryDisplay`);
countryOfCity.innerHTML=` ${tempInLoc.data.sys.country}`;



  tempDisplay.innerHTML= `${celsiusTemperature}`;

  let feelTemp=document.querySelector(`#feelsLike`);
  feelTemp.innerHTML=` ${tempFeel}`;

  let description =document.querySelector(`#weatherdesc`);
  description.innerHTML=`, current weather: ${tempInLoc.data.weather[0].description} `;
  
 
  windS=`${tempInLoc.data.wind.speed}`;
  wiS.innerHTML=` ${windS}`;

  /*display notes depending on temperature*/


let noteDis1=document.querySelector(`#noteText`);
if (celsiusTemperature>=25){noteDis1.innerHTML=(`🌡️Its getting hot! <br> Please remember to drink water regularly, take care and enjoy the sun 😎`)} 
else
{};
if (celsiusTemperature>=15&celsiusTemperature<25){noteDis1.innerHTML=(`Please enjoy the comfortable temperature 😎`)} else{};
if (celsiusTemperature<15&celsiusTemperature>=0){noteDis1.innerHTML=(`Low temperatures outside. <br> Please remember to keep warm!`)} 
else
{};
if (celsiusTemperature<0){noteDis1.innerHTML=(`🥶It's freezing outside! Take care!`)} 
else
{};


}

/*Conversion: m/s - km /h */


function mprosecTokmproh (event){
  event.preventDefault();
 let speedInkmh=Math.round(windS*3.6);
 
 windS.innerHTML=`${speedInkmh}`;

}
function kmprohTompros(event){
event.preventDefault();

windS.innerHTML=`${windS}`;
}

mprosec.addEventListener("click", kmprohTompros);
kmproh.addEventListener("click", mprosecTokmproh);



function mprosecTokmproh1 (event){
  event.preventDefault();
 let speedInkmh1=Math.round(windS1*3.6);
 
 windS1a.innerHTML=`${speedInkmh1}`;

}
function kmprohTompros1(event){
event.preventDefault();

windS1a.innerHTML=`${windS1}`;
}

mprosec1.addEventListener("click", kmprohTompros1);
kmproh1.addEventListener("click", mprosecTokmproh1);



function mprosecTokmproh2 (event){
  event.preventDefault();
 let speedInkmh2=Math.round(windS2*3.6);
 
 windS2a.innerHTML=`${speedInkmh2}`;

}
function kmprohTompros2(event){
event.preventDefault();

windS2a.innerHTML=`${windS1}`;
}

mprosec2.addEventListener("click", kmprohTompros2);
kmproh2.addEventListener("click", mprosecTokmproh2);



function mprosecTokmproh3 (event){
  event.preventDefault();
 let speedInkmh3=Math.round(windS3*3.6);
 
 windS3a.innerHTML=`${speedInkmh3}`;

}
function kmprohTompros3(event){
event.preventDefault();

windS3a.innerHTML=`${windS3}`;
}

mprosec3.addEventListener("click", kmprohTompros3);
kmproh3.addEventListener("click", mprosecTokmproh3);


function mprosecTokmproh4 (event){
  event.preventDefault();
 let speedInkmh4=Math.round(windS4*3.6);
 
 windS4a.innerHTML=`${speedInkmh4}`;

}
function kmprohTompros4(event){
event.preventDefault();

windS4a.innerHTML=`${windS4}`;
}

mprosec4.addEventListener("click", kmprohTompros4);
kmproh4.addEventListener("click", mprosecTokmproh4);


function mprosecTokmproh5 (event){
  event.preventDefault();
 let speedInkmh5=Math.round(windS5*3.6);
 
 windS5a.innerHTML=`${speedInkmh5}`;

}
function kmprohTompros5(event){
event.preventDefault();

windS5a.innerHTML=`${windS5}`;
}

mprosec5.addEventListener("click", kmprohTompros5);
kmproh5.addEventListener("click", mprosecTokmproh5);




function celstofah1(event){
  event.preventDefault();
 tempFeel1a=Math.round((tempFeel1*1.8)+32);
 
 tempMin1a.innerHTML=`${tempFeel1a}`;

}
function fahtocels1(event){
event.preventDefault();

tempMin1a.innerHTML=`${tempFeel1}`;
}

fah1.addEventListener("click", celstofah1);
cels1.addEventListener("click", fahtocels1);



function celstofah2(event){
  event.preventDefault();
 tempFeel2a=Math.round((tempFeel2*1.8)+32);
 
 tempMin2a.innerHTML=`${tempFeel2a}`;

}
function fahtocels2(event){
event.preventDefault();

tempMin2a.innerHTML=`${tempFeel2}`;
}

fah2.addEventListener("click", celstofah2);
cels2.addEventListener("click", fahtocels2);


function celstofah3(event){
  event.preventDefault();
 tempFeel3a=Math.round((tempFeel3*1.8)+32);
 
 tempMin3a.innerHTML=`${tempFeel3a}`;

}
function fahtocels3(event){
event.preventDefault();

tempMin3a.innerHTML=`${tempFeel3}`;
}

fah3.addEventListener("click", celstofah3);
cels3.addEventListener("click", fahtocels3);



function celstofah4(event){
  event.preventDefault();
 tempFeel4a=Math.round((tempFeel4*1,8)+32);
 
 tempMin4a.innerHTML=`${tempFeel4a}`;

}
function fahtocels4(event){
event.preventDefault();

tempMin4a.innerHTML=`${tempFeel4}`;
}

fah4.addEventListener("click", celstofah4);
cels4.addEventListener("click", fahtocels4);



function celstofah5(event){
  event.preventDefault();
 tempFeel5a=Math.round((tempFeel5*1.8)+32);
 
 tempMin5a.innerHTML=`${tempFeel5a}`;

}
function fahtocels5(event){
event.preventDefault();

tempMin5a.innerHTML=`${tempFeel5}`;
}

fah5.addEventListener("click", celstofah5);
cels5.addEventListener("click", fahtocels5);

/* Show temperature, description, temperatur and humidity of next 5 days*/

function showNextDay(weatherNext)
{

  windS=(`${weatherNext.data.list[0].wind.speed}`);
wiS.innerHTML=`${windS} `;
console.log(windS);

celsiusTemperature1= Math.round(`${weatherNext.data.list[1].main.temp}`);
tempP1.innerHTML= `${celsiusTemperature1}`;


let weatherDesc1=(`${weatherNext.data.list[1].weather[0].description}`);
 de1.innerHTML=`${weatherDesc1}`;

tempFeel1=Math.round(`${weatherNext.data.list[1].main.feels_like}`);
tempMin1.innerHTML=`${tempFeel1} `;

let humidN1= Math.round(`${weatherNext.data.list[1].main.humidity}`);
humidN1a.innerHTML=` ${humidN1} %`;

windS1=(`${weatherNext.data.list[1].wind.speed}`);
windS1a.innerHTML=`${windS1} `;


celsiusTemperature2= Math.round(`${weatherNext.data.list[2].main.temp}`);
tempP2.innerHTML= `${celsiusTemperature2}`;

let weatherDesc2=(`${weatherNext.data.list[2].weather[0].description}`);
de2.innerHTML=`${weatherDesc2}`;

tempFeel2=Math.round(`${weatherNext.data.list[2].main.feels_like}`);
tempMin2.innerHTML=` ${tempFeel2} `;


let humidN2= Math.round(`${weatherNext.data.list[2].main.humidity}`);
humidN2a.innerHTML=` ${humidN2} %`;

windS2=(`${weatherNext.data.list[2].wind.speed}`);
windS2a.innerHTML=` ${windS2}`;

celsiusTemperature3= Math.round(`${weatherNext.data.list[3].main.temp}`);
tempP3.innerHTML= `${celsiusTemperature3}`;


let weatherDesc3=(`${weatherNext.data.list[3].weather[0].description}`);
de3.innerHTML=`${weatherDesc3}`;


tempFeel3=Math.round(`${weatherNext.data.list[3].main.feels_like}`);
tempMin3.innerHTML=`${tempFeel3} `;



let humidN3= Math.round(`${weatherNext.data.list[3].main.humidity}`);
humidN3a.innerHTML=` ${humidN3} %`;

windS3=(`${weatherNext.data.list[3].wind.speed}`);
windS3a.innerHTML=`${windS3}`;




celsiusTemperature4= Math.round(`${weatherNext.data.list[4].main.temp}`);
tempP4.innerHTML= `${celsiusTemperature4}`;

let weatherDesc4=(`${weatherNext.data.list[4].weather[0].description}`);
de4.innerHTML=`${weatherDesc4}`;

tempFeel4=Math.round(`${weatherNext.data.list[4].main.feels_like}`);
tempMin4.innerHTML=` ${tempFeel4} `;




let humidN4= Math.round(`${weatherNext.data.list[4].main.humidity}`);
humidN4a.innerHTML=` ${humidN4} %`;

windS4=(`${weatherNext.data.list[4].wind.speed}`);
windS4a.innerHTML=`${windS4} `;


celsiusTemperature5= Math.round(`${weatherNext.data.list[5].main.temp}`);
tempP5.innerHTML= `${celsiusTemperature5}`;


let weatherDesc5=(`${weatherNext.data.list[5].weather[0].description}`);
de5.innerHTML=`${weatherDesc5}`;


tempFeel5=Math.round(`${weatherNext.data.list[5].main.feels_like}`);
tempMin5.innerHTML=` ${tempFeel5} `;




let humidN5= Math.round(`${weatherNext.data.list[5].main.humidity}`);
humidN5a.innerHTML=` ${humidN5} %`;

windS5=(`${weatherNext.data.list[5].wind.speed}`);
windS5a.innerHTML=`${windS5}`;

/*display symbols*/

let s0=document.querySelector(`#symbol0`);
let mainWeather0=`${weatherNext.data.list[0].weather[0].main}`;

if (mainWeather0==="Clouds"){s0.innerHTML=`🌤️`} else{};
if (mainWeather0==="Clear"){s0.innerHTML=`☀️`} else{};
if (mainWeather0==="Snow"){s0.innerHTML=`🌨️`} else{};
if (mainWeather0==="Rain"){s0.innerHTML=`🌧️`} else{};
if (mainWeather0==="Storm"){s0.innerHTML=`⛈️`}else{};

let s1=document.querySelector(`#symbol1`)
let mainWeather1=`${weatherNext.data.list[1].weather[0].main}`;

if (mainWeather1==="Clouds"){s1.innerHTML=`🌤️`} else{};
if (mainWeather1==="Clear"){s1.innerHTML=`☀️`} else{};
if (mainWeather1==="Snow"){s1.innerHTML=`🌨️`} else{};
if (mainWeather1==="Rain"){s1.innerHTML=`🌧️`} else{};
if (mainWeather1==="Storm"){s1.innerHTML=`⛈️`}else{};

let s2=document.querySelector(`#symbol2`)
let mainWeather2=`${weatherNext.data.list[2].weather[0].main}`;

if (mainWeather2==="Clouds"){s2.innerHTML=`🌤️`} else{};
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

/*display alternative theme*/

function makeitlight(event)
{event.preventDefault();

let body= document.querySelector(`.body`);
if (body.classList.contains("light"))
{body.classList.remove("light");} else{body.classList.add ("light")}}



let button= document.querySelector(`#themebutton`);
button.addEventListener("click", makeitlight);

/* respond to user input and display  results */

function showUser(response) {
  
  celsiusTemperature= Math.round(response.data.main.temp);
  
  tempDisplay.innerHTML= `${celsiusTemperature}`;

let coun = document.querySelector(`#countryDisplay`);
let currentCoun =`${response.data.sys.country}`;
coun.innerHTML=`${response.data.sys.country}`;

let curF =document.querySelector(`#feelsLike`);
let curFeel=Math.round(response.data.main.feels_like);
curF.innerHTML=` ${curFeel}, `;

let weD = document.querySelector(`#weatherdesc`);
let weatDe=`${response.data.weather[0].description}`;
weD.innerHTML=` ${weatDe}`;



windS=`${response.data.wind.speed}`;
wiS.innerHTML=` ${windS}`;



let noteDis=document.querySelector(`#noteText`);
if (celsiusTemperature>25){noteDis.innerHTML=(`🌡️Its getting hot! <br> Please remember to drink water regularly and enjoy the sun 😎`)} 
else
{};
if (celsiusTemperature>15&celsiusTemperature<25){noteDis.innerHTML=(`Please enjoy the comfortable temperature.`)} else{};
if (celsiusTemperature<15&celsiusTemperature>0){noteDis.innerHTML=(`🥶It's getting colder! <br> Please remember to keep warm!`)} 
else
{};
if (celsiusTemperature<=0){noteDis.innerHTML=(`🥶It's freezing outside! Take care!`)} 
else
{};


}

function showCity(response){
  

  let city=document.querySelector("#cityDisplay");
  city.innerHTML = (response.data[0].name);
}


function currentTemp(location){
  navigator.geolocation.getCurrentPosition ( handlePosition);

  function handlePosition (position) {
  let latITUDE = position.coords.latitude;

  let lonGITUDE = position.coords.longitude;


let weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather";
  axios.get(`${weatherUrl}?lat=${latITUDE}&lon=${lonGITUDE}&appid=${apiKey}&units=metric`).then(showUser);

  let reverseUrl="https://api.openweathermap.org/geo/1.0/reverse";
  axios.get(`${reverseUrl}?lat=${latITUDE}&lon=${lonGITUDE}&limit=5&appid=${apiKey}`).then(showCity);    


let weatherforCastURL=
 "https://api.openweathermap.org/data/2.5/forecast";
  axios.get(`${weatherforCastURL}?lat=${latITUDE}&lon=${lonGITUDE}&appid=${apiKey}&units=metric`).then(showNextDay);

}}
 
let buttonCurrent=document.querySelector("#searchCurrentLocation");
buttonCurrent.addEventListener("click",currentTemp);

/*conversions of units same day*/




function fahrenheitToCelsius(event){
  event.preventDefault()
  tempDisplay.innerHTML=(Math.round(celsiusTemperature*1.8)+32);
  
}

function celsiusToFahrenheit (event)
{event.preventDefault()
 tempDisplay.innerHTML=celsiusTemperature; 
}

let fahrenheitLink=document.querySelector(`#fahrenheit-link`);
fahrenheitLink.addEventListener("click", fahrenheitToCelsius);

let celsiusLink=document.querySelector(`#celsius-link`)
celsiusLink.addEventListener("click", celsiusToFahrenheit);



function fahrenheitToCelsius1(event)
{
  event.preventDefault()
  tempP1.innerHTML=(Math.round(celsiusTemperature1*1.8)+32);
  
}

function celsiusToFahrenheit1 (event)
{event.preventDefault()
 tempP1.innerHTML=celsiusTemperature1; 
}

let fahrenheitLink1=document.querySelector(`#fahrenheit-link1`);
fahrenheitLink1.addEventListener("click", fahrenheitToCelsius1);

let celsiusLink1=document.querySelector(`#celsius-link1`)
celsiusLink1.addEventListener("click", celsiusToFahrenheit1);

function fahrenheitToCelsius2(event){
  event.preventDefault()
  tempP2.innerHTML=(Math.round(celsiusTemperature2*1.8)+32);
}

function celsiusToFahrenheit2 (event)
{event.preventDefault()
 tempP2.innerHTML=celsiusTemperature2; 
}

let fahrenheitLink2=document.querySelector(`#fahrenheit-link2`);
fahrenheitLink2.addEventListener("click", fahrenheitToCelsius2);

let celsiusLink2=document.querySelector(`#celsius-link2`)
celsiusLink2.addEventListener("click", celsiusToFahrenheit2);

function fahrenheitToCelsius3(event){
  event.preventDefault()
  tempP3.innerHTML=(Math.round(celsiusTemperature3*1.8)+32);
}

function celsiusToFahrenheit3 (event)
{event.preventDefault()
 tempP3.innerHTML=celsiusTemperature3; 
}

let fahrenheitLink3=document.querySelector(`#fahrenheit-link3`);
fahrenheitLink3.addEventListener("click", fahrenheitToCelsius3);

let celsiusLink3=document.querySelector(`#celsius-link3`)
celsiusLink3.addEventListener("click", celsiusToFahrenheit3);

function fahrenheitToCelsius4(event){
  event.preventDefault()
  tempP4.innerHTML=(Math.round(celsiusTemperature4*1.8)+32);
  
}

function celsiusToFahrenheit4 (event)
{event.preventDefault()
 tempP4.innerHTML=celsiusTemperature4; 
}

let fahrenheitLink4=document.querySelector(`#fahrenheit-link4`);
fahrenheitLink4.addEventListener("click", fahrenheitToCelsius4);

let celsiusLink4=document.querySelector(`#celsius-link4`)
celsiusLink4.addEventListener("click", celsiusToFahrenheit4);

function fahrenheitToCelsius5(event){
  event.preventDefault()
  tempP5.innerHTML=(Math.round(celsiusTemperature5*1.8)+32);
  
}

function celsiusToFahrenheit5 (event)
{event.preventDefault()
 tempP5.innerHTML=celsiusTemperature5; 
}

let fahrenheitLink5=document.querySelector(`#fahrenheit-link5`);
fahrenheitLink5.addEventListener("click", fahrenheitToCelsius5);

let celsiusLink5=document.querySelector(`#celsius-link5`)
celsiusLink5.addEventListener("click", celsiusToFahrenheit5);
