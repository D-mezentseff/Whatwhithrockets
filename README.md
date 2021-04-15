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