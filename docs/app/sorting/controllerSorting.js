import ViewSorting from './viewSorting.js';

export default class ControllerSorting{
    constructor(publisher){
        this.view = new ViewSorting(this.handleSortingPrices);
        this.publisher = publisher;
    }

    handleSortingPrices = el => {
        this.view.setActive(el.target.dataset.type, el.target.innerHTML);
         this.publisher.notify('SORTING_BY_PRICES', el.target.dataset.type);
    }
}