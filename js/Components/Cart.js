// const BODY = document.querySelector("body");
const $cart = document.createElement('section')
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
class Cart {
    constructor(props) {

    }

    async getData(id) {
        const catalog = await fetch('https://fakestoreapi.com/products/'+id)
            .then(res=>res.json())

        const data = await catalog;
        return data
    }
    deleteProduct(id, price) {
        const restCookie = getCookie('userItems') || ''

        const arrProducts = restCookie.split('|')
        const newArr = arrProducts.filter((item) => {
            let myId = item.split(',')[0].replace('id:', '')
            return  myId !== id
        })

        const products = document.getElementById('products')
        const totalPrice = document.getElementById('price')

        products.innerText = +products.innerText - 1
        totalPrice.innerText = +totalPrice.innerText - price

        document.cookie = "userItems="+newArr.join('|')
        document.querySelector('.card').innerHTML = ''
        this.init()
    }

    create() {
        // const data = JSON.parse(localStorage.getItem('storageCatalog'))

        const products = document.createElement('div')
        products.classList.add('cart-container')
        const restCookie = getCookie('userItems') || ''

        const arrProducts = restCookie.split('|')
        arrProducts.pop()
        arrProducts.map((item) => {
            const itemArr = item.split(',')
            let id = itemArr[0].replace('id:', '')
            let price = itemArr[1].replace('price: ', '')

            this.getData(id).then(item => {
                products.insertAdjacentHTML('beforeend', `
            <div>
            <h2>${item.title}</h2>
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

            const deleteBtn = document.createElement('span')
            const viewBtn = document.createElement('span')
            deleteBtn.addEventListener('click', () => {
                this.deleteProduct(id, price)
            })
            viewBtn.addEventListener('click', () => {
                window.location.hash = 'product' + id
                console.log('product' + id)
            })
            deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
            viewBtn.innerHTML = '<i class="fas fa-eye"></i>'
            products.appendChild(deleteBtn)
            products.appendChild(viewBtn)


        })

        return products
    }


    init() {
        $cart.appendChild(this.create())
        $cart.classList.add('card')
        document.body.appendChild($cart)

    }
}


export default new Cart();
