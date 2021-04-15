
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