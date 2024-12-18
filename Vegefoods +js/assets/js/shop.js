let firstLine = document.querySelector(".productContainer");

async function getApi() {
    try {
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`);
        data.forEach((item) => {
            let div = document.createElement("div");
            div.classList.add("pepper");
            div.innerHTML = `
        <i class="shopIcon fa-solid fa-cart-shopping"></i>
        <i class="heartIcon fa-solid fa-heart"></i>
        <img src="${item.image}" alt="">
        <div class="pctContent">
            <h5>${item.title}</h5>
            <span class="newPrice">Price: ${item.price}</span>
        </div>
        `
            firstLine.append(div)
        })

    } catch (error) {
        console.log(error);
    }
}
getApi()
let input = document.getElementById("searchInput");
let srcBtn = document.getElementById("srcBtn");
srcBtn.addEventListener("click", getSearch)

async function getSearch() {
    try {
        firstLine.innerHTML = ""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`);
        let result = data.filter((item) => item.title.toLowerCase().includes(input.value.toLowerCase()));

        if (result.length != 0) {
            result.forEach((item) => {
                let div = document.createElement("div");
                div.classList.add("pepper");
                div.innerHTML = `
        <i class="shopIcon fa-solid fa-cart-shopping"></i>
        <i class="heartIcon fa-solid fa-heart"></i>
        <img src="${item.image}" alt="">
        <div class="pctContent">
            <h5>${item.title}</h5>
            <span class="newPrice">Price: ${item.price}</span>
        </div>
        `
                firstLine.append(div)
            })
        } else {
            firstLine.innerHTML = `<h1 class="notFind">Product is not find !</h1>`
        }
    } catch (error) {
        console.log(error);
    }

}

let AtoZ = document.getElementById("AtoZ");
let ZtoA = document.getElementById("ZtoA");
let expencive = document.getElementById("expencive");
let cheap = document.getElementById("cheap");
let def = document.getElementById("def");

AtoZ.addEventListener("click", atoz);
ZtoA.addEventListener("click", ztoa);
expencive.addEventListener("click", expenciveToCheap);
cheap.addEventListener("click", cheapToExpencive);
def.addEventListener("click", getSearch);

async function atoz() {
    try {
        firstLine.innerHTML = ""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`);
        let result = data.sort((a, b) => a.title.localeCompare(b.title))
        result.forEach((item) => {
            let div = document.createElement("div");
            div.classList.add("pepper");
            div.innerHTML = `
        <i class="shopIcon fa-solid fa-cart-shopping"></i>
        <i class="heartIcon fa-solid fa-heart"></i>
        <img src="${item.image}" alt="">
        <div class="pctContent">
            <h5>${item.title}</h5>
            <span class="newPrice">Price: ${item.price}</span>
        </div>
        `
            firstLine.append(div)
        })
    } catch (error) {
        console.log(error);
    }
}

async function ztoa() {
    try {
        firstLine.innerHTML = ""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`);
        let result = data.sort((a, b) => b.title.localeCompare(a.title))
        result.forEach((item) => {
            let div = document.createElement("div");
            div.classList.add("pepper");
            div.innerHTML = `
        <i class="shopIcon fa-solid fa-cart-shopping"></i>
        <i class="heartIcon fa-solid fa-heart"></i>
        <img src="${item.image}" alt="">
        <div class="pctContent">
            <h5>${item.title}</h5>
            <span class="newPrice">Price: ${item.price}</span>
        </div>
        `
            firstLine.append(div)
        })
    } catch (error) {
        console.log(error);
    }
}

async function expenciveToCheap() {
    try {
        firstLine.innerHTML = ""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`);
        let result = data.sort((a, b) => b.price - a.price)
        result.forEach((item) => {
            let div = document.createElement("div");
            div.classList.add("pepper");
            div.innerHTML = `
        <i class="shopIcon fa-solid fa-cart-shopping"></i>
        <i class="heartIcon fa-solid fa-heart"></i>
        <img src="${item.image}" alt="">
        <div class="pctContent">
            <h5>${item.title}</h5>
            <span class="newPrice">Price: ${item.price}</span>
        </div>
        `
            firstLine.append(div)
        })
    } catch (error) {
        console.log(error);
    }
}

async function cheapToExpencive() {
    try {
        firstLine.innerHTML = ""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`);
        let result = data.sort((a, b) => a.price - b.price)
        result.forEach((item) => {
            let div = document.createElement("div");
            div.classList.add("pepper");
            div.innerHTML = `
        <i class="shopIcon fa-solid fa-cart-shopping"></i>
        <i class="heartIcon fa-solid fa-heart"></i>
        <img src="${item.image}" alt="">
        <div class="pctContent">
            <h5>${item.title}</h5>
            <span class="newPrice">Price: ${item.price}</span>
        </div>
        `
            firstLine.append(div)
        })
    } catch (error) {
        console.log(error);
    }
}
