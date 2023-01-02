
const headerEl = document.getElementById('header');
const footerEl = document.getElementById('footer');

headerEl.innerHTML = `
    <div class="logo">
        <img src="logo.png" alt="site logo">
    </div>
    <nav>
        <ul>
        <li>Home</li>
        <li>Rooms</li>
        <li>Restaurant</li>
        <li>Pools & Spa</li>
        <li>Contacts</li>
        </ul>
    </nav>
    <div class="social-media">
        <p class="top-address">
        <i class="fa-solid fa-location-dot"></i> 
        Puerto Plata, Dominican Republic 
        <button class='call-round'> <a href='tel:123-456-7890'><i class="fa-solid fa-phone"></i></a> </button>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        </p>
    </div>`;

footerEl.textContent = `La lagune restaurant, Puerto Plata, Dominican Republic 2023.`

