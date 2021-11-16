// Para mais informações sobre a calculadora, acesse o documento README.md

// Declarando variavel 'sinal'
var sinal = prompt("Qual operação deseja realizar ?");

// Loop contra erros de digitação
while( sinal != '+' && sinal != '-' && sinal != '*' && sinal != '/'){
    alert("Você inseriu uma operação invalida!")
    sinal = prompt("Qual operação deseja realizar ?");
}

// Declarando variavel 'numeroInicial'
var numeroInicial = prompt("Inssira o primeiro número...");

// Declarando variavel 'numeroFinal'
var numeroFinal = prompt("insira o segundo número...");

// Declando variavel 'resultadoFinal'
var resultadoFinal = 0;

// Transformando para número as strings
numeroInicial = parseInt(numeroInicial);
numeroFinal = parseInt(numeroFinal);


// Esquema de calculo das operações
if(sinal == '+'){
    resultadoFinal = numeroInicial + numeroFinal;
}else if(sinal == '-'){
    resultadoFinal = numeroInicial - numeroFinal;
}else if(sinal == '*'){
    resultadoFinal = numeroInicial * numeroFinal;
}else if(sinal == '/'){
    resultadoFinal = numeroInicial / numeroFinal;
}