// to view content inside whenever we click on the button

function displayNum(num){

       console.log(result);
   result.value+=num
}
function alclr(){
      result.value=''
}

function evalExp(){
   result.value= eval(result.value)
}

function del(){
result.value=result.value.slice(0,-1) //last digit

}

