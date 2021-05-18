import ViewFilter from './viewFilter.js';
import Publisher from '../helpers/publisherSingletone.js';

export default class ControllerFilter{
    constructor(){
        this.view = new ViewFilter(this.handleCategoryFilter);
        this.publisher = new Publisher();
    }

    handleCategoryFilter = el => {
        this.view.setActive(el.target.dataset.category);
        this.publisher.notify('FILTERING_BY_CATEGORIES', el.target.dataset.category);
    }
}