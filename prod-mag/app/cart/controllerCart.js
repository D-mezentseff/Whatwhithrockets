import ModelCart from "./modelCart.js";
import ViewCart from "./viewCart.js";
import Publisher from '../helpers/publisherSingletone.js';

export default class controllerCart{
    constructor(){
        this.model = new ModelCart();
        this.view = new ViewCart(this.handleRemoveFromCart, this.handleOpenCart, this.handleSubmitOrder);
        this.publisher = new Publisher();
        this.publisher.subscribe('ADD_TO_CART', this.handleAddToCart);
        this.publisher.subscribe('CLEAR_CART', this.handleClearCart);
        this.load();
    }

    load(){
        const cart = this.model.loadFromLS();
        this.view.count(cart.length);
        return cart
    }

    handleOpenCart = () => {
        let cart = this.load();
        if(cart.length > 0)
        this.view.render(cart, this.model.cartSum());
    }

    handleAddToCart = data => {
        const newCart = this.model.addCart(data);
        this.view.count(newCart.length);
    }

    handleRemoveFromCart = ev => {
        const id = ev.target.dataset.id;
            const newCart = this.model.removeById(id);
            newCart.length > 0 ? this.view.render(newCart, this.model.cartSum()) : this.view.closeModal();
            this.load();
    }

    handleSubmitOrder = ev => {
        const products = this.load();
        this.publisher.notify('MAKING_ORDER', products);
    }
    handleClearCart = () => {
        this.model.clearCart();
        this.view.closeModal();
    }
}