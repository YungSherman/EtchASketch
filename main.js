let gridContainer = document.querySelector(".grid-container");
let active = document.getElementsByClassName("active");
// let gridBackground = document.querySelectorAll(".grid-container > div");



//Color buttons
let btnColorMode = document.getElementById("btnColor");
let btnRainbow = document.getElementById("btnRainbow");
let btnEraser = document.getElementById("btnEraser");
let btnClear = document.getElementById("btnClear");

function generateGrid(divNum = 20 * 20 , className = "twentyxtwenty") {
  gridContainer.innerHTML = "";
  for (let i = 0; i < divNum; i += 1) {
    const gridDiv = document.createElement("div");
    gridContainer.classList.remove("tenxten", "twentyxtwenty", "thirtyxthirty");// ovo je moglo da se stavi u chooseGrid
    gridContainer.classList.add(className); //MIJENJA className = twentyxtwenty
    gridContainer.appendChild(gridDiv);
  }
}

function chooseGrid() {
  let gridMode = document.querySelectorAll(".grid-mode"); //OVDJE UZIMAMO CLASS ACTIVE
  gridMode.forEach((button) => {  // UZIMAMO SVA 3 GRID MODE BUTTONA
    button.addEventListener("click", function() {
      gridMode[0].classList.remove("active"); // MICEMO POSTOJECI ACTIVE NA BUTTONU KAKO BI GA PREMJESTILI NA SELEKTOVANI BUTTON
      gridMode[1].classList.remove("active");
      gridMode[2].classList.remove("active");
      if (button.classList.contains("ten")) { // UKOLIKO BUTTON SADRZI CLASS "TEN"
        gridMode[0].classList.add("active");
        generateGrid(10 * 10, "tenxten");
      } else if (button.classList.contains("twenty")) {
        gridMode[1].classList.add("active");
        generateGrid(20 * 20, "twentyxtwenty");
      } else if (button.classList.contains("thirty")) {
        gridMode[2].classList.add("active");
        generateGrid(30 * 30, "thirtyxthirty");
      }
    });
  });
}

let colorPicker = document.getElementById("colorPicker"); // selektujemo color picker



 btnColorMode.addEventListener("click", function() {
   let gridBackground = document.querySelectorAll(".grid-container > div");

   btnColorMode.classList.add("active");
   btnRainbow.classList.remove("active");
   btnEraser.classList.remove("active");
   btnClear.classList.remove("active");
   
   gridBackground.forEach((item) => {
     item.addEventListener("mouseenter", (e) => { //selektujemo svaki div u grid-containeru
       e.target.style.backgroundColor = colorPicker.value;
     })
   });
 })


function randomColor() {
  let rainbow = ["#f02207", "#f08f07", "#ddf007", "#07f02a", "#0741f0", "#4e2f61", "#7819b3"];
  let random = rainbow[Math.floor(Math.random() * rainbow.length)];
  return random;
}


//rainbow color

btnRainbow.addEventListener("click", function() {
  let gridBackground = document.querySelectorAll(".grid-container > div");
  
  btnColorMode.classList.remove("active");
  btnRainbow.classList.add("active");
  btnEraser.classList.remove("active");
  btnClear.classList.remove("active");

  gridBackground.forEach((item) => {  
    item.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = randomColor();
    })
    
  })
})

btnEraser.addEventListener("mouseenter", function() { // bez =>
  let gridBackground = document.querySelectorAll(".grid-container > div");

  btnColorMode.classList.remove("active");
  btnRainbow.classList.remove("active");
  btnEraser.classList.add("active");
  btnClear.classList.remove("active");
  
  gridBackground.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = "#ffffff";
    })
  })
});

btnClear.addEventListener("click", function() {
  let gridBackground = document.querySelectorAll(".grid-container > div");

  btnColorMode.classList.remove("active");
  btnRainbow.classList.remove("active");
  btnEraser.classList.remove("active");
  btnClear.classList.add("active");

  gridBackground.forEach((item) => {
    item.style.backgroundColor = "#ffffff";
  })
})


randomColor();
chooseGrid();
generateGrid();