let searchButton = document.querySelector('.search button')
let inputBox = document.querySelector('.search input')
let tempHeading = document.querySelector('.temp')
let cityHeading = document.querySelector('.city')
let humidityElement = document.querySelector('.humidity')
let windElement = document.querySelector('.wind')
let imageElement = document.querySelector('.weather-icon')




async function fetchData(fetchURL){         //what is async & await
    let response = await fetch(fetchURL)
    
    let data = await response.json()       // json data fetch from response

    console.log(data)
    console.log(data.weather[0].main)
    let environment = data.weather[0].main
    imageElement.scr="images/${environment}.png"
    
    console.log(Math.round(data.main.temp))
    tempHeading.textContent = Math.round(data.main.temp) + "°C"

    console.log(data.name)
    cityHeading.textContent = data.name

    console.log(data.main.humidity)
    humidityElement.textContent = data.main.humidity + "%"

    console.log(data.wind.speed)
    windElement.textContent = data.wind.speed + " km/h"

}

// fetchData()


searchButton.addEventListener('click', () => {
    let city = inputBox.value
    console.log(city)
    
    let fetchURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7778b3a8da80197a0469ea69a7d8b9b3`
    console.log(fetchURL)
    fetchData(fetchURL)
})