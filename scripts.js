let product = {
    data:[{
        productName : "Regular White basic",
        category : "Topwear",
        price:"30",
        image:"topwear.jpg",
    },
    {
        productName : "Racing Bottomwear sporty",
        category : "Buttomwear",
        price:"45",
        image:"bottomracing.jpg",
    },
    {
        productName : "Jacket Racing mercedes",
        category : "Jacket",
        price:"70",
        image:"jacket1.jpg",
    },
    {
        productName : "Standard Jacket",
        category : "Jacket",
        price:"96",
        image:"jacket2.jpg",
    },
    {
        productName : "Green Jacket",
        category : "Jacket",
        price:"69",
        image:"greenjacket.jpg",
    },
    {
        productName : "Black Watch",
        category : "Watch",
        price:"50",
        image:"watch1.jpg",
    },{
        productName : "Standard Watch",
        category : "Watch",
        price:"50",
        image:"watch2.jpg",
    },
],
};

for(let i of product.data){
    let card = document.createElement("div")
    card.classList.add("card", i.category,"hide")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("img-container")

    let img = document.createElement("img")
    img.setAttribute("src",i.image)
    imgContainer.appendChild(img)
    card.appendChild(imgContainer)

    

    let container = document.createElement("div")
    container.classList.add("container")
    let name = document.createElement("h5")
    name.innerHTML = `${i.productName}`.toUpperCase();
    container.appendChild(name)
    let price = document.createElement("h6")
    price.innerHTML = `$ ${i.price}`
    container.appendChild(price)

    card.appendChild(container)
    document.getElementById("products").appendChild(card)
}

function filterProduct(value){
    let btn = document.querySelectorAll(".button-value")
    btn.forEach((element)=>{
        if(value.toUpperCase() == element.innerText.toUpperCase()){
            element.classList.add("active")
        }else{
            element.classList.remove("active")
        }
    })

let elements = document.querySelectorAll(".card")
elements.forEach((element) => {
    if(value == "All"){
        element.classList.remove("hide")
    }else{
        if(element.classList.contains(value)){
            element.classList.remove("hide")

        }else{
            element.classList.add("hide")
        }
    }
})
}

document.getElementById("search").addEventListener
("click",()=>{
    let searchInput = document.getElementById('search-input').value;
    let ele = document.querySelectorAll("h5")
    let cards = document.querySelectorAll(".card");
    
    ele.forEach((element,index)=>{

            if(element.innerHTML.includes(searchInput.toUpperCase())){
                cards[index].classList.remove("hide")
            }else{
                cards[index].classList.add("hide")
            }
    })

})

window.onload = ()=>{
    filterProduct("All")
}