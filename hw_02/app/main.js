//Task 1 Универсальная функция расчёта сумы минимумов матрицы
let i= [ [2,2,3,4,5],
         [1,2,3,4,5],
         [1,2,3,4,5] ]

        const minSum = i => {for(var j=0, sum=0; j<i.length; j++) sum += Math.min(...i[j]); return sum}
        $('#res').click(() =>  alert("Сумма минимумов матрицы: "+minSum(i)));   //Запуск с готовой матрицей
        




//Task 1 Функция ввода матрицы с клав.
    let arr = new Array()
    $('#inpTask1').click(function(){
        let rows = $('#mStr').val()
        if(rows<0 || rows>100 || rows==0) alert("Количество строк >100 или <=0 ")
        let columns = $('#mStb').val()
        if(columns<=0 || columns>100 || columns==0) alert("Количество столбцов >100 или <=0 ")
        for(var i=0; i<rows; i++){
            arr[i] = new Array()
            for(var j=0; j<columns; j++){
                arr[i][j] = parseInt(prompt("Введите число:", ""))
                while(arr[i][j] == 0 || isNaN(arr[i][j]) == true) 
                arr[i][j] = parseInt(prompt("Повторите ввод последнего числа:", ""))
            }
        }
        alert("Ваша матрица: "+arr)
        return arr
    });
    $('#res1').click(() =>  alert("Сумма минимумов матрицы: "+minSum(arr))); 
//Task 2 Универсальная функция вывода двух старших из массива
    let j= [1,3,10,3,5,22]

    const oldestAges = j => {j.sort((a, b) => {return a - b;}); return j.slice(j.length-2)}
    $('#resTask2').click(() =>  alert("Двое старших из массива: "+oldestAges(j)));  //Запуск с готовым массивом

//Task 2 Функция ввода массива с клав.
    let mas = new Array()
    $('#inpTask2').click(function(){
        let kol = $('#masKol').val()
        if(kol<=0 || kol>100 || kol==0)  alert("Количество элементов >100 или <=0 ")
        for(var i=0; i<kol; i++){
            mas[i] = parseInt(prompt("Введите число:", ""))
            while(mas[i] == 0 || isNaN(mas[i]) == true || mas[i] >123) mas[i] = parseInt(prompt("Вы точно человек?), повторите ввод:", ""))
        }
        alert("Ваш массив: "+mas)
    return mas
    });
    $('#res2Task2').click(() =>  {alert("Двое старших из массива: "+oldestAges(mas))});  //Запуск с введённым массивом


//Task 3 Универсальная функция расчёта количества букв меньшего слова
string = 'Get out of my room!!!'
const shortestWord = str => {return str.toString() ? str.split(' ').reduce((shortw, longw) => longw.length < shortw.length ? longw :shortw).length: '';}
  
  $('#resTask3').click(() =>  {alert("Количество символов самого короткого слова: "+shortestWord(string))});  //Запуск с готовой строкой"

//Task 3 Функция ввода строки с клав..
  $('#inpTask3').click(function(){
      let strKey
      strKey = $('#stringKey').val().trim()
      if(strKey==0)  alert("Строка пустая!")
      alert("Количество символов самого короткого слова: "+shortestWord(strKey))
  });
