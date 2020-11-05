// const BODY = document.querySelector("body");
const $cart = document.createElement('section')
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
class Product {
    constructor(props) {

    }

    async getData(id) {
        const catalog = await fetch('https://fakestoreapi.com/products/'+id)
            .then(res=>res.json())

        const data = await catalog;
        return data
    }


    create() {
        // document.querySelectorAll('.card').map(item => item.innerHTML = '')
        // const data = JSON.parse(localStorage.getItem('storageCatalog'))

        const products = document.createElement('div')
        products.classList.add('product-container')
        const id = window.location.hash.replace('#product', '')

        this.getData(id).then(item => {
            products.insertAdjacentHTML('beforeend', `
            <div>
            <h1 style="color: red">${item.title}</h1>
            <span>id: ${item.id}</span>
            <div>
            <b>price:${item.price}</b>
            
            </div>
            <div>
            <img width="200" src="${item.image}" alt="">
</div>
                 
            </div>
               
            `)
        })

        return products
    }


    init() {
        $cart.appendChild(this.create())
        $cart.classList.add('card')
        document.body.appendChild($cart)

    }
}


export default new Product();
