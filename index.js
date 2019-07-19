function formCal(){
    var calendar=document.getElementById("dob").value;
    var day=new Date(calendar);
    dd=day.getDate();
    yyyy= day.getFullYear();
    mm=day.getMonth();
    mm=mm+1;
    // console.log(dd);
    // console.log(yyyy);
    // console.log(mm);
   

    var gender=document.getElementById("gender").value;
    console.log(gender);
   
    var c=(yyyy-1)/100 +1;
    var cc= parseFloat(c);
    var day=parseFloat( ( (cc/4) -2*cc-1) + ((5*yyyy/4) ) + ((26*(mm+1)/10)) + dd )%7;
    var day=(day.toFixed(0));
    // console.log(day);
    
    if(day==0 && gender=='female'){
        document.getElementById('sell').innerHTML='Akosua'  
    }else if(day==1 && gender=='female'){
         document.getElementById('sell').innerHTML='Adwoa'
    }else if(day==2 && gender=='female'){
        document.getElementById('sell').innerHTML='Abenaa'
   }else if(day==3 && gender=='female'){
    document.getElementById('sell').innerHTML='Akua'
}else if(day==4 && gender=='female'){
    document.getElementById('sell').innerHTML='Yaa'
}
else if(day==5 && gender=='female'){
    document.getElementById('sell').innerHTML='Afua'
}
else if(day==6 && gender=='female'){
    document.getElementById('sell').innerHTML='Akosua'
}
else if(day==0 && gender=='male'){
    document.getElementById('sell').innerHTML='AKwasi'
}else if(day==1 && gender=='male'){
    document.getElementById('sell').innerHTML='Kwadwo'
}else if(day==2 && gender=='male'){
    document.getElementById('sell').innerHTML='Kwabena'
}else if(day==3 && gender=='male'){
    document.getElementById('sell').innerHTML='Kwaku'
}else if(day==4 && gender=='male'){
    document.getElementById('sell').innerHTML='Yaw"'
}else if(day==5 && gender=='male'){
    document.getElementById('sell').innerHTML='kofi'
}else if(day==6 && gender=='male'){
    document.getElementById('sell').innerHTML='Kwame'
}   
}






























// // var dd=parseInt(prompt("please enter the day"));
// var mm=parseInt(prompt("please enter month"));
// var yyyy=parseInt(prompt("please enter the year"));
// var gender=prompt("please enter gender");
// var c=(yyyy-1)/100 +1;
// var cc= parseFloat(c);
// var day=parseFloat( ( (cc/4) -2*cc-1) + ((5*yyyy/4) ) + ((26*(mm+1)/10)) + dd )%7;
// var day=(day.toFixed(0));
// if(day==0 && gender=='male'){
// alert("Kwasi")
// }else if(day==1 && gender=='male'){
// alert("Kwadwo");
// }else if(day==2 && gender=='male'){
// alert("Kwabena");
// }else if(day==3 && gender=='male'){
// alert("Kwaku");
// }else if(day==4 && gender=='male'){
// alert("Yaw");
// }else if(day==5 && gender=='male'){
// alert("kofi");
// }else if(day ==6 && gender=='male'){
// alert("Kwame");
// }else if(day==0 && gender=='female'){
// alert("Akosua");
// }else if(day==1 && gender=='female'){
// alert("Adwoa");
// }else if(day==2 && gender=='female'){
// alert("Abenaa");
// }else if(day==3 && gender=='female'){
// alert(" Akua");
// }else if(day==4 && gender=='female'){
// alert("Yaa");
// }else if(day==5 && gender=='female'){
// alert("Afua");
// }else if(day==6 && gender=='female'){
// alert("Akosua");
// }
/*{ <p id="hello" > </p>

document.getElementById('submit')
document.querySelector('#submit')
document.getElementById('hello').textContent=('hello,word')
document.innerHtML='moringa';//innerhtml

var greeting='moringa again';
document.getElementById('hello').textContent=greeting;

//clickonbuttom 
function myapp(){
console.log('p');// for testing if the functio work
document.getElementById('submit').innerHtML="Moringa"
}
//save input in js
<input type="" id="fistname"></input>
var firstname, lastname;
//assign value
firstname.document.getElementById('firstname').value;
console.log(firstname);}*/
