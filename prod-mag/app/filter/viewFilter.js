export default class ViewFilter{
    dropdwCategoryFilter = document.querySelectorAll('.category');
    
    constructor(handleCategoryFilter){
        this.nodeToArray().map(el => el.addEventListener('click', handleCategoryFilter));
    }

    nodeToArray(){
        let array = [];
        for (let i = 0, len = this.dropdwCategoryFilter.length; i < len; i++) {
            array[i] = this.dropdwCategoryFilter[i];
        }
        return array;
    }

    setActive(type){
        this.dropdwCategoryFilter.forEach(el => {
            if(el.dataset.category == type) el.classList.contains("active") ? el.classList.remove("active") : el.classList.add("active")})
    }
}