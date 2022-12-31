
const headerEl = document.getElementById('header');
const footerEl = document.getElementById('footer');

headerEl.innerHTML = `
<div class="logo">
    <img src="logo.png" alt="site logo">
</div>
<nav>
    <ul>
        <li>some</li>
        <li>some 2</li>
        <li>some 3</li>
        <li>some 4</li>
        <li>some 5</li>
    </ul>
</nav>
<div class="social-media">
    <p class="top-address"><i class="fa-solid fa-location-dot"></i> Puerto Plata, Dominican Republic </p>
</div>`;
footerEl.textContent = `La lagune restaurant, Puerto Plata, Dominican Republic 2023.`