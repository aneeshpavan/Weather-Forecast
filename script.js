const weatherIconMap = {
    'Clouds': 'clouds.png',
    'Snow': 'clouds-snow.png',
    'Rain': 'sun-clouds-rain.png',
    'Clear': 'sun.png',
    'Thunderstorm': 'lightning.png',
};

function fetchWeatherData(location) {
    const apiKey = 'eca7ff6bec5818bcf14d8651eab63276';
    let apiUrl;

    if(location.includes(',')) {
        // It's coordinates
        const [lat, lon] = location.split(',');
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else {
        // It's a city name
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    }

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        displayWeatherCard(data);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

function getWeatherIcon(weatherCondition) {
    return weatherIconMap[weatherCondition] || 'clouds.png';
}

function displayWeatherCard(data) {
    const weatherDisplay = document.getElementById('weather-display');
    const weatherCondition = data.weather[0].main;
    const weatherIconFilename = getWeatherIcon(weatherCondition);
    const weatherIconSrc = `${weatherIconFilename}`;

    const cardHtml = `
    <div class="card">
        <div class="weather-location">${data.name}, ${data.sys.country}</div>
        <img src="${weatherIconSrc}" alt="${weatherCondition}" class="weather-icon">
        <div class="weather-temp">${Math.round(data.main.temp)}°C (Feels like ${Math.round(data.main.feels_like)}°C)</div>
        <div class="weather-description">${data.weather[0].main} - ${data.weather[0].description}</div>
        <div class="weather-details">
            <p><span class="title">Temp Range:</span> ${Math.round(data.main.temp_min)}°C - ${Math.round(data.main.temp_max)}°C</p>
            <p><span class="title">Humidity:</span> ${data.main.humidity}% | <span class="title">Wind:</span> ${data.wind.speed} m/s</p>
            <p><span class="title">Pressure:</span> ${data.main.pressure} hPa | <span class="title">Visibility:</span> ${data.visibility / 1000} km</p>
            <p><span class="title">Sunrise:</span> ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} | <span class="title">Sunset:</span> ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
    </div>
`;
    
    weatherDisplay.innerHTML = cardHtml;
}



// Add event listeners for search and location buttons
document.getElementById('searchBtn').addEventListener('click', () => {
    const location = document.getElementById('searchInput').value;
    fetchWeatherData(location);
});

document.getElementById('locationBtn').addEventListener('click', () => {
    useCurrentLocation();
});

function searchWeather() {
    var input = document.getElementById('searchInput').value;
    fetchWeatherData(input);
}

function useCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var coords = latitude + ',' + longitude;
    fetchWeatherData(coords); // Assuming fetchWeatherData can handle coordinates
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
