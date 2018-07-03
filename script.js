//deposit money, withdraw money
//check that balance is not negative, if user want more money than he has tell it you broke.
//if booth sum of the account is enough for the withdraw let it be.else ignore it
let balanceOne = document.getElementById('balance');
let balanceT = document.getElementById('balanceTwo')

let checkInput = document.getElementById('checking')

let saveInput = document.getElementById('savings')


let saveDepo = document.getElementById('depositTwo')
let saveWith = document.getElementById('withdrawTwo')

let checkDepo = document.getElementById('depositOne')
let checkWith = document.getElementById('withdrawOne')

saveDepo.addEventListener('click', (event) => {
      balanceT.innerText = "$" + ( Number(balanceT.innerText.slice(1)) + Number(saveInput.value))
     
})

checkDepo.addEventListener('click',(event)=>{
      balanceOne.innerText = "$" +  (Number(balanceOne.innerText.slice(1)) + Number(checkInput.value))
      
})


checkWith.addEventListener('click', (event)=> {
    let result = Number(checkInput.value);
    let balanceO = Number(balanceOne.innerText.slice(1))
    
    if(result <= balanceO){
      balanceOne.innerText = '$' + (balanceO - result);
      return;
    } else{
         if( (Number(balanceOne.innerText.slice(1)) + Number(balanceT.innerText.slice(1)) < Number(checkInput.value)) ){
            document.getElementsByClassName('checking')[0].style.background = 'red ';
         }else{
           let rem = (checkInput.value - (Number(balanceOne.innerText.slice(1))))
            balanceT.innerText = '$' + (Number(balanceT.innerText.slice(1) - rem))
            balanceOne.innerText = '$' + 0
         }

    }


event.preventDefault()
  
})

saveWith.addEventListener('click', (event)=> {
    let total = Number(saveInput.value);
    let balanceTwo = Number(balanceT.innerText.slice(1))
    if(total <= balanceTwo){
      balanceT.innerText = '$' + (balanceTwo - total);
      return;
    } else {
      return 
    }
event.preventDefault()
  
})



// checkWith.addEventListener('click', (event)=> {





// })

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;

document.getElementById('datee').innerText = 'Date ' + today