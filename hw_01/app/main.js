$(document).ready(function(){
    $('#res1').click(function(){
    let lenght= $('#lenght').val()
    let width= $('#width').val()
    let height= $('#height').val()
    if(lenght>1000||lenght<=0)
    {
        alert("Длинна > 1000 или <= 0 ")
    }
    else if(width>1000||width<=0)
    {
        alert("Ширина > 1000 или <= 0 ")
    }
    else if(height>1000||height<=0)
    {
        alert("Высота > 1000 или <= 0 ")
    }
    else{
    let kol=((2*height*lenght)+(2*height*width))/16
    if(kol<1)
    {
        alert("Красить уже ничего не надо, всё украли")
    }
    else
    {
    alert("Банок краски необходимо: "+Math.ceil(kol))
    $('#res1').append('<p>***</p>')
    }
    }
    });

    $('#res2').click(function(){
    let arr = new Array();
    let brr = new Array();
    let a1= $('#a1').val()
    let a2= $('#a2').val()
    let a3= $('#a3').val()
    let b1= $('#b1').val()
    let b2= $('#b2').val()
    let b3= $('#b3').val()
        if(a1>100||a1<=0)
        {
            alert("a1 > 100 или <= 0 ")
        }
        else if(a2>100||a2<=0)
        {
            alert("a2 > 100 или <= 0 ")
        }
        else if(a3>100||a3<=0)
        {
            alert("a3 > 100 или <= 0 ")
        }
        else if(b1>100||b1<=0)
        {
            alert("b1 > 100 или <= 0 ")
        }
        else if(b2>100||b2<=0)
        {
            alert("b2 > 100 или <= 0 ")
        }
        else if(b3>100||b3<=0)
        {
            alert("b3 > 100 или <= 0 ")
        }
        else{
            arr.push(a1,a2,a3)
            brr.push(b1,b2,b3)
           
            arr.sort(function(a,b){ 
                return a - b
              }) 
            brr.sort(function(a,b){ 
                return a - b
              })
        
        alert("Гроши получившие наши 'работнички': " + arr.reduce(function(res,a,i){return res+=a*brr[i]},0))
    }
    });
    $('#res3').click(function(){
        let ticket= $('#ticket').val()
        let num = ticket.toString().split('');
        let realTicket = num.map(Number)
        leng=realTicket.length
        if(leng>6 || leng<0 || leng<6)
        {
            alert("Не правильно введён билетик")
        }
        else{
            sum1=realTicket[0]+realTicket[1]+realTicket[2]
            sum2=realTicket[3]+realTicket[4]+realTicket[5]  
            if(sum1==sum2)alert("Да ты счастливчик xD")
            else alert("К сожалению твой билет несчастен (︶︹︺)")
        }
        });
      
});