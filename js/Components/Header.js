const BODY = document.querySelector("body");

class Header {
    constructor(props) {

    }

    create() {
        return `
            <header class="none-visible">
                <menu>
                    <li><a href="#">Home</a></li>
                    <li>Info</li>
                </menu>
                <div>
                 <i class="fas fa-bars btn-close"></i>
                </div> 
                <div class="cart">
                <a href="#cart"><i class="fas fa-shopping-cart"></i></a>
                <span id="products">0</span>
                <span><span id="price">0</span><b>$</b></span>
                </div>
            </header>
    `
    }

    addHeaderToggle() {
        const closeBtn = document.querySelector(".btn-close")
        closeBtn.addEventListener("click", () => {
            document.querySelector("header").classList.toggle("none-visible");
            closeBtn.classList.toggle("fa-times");
            closeBtn.classList.toggle("fa-bars");
        });
    }
    init() {
        BODY.insertAdjacentHTML(
            "afterbegin",
            this.create()
        );

        this.addHeaderToggle()

    }
}


export default new Header().init();
