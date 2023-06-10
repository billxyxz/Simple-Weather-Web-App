const searchInput = document.querySelector(".input");
const searchBtn = document.querySelector(".search");
const weather = document.querySelector(".weather")

const API_KEY = "57323f270749af8ee20d8f3e603a3f88"
const API = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function getForecast(name){
    const res = await fetch(API + name + `&appid=${API_KEY}`);
    var data = await res.json()

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "oC"
    document.querySelector(".sky").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML ="Humidity: " + data.main.humidity + "%"
    document.querySelector(".wind").innerHTML ="Wind: " + data.wind.speed + "km/hr"
}

searchBtn.addEventListener("click", () => {
    getForecast(searchInput.value)
    weather.style.display = "block"
    searchInput.value = "";
});

