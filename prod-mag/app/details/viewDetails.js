export default class viewCart{
    modalClassToggle = 'is-active';
    modalFreezeBack = 'is-clipped';
    constructor(handleAddToCart){
        this.dom = document.querySelector('.details');
        this.DOMModal = document.querySelector('.modal-details');
        this.DOMFormWrapper = document.querySelector('.details');
        this.handleAddToCart = handleAddToCart;
    }
    
    render(data){
      this.dom.innerHTML = this.renderDetails(data);
      this.addListeners();
      this.DOMModal.classList.add(this.modalClassToggle);
      document.documentElement.classList.add(this.modalFreezeBack);
  }

    addListeners(){
      document.querySelector('.btn_add_to_cart_details').addEventListener('click', this.handleAddToCart);
      [...document.querySelectorAll('.btn_close_modal_form')].forEach(el => el.addEventListener('click', this.closeModal));
  }
    renderDetails({ img, manufacture, pname, price, ingridients, category, idp, amount, units }){
        return `   
        <div class="col">
        <div class="card" >
        <div class="card-image ">
          <figure class="image is-4by3 is-small">
            <img src="${ img }" alt=""${ pname }"">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${ pname } </p>
              <p>Manufacture: ${ manufacture } </p>
              <p class="subtitle is-6">Category: ${ category }</p>
              <p class="subtitle is-6">Ingridients: ${ ingridients }</p>
              <p>Amount: ${ amount }</p>
              <p class="subtitle is-6">Unit: ${ units }</p>
              <p class="price tag is-success is-medium is-right">Price: ${ price }₴</p>
              <button class="button  is-success is-light btn_add_to_cart_details"
                    data-id="${ idp }">Add to Cart</button>
            </div>
          </div>       
        </div>
      </div>
      </div>
  `;
    }
    closeModal = () => {
      this.DOMModal.classList.remove(this.modalClassToggle);
      document.documentElement.classList.remove(this.modalFreezeBack);
  }

}