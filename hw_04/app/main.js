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

$('#resTask1').click( () =>  alert("Количество адрессов: " +iPDifference(iPv4a, iPv4b))) //Запуск с готовой строкой"


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
     alert("Декодированная морзянка: " +morseDecode(morse1, code))
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
