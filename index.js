const temperatureEl = document.querySelector("#temperature-el")
const rainEL = document.querySelector("#rain-el")
const weatherDescriptionEl = document.querySelector("#weatherdescription-el")

const weatherApiKey = "62605aee501c1fa4a66186892f78ba81"
fetch("https://api.openweathermap.org/data/2.5/weather?q=Melbourne,AU&units=metric&appid=" + weatherApiKey)
    .then(response => response.json())
    .then(data => {
            console.log(data)
            let tempHtml = data.main.temp
            let rainHtml = data.rain
            console.log(rainHtml)
            let descriptionHtml = data.weather[0].description
            let weatherIconHtml = data.weather[0].icon
            temperatureEl.innerHTML = `Temperature: ${tempHtml}°C`
            rainEL.innerHTML = `Rain in last hour: ${rainHtml}mm`
            weatherDescriptionEl.innerHTML = `Description: ${descriptionHtml} <img src="https://openweathermap.org/img/w/${weatherIconHtml}.png">`
   })

const googleMapsApiKey = "AIzaSyDn7pV_fa0zqGcvCDS0nIMbFl4VWTqixzQ"
fetch("https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key=" + googleMapsApiKey)
   .then(response => response.json())
   .then(data => console.log(data))
   
// requestAnimationFrame  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDn7pV_fa0zqGcvCDS0nIMbFl4VWTqixzQ&callback=initMap"></script>