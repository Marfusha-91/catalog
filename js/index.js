import Header from "./Components/Header.js";
import Product from "./Components/Product.js";
import Cart from "./Components/Cart.js";
import MainScreen from "./Components/MainScreen.js";
import Catalog from "./Components/Catalog.js";


    class App {
        constructor() {
            this.data = this.storage ||  []
        }

        get storage() {
           const localData = JSON.parse(localStorage.getItem('storageCatalog'))
           return localData.length === 0 ? null : localData
        }

         static async init() {
            const catalog = await fetch('https://fakestoreapi.com/products/')
                .then(res=>res.json())

             this.data = await catalog;
             await localStorage.setItem('storageCatalog', JSON.stringify(this.data))
             await Header;
             await MainScreen();
             await Catalog();
             console.log(this.data)
         }
    }


window.addEventListener('hashchange', () => {
    // debugger
    if(window.location.hash === '#cart') {
        document.querySelector('.app-container').innerHTML = ''
        Cart.init()
    }
    if(window.location.hash.includes('product')) {
        document.querySelector('.cart-container').innerHTML = ''
        Product.init()
    }

    if(!window.location.hash) {
        document.querySelector('.cart-container').innerHTML = ''
        App.init()
    }


})

const app = document.createElement('div')
app.classList.add('app-container')

document.body.appendChild(app)
App.init()
