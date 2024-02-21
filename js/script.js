 // Aquí tu código
const btn = document.getElementById("agregar")
let element = ""
const lista = document.getElementById("lista")

//Método 1
btn.addEventListener("click", function(){
    element= prompt("Escribe qué elemento quieres agregar")
    lista.insertAdjacentHTML("beforeend", "<li>"+element+"</li><hr>")
    console.log(element)
})

//Método 2
/*
btn.addEventListener("click", function(){
    element= document.createTextNode(prompt("Escribe qué quieres agregar"))
    let nuevoElemento = document.createElement("li")
    nuevoElemento.appendChild(element)
    lista.appendChild(nuevoElemento)
})
*/
