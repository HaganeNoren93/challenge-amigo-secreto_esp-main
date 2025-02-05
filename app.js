// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crea el array
let amigos = [];


function agregarAmigo() {
    //Captura el valor del campo de entrada
    let amigo = document.getElementById('amigo').value.trim();
    console.log(amigos);
    if (amigo === '') {
        //Si el campo de entrada está vacío, mostrar un alert con un mensaje de error
        alert('Por favor, inserte un nombre.');
    } else {
        //Si el valor es válido, añadirlo al array que almacena los nombres de los amigos
        amigos.push(amigo);
        //Limpia el campo de entrada
        document.querySelector('#amigo').value = '';
        //Llama la función actualizarListaAmigos para actualizarla en el DOM
        actualizarListaAmigos();        
        
    }
    
}

function actualizarListaAmigos() {
    //Obtiene el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    //Limpia la lista
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        //crea un nuevo elemento
        const elementoLi = document.createElement('li');
        //Asigna el nombre del amigo al texto de la etiqueta <li>
        elementoLi.textContent = amigos[i];
        //Agrega el contenido de la etiqueta <li> a la lista
        lista.appendChild(elementoLi);
    }
    
}

function sortearAmigo() {
    
    if (amigos.length > 0) {
        //Selecciona un amigo al azar
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        //Agrega/Define el amigo sorteado a una nueva variable
        const amigoSorteado = amigos[indiceAleatorio];
        //obtiene el elemento de la etiqueta resultado
        const resultado = document.getElementById('resultado');
        //muestra concatenado el amigo secreto sorteado        
        resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
        
        //limpia la lista de amigos para que no se muestre al tiempo que el amigo sorteado
        amigos = [];
        //limpia lista en el DOM
        actualizarListaAmigos();

    } else {
        //Si el usuario no ha introducido los nombres de amigos, le muestra un alert de error
        alert("No hay amigos para sortear. Añade algunos nombres primero.");
    }
}


