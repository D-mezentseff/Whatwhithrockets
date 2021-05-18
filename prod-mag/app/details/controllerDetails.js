import viewDetails from "./viewDetails.js";
import Publisher from '../helpers/publisherSingletone.js';

export default class controllerDetails{
    constructor(){
        this.publisher = new Publisher();
        this.publisher.subscribe('DETAILS_INFO', this.handleOpenDetails);
    }

    load(){
        const details = this.model.loadFromLS();
        return details
    }

    handleOpenDetails = data => {
        this.view = new viewDetails(data.handle);
        this.view.render(data.prod);
    }

    getProductsByEvent(ev){
        const id = ev.target.dataset.id;
        return this.model.getProductsById(id);
    }
}