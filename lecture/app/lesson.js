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
console.log(Array.from('Hello'))

// const got2 = Array.from(got)
// got2.a = 34343
// console.log(got2)
// console.log(got)

const dragon = {
    weight : 2000,
    wings : 2,
    isFire : true,
    wingsWidth : 30,
    name : 'Drakon',
    owner : "Dayaneris"  
      
}
const got2 = Array.from(dragon)
// console.log(got2)
function shownGot(el) {
    console.log(...arguments)
    el.forEach(element => console.log(element))
}
shownGot(got)


console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

