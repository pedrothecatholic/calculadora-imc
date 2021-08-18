const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")

function soma() {
    resultado.value = parseInt(numero1.value) + parseInt(numero2.value)
}