let boton= document.getElementById('sumar');
let respuestas= document.getElementById('respuesta');

boton.addEventListener('click', hacersuma);

function hacersuma(){
    let n1=parseFloat(document.getElementById('n1').value)
    let n2=parseFloat(document.getElementById('n2').value)
    let n3= n1+n2;
    respuestas.innerHTML=`El resultado de la suma es: ${n3}`;
}

let boton1= document.getElementById('restar');
boton1.addEventListener('click', hacerresta);
function hacerresta(){
    let n1=parseFloat(document.getElementById('n1').value)
    let n2=parseFloat(document.getElementById('n2').value)
    let n3= n1-n2;
    respuestas.innerHTML=`El resultado de la resta es: ${n3}`;
}

let boton2= document.getElementById('multiplicar');
boton2.addEventListener('click', hacermultiplicacion);
function hacermultiplicacion(){
    let n1=parseFloat(document.getElementById('n1').value)
    let n2=parseFloat(document.getElementById('n2').value)
    let n3= n1*n2;
    respuestas.innerHTML=`El resultado de la multiplicacion es: ${n3}`;
}

let boton3= document.getElementById('dividir');
boton3.addEventListener('click', hacerdivision);
function hacerdivision(){
    let n1=parseFloat(document.getElementById('n1').value)
    let n2=parseFloat(document.getElementById('n2').value)
    let n3= n1/n2;
    respuestas.innerHTML=`El resultado de la division es: ${n3}`;
}
