const btnAgregar = document.getElementById("btnAgregar");
const btnSumatoria = document.getElementById("btnSumatoria");


let suma = 0;

function agregar() {
  const inputValue = document.getElementById("inputNumero").value;

  const listaUl = document.getElementById("lista");
  const elementoLista = document.createElement("li");
  elementoLista.innerText = "El numero es: " + inputValue;
  listaUl.appendChild(elementoLista);

  suma += Number(inputValue);
}
console.log("Prueba")
function sumatoria() {
  const titulo = document.getElementById("titulo");
  const resultado = document.createElement("span");

  resultado.innerText = suma;

  if (suma < 50) {
    resultado.style.color = "green";
  } else {
    resultado.style.color = "red";
  }

  titulo.innerHTML = "La sumatoria es: ";
  titulo.appendChild(resultado);
}

function reiniciar(event) {
  if (event.key === "Escape") {
    location.reload(); // Recarga la página para reiniciar
  }
}

btnAgregar.addEventListener("click", agregar);
btnSumatoria.addEventListener("click", sumatoria);

// Escuchar el evento 'keydown' en el documento para detectar la tecla Escape
document.addEventListener("keydown", reiniciar);
