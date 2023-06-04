//apikey ja urli, jotta saadaan informaatiota

const apiKey = "71a7e1f4011d3ea78c03edf6457fa004"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBtn = document.querySelector('#searchBtn')
const city = document.querySelector('#city').value

searchBtn.addEventListener('click', ()=>{
    checkWeather(city)
})

//haetaan itse data ja json ulos
async function checkWeather(city){
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()
    // tässä kohtaa data tungetaan omaan id:hen
    document.querySelector('#cityName').textContent = "City: " + data.name

    document.querySelector('#temp').textContent = "Temperature: " + data.main.temp + " °C"

    document.querySelector('#iconStatus').textContent = "IconStatus: " + data.weather[0].main 

    document.querySelector('#feelsLike').textContent = "Feels like: " + data.main.feels_like + " °C"

    document.querySelector('#wind').textContent = "Wind: " + data.wind.speed + " m/s"

    document.querySelector('#humidity').textContent = "Humidity: " + data.main.humidity + " %"
    


    console.log(data)
    
}



