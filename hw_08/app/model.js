  
export default class Model{
    constructor(handleLoadData){
        this.handleLoadData = handleLoadData;
    }
    
    load(city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dbe9eb6e64c6dd749d1c48f2d7879569`)
        .then( (res) => res.json())
        .then( (data) => { this.handleLoadData(data)
    })

    }
}