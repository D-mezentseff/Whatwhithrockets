//Task 1 Веб странички
class PaginationHelper {

    #items = [];
    #pageMax = 0;
constructor(items, pageMax){
   Array.isArray(items) ? this.#items = items : false;
   typeof pageMax != "number" ? false : this.#pageMax = pageMax;
}
#splitPages(){
    let splitArr = Array(this.pageCount()).fill(0);   
    return splitArr.map((el, i) => el = i == 0 ? this.#items.slice(0, this.#pageMax) : 
    this.#items.slice(this.#pageMax * i, ++i * this.#pageMax));
}
pageCount(){
    return Math.ceil(this.#items.length/this.#pageMax);
}
itemCount(){
    return this.#items.length;
}
pageItemCount(page){
    let pageArr = this.#splitPages()
    return page > this.pageCount() || page < 0 ? -1 :
    pageArr[page].length
}
pageIndex(index){
    return index > this.itemCount() || index < 0 ? -1 :
    Math.ceil(index/this.#pageMax)
}
}
let helper = new PaginationHelper(['a', 'b', '2', 3, 5, 6, 6, 8, 9, 0], 4);
console.log("['a', 'b', '2', 3, 5, 6, 6, 8, 9, 0], 4")
 console.log("Количество страниц", helper.pageCount());
 console.log("Количество элементов на странице",helper.itemCount());
 console.log("Количество количество элементов на первой странице",helper.pageItemCount(1))
 console.log("Элемент 6, находится на: ",helper.pageIndex(6))
//Task 2 Ринг
function Fighter(name, health, damagePA){
    this.name = name;
    this.health = health;
    this.damagePA = damagePA;
    this.toString = () => this.name; 
}
function declareWinner(fighter1, fighter2, firstAttacker){
    secondAttacker = {}
    let iter = 0, jter = 0
    firstAttacker == fighter1.name ? (firstAttacker = fighter1, secondAttacker = fighter2)
     : (firstAttacker = fighter2, secondAttacker = fighter1)
     for(let i = secondAttacker.health; i >= -1; i = i - firstAttacker.damagePA){
        if(i <= 0) break;  
        iter++
     }
     for(let j = firstAttacker.health; j >= -1; j = j - secondAttacker.damagePA){
     if(j <= 0)  break; 
     jter++
     }
    return iter == jter ? firstAttacker.name : iter > jter ? secondAttacker.name : firstAttacker.name
}
console.log("(Lew, 20, 5), (Harry, 5, 4), Harry первый")
 console.log("Выиграл: ", declareWinner(new Fighter("Lew", 20, 5), new Fighter("Harry", 5, 4), "Harry"))
