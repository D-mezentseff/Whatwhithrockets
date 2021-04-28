export default class Model{
    constructor(handleLoadData){
        this.handleLoadData = handleLoadData
    }
    
    load() { 
    const ajax = new XMLHttpRequest();
  
    ajax.addEventListener('load', () => {
        // renderUser(JSON.parse(ajax.responseText).results[0]);
    });
  
    ajax.open("GET", "https://randomuser.me/api/", true);
  
    ajax.send();
  }
}