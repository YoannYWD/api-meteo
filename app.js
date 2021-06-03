var button = document.getElementById('submit')
var inputValue = document.getElementById('inputValue')
var name = document.getElementById('nam')
var icon = document.getElementById('icon')
var desc = document.getElementById('desc')
var temp = document.getElementById('temp')
var tempMin = document.getElementById('tempmin')
var tempMax = document.getElementById('tempmax')

button.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&lang=fr&appid=c2b6aa529b45aefe35d8b5e8ea65fd79')
    .then(res => res.json())
    .then(data => {
        var nameValue = data['name'];
        var iconCode = data['weather'][0]['icon']
        var tempValue = data['main']['temp'] - 273.15;
        var tempMinValue = data['main']['temp_min'] - 273.15;
        var tempMaxValue = data['main']['temp_max'] - 273.15;
        var descValue = data['weather'][0]['description'];

        nam.innerHTML = nameValue;
        icon.innerHTML = "<img src=./images/" + iconCode + ".png alt=weather icon>";
        temp.innerHTML = "Température actuelle : " + tempValue.toFixed(0) + " °C";
        desc.innerHTML = descValue;
        tempmin.innerHTML = "Température minimale : " + tempMinValue.toFixed(0) + " °C";
        tempmax.innerHTML = "Température maximale : " + tempMaxValue.toFixed(0) + " °C";

    })

    .catch(err => alert("Ville inconnue"))
})
