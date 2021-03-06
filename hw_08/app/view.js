export default class View{
    constructor(handleClickGenerate){
         document.querySelector('.btn-user-generate').addEventListener('click', handleClickGenerate);
    }   
    renderWeather(data){
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.temp').innerHTML = Math.round((data.main.temp - 273)) + "&deg;";
        document.querySelector('.weather').textContent = data.weather[0]['description'];
        document.querySelector('.img-fluid').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png ">`;
    }
}