// //Task 1 Универсальная функция сортировки строки по цифре в слове
// const string = 'is2 Thi1s T4est 3a'
// const numReg = /\d+/g;
// const sortStrByNum = str =>  str.split(' ').sort((a, b) => parseInt(String(a).match(numReg)) - parseInt(String(b).match(numReg)))
// $('#resTask1').click( () =>  alert("Количество символов самого короткого слова: "+sortStrByNum(string)));  //Запуск с готовой строкой"


// //Task 1 Функция ввода строки с клав..
//   $('#inpTask1').click(() => {
//       let strKey = prompt("Введите строку:", "").replace(/\s+/g,' ').trim()
//       if(strKey == 0)  strKey = prompt("Строка пустая, ведите строку заново:", "").replace(/\s+/g,' ').trim()
//       if(strKey.split(' ').findIndex((str) => String(str).match(/[0-9]/)) == -1) strKey = prompt("В одном из слов нет числа, ведите строку заново:", "").replace(/\s+/g,' ').trim()
//       alert("Количество символов самого короткого слова: " + sortStrByNum(strKey))
//   });


// // //Task 2 Универсальная функция расчёта сумы минимумов матрицы 
// const arr= [ [1, 1, 2],
//              [1, 2, 1],
//              [1, 1, 2] ]

// const xoGame = arr => {
//       const strPass = arr => arr.map(arrEl => arrEl.every(
//         el => el == 1) == true ?  1 : arrEl.every(
//           el => el == 2) == true  ? 2 : arrEl.find(
//             el => el == 0) == 0 ? -1 : 0)
//       const diagPass = arr => arr.map((arrEl, i) => arrEl[i]).every(
//         el => el == 1) == true ?  1 : arr.map((arrEl, i) => arrEl[i]).every(
//           el => el == 2) == true  ? 2 : arr.map((arrEl, i) => arrEl[i]).find(
//             el => el == 0) == 0 ? -1 : 0
//       const diagRevPass = arr => arr.map((arrEl, i) => arrEl.reverse()[i]).every(
//         el => el == 1) == true ?  1 : arr.map((arrEl, i) => arrEl[i]).every(
//           el => el == 2) == true  ? 2 : arr.map((arrEl, i) => arrEl[i]).find(
//             el => el == 0) == 0 ? -1 : 0
//       const stbPass = arr => { 
//         let arrN = []
//         arrN.push(arr.map((arrEl) =>  arrEl.map(el => el)[0]))
//         arrN.push(arr.map((arrEl) =>  arrEl.map(el => el)[1]))
//         arrN.push(arr.map((arrEl) =>  arrEl.map(el => el)[2]))
//         return arrN.map(arrl => arrl.every(
//           el => el == 1) == true ?  1 : arrl.every(
//             el => el == 2) == true  ? 2 : arrl.find(
//               el => el == 0) == 0 ? -1 : 0)
//       }

//       let arrRes = []
//       arrRes.push(strPass(arr).find(res => res == 2) == 2 ? 2 : strPass(arr).find(res => res == 1) == 1 ? 1 : strPass(arr).find(res => res == -1) == -1 ? -1 : 0)
//       arrRes.push(stbPass(arr).find(res => res == 2) == 2 ? 2 : stbPass(arr).find(res => res == 1) == 1 ? 1 : stbPass(arr).find(res => res == -1) == -1 ? -1 : 0)
//       arrRes.push(diagPass(arr))
//       arrRes.push(diagRevPass(arr))
//       let res = arrRes.find(res => res == 2) == 2 ? 2 : arrRes.find(res => res == 1) == 1 ? 1 : arrRes.find(res => res == -1) == -1 ? -1 : 0
//       return res
//            }

