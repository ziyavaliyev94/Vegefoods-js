
let container = document.querySelector(".container")

function getCart() {
    container.innerHTML = ""
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("pepper");
        div.innerHTML = `
<i onclick="removeItem(${item.id})" class="heartIcon fa-regular fa-trash-can"></i>
<img src="${item.image}" alt="">
<div class="pctContent">
    <h5>${item.title}</h5>
    <span class="newPrice">Price: ${item.price}</span>
</div>
`
        container.append(div)
    })
}

window.onload = () => {
    getCart()
}

function removeItem(id) {
    let addtocart = document.getElementById("addtocart")
    let cart = JSON.parse(localStorage.getItem("cart"));
    let newCart = []
    if (id) {
        cart.filter((item) => item.id != id ? newCart.push(item) : null);
        localStorage.setItem("cart", JSON.stringify(newCart));
        getCart()
    }
    addtocart.innerHTML=`
    <a href=""><i class="shopIcon fa-solid fa-cart-shopping"></i></a>[${cart.length}]
    `

}
removeItem()