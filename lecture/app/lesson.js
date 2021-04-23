// const arr = [11, 72, 3, 9, 0]

// arr[33] = {}
// arr.length = 123
// console.log(arr.map(el => el))
// console.log(arr.filter(el => true))
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for(let el of arr){
//     console.log(el)
// }

// arr.forEach((el, i ,link2Arr) =>{
//     console.log(el)
// })

// forEach((el, i ,link2Arr) =>{
//     console.log(el)
// })

// function forEach(arr, func){
//     for(let i =0; i < arr.lenght; i++){
//         if(arr[i] === undefined)
//         continue
//         func(this[i], i, this)
//     }
// }
// arr[33] = {}

// console.log(arr)
// function sortLikeNums(a, b){
//     return b - a
// }


// arr.sort(sortLikeNums)
// console.log(arr)

// const temperatures = [13, 6, 7, 11, 2, 0, 15, -3, 17]

// const tempsF = temperatures.map((el) => el * 1.8 +32)

// const tempsWarm = temperatures.filter(el => el>= 15)

// const coldTemp = temperatures.find(el => el< 0)

// const coldTempId = temperatures.findIndex(el => el< 0)


// // console.log(temperatures)
// // console.log(coldTemp)
// // console.log(coldTempId)

// const cities = ['London', 'Tokyo', 'Paris', 'New York', 'Pavlograd']

// cities.reduce((acc, el, i, arr) => {
//     // console.log(acc, el, i)
//     return el
// })

// const tempHighest = temperatures.reduce((acc, el) => acc > el ? acc : el)

// // console.log(tempHighest)

// const tempStat = temperatures.reduce(
//     (acc, el) => {
//         el < 0 ? acc.negative++ : acc.positive++; 
//         // console.log(acc, el)
//         return acc
//     }, { positive : 0, negative : 0}
// )
// console.log(tempStat)



const got = ['Dayneris', 'John Snow', 'Dragon 1', 
'Dead Dragon 2', 'Serceya Lanister']

//splice - вырезка конкретного элемента из массива
// const tempGot = got.splice(1, 1, 'Иван Снег', 'John Doe')
// console.log(got)
// console.log(tempGot)

// const got2 = [].concat(1, 2, 3, got)
// console.log(got2)
// console.log(got)
// console.log(Array.from('Hello'))

// // const got2 = Array.from(got)
// // got2.a = 34343
// // console.log(got2)
// // console.log(got)

// const dragon = {
//     weight : 2000,
//     wings : 2,
//     isFire : true,
//     wingsWidth : 30,
//     name : 'Drakon',
//     owner : "Dayaneris"  
      
// }
// const got2 = Array.from(dragon)
// // console.log(got2)
// function shownGot(el) {
//     console.log(...arguments)
//     el.forEach(element => console.log(element))
// }
// shownGot(got)


// console.log(Array.from([1, 2, 3], x => x + x));
// // expected output: Array [2, 4, 6]





const p = {
    w : 3,
    h : 3,
    d : 2
}
console.log(p)
class Box{
    #w
    #h
    #d
    
    static count = 0

    static getCount(){
        return `Count of object class Box = ${Box.count}`
    }
    constructor(w, h, d){
        this.setSizes(w, h, d)
        Box.count++
    }

    setSizes(w,h,d){
        this.#w = w
        this.#h = h
        this.#d = d
    }
    getVolume(){
        const v = this.#w * this.#h * this.#d
        return v
    }
    #invalidWHD(len){
        return len < 0 || len > 100000 || isNaN(+len)
    }
    set w(width){
        if(this.#invalidWHD(width)){
            return false
        }
        this.#w = width
    }
    get w(){  // getter, no arguments
        return this.#w
    }
}
class Box2{
    setSizes(w,h,d){
        this.w = w
        this.h = h
        this.d = d
    }
}

const b = new Box(3, 3, 2)
const b2 = new Box2()
b2.setSizes(3, 3, 2)
b.setW = "тысяча"
b.w = 1000
console.log(b)
console.log(b2)
console.log(b.w)
// b.#invalidWHD() // private

console.log(Box.getCount())


class BoxMagic extends Box{
    #material
    #weight
    #thickness
    constructor(w, h, d, material, weight, thickness){
        super(w, h, d)
        this.#material = material
        this.#weight = weight
        this.#thickness = thickness
    }

    getVolume(){
        const thickness2 = this.#thickness * 2
        const v = (thickness2 + super.w) * (thickness2 + super.h)
        * (thickness2 + super.d)
        return v // Вызов getVolume родителя
    }
}

const bm = new BoxMagic(3, 2, 1, 'plastic', 0.3, 0.005)

console.log(bm)
console.log(bm.getVolume())