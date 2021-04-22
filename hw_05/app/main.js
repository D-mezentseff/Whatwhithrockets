//Task 1 Калькулятор инков

const quipu = "@~~@+@~~@"

const calcQuipu = (quipu) => {
  let action = ''
  let quipuSpl = quipu.trim().split('')
  quipuSpl.includes("+") ? action = '+' : quipuSpl.includes("-") ? action = '-' : quipuSpl.includes("*") ? action = '*' : action = '/'
  let separator = quipuSpl.indexOf(action)
  let rightSide = quipuSpl.splice(separator+1)
  let leftSide = quipuSpl.splice(0,separator)

  const numer = (quipuArr) => {
  masQuipu = quipuArr.split('@').map(el => el == "" ? 1 : quipuArr.split('~').map(el => el == "" ? 0 : undefined).filter(el => el == 0)).flat(1)
  let num = ""
  let kol = 0
  masQuipu.map((el, i) => {
    el == 1 ? kol++ : '2' 
    el == 1 && i == masQuipu.length - 1 ? (num = num.concat(kol), kol = 0): 'e' 
    el == 0 && masQuipu[i-1] == 1 ?  (num = num.concat(kol), kol = 0) : 'err'
    el == 0 ? num = num.concat(0) : '0';})
    return num
  }
    
  rightRes = + numer(rightSide.join(''))
  leftRes = + numer(leftSide.join('')) 
  return action == "+" ? leftRes + rightRes : action == "-" ? leftRes - rightRes : action == "*" ? leftRes * rightRes : leftRes / rightRes
}
// 
$('#resTask1').click( () => alert("Результат расчёта " + quipu + " : " + calcQuipu(quipu))) //Запуск с готовым выражением

const tovar = 8
let maxA = []
function findMaxProd (num){
    maxA = [num,num]
    let arr = [num,0]
    let iter = num
    while (iter != 1) {
            arr.splice(1)
            arr[0]--
            iter = arr[0]
            arr[1] = num - arr[0];
            findMax(arr)
            if(arr[1] > 2){
            checkArr(arr,1)
            }else{
                if(arr[1] == 2){
                    arr.splice(1)
                    arr.push(1)
                    arr.push(1)
                }
            }
            findMax(arr)
    }
    return maxA.join(' ')
}

function checkArr(arr,i){
    let temp = arr[i]
    while (arr[i] !=1 ) {
            arr.splice(i+1)
            arr[i]--
            arr[i+1] = temp - arr[i]
             findMax(arr)
            if(arr[i+1] > 2){
            checkArr(arr,i+1)
            }else{
                if(arr[i+1] == 2){
                    arr.splice(i+1)
                    arr.push(1)
                    arr.push(1)
                }
            }
          findMax(arr)
    }
}

function findMax(arr){
    let m = 1
    arr.forEach(element => {
        m *= element        
    });
    if(m > maxA[0]){
        maxA[0] = m
        maxA.splice(1)
        maxA.push(arr.join(','))
    }
    if(m == maxA[0]){
        console.log(arr)
        maxA.push(arr.join(','))
    }
}
$('#resTask2').click( () => alert("Максимальный продукт: " +findMaxProd(tovar))) //Запуск с готовым выражением

// Task 3 Универсальная функция, для расчёта обслуженых Васей клиентов
const clients = [25, 50]
function clerk(arr){
    let result = true
    let twFi = 0
    let fifty = 0
    let hund = 0
        arr.map((el) =>  el == 25 ? twFi++ :
         el == 50 ? twFi >= 1 ? (fifty++, twFi--)  : result = false :
         el == 100 ? fifty >= 1 && twFi >=1 ? (hund++, fifty--, twFi--) : twFi >= 3 ? (hund++, twFi -= 3) : result = false : result = false )
    return result == true ? "Yes" : "No"
    }
    $('#resTask3').click( () => alert("Обслужены все клиенты? " +clerk(clients))) //Запуск с готовым массивом клиентов"







    