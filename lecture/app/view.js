export  default class View{

    constructor(handleClickGenerate){
        this.usersContainer = document.querySelector('.users')

    }
renderUser(user){ //View

    const { 
        picture : { large }, 
        name : { title, first, last },
        dob : { age },
        location : { country, city }
        } = user;
  
    const userHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${ large }" class="card-img-top" alt="eliza">
    <div class="card-body">
        <h5 class="card-title">${ title } ${ first } ${ last }</h5>
        <p class="card-text">${ age }, ${ country } ${ city }</p>
    </div>
    </div>`;
  
    usersContainer.innerHTML += userHTML;
  }

   
usersContainer = document.querySelector('.users');   //View
document.querySelector('.btn-user-generate').addEventListener('click', loadDoc);
}