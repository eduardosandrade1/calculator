var inputElement = document.querySelector('.inputElement')
var n1 ='';
var operator = '';

function One(){
    inputElement.value += 1;
}
function two(){
    inputElement.value += 2;
}
function tree(){
    inputElement.value += 3;
}
function four(){
    inputElement.value += 4;
}
function five(){
    inputElement.value += 5;
}
function six(){
    inputElement.value += 6;
}
function seven(){
    inputElement.value += 7;
}
function eight(){
    inputElement.value += 8;
}
function none(){
    inputElement.value += 9;
}
function zero(){
    inputElement.value += 0;
}
function ponto(){
    inputElement.value += '.';
}
function vezes(){
    n1 = inputElement.value;
    inputElement.value += '*';
    operator = '*';
    inputElement.value = "";
    //console.log(n1)
}
function dividir(){
    n1 = inputElement.value;
    inputElement.value += '/';
    operator = '/';
    inputElement.value = "";
}
function soma(){
    n1 = parseFloat(inputElement.value);
    inputElement.value += '+';
    operator = '+';
    inputElement.value = "";
}
function subtration(){
    n1 = inputElement.value;
    inputElement.value += '-';
    operator = '-';
    inputElement.value = "";
}
function deleted(){
    var inputText = inputElement.value;
    inputElement.value = inputText.substring(0, inputText.length-1 )
}

function igual(){
    n2 = parseFloat(inputElement.value);
    inputElement.value = "";
    if (operator === '+'){
        console.log(n1+n2);
        inputElement.value = n1+n2;
    }
    else if (operator === '-'){
        console.log(n1-n2)
        inputElement.value = n1-n2;
    }
    else if(operator === '*'){
        console.log(n1*n2);
        inputElement.value = n1*n2;
    }
    else if(operator === '/'){
        inputElement.value = n1/n2;
        console.log(n1/n2);
    }
    console.log(n1, operator, n2)
}
function limpar(){
    inputElement.value = "";
    console.log(inputElement.value)
    operator = '';
}