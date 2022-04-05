
function creoGriglia(valore){
    const celle = document.querySelector(".container");
    celle.innerHTML = "";
    


    for (let i = 1; i <= valore; i++) {
        const cella = document.createElement("div");
        cella.classList.add("cella");
        cella.innerHTML = `${i}`
        celle.append(cella)
    
    }
    
}


const bottone = document.querySelector("button")

bottone.addEventListener('click', function(){
    const lista = document.querySelector("select").value;
    console.log(lista)

    if(lista === "easy"){
        creoGriglia(100)
        let listaNumeriRandom = generateCellsNumbers(100)
        handleClick(listaNumeriRandom)
        
        
    }else if(lista === "medium"){
        creoGriglia(81)
        let listaNumeriRandom = generateCellsNumbers(81)
        handleClick(listaNumeriRandom)
        
        
    }else if(lista === "hard"){
        creoGriglia(49)
        let listaNumeriRandom = generateCellsNumbers(49)
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


function handleClick(dato){
    
    console.log(dato);
    // 1. selezionare tutte le celle querySelectorAll
    const cells = document.querySelectorAll(".cella")
    let lista_numeri_selezioanti = [];
    
    //console.log(cells);
    // 2. ciclare tra gli elementi della dom
    for (let i = 0; i < cells.length; i++) {
      const cellElemnt = cells[i];
      const numeri = Number(cellElemnt.textContent)
      
      
    //   console.log(cellElemnt);
      // 3. attacchare l'event listener all'elemento della dom (cell)
      cellElemnt.addEventListener('click', function() {
        // console.log(numeri);
        lista_numeri_selezioanti.push(numeri);

              
        // 4. evidenziare la cella di azzurro. 
        //this.style.backgroundColor = 'cornflowerblue'
          if(dato.includes(numeri)) {
              cellElemnt.classList.add("red")
              alert("HAI PERSO")
              setTimeout(tempo, 600);
              function tempo(){
                window.location.reload()
              }
              
        }else if(!dato.includes(numeri)){
              cellElemnt.classList.add("azzurro")
             
        }
        
        if(lista_numeri_selezioanti.length === 84 && cells.length === 84 || lista_numeri_selezioanti.length === 65  && cells.length === 65 || lista_numeri_selezioanti.length === 33 && cells.length === 49){
            alert(`HAI VINTO hai clickato correttamente ${lista_numeri_selezioanti.length}`)
            setTimeout(tempo, 600);
              function tempo(){
                window.location.reload()
              }
        }
        });
        
    }
    
  }




  









