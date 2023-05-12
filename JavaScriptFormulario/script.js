function MostrarNome() {
    let Nome = document.getElementById('pNome').value;
    let Sobrenome = document.getElementById('pSobre').value;
    let NomeCompleto = Nome + ' ' + Sobrenome;
    alert(' Olá '+ NomeCompleto);
}

function MyCalc(){
    let Numero1 = document.getElementById('pnume1').value;
    let Numero2 = document.getElementById('pnume2').value;
   let NumeSoma = Numero1 +Numero2;
   alert(NumeSoma);
}