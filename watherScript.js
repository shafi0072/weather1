let api = {
   key:"8f04177aecbb51052b4def2ee64bd099",
   url:"https://api.openweathermap.org/data/2.5/" 
}
let submit = document.getElementById('Submit');
submit.addEventListener('click', function(){
    let searchBox = document.getElementById('SearchBox');
    getResult(searchBox.value);
});
function getResult(Value){
   fetch(`${api.url}weather?q=${Value}&appid=${api.key}`)
   .then(weather => weather.json())
   .then(displayResuls);

}
function displayResuls(weather){
    console.log(weather)
   let city = document.getElementById('City');
   city.innerText =  `${weather.name}, ${weather.sys.country}`;
   let temp = document.getElementById('temp');
   let tempHigh = weather.main.temp-273.15 
   temp.innerText= tempHigh.toFixed(2);
   let lead = document.querySelector('.lead');
   lead.innerText = weather.weather[0].main;
   let icons=`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
   document.getElementById("image").src=icons;
}