// $('#resTask2').click(() => xoGame(arr) == 1 ? alert("Итог игры: Х выиграл - молодец :)") :
//           xoGame(arr) == 2 ? alert("Итог игры: O выиграл - заслужил бублик :)") : 
//           xoGame(arr) == -1 ? alert("Итог игры: А игра то не кончилась о_О") : alert("Итог игры: Рыба карась"))//Запуск с готовой матрицей


// // //Task 3 Универсальная функция расчёта сумы минимумов матрицы

// const rooms = [['XXX', 3],
//               ['XXXXX',5],
//               ['XXXXXX', 9]]
// const chairNeed = 4

// const flamingChair = (rooms, chairs) => {
//   if(chairs == 0)  return "Game On" 
//   else{
//   let busy = rooms.map( el => el[1])
//   let freeChair = rooms.map( el => el[0]).map((str, i) => busy[i] - str.length < 0 ? 0 : busy[i] - str.length)
//      let sum = freeChair.reduce((el, nel) => el + nel)
//     let iR = 0
//      const sumEl = freeChair.reduce((el, nel, i) => {
//       sumE = el + nel
//       sumE >= chairs ? iR = i + 1 : sumE
//       })
//     let result = sum == chairs ? freeChair : sum < chairs ? "Not enough!" : freeChair.slice(0,iR)  
//    return result
// }}

// $('#resTask3').click(() =>  alert("Нужные стулья: " +flamingChair(rooms, chairNeed)))

// Task 1 Универсальная функция, для расчёта количества адрессов, между двумя IP
const iPv4a = "20.0.0.10"
const iPv4b = "20.0.1.0"

const iPDifference = (iP1, iP2) => {
  let i = 0
  nP1 = iP1.split('.').reduceRight((eli, neli) => {
    i *= 256
    i++
    return parseInt(eli) + parseInt(neli)*i}, 0)
    i = 0
    nP2 = iP2.split('.').reduceRight((el, nel) => {
      i *= 256
      i++
     return parseInt(el) + parseInt(nel)*i}, 0)
     console.log(nP1, nP2)
  return nP2 - nP1 - 1
}

$('#resTask1').click( () =>  alert("Количество символов самого короткого слова: " +iPDifference(iPv4a, iPv4b))) //Запуск с готовой строкой"


//Task 2 Декодер морзянки

const morse = ".... . -.--   .--- ..- -.. ."
const morse1 = "..   .- --   .-. --- -... --- -"
const morse2 = "... --- ..."
const morseCode = () => {
    let requestURL = 'app/json/morse.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = () => {
    let code = request.response
     alert("Количество символов самого короткого слова: " +morseDecode(morse1, code))
    }
    } 


const morseDecode = (morse, code) => {

  const elem = Object.values(code)
  const keys = Object.keys(code)
  let morseSplit = morse.split('   ').flatMap(el => el.split(' '))
  let spaces = morse.split('   ').map(el => el.split(' ').length)
  spaces.pop()
  let chars = morseSplit.map(el => keys.filter((eli,i) => i == elem.indexOf(el) ? eli : undefined)).flat(1)  
  spaces.length == 1 ? chars.splice(spaces, 0, ' ') :
  spaces.reduce((el, nel) => {
      el++ 
      console.log(el)
      chars.splice(el, 0, ' ') 
      nel ++
  return el + nel},0)
  console.log(spaces)
    
  return chars.join('')
}
// 
$('#resTask2').click( () => morseCode()) //Запуск с готовой морзой"


//Task 3 Chronos
const chronos = (year, month, day) => {
  let years = []
  years[year] = year
  years.fill(year, 0, year)
  let sum = 0
  yer = years.map((el,i) => el=i ).map(el => el == 0 ? sum += 360 : el % 100 && el % 500 ?  el % 5 ? sum += 360 : sum += 361 : sum += 361)
  
   console.log(yer)
  // year % 5 ? mon = 361
  // console.log(years)
  
  }
 

  $('#resTask3').click( () =>  chronos(100, 1, 1)) //Запуск с готовой морзой"