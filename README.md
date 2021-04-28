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


#### Массив - объект
```js
const arr = [1, 2]
// arr[100] = 34
arr[-33] = 'Alloha'
arr["Турция"] = 'Отпуск'
arr["55.3"] = "Test"
arr[arr] = "Array"

console.log(arr)
```


### reduceRight как обычный, только арабский
Идёт с _Lenght - 1_ индекса по _0_-ой


### reverse
разворачивает массив, мутирующий метод

```js 
const arr = [1, 2]
arr.a = 3
arr.b = 4
arr.reverse()

console.log(arr)
```
### fill 
Заполняет массив чем-то

```js
const arr = [1, 2]
arr.fill(777)
console.log(arr)

const arr2 = new Array(10)
arr2.fill()
console.log(arr2)
```
### includes 
```js
const arr = [1, 2]

console.log(arr.includes(2))
```

### flat

```js 
const arr = [1, 2, [3, 2, [3, 5]]]

console.log(arr.flat(Number.MAX_SAFE_INTEGER))
```
### slice, splice 

__splice:__
 - Обрезать
 - Вырезать
 - Заменять
 - Добавлять (в начало, конец, середину)
```js
const got = ['Dayneris', 'John Snow', 'Dragon 1', 
'Dead Dragon 2', 'Serceya Lanister']

//slice - не мутирует
console.log(got.slice(1, 3))
console.log(got.slice())
console.log(got.slice(-2))
console.log(got.slice(1, -2))

//splice - обрезать с 1 и до конца
const tempGot = got.splice(1)
console.log(got)
console.log(tempGot)

//splice - вырезка конкретного элемента из массива
const tempGot = got.splice(1, 1)
console.log(got)
console.log(tempGot)

//splice - вырезка конкретного элемента из массива
const tempGot = got.splice(1, 1, 'Иван Снег', 'John Doe')
console.log(got)
console.log(tempGot)
```

### concat
Добавляет в конец нового массива элементы принимая их как:
 - перечеь аргументов ```js const got2 = got.concat(1, 2, 3) ```
 - перечень массивов ```js const got2 = got.concat([1, 2], [3, 4]) ```
 
 ```js
const got2 = got.concat(1, 2, 3)
console.log(got2)
console.log(got)

const got2 = [].concat(1, 2, 3, got)
console.log(got2)
console.log(got)
 ```

 ### from
 Создаёт массив из чего-то похожего на массив из:
  - строк


  ```js
    const got2 = Array.from(got)
    got2.a = 34343
    console.log(got2)
    console.log(got)

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
  ```

  ### class

  литерально

  ```js
  const b = {
      w ; 3,
      h : 3,
      d : 2
  }
  ```


  с помощью классов 

  ```js
  class Box{
      constructor(w, h, d){
          this.w = w
          this.h = h
          this.d = d
      }
  }

  const b = new Box(3, 3, 2)
  ```

  через __this__ можно обращаться к свойствам и объектам класса из класса


__super__ в конструкторе ребёнка, должен быть вызван до того момента, как будет обращение к __this__




# AJAX
Assynchronius
JavaScript
And
XML (eXtend Markup Language)

JSON (JavaScript Object Notation)

XML Http Request - Запрос XML через HTTP


```js
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
```

# MVC
### Model View Cpntainer


## Model 
Логика, бизнес - логика, работа с БД, отправка запросов, получение ответов.

## View
Отображение. Рендер данных, перерендер, управление DOM элементами, работа с DOM Events Document Object Model

# Controller
Посредник между Model & View


### API: 
- _randomiser_
    - Угадай пол
- _cocktailes_
    - 