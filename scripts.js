const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.getElementById('cityInput');
const card = document.querySelector('.card');
const apiKey = process.env.WEATHER_API_KEY;


weatherForm.addEventListener('submit', async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city) {
        try {
            const weatherData = await getWeatherData(cityInput.value);
            displayWeatherInfo(weatherData);
        } catch(error) {
            console.error(error);
            displayError(error);
        }
    } else {
        displayError('Please enter a city');
    }

});

async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    console.log(response);

}

function displayWeatherInfo(data) {

}

function getWeatherEmoji(weatherId) {

} 

function displayError(message) {

    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = '';
    card.style.display = 'flex';
    card.appendChild(errorDisplay);

}