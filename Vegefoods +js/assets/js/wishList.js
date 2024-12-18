
let container = document.querySelector(".container")

function getCart() {
    container.innerHTML = ""
    let wishlist = JSON.parse(localStorage.getItem("wishlist"));
    wishlist.forEach((item) => {
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
    let hearticon = document.getElementById("hearticon");

    let wishlist = JSON.parse(localStorage.getItem("wishlist"));
    let newCart = []
    if (id) {
        wishlist.filter((item) => item.id != id ? newCart.push(item) : null);
        localStorage.setItem("wishlist", JSON.stringify(newCart));
        getCart()
    }
    hearticon.innerHTML=`
    <a href=""><i class="fa-solid fa-heart"></i></a>[${wishlist.length}]
    `


}
removeItem()