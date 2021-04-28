  
export default class Model{
    constructor(handleLoadData){
        this.handleLoadData = handleLoadData;
    }
    
    load(city) {
        // const ajax = new XMLHttpRequest();
    
        // ajax.addEventListener('load', () => {
        //     this.handleLoadData(JSON.parse(ajax.responseText).results[0]);
        // });
    
        // ajax.open("GET", "https://randomuser.me/api/", true);
    
        // ajax.send();
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dbe9eb6e64c6dd749d1c48f2d7879569`)
        .then( (res) => res.json())
        .then( (data) => { this.handleLoadData(data)
    })

    }
}