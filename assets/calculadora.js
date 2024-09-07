function insertNumber(num) {
    var number = document.getElementById('resultado-contas').innerHTML;
    document.getElementById('resultado-contas').innerHTML = number + num;
}

function clean() {
    document.getElementById('resultado-contas').innerHTML = "";
}

function deleteNumber() {
    var resultado = document.getElementById('resultado-contas').innerHTML;
    document.getElementById('resultado-contas').innerHTML = resultado.substring(0, resultado.length - 1);
}

function resultadoCalculo() {
    var resultado = document.getElementById('resultado-contas').innerHTML;
        if (resultado) {
            document.getElementById('resultado-contas').innerHTML = eval(resultado);
        } else {
            document.getElementById('resultado-contas').innerHTML = "Sem cálculo";
        }
}