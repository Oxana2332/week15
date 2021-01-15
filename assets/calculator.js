function plusFunction() 
{
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;
        document.getElementById('out').innerHTML=plusFunctionplus(num1, num2);}

function plusFunctionplus(num1, num2) 
{
    return (+num1 + +num2);
}


function minusFunction() 
{
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;
    document.getElementById('out').innerHTML=minusFunctionminus(num1, num2);
}

function minusFunctionminus(num1, num2)
{
    return (num1 - num2);
}

function multiplyFunction() 
{
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;
    document.getElementById('out').innerHTML=multiplyFunctionmultiply(num1, num2);
}

function multiplyFunctionmultiply(num1, num2)
{
    return (num1 * num2);
}

function divideFunction() 
{
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;
    document.getElementById('out').innerHTML=divideFunctiondivide(num1, num2);
}

function divideFunctiondivide(num1, num2)
{
    if (num2!=0) {
    return (num1 / num2);
}
    else {
        alert ('На ноль делить нельзя!');
    }
}