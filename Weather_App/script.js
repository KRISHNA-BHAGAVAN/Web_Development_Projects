const city = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const img = document.querySelector(".weather-box img");
const temprature = document.querySelector("#temprature");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");

// ------------sections--------------------------------------------------------------
const container = document.querySelector(".container");
const weather_box = document.querySelector(".weather-box");
const weather_details = document.querySelector(".weather-details");
const err = document.querySelector(".error");


searchBtn.addEventListener("click", async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=e50a1afc8bbe7d0b14c651c4047b40c1`;
    let response = await fetch(url);
    let data = await response.json();



    if (data.cod == 200) {
        switch (data.weather[0].main) {
            case 'Haze':
                img.src = "./images/mist.png";
                break;
            case 'Mist':
                img.src = "./images/mist.png";
                break;
            case 'Rain':
                img.src = "./images/rain.png";
                break;
            case 'Snow':
                img.src = "./images/snow.png";
                break;
            case 'Clear':
                img.src = "./images/clear.png";
                break;
            case 'Clouds':
                img.src = "./images/cloud.png";
                break;
            default:
                img.src = "./images/clear.png"
                break;
        }
        temprature.innerText = Math.round(data.main.temp - 273.15);
        description.innerText = data.weather[0].description;
        humidity.innerText = data.main.humidity;
        wind.innerText = Math.round(data.wind.speed);


        displayWeather();
        displayRef(data);
    }
    else {
        displayErr();

    }
});

const displayWeather = () => {
    container.style.height = "60vh";
    container.addEventListener("transitionend", () => {
        weather_box.style.display = "flex";
        weather_details.style.display = "flex";
        err.style.visibility = "hidden";
    },{ once: true });
}

const displayErr = () => {
    container.style.height = "39vh";

    container.addEventListener("transitionend", () => {
        weather_box.style.display = "none";
        weather_details.style.display = "none";        
        err.style.visibility = "visible";
    }, { once: true });
}


const displayRef = () => {
    console.log("weather img: ", data.weather[0].main, "\ntemprature: ", Math.round(data.main.temp - 273.15),
        "\nweather description: ", data.weather[0].description,
        "\nhumidity: ", data.main.humidity, "\nwind speed: ", data.wind.speed,
        "\nstatus code: ", data.cod);
}