// API wweather key - beeda685cac4d010d80ce30d63a70639
// API Call - http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

const API_Key = `beeda685cac4d010d80ce30d63a70639`
const form = document.querySelector("form");
const search = document.getElementById("search");
const weather = document.querySelector("#weather");


const getWeather = async (city) => {
    weather.innerHTML = `<h2> Loading... </h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=matric`
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
}

const showWeather = (data) => {
    // if (data.cod == "404") {
    //     weather.innerHTML = `<h2> City Not Found <h2>`
    //     return;
    // }
    weather.innerHTML = `
    <div class="row1" id="weather">
        <h1>${data.main.temp} ℃</h1>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div className="second">
        <h4>${data.weather[0].main}</h4>
        </div>

</div>
    `
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value);
        event.preventDefault();
    }
)