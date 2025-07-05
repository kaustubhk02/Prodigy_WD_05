const url = "https://api.openweathermap.org/data/2.5/weather?q="
const apikey = "&appid=6a26eb1c023b34b6a231d044193add0c";
const unit = "&units=metric" 

let input = document.querySelector(".search input");
let searchIcon = document.querySelector(".search img"); 
let values = document.querySelector(".values");
let search = document.querySelector(".search");

searchIcon.addEventListener("click", ()=>{
    const city = input.value;
    checkWeather(city);
});
async function checkWeather(city){
    const URL = url+city+apikey+unit;
    const response = await fetch(URL);
    const data = await response.json();
    if(data.cod === 200){
        values.style.display = "block";
        search.style.borderBottomLeftRadius = "0rem";
        search.style.borderBottomRightRadius = "0rem";

        console.log(`${city} Weather: `, data);
        values.innerHTML = `<h3>Temperature: ${data.main.temp}°C </h3>
         <h5>Humidity: ${data.main.humidity}% </h5>
         <h5>Wind Speed: ${data.wind.speed}km/hr </h5>`; 
    }
    else if(data.cod === "404"){
        values.style.display = "block";
        search.style.borderBottomLeftRadius = "0rem";
        search.style.borderBottomRightRadius = "0rem";
        values.innerHTML = `Enter Valid city Name.`;
        // values.style.display = "none";
        // console.log("No Such City exists.");
    }
    else{
        values.style.display = "block";
        search.style.borderBottomLeftRadius = "0rem";
        search.style.borderBottomRightRadius = "0rem";
        values.innerHTML = `Enter City Name.`;
        // search.style.borderBottomLeftRadius = "1rem";
        // search.style.borderBottomRightRadius = "1rem";
        // values.style.display = "none";
    }
}


