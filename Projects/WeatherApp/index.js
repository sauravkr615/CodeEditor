let cityname = document.querySelector('.city-name');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.Weather-description');
let inputValue = document.querySelector('.city-search');

inputValue.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        let value = e.target.value;
        getWeatherInfo(value);
    }
})

function getWeatherInfo(name){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=26.5778&lon=78.494953&appid=api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=5e3a18f4ff7da54cdf81446a985827c7`;
    fetch(api)
    .then((Response) => Response.json())
    .then((data) => console.log(data))
}