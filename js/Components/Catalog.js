function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
const initCatalog = () => {
    const BODY = document.querySelector(".app-container");

    const data = JSON.parse(localStorage.getItem('storageCatalog'))
   data.map(item => {
       console.log(item.price)
   })
    BODY.insertAdjacentHTML(
        "beforeend",
        `
<section class="catalog-wrapper">
    <div class="catalog">
       
    </div>
</section>`);

   const addProduct = (id, cardName, price, src) => {
       const element = document.createElement('div')
       element.setAttribute('index', id)

       element.addEventListener('click', () => {
           let totalCost = 0
           let totalItems = 0
           // console.log(getCookie('userItem'))
// debugger
           const itemText = `id:${id}, price: ${price}|`
           const restCookie = getCookie('userItems') || ''

           const arrProducts = restCookie.split('|')
           arrProducts.pop()
           arrProducts.map((item) => {
            const itemArr = item.split(',')
              let id = itemArr[0].replace('id:', '')
              let price = itemArr[1].replace('price: ', '')
               // console.log(+id)
               totalCost+=+price
               totalItems++
           })


           // console.log(restCookie)
           console.log(`${itemText},${restCookie}`)

           document.cookie = `userItems=${itemText}${restCookie}`

           document.getElementById('products').innerText = totalItems
           document.getElementById('price').innerText = Math.floor(totalCost)
           // debugger
       })

       element.innerHTML = `<h3>${cardName}</h3>
            <h4>${price}</h4>
            <div style="background-image: url('${src}')">
                
            </div>`
       document.querySelector('.catalog').appendChild(element)
   }




    data.map(card => {
        // console.log(card)
        addProduct(card.id, card.title, card.price, card.image)
    })
}






export default initCatalog
