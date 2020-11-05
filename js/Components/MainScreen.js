
const initMainScreen = () => {
    const BODY = document.querySelector(".app-container");

    BODY.insertAdjacentHTML(
        "beforeend",
        `
<div class="main-screen">
<section class="bg-main-screen">
    <div class="text-main-screen">
        <h1>Free 3D mockups</h1>
        <h4>2020 trends</h4>
        <p> Aliquip enim minim in veniam duis elit. Aute magna sint nostrud dolore. Occaecat tempor cupidatat irure dolor reprehenderit aute amet aute in pariatur aliquip. Amet aute in pariatur aliquip.</p>
        <button class="arrow-down">
            <img src="img/Line.svg" alt="">
        </button>
    </div>
</section>
</div>

    `
    );
};

export default initMainScreen
