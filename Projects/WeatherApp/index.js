let cityname = document.querySelector('.City-name');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.Weather-description');
let weatherIcon = document.querySelector('.weather-icon');
let inputValue = document.querySelector('.city-search');

inputValue.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        let value = e.target.value;
        getWeatherInfo(value);
    }
})

function getWeatherInfo(name){
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=5e3a18f4ff7da54cdf81446a985827c7&units=metric`;
    fetch(api)
    .then((Response) => Response.json())
    .then((data) => updateWeatherInfo(data));
}

function updateWeatherInfo(data){
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    cityname.innerHTML = data.name;
    temperature.innerHTML = ~~data.main.temp;
    description.innerHTML = `${data.weather[0].description}, Humidity ${data.main.humidity}%`
}