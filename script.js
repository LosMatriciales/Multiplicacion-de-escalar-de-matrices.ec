// Reproducir el video en bucle
function reproducirVideoBucle(){
    const video = document.getElementById('multiplicacionVid');
    if (video) {
        video.play();
        video.addEventListener('ended', () => {
            setTimeout(() => {
                video.play();
            }, 2000); 
        });
    }
}
reproducirVideoBucle();

// Generar un número aleatorio entre min y max, incluyendo números negativos
function genRan(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar una matriz con valores aleatorios
function genMatriz(el, filas, columnas, elemTip = "h4"){
    let elemento = document.getElementById(el);
    elemento.innerHTML = '';
    const cont = document.createElement("div");
    cont.className = "grid-container";
    cont.style.display = "grid";
    cont.style.setProperty("--columns", columnas);
    let matriz = [];
    for (let i = 0; i < filas * columnas; i++){
        const item = document.createElement(elemTip);
        if (elemTip === "input"){
            item.type = "number";
            item.value = "0";
        }
        item.className = "grid-item";
        const numRan = genRan(-20, 20); // Incluyendo números negativos
        matriz.push(numRan);
        item.textContent = numRan;
        cont.appendChild(item);
    }
    
    elemento.appendChild(cont);
    return matriz;z
}

let mt1 = [];

function generarMatrices(){
    const filas = genRan(2, 4);
    const columnas = genRan(2, 4);
    mt1 = genMatriz("matriz1", filas, columnas);

    genMatriz("matriz3", filas, columnas, "input");
}

generarMatrices();

// Comprobar la multiplicación escalar de la matriz
function comprobar(){
    const k = parseInt(document.getElementById('escalar').value);
    const multiplicacion = mt1.map(num => num * k);
    console.log("Matriz: ", mt1);
    console.log("Escalar: ", k);
    console.log("Multiplicación: ", multiplicacion);
    const resp = document.getElementById("matriz3");
    let elemI = 0;
    for (const elem of resp.children[0].children){
        if (parseInt(elem.value) !== multiplicacion[elemI]){
            console.log(elem, " no es igual a: ", multiplicacion[elemI]);
            elem.style.backgroundColor = "lightcoral";
        } else {
            elem.style.backgroundColor = "lightgreen";
        }
        elemI++;
    }

    mostrarRespuestaCorrecta(multiplicacion, resp.children[0].style.getPropertyValue("--columns"));
}

function mostrarRespuestaCorrecta(multiplicacion, columnas) {
    const respuestaCorrecta = document.getElementById("respuestaCorrecta");
    respuestaCorrecta.innerHTML = '';
    const cont = document.createElement("div");
    cont.className = "grid-container";
    cont.style.display = "grid";
    cont.style.setProperty("--columns", columnas);
    multiplicacion.forEach(num => {
        const item = document.createElement("div");
        item.className = "grid-item";
        item.textContent = num;
        cont.appendChild(item);
    });
    respuestaCorrecta.appendChild(cont);
}

