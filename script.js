
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


const bottone = document.querySelector("button")

bottone.addEventListener('click', function () {
    const lista = document.querySelector("select").value;
    console.log(lista)

    if (lista === "easy") {
        creoGriglia(100)
        const listaNumeriRandom = generateCellsNumbers(100)
        handleClick(listaNumeriRandom)


    } else if (lista === "medium") {
        
        const listaNumeriRandom = generateCellsNumbers(81)
        handleClick(listaNumeriRandom)


    } else if (lista === "hard") {
        creoGriglia(49)
        const listaNumeriRandom = generateCellsNumbers(49)
        handleClick(listaNumeriRandom)
    }
});


//Genera numero random

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
    while (randomNumbers.length !== 16) {
        const randomNumber = getRandomInteger(1, num)

        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber)
        }
    }
    return randomNumbers.sort((a, b) => a - b);
}

// console.log(generateCellsNumbers());


function handleClick(dato, valore) {
    
    let numeriCasuali = dato
   
    // console.log(tabellaNumeri);
    console.log({ numeriCasuali });
    const cells = document.querySelectorAll(".cella")
    let lista_numeri_selezioanti = [];

    for (let i = 0; i < cells.length; i++) {
        const cellElemnt = cells[i];
        let numero = Number(cellElemnt.textContent)
        
        cellElemnt.addEventListener('click', clickcell) 
        
        function clickcell() {
            lista_numeri_selezioanti.push(numero)
            console.log(numero);
            if (dato.includes(numero)) {
                cellElemnt.classList.add("red")
                alert("HAI PERSO")
                cellElemnt.removeEventListener('click', clickcell)
               
            }else if (!dato.includes(numero)) {
                cellElemnt.classList.add("azzurro")
               
            } else if (lista_numeri_selezioanti.length === 84 && cells.length === 100 || lista_numeri_selezioanti.length === 65 && cells.length === 81 || lista_numeri_selezioanti.length == 2 && cells.length == 49) {
                alert(`HAI VINTO hai clickato correttamente ${lista_numeri_selezioanti.length}`)
            } 
        }
        
    }   
}
















