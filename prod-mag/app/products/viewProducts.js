export default class ViewDates{
    btnsAddToCart = '.btn_add_to_cart';
    btnsDetails = '.btn_details';
    constructor(handleClickAddToCart, handleClickDetails){
        this.dom = document.querySelector('.dates');
        this.handleClickAddToCart = handleClickAddToCart;
        this.handleClickDetails = handleClickDetails;
    }

    render(d){
        this.dom.innerHTML = d.map(el => this.renderCard(el)).join('');
        this.addListeners();
    }

    renderCard({ img, manufacture, pname, price, ingridients, category, idp }){
        return `
        <div class="d-flex card-prod">
          <div class="card card-prod" >
              <div class="card-image ">
                <figure class="image is-4by3 is-small">
                  <img src="${ img }" alt=""${ pname }"">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="textr">${ pname }</p>
                    <p class="subtitle is-6">Manufacture:</p>
                    <p class="subtitle is-6">${ manufacture }</p>
                    <p>Category: ${ category }</p>
                    <p class="price tag is-success is-medium is-right">Price: ${ price }₴</p>
                    <button class="button  is-success is-light btn_add_to_cart" data-id="${ idp }">Add to Cart</button>
                    <button class="button is-info is-light btn_details" data-id="${ idp }">About product</button>
                  </div>
                </div>
              </div>
        </div>
      </div>`;
    }

    addListeners(){
        [...document.querySelectorAll(this.btnsAddToCart)]
            .forEach(btn => btn.addEventListener('click', this.handleClickAddToCart));

        [...document.querySelectorAll(this.btnsDetails)]
            .forEach(btn => btn.addEventListener('click', this.handleClickDetails));
    }
}