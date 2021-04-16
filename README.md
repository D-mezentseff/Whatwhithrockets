# First meeting


```js
let x = 3;
```

## git operations :

- git add
- git commit
- git push


## Области видимости

- Глобальная
- Локальная (в текущей функции)
- Блочная ( в ```{блочная видимость}```  )
    - циклы
    - switch -$ case
    - if-else
    - try-catch


## FOR

```js
for(часть 1; часть2; часть 3)
```

- __часть 1__ - делается 1 раз до старта цикла (Инициализация ДО)
- __часть 2__ - делается каждый раз перед итерацией цикла (ожидает околологическое значение)
- __часть 3__ - действие после каждой итерации

## Условия


- Простые условия

```js

//variant 1
const num = 1
if(num>0){
    console.log("Its positive")
} else{
    console.log("Its negative")
}


//variant 2
const num = 1
let answer = "Is negative"

if(num>0){
   answer = "Is posible"
} 

console.log(answer)


//variant 3
const num = 1
let answer = num > 0 ? 'Is positive' : 'Is negative'
console.log(answer)


//variant 4 NOT SO GOOD
const num = 1
let answer = "Is negative"

if(num>0) 
answer = "Is posible"


console.log(answer)


//variant 5 GOOD
const num = 1
let answer = "Is negative"

if(num>0) answer = "Is posible"

console.log(answer)


//variant 6 MEGA
const num = 1
let answer = "Is negative"

if(num>0) {
answer = "Is posible"
}
console.log(answer)

```


### Тернарный оператор

условие ? действие ДА: действие НЕТ

```js


const num = 10
const isValid = num > 0 && num<100 && num % 1
let answer = isValid > 'Is positive' : 'Is negative'
console.log(answer)

```

### Множественный выбор
```js
const num = 1
    switch(num){
        case -1 : {
            console.log('Operation A')
        break
    }
     case 0 : {
            console.log('Operation B')
        break
    }
     case 1 : {
            console.log('Operation C')
        break
    }
    default : {
        console.log('Operation X')
    }
}



```


## Строки

Похожи на массивы, но не массивы

```js

const city = 'Dnipro'//литеральный
console.log(city[0])
city[1] = 'H' // Нелья менять литеры, не мутабельность
city.length = 123 // Нельзя менять длину строки, игнорирование действий человека
console.log(city.length)
```

### Методы строк


```js
str.charAt(2) === str[2]
const city = 'Dnipror'
console.log(city.slice(2,4)) //ip
console.log(city.slice(2)) // ipro
console.log(city.slice()) // Dnipro
console.log(city.slice(-2)) // ro
console.log(city.slice(-3, -1)) // pr
const el = [...city]
console.log(el)

console.log(city.includes('i'))
console.log(city.indexOf('i'))

console.log(city.replace(/r/g,'or'))// /r/ регулярка
city.trim()// чистит пробельные символы с начала и конца
```
#### антагонисты массивам
 - _str.split(delimeter)_  vs _arr.join(delimeter)_

#### похожие с массивами
 - _slice(start, end)_

 ```js
 const city = 'Dnipro'
console.log(city.slice(2,4)) //ip
console.log(city.slice(2)) // ipro
console.log(city.slice()) // Dnipro
console.log(city.slice(-2)) // ro
console.log(city.slice(-3, -1) // pr
```

## Arrays
TODO:
 - slice
 - splice
 - includes
 - fill
 - concat
 - flat
 - from
 - reverse
 - reduceRight
```js
const arr = [123, 'One', { name : 'Ivan'}, [1,2,3], true, undefined]
```

Простой способ обхода массива

```js
for(let el of arr){
    console.log(el)
}
```

  - push _return new Lenght of array_
  - pop _return given element_
  - unshift _return new Lenght of array_
  - shift _return given element_


### sort

```js
function sortLikeNums(a, b){
    return b - a
}

function sortLikeNums(a, b){
    if(a > b) return 1
}

```

### sort
Объединение массива в строку с разделением


### forEach
метод, который проходит по элементам массива и вызывает функцию обратного вызова, передавал ей элемент, инлекс элемента в массиве и ссылку на сам массив
```js
Arry.prototype.myForEach = function(func){
    for(let i = 0; i < this.lenght; i ++)
    {
        if(this[i] === undefined)
        continue
        funce(this[i], i, this)
        }
}

```

### map
_Метод, который проходит по элементам массива и вызывает функцию обратного вызова, передавал ей элемент, инлекс элемента в массиве и ссылку на сам массив и получает от этоё функции ответ, занося его в новый массив. Возвращает этот новый массив_

Получает новый массив, преобразованный. 
Оставляет дырки и прежнюю длину массива
```js

const tempsF = temperatures.map((el) => el * 1.8 +32)

```

### filter
_Метод, который проходит по элементам массива и вызывает функцию обратного вызова, передавал ей элемент, инлекс элемента в массиве и ссылку на сам массив и получает от этоё функции like  boolean ответ (true/ false) и в случае true - заносит элемент в новый массив, в случае false - не заносит. Возвращает этот новый массив_
Задачи:
Получает новый массив, отфильтрованный. 
Уберает дырки, изменяет длину массива.

```js
const tempsWarm = temperatures.filter(el => el>= 15)

```

### every vs somes
_Метод, который проходит по элементам массива и вызывает функцию обратного вызова, передавал ей элемент, инлекс элемента в массиве и ссылку на сам массив и получает от этоё функции like  boolean ответ (true/ false) и в случае_
    __true__ : 
    - every -> продолжает идти по массиву
    - some -> останавливается в прохождении массива и возвращает __true__ из метода
    
    __true__ : 
    - every -> останавливается в прохождении массива и возвращает __false__ из метода 
    - some -> продолжает идти по массиву

### find vs findIndex
_Метод, который проходит по элементам массива и вызывает функцию обратного вызова, передавал ей элемент, инлекс элемента в массиве и ссылку на сам массив и получает от этоё функции like  boolean ответ (true/ false) и в случае true - останавливает проход по массиву и возвращает элемент(или индекс элемента findIndex), на котором словил true._
Задачи: 
Найти элемент, подходящий под условия

```js
const coldTemp = temperatures.find(el => el< 0)
const coldTempId = temperatures.findIndex(el => el< 0)
```

### reduce 
_Метод, который проходит по элементам массива и вызывает функцию обратного вызова, передавая ей аккумулятор, инлекс элемента в массиве и ссылку на сам массив и получает от этоё функции некие данные, которые кидает в следующей итерации как аккумулятор_

Задачи: Найти некое аккумулирующее значение по массиву (среднюю температуру, самую высокую температуру, самую низкую температуру, среднюю температуру выше нуля, количество плюсовых дней, сумму, результирующий объект со статистикой по массиву)

```js

const tempHighest = temperatures.reduce((acc, el) => acc > el ? acc : el)

const tempStat = temperatures.reduce(
    (acc, el) => {
        el < 0 ? acc.negative++ : acc.positive++; 
        return acc
    }, { positive : 0, negative : 0}
)
```