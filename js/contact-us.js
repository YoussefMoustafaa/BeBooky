import { logOut, renderNavBar } from "../modules/navBar.js"

let navBar = document.getElementById('nav-bar')

if (navBar) {
    navBar.innerHTML = renderNavBar()
}

const logOutBtn = document.getElementById('log-out-btn')

if (logOutBtn) {
    logOutBtn.addEventListener('click', function() {
        logOut()
    })
}

document.addEventListener("DOMContentLoaded", function () {
    var img = document.createElement("img");
    img.src = "../images/contact us.png";
    img.alt = "PNG Image";

    var imgContent = document.createElement("div");
    imgContent.className = "image-container";
    imgContent.appendChild(img);

    var content = document.createElement("div");
    content.className = "text-container";
    content.innerHTML = `
        <form  method="post">
        <div class="intro">
            <h1>Contact Us</h1>
            <h5>we're happy to help</h5>
        </div>
        <p>
            Mestive<br>20220411
        </p>
        <p>
            Bassant<br>20220084
        </p>
        <p>
            Mazen<br>20220467
        </p>
        <p>
            Moro <br>20220222
        </p>
        <p>
            Boleka <br>20220087
        </p>
        </form>
        <p id="statement">.Made by Nada.</p>
    `;


    // Append content element to body
    var container = document.getElementById("container");
    container.appendChild(imgContent);
    container.appendChild(content);
});