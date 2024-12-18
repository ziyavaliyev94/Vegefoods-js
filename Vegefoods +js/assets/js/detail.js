let path = new URLSearchParams(window.location.search);
let mainValue = path.get("productId");


window.onload = async() => {
try {
    let container = document.querySelector(".container")
    if(mainValue){
        let {data} = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss/${mainValue}`);
        container.innerHTML=`
         <div class="image">
                    <img src="${data.image}"
                        alt="">
                </div>
                <div class="description">
                    <div class="item">
                        <h3>title</h3>
                        <span>${data.title}</span>
                    </div>
                    <div class="item">
                        <h3>price</h3>
                        <span>${data.price} $</span>
                    </div>
                    <div class="item">
                        <h3>category</h3>
                        <span>${data.category}</span>
                    </div>
                    <div class="item">
                        <h3>description</h3>
                        <span>${data.description}</span>
                    </div>
                    <button>Sifarish Et</button>
                </div>
        `
    }
} catch (error) {
    console.log(error);
}
}
