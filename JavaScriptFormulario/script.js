function MostrarNome() {
    let Nome = document.getElementById('pNome').value;
    let Sobrenome = document.getElementById('pSobre').value;
    let NomeCompleto = Nome + ' ' + Sobrenome;
    alert(' Olá ' + NomeCompleto);
}

let valor1;
let valor2;
let resultado;
function Somar() {
    valor1 = document.getElementById('pValor1').value;
    valor2 = document.getElementById("pValor2").value;
    if (valor1 == "" || valor2 == "") {
        alert("Prencha todos os campos")
    } else {
        resultado = parseInt(valor1) + parseInt(valor2);
        alert(' Resultado é  ' + resultado);
    }

}
function Sub() {
    valor1 = document.getElementById('pValor1').value;
    valor2 = document.getElementById("pValor2").value;
    if (valor1 == "" || valor2 == "") {
        alert("Prencha todos os campos")
    } else {
        resultado = parseInt(valor1) - parseInt(valor2);
        alert(' Resultado é  ' + resultado);
    }

}

function Mult() {
    valor1 = document.getElementById('pValor1').value;
    valor2 = document.getElementById("pValor2").value;
    if (valor1 == "" || valor2 == "") {
        alert("Prencha todos os campos")
    } else {
        resultado = parseInt(valor1) * parseInt(valor2);
        alert(' Resultado é  ' + resultado);
    }

}
function Div() {
    valor1 = document.getElementById('pValor1').value;
    valor2 = document.getElementById("pValor2").value;
    if (valor1 == "" || valor2 == "") {
        alert("Prencha todos os campos")
    }else if (valor2==0)
    alert("Não podemos dividir por zero")
    }  {
        resultado = parseInt(valor1) / parseInt(valor2);
        alert(' Resultado é  ' + resultado);
    }






