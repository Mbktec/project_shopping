
const tableau = [
    {
        image: "image/download-1.jpg",
        nom: "Sweet Item",
        prix: 5,
      },
      {
        image: "image/download-2.jpg",
        nom: "Cupcake Item",
        prix: 5,
      },
      {
        image: "image/download-1.png",
        nom: "Cake Item",
        prix: 5,
      },
      {
        image: "image/download-3.jpg",
        nom: "Dougoout Item",
        prix: 10,
      },
      {
        image: "image/download-4.jpg",
        nom: "Sweet Item",
        prix: 10,
      },
      {
        image: "image/download.jpg",
        nom: "Cupcake item",
        prix: 10,
      },
      {
        image: "image/download-1.png",
        nom: "Bistella",
        prix: 15,
      },
      {
        image: "image/images-1.jpg",
        nom: "Sweet Item",
        prix: 15,
      },
      {
        image: "image/images-2.jpg",
        nom: "Sweet Item",
        prix: 15,
      },
];

function displayProduit() {
    let j =0
    for (let i = 0; i < tableau.length; i++) {
       
      products.innerHTML += `<div
              class="sucreri grow col-4"
              style="background: url(${tableau[i].image}) center/ cover no-repeat; "
            >
              <div class="btnBuy" data-index='${j}' id="btnBuy">
              <i class="bi bi-bag bg-primary"></i>
              </div>
              <div class="titre bg-light d-flex justify-content-between">
                <h4>${tableau[i].nom}</h4>
                <h4><span class= "noir">$</span><span class= "noir">${tableau[i].prix}</span></h4>
              </div>
            </div>`;
            j++;
            
    }
  };
  displayProduit();

let click = false;
 let i =0;
 let totalElem = 0;
 const allTotal = document.querySelector('.allElem')
  const btnBuy = document.querySelectorAll('.btnBuy');
  const totAl = document.querySelector('.total');
  const panierClick = document.getElementById('panierClick');
  const paniEr = document.querySelector('.panier')

btnBuy.forEach(element => { 
    element.addEventListener('click', ()=>{
        alert("Voulez-vous ajouter ce produit dans le  panier");      
      let idx =element.dataset.index

//ajout des produits
container.innerHTML += `<div class='chart-el d-flex justify-content-around my-2'>
<img src="${tableau[idx].image}" class="rounded-circle " style="width: 50px;" alt="">
    <h5> ${tableau[idx].nom}</h5>
    <h5><span class= 'noir'>$</span><span class= 'noir'>${tableau[idx].prix}</span></h5>
  <button class='btn danger supprimer delete'>
    <i class="bi bi-trash-fill"></i>
  </button>
  </div>`
  i++;
  totalElem += tableau[idx].prix;
  totAl.innerHTML =`${i} items - $ ${totalElem}`;
  allTotal.innerHTML = `${totalElem}`;

  //supprimer un element du panier
  const deleteitem = document.querySelectorAll('.delete');
  deleteitem.forEach(btn => {
    btn.addEventListener("click",()=>{
      alert("Voulez-vous supprimer ce produit du panier"); 

      i--;
      totAl.innerHTML =`${i} items - $ ${totalElem}`;
     const removeEl=btn.parentNode
     console.log(btn.parentNode.children[2].children[1].textContent)
     let valeurM=parseInt(btn.parentNode.children[2].children[1].textContent);
     totalElem-=valeurM;
     totAl.innerHTML =`${i} items - $ ${totalElem}`;
     allTotal.innerHTML = `${totalElem}`
     removeEl.remove();

    })
  });

    })
})

//affichage du panier
panierClick.addEventListener('click', () => {
  if(click === false){
    click = true
    paniEr.style.display = 'block'
  } else{
    paniEr.style.display = 'none'
    click = false;
  }

})

