function verNombre() {
    let nombre = document.getElementById("nombre").innerHTML="Maidy";
}

function verNumeros() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const listaNumeros = document.getElementById("numeros");

    for (let i = 0; i < numeros.length; i++) {
        let elemento = document.createElement("li");
        elemento.innerHTML = numeros[i];
        listaNumeros.appendChild(elemento);
    }
}

function cambiarcolorfondo() {
    const colores = ["#dd9ac7ff", "#8a5bbeff", "#aa4e9bff", "#a5a576ff", "#709975ff", "#78ccccff"];
    const colorAleatorio = Math.floor(Math.random() * colores.length);
    const color = colores[colorAleatorio];
    document.body.style.background = color;
}