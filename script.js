//Funzione per creare la griglia 

function creoGriglia(valore) {
    const celle = document.querySelector(".container");
    celle.innerHTML = "";



    for (let i = 1; i <= valore; i++) {
        const cella = document.createElement("div");
        cella.classList.add("cella");
        cella.innerHTML = `${i}`
        celle.append(cella)
        // console.log(celle.textContent);
    }

    return celle
}


//Evento click del bottone play e condizionale in base alla difficoltà 

const bottone = document.querySelector("button")

bottone.addEventListener('click', function () {
    const lista = document.querySelector("select").value;
    console.log(lista)

    lista_numeri_selezioanti = [];
    if (lista === "easy") {
        creoGriglia(100)
        const listaNumeriRandom = generateCellsNumbers(100)
        handleClick(listaNumeriRandom)

    } else if (lista === "medium") {
        creoGriglia(81)
        const listaNumeriRandom = generateCellsNumbers(81)
        handleClick(listaNumeriRandom)

    } else if (lista === "hard") {
        creoGriglia(49)
        const listaNumeriRandom = generateCellsNumbers(49)
        handleClick(listaNumeriRandom)
    }
});


//Funzione genera numero random

/**
 * 
 * @param {number} min Minimun number to generate
 * @param {number} max Max number
 * @returns {number}
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Generare 16 numeri casuali unici ordinati

function generateCellsNumbers(num) {
    const randomNumbers = [];
    while (randomNumbers.length != 16) {
        const randomNumber = getRandomInteger(1, num)

        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber)
        }
    }
    return randomNumbers.sort((a, b) => a - b);
}


let numeriCasuali;   //<---- variabile globale

//Funzione ciclo ogni cella per mettere evento click ad ognuna di essa

function handleClick(dato) {
    
    numeriCasuali = dato
    console.log({ numeriCasuali });
    const cells = document.querySelectorAll(".cella")
    
    for (let i = 0; i < cells.length; i++) {
        const cellElemnt = cells[i];    
        cellElemnt.addEventListener('click', clickcell);  
    }
}

// Funzione condizionale aggiungo o rimuovo la classe azzurra o red delle celle

let lista_numeri_selezioanti = [];   //<---- variabile globale

function clickcell() {
    const cells = document.querySelectorAll(".cella")
    lista_numeri_selezioanti.push(this.innerHTML);
    
    if (!numeriCasuali.includes(Number(this.innerHTML))) {
        this.classList.add("azzurro")
        
    } else {
        this.classList.add("red")
        alert("HAI PERSO")
        const cells = document.querySelectorAll(".cella")
        this.removeEventListener('click', clickcell)
        endGame()
        mostroBombe()
          setTimeout(function(){
              window.location.reload()
          },4000)
    } 

    // se lunghezza lista_numeri_selezioanti ==  cells.length - numeriCasuali.length

    if (lista_numeri_selezioanti.length == cells.length - numeriCasuali.length) {
        alert(`HAI VINTO hai clickato correttamente ${lista_numeri_selezioanti.length} celle`)
    } 
}

//Rimuovo a tutte le caselle evento click ciclando e prendendo ogni casella tramite indice

function endGame(){
    const cells = document.querySelectorAll(".cella");
    for (let i = 0; i < cells.length; i++) {
        const cellElemnt = cells[i];
        cellElemnt.removeEventListener('click', clickcell);
    }
}

//Se l'utente perde mostro le posizioni di tutte le bombe
function mostroBombe(){
    const cells = document.querySelectorAll(".cella");
    for (let i = 0; i < cells.length; i++) {
        const cellElemnt = cells[i];
        if(numeriCasuali.includes(Number(cellElemnt.innerHTML))) {
            cellElemnt.classList.add("red")
        }
    }
}

















