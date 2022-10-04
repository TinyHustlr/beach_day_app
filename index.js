const temperatureEl = document.querySelector("#temperature-el")
const rainEL = document.querySelector("#rain-el")
const weatherDescriptionEl = document.querySelector("#weatherdescription-el")

const weatherApiKey = "62605aee501c1fa4a66186892f78ba81"
fetch("https://api.openweathermap.org/data/2.5/weather?q=Melbourne,AU&units=metric&appid=" + weatherApiKey)
    .then(response => response.json())
    .then(data => {
            console.log(data)
            let tempHtml = data.main.temp
            let rainHtml = data
            let descriptionHtml = data.weather[0].description
            let weatherIconHtml = data.weather[0].icon
            temperatureEl.innerHTML = `Temperature: ${tempHtml}°C`
            weatherDescriptionEl.innerHTML = `Description: ${descriptionHtml}`
   })