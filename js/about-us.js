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
    // Create image element
    var img = document.createElement("img");
    img.src = "../images/about us.svg";
    img.alt = "SVG Image";

    var imgContent = document.createElement("div");
    imgContent.className = "image-container";
    imgContent.appendChild(img);
    // Create content element
    var content = document.createElement("div");
    content.className = "text-container";
    content.innerHTML = `
        <h1 class="about-us">About us</h1>
        <div class="purpose-container">
        <h2 class="purpose">Our Purpose</h2>
        <p class="purpose-text">
        At BeBooky, we believe in the transformative power of storytelling. Our mission is to provide an immersive online platform where readers can embark on captivating journeys through the pages of books, discovering new worlds, perspectives, and ideas along the way.
        
        Whether you're an avid bookworm seeking your next literary escape or a curious mind eager to dive into uncharted narratives, we're here to guide you on your quest for knowledge and inspiration. With our extensive collection of books spanning various genres and topics, there's something for everyone to explore and enjoy.
        </p>
        </div>

        <div class="success-container">
        <h2 class="success-story">Our Success Story</h2>
        <p class="success-story-text">
        BeBooky began with a simple yet ambitious vision: to create a virtual haven where the boundless realms of storytelling
        could be accessed and experienced by readers worldwide. Since our inception, we've been dedicated to curating an
        ever-growing library of books, fostering a vibrant community of passionate readers, and inspiring countless individuals
        to embrace the magic of reading.
        One of our proudest moments came when Ahmed, a dedicated member of our community, shared their success story with us.
        Ahmed had always been an avid reader but struggled to find the time and resources to indulge in their passion amidst the 
        demands of daily life. However, after discovering BeBooky, they found a newfound sense of freedom and excitement in exploring
        our vast collection of books.
        Through BeBooky, Ahmed was able to borrow and devour books at their own pace, discovering hidden gems and cherished classics 
        that reignited their love for reading. As they immersed themselves in captivating narratives and diverse voices, Ahmed found 
        solace, inspiration, and a renewed sense of purpose.
        Today, Ahmed continues to be an active member of our community, sharing their favorite reads, engaging in thought-provoking
        discussions, and spreading the joy of reading to others. Their journey is a testament to the transformative power of
        literature and the endless possibilities that await within the pages of a book.
    </p>
    </div>

    <div class="join-us-container">
    <h2 class="join-us">Join Us</h2>
    <p class="join-us-text">    
    We invite you to join us on this literary adventure. Whether you're seeking to escape reality, broaden your horizons, 
    or simply unwind with a good book, BeBooky
    is here to accompany you on your journey. Let's explore, discover, and celebrate the magic of storytelling together.
    </p>
    <p id="statement">.Made by Nada.</p>
    </div>

`;

    // Append image and content to container
    var container = document.getElementById("container");
    container.appendChild(imgContent);
    container.appendChild(content);
});
