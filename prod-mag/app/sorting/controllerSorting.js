import ViewSorting from './viewSorting.js';
import Publisher from '../helpers/publisherSingletone.js';

export default class ControllerSorting{
    constructor(){
        this.view = new ViewSorting(this.handleSortingPrices);
        this.publisher = new Publisher();
    }

    handleSortingPrices = el => {
        this.view.setActive(el.target.dataset.type, el.target.innerHTML);
         this.publisher.notify('SORTING_BY_PRICES', el.target.dataset.type);
    }
}