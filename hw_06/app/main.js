//Task 1 Калькулятор инков

class Hex{
    #value
    constructor(value){
        if(typeof value != "number"){
            return false
        }
        this.#value = value
    }
    toString(){
        return `0x${this.#value.toString(16)}`
    }
    toJSON(){
        return `0x${this.#value.toString(16)}`
    }
    valueOf(){
        return this.#value
    }
    plus(secondValue){
        return `0x${(this.#value + secondValue).toString(16)}`
    }
    minus(secondValue){
        return `0x${(this.#value - secondValue).toString(16)}`
    }
    parse(str){
       return parseInt(str, 16)
    }
}
let h = new Hex(255);
console.log(h.toString())
console.log(h.valueOf() + 1)
var a = new Hex(10);
var b = new Hex(5);
console.log(a.plus(b))
console.log(a.minus(b))
console.log(h.parse("0xFF"))
$('#resTask1').click( () => alert("Результат расчёта " )) //Запуск с готовым выражением

class Dictionary{
    #word
    #entrie
    dictionary = new Object()
    newEntry(word, entrie){
        if(typeof word != "string" && typeof entrie != "string"){
            return false
        }
        else{
        this.#word = word
        this.#entrie = entrie
        this.dictionary[this.#word] = this.#entrie
        }
    }
    // createMas(){
        
    // }
    look(ask){
        if(this.dictionary[ask] != undefined){
        return this.dictionary[ask]
        }
        return `Can't find entry for: ${ask}`
    }
}
let d = new Dictionary();


d.newEntry("Apple", "A fruit that grows on trees");
d.newEntry("Banana", "A fruit that grows on palms");

console.log(d.look("Apple"))
console.log(d.look("Pineapple"))

$('#resTask2').click( () => alert(d.look("Apple"))) //Запуск с готовым выражением

// Task 3 Универсальная функция, для расчёта обслуженых Васей клиентов





    