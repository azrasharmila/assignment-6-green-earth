let cardQuantity = []


const allCatagory = (allCatagory) => {
    const url = "https://openapi.programming-hero.com/api/plants";
    fetch(url)
        .then(res => res.json())
        .then(allCatagory => {
            const allPlants = allCatagory.plants;


            const cardBox = document.getElementById("card-box");
            cardBox.innerHTML = "";
            allPlants.forEach(singleDefultVlue => {

                let cardNewDiv = document.createElement("div");
                cardNewDiv.innerHTML = `

<div class="card bg-base-100 ">
  <figure class="h-75 ">
    <img
    class"object-fit"
      src="${singleDefultVlue.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
      <h2 onclick="loadWordDetail(${singleDefultVlue.id})" class="card-title cursor-pointer"> <span class="font-semibold text-xl">${singleDefultVlue.name}</span> </h2>
    <p class="line-clamp-2">${singleDefultVlue.description}</p>
    <div class="card-actions  ">
         <div class="price-section flex justify-between w-full py-2"> 

           <div class=" bg-[#DCFCE7] py-1 px-2 rounded-lg flex items-center justify-center" > <p > ${singleDefultVlue.category}</p> </div>
        <div><p><span>৳</span>${singleDefultVlue.price}</p></div>
   </div>

    <button onclick="addToCardDataFetch(${singleDefultVlue.id})" class="btn btn-primary rounded-2xl bg-[#15803D] w-full border-none shadow-none">Add to Cart</button>

        </div>
  </div>
</div>
    
        `;
                cardBox.appendChild(cardNewDiv);




            })

        })
};


const catagoryFetch = () => {
    const urlCatagory = "https://openapi.programming-hero.com/api/categories";
    fetch(urlCatagory)
        .then(res => res.json())
        .then(catagoryElements => {
            displayCatagories(catagoryElements.categories);

        }
        )
    loader(true);
}

const displayCatagories = (catagoryElements) => {
    const catagoryContainer = document.getElementById("catagoriDiv");
    catagoryContainer.innerHTML = "";


    const makeBtns = document.createElement("div");

    makeBtns.innerHTML = `
        
        <button onclick="alltreesInfo()"  class="hover:bg-[#DCFCE7] hover:text-white w-[100%] text-start px-3 py-1 rounded-sm">All Trees</button>
        
        `;


    catagoryContainer.appendChild(makeBtns);

    catagoryElements.forEach(catagori => {

        let newCatagory = document.createElement("div");
        newCatagory.innerHTML = `
        
        <button onclick="treesInfo(${catagori.id})" class="hover:bg-[#17af4f] hover:text-white w-[100%] text-start px-3 py-1 rounded-sm">${catagori.category_name}</button>
        
        `;





        catagoryContainer.appendChild(newCatagory);


    });

    handleActiveBtn();
    loader(false)
    
}

const alltreesInfo = () => {
    const allDataUrl = "https://openapi.programming-hero.com/api/plants";
    fetch(allDataUrl)
        .then(res => res.json())
        .then(allData => {
            allDataDisplay(allData.plants);
        })
    loader(true);

}




// All datadisPlay 


const allDataDisplay = (allPlants) => {
    const cardBox = document.getElementById("card-box");
    cardBox.innerHTML = ''
    allPlants.forEach(plant => {

        let cardNewDiv = document.createElement("div");
        cardNewDiv.innerHTML = `





<div class="card bg-base-100 ">
  <figure class="h-75 ">
    <img
    class"object-fit"
      src="${plant.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
      <h2 onclick="loadWordDetail(${plant.id})" class="card-title cursor-pointer"> <span class="font-semibold text-xl">${plant.name}</span> </h2>
    <p class="line-clamp-2">${plant.description}</p>
    <div class="card-actions  ">
         <div class="price-section flex justify-between w-full py-2"> 

           <div class=" bg-[#DCFCE7] py-1 px-2 rounded-lg flex items-center justify-center" > <p > ${plant.category}</p> </div>
        <div><p><span>৳</span>${plant.price}</p></div>
   </div>

    <button onclick="addToCardDataFetch(${plant.id})" class="btn btn-primary rounded-2xl bg-[#15803D] w-full border-none shadow-none">Add to Cart</button>

        </div>
  </div>
</div>



    
    
    `;
        cardBox.appendChild(cardNewDiv);



    });
    loader(false);

}






// trees Data fetch function
const treesInfo = (CatagoriId) => {
    const cartUrl = `https://openapi.programming-hero.com/api/category/${CatagoriId}`;
    fetch(cartUrl)
        .then(res => res.json())
        .then(cardData => {

            cardDataDisplay(cardData.plants);

        })
    loader(true);
}


const cardDataDisplay = (cardInfoPlants) => {

    const card = document.getElementById("card-box");
    card.innerHTML = ''
    cardInfoPlants.forEach(cardInfoPlant => {
        let cardBox = document.createElement("div");
        cardBox.innerHTML = `
    

<div class="card bg-base-100 ">
  <figure class="h-75 ">
    <img
      src="${cardInfoPlant.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
      <h2 onclick="loadWordDetail(${cardInfoPlant.id})"  class="card-title cursor-pointer"> <span class="font-semibold text-xl">${cardInfoPlant.name}</span> </h2>
    <p class="line-clamp-2">${cardInfoPlant.description}</p>
    <div class="card-actions  ">
         <div class="price-section flex justify-between w-full py-2"> 

           <div class=" bg-[#DCFCE7] py-1 px-2 rounded-lg flex items-center justify-center" > <p > ${cardInfoPlant.category}</p> </div>
        <div><p><span>৳</span>${cardInfoPlant.price}</p></div>
   </div>

    <button onclick="addToCardDataFetch(${cardInfoPlant.id})" class="btn btn-primary rounded-2xl bg-[#15803D] w-full border-none shadow-none">Add to Cart</button>

        </div>
  </div>
</div>


    
    `;

        card.appendChild(cardBox)


    })

    loader(false);

}





const handleActiveBtn = () => {

    const activeAllBtn = document.querySelectorAll("#catagoriDiv button");
    activeAllBtn.forEach(btn => {
        btn.addEventListener("click", () => {


            activeAllBtn.forEach(b => {
                b.classList.remove("active")
            });

            btn.classList.add("active");

        })

    })

}; 


const loadWordDetail = (wordDetailsId) => {
    const url = `https://openapi.programming-hero.com/api/plant/${wordDetailsId}`;
    fetch(url)
        .then(res => res.json())
        .then(detailsData => {
            displayFullDetails(detailsData.plants);

        })

}



const displayFullDetails = (detailsPlant) => {
    const modalId = document.getElementById("details-container");
    modalId.innerHTML = ""

    let newModal = document.createElement("div");
    newModal.innerHTML = `

<div class="card bg-base-100 ">
  <figure class="h-45 ">
    <img
      src="${detailsPlant.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
      <h2  class="card-title cursor-pointer">Plant Name is <span class="font-semibold text-xl">${detailsPlant.name}</span> </h2>
    <p>${detailsPlant.description}</p>
    <div class="card-actions  ">
         <div class="price-section  py-2"> 

           <div class=" py-1  rounded-lg  sm:font-semibold sm:text-xl " > <p >Plant Catagory Name is ${detailsPlant.category}</p> </div><br>
           <div><p class="font-bold "><span class=" sm:font-semibold sm:text-xl">The Plant Price is </span>৳${detailsPlant.price}</p></div>
        </div>
        </div>
  </div>
</div>
    
    `;


    modalId.appendChild(newModal);

    document.getElementById("myModalBox").showModal();
}



const addToCardDataFetch = (addToCardId) => {

    const url = `https://openapi.programming-hero.com/api/plant/${addToCardId}`;

    fetch(url)
        .then((res) => res.json())
        .then((addToCard) => {
            addToCardTtem(addToCard.plants, addToCardId);


        });

}


const addToCardTtem = (information, addToCardId) => {
    const cartUniqueId = 0;

    let cartId = addToCardId;
    let cardPrice = information.price;
    let treeName = information.name;

    let cardObject = {
        cardId: `remove-btn-${cartId}`,
        cardPrice: cardPrice,
        treeName: treeName,
    };

    console.log(cartId);

    cardQuantity.push(cardObject);

    const mycardBox = document.getElementById("add-card-box");
    mycardBox.innerHTML = "";


    let totalPrice = 0;
    for (let cart in cardQuantity) {

        totalPrice = totalPrice + cardQuantity[cart].cardPrice;

        let newDiv = document.createElement("div");

        newDiv.innerHTML = `

    <div class="price-cart bg-[#f0fdf4] p-2 rounded-sm mt-2 flex justify-between text-center" >

     <div class="text-start">
    <h3 class="font-bold">${cardQuantity[cart].treeName}</h3>
     <p>৳<span class="price">${cardQuantity[cart].cardPrice}</span> x 1</p>

   </div>
  <div class="flex justify-center items-center">

     <span class="remove-btn" id="remove-btn-${addToCardId}" ><i class="fa-solid fa-xmark"></i></span>
   </div>
   </div>



  `;


        mycardBox.appendChild(newDiv);

    }


    const total = document.getElementById("total");
    total.innerHTML = '';
    const newContainers = document.createElement("div");

    newContainers.innerHTML = `
  
  <div class="total flex justify-between border-t-1 mt-2 border-[#1f29371a] font-medium text-xl h-full">
  <h2>Total:</h2>
  <h4>৳<span class="total-price">${totalPrice}</span></h4>
</div>

  
  
  `;
    total.appendChild(newContainers);

    removeBtn()

};


const removeBtn = () => {


    const btn = document.querySelectorAll(".remove-btn");




    btn.forEach((b,) => {
        b.addEventListener("click", (e) => {

            const crossTarget = e.target.parentElement.parentElement.parentElement;
            const totalTag =
                e.target.parentElement.parentElement.parentElement.parentElement
                    .parentElement.parentElement;
            let totalFromCartPrice = parseInt(totalTag.querySelector(".total-price").innerText);

            console.log(totalFromCartPrice);
            let priceCard = parseInt(crossTarget.querySelector(".price").innerText);

            let minusFromTotalPrice = totalFromCartPrice - priceCard;
            totalTag.querySelector(".total-price").innerText = minusFromTotalPrice;


            crossTarget.remove();

            if (minusFromTotalPrice === 0) {
                cardQuantity = [];

            }



        })


    })

}




const loader = (status) => {

    const addSpiner = document.getElementById("add-spiner");

    const allElements = document.getElementById("all-elements");

    if (status) {

        addSpiner.classList.remove("hidden");
        allElements.classList.add("hidden");


    } else {


        addSpiner.classList.add("hidden");
        allElements.classList.remove("hidden");



    }

}



catagoryFetch()
allCatagory()