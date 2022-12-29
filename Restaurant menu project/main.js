const menu = [
    {
        id: 1,
        title: 'Bread with sunny side-up egg served on white ceramic plate',
        category: 'breakfast',
        price: 15.99,
        img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id: 2,
        title: 'Toast bread with blueberry on black plate',
        category: 'breakfast',
        price: 22.34,
        img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
        description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        id: 3,
        title: 'Vegetable salad served on plate',
        category: 'breakfast',
        price: 19.99,
        img: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1247&q=80',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
        id: 4,
        title: 'Toasted bread with fried egg and tomato',
        category: 'breakfast',
        price: 14.99,
        img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    },
    {
        id: 5,
        title: 'Pancake served in ceramic plate',
        category: 'breakfast',
        price: 11.49,
        img: 'https://images.unsplash.com/photo-1499638309848-e9968540da83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. '
    },
    {
        id: 6,
        title: 'Bread on brown ceramic plate',
        category: 'breakfast',
        price: 11.49,
        img: 'https://images.unsplash.com/photo-1620146344904-097a0002d797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
        id: 7,
        title: 'Pasta with sauce on white ceramic plate',
        category: 'lunch',
        price: 24.99,
        img: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80',
        description: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    },
];

const sectionCenterEl = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {

        return `<article class="menu-item">
        <img class="photo" src=${item.img}>
        <idv class=${item.title}>
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$ ${item.price}</h4>  
            </header>
            <p class="item-text">${item.description}</p>
        </idv>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenterEl.innerHTML = displayMenu;
};



