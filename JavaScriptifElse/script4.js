let operacao;
let numero1, numero2;

operacao = prompt("Digite a Operação Desejada","+, -, *, /")
numero1 = prompt("Digite um nº")
numero2 = prompt("Digite outro nº")
switch(operacao){
    case("+"):document.write(parseInt(numero1)+parseInt(numero2));
    break;
    case("-"): document.write(parseInt(numero1)-parseInt(numero2));
    break;
    case("*"): document.write(parseInt(numero1)*parseInt(numero2));
    break;
    case("/"):
    if(numero2==0){
        document.write("Não Dividirás por zero")
    }else{
        document.write(parseFloat(numero1)/(numero2))
    };break;
    default: document.write("Escolha uma operação valida")
    }

