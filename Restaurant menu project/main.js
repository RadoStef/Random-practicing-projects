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
    {
        id: 8,
        title: 'Vegetable salad on black ceramic plate',
        category: 'lunch',
        price: 22.99,
        img: 'https://images.unsplash.com/photo-1627309302198-09a50ae1b209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor faucibus varius. Praesent bibendum dictum auctor. Praesent metus massa, porttitor sit amet elit eu, commodo auctor risus. Nam sed dui odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 9,
        title: 'Cooked pork food on ceramic plate',
        category: 'lunch',
        price: 36.49,
        img: 'https://images.unsplash.com/photo-1573225342350-16731dd9bf3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80',
        description: 'Sed neque dui, faucibus non nunc ut, vestibulum vulputate ipsum. Aenean laoreet, mauris ut congue aliquet, lectus sem viverra ligula, quis dictum ante ipsum non augue. Morbi lacinia mauris tortor, sed commodo lectus aliquam quis. Praesent sit amet dui sit amet leo fermentum lobortis. Suspendisse potenti.',
    },
    {
        id: 10,
        title: 'Sliced cucumber on brown ceramic bowl',
        category: 'lunch',
        price: 29.90,
        img: 'https://images.unsplash.com/photo-1584946425231-b6d6098a109c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Curabitur scelerisque commodo est eget lacinia. Fusce ac lorem non ex maximus porttitor. In commodo lectus metus, et dictum eros feugiat id. Quisque eu lobortis velit, eget semper ex. Maecenas ligula nunc, semper eget turpis sit amet, ullamcorper pulvinar neque.',
    },
    {
        id: 11,
        title: 'Roasted ribs with sliced tomatoes and potatoes',
        category: 'lunch',
        price: 41.49,
        img: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        description: 'Aenean ullamcorper quam diam, id bibendum enim egestas sed. Curabitur ut volutpat magna. Donec tincidunt lectus a nunc feugiat tincidunt. Curabitur vitae mauris non eros ultricies malesuada. Duis hendrerit sodales lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dignissim sit amet lacus sed pharetra.'
    },
    {
        id: 12,
        title: 'Cooked chicken food on white ceramic plate',
        category: 'lunch',
        price: 28.99,
        img: 'https://images.unsplash.com/photo-1593787614839-9b93c8998f25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'Curabitur scelerisque commodo est eget lacinia. Fusce ac lorem non ex maximus porttitor. In commodo lectus metus, et dictum eros feugiat id. Quisque eu lobortis velit, eget semper ex. Maecenas ligula nunc, semper eget turpis sit amet, ullamcorper pulvinar neque. Aenean ullamcorper quam diam, id bibendum enim egestas sed. Curabitur ut volutpat magna.',
    },
    {
        id: 13,
        title: 'Brown burger dish on white ceramic plate',
        category: 'lunch',
        price: 24.49,
        img: 'https://images.unsplash.com/photo-1498579485796-98be3abc076e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'Donec tincidunt lectus a nunc feugiat tincidunt. Curabitur vitae mauris non eros ultricies malesuada. Duis hendrerit sodales lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dignissim sit amet lacus sed pharetra.',
    },
    {
        id: 14,
        title: 'Bowl of fried rice with fresh vegetables and sea foods',
        category: 'dinner',
        price: 36.49,
        img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        description: 'Ut vel velit auctor, placerat mauris nec, laoreet diam. Suspendisse vel tempus orci, vitae dignissim leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque malesuada, sem ut cursus cursus, massa magna faucibus urna, a pulvinar justo lacus id magna.',
    },
    {
        id: 15,
        title: 'Beef on white ceramic plate beside sliced bread on table',
        category: 'dinner',
        price: 49.99,
        img: 'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        description: ' Vestibulum justo nulla, vulputate at turpis ut, rutrum lacinia ligula. Mauris vitae mollis ipsum, eget suscipit libero. Sed tempor, dui sit amet imperdiet vestibulum, massa elit posuere ipsum, ac commodo lectus turpis sit amet enim.',
    },
    {
        id: 16,
        title: 'Grilled salmon filets, cooked vegetables on plate',
        category: 'dinner',
        price: 39.99,
        img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'Aliquam ut vestibulum tellus. Phasellus massa ipsum, porttitor a orci eu, hendrerit efficitur sem. Curabitur hendrerit faucibus congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras maximus nunc nulla, vitae vulputate nibh dictum id. Vestibulum tellus enim, porta id felis in, tincidunt blandit ligula.',
    },
    {
        id: 17,
        title: 'Roasted chicken on white ceramic plate, with vegetables by your choice',
        category: 'dinner',
        price: 35.59,
        img: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'Phasellus aliquam ac ex ac iaculis. Vestibulum finibus venenatis urna et feugiat. Nam pulvinar enim at nisl vehicula, eget rutrum justo egestas. Curabitur ornare malesuada purus, ac aliquam orci. Suspendisse ipsum dolor, ornare vel malesuada et, semper ac tortor.',
    },
    {
        id: 18,
        title: 'Fried crispy meat on blue plate',
        category: 'dinner',
        price: 27.49,
        img: 'https://images.unsplash.com/photo-1564851287875-fb73b71f0e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'Praesent eget blandit lectus, eget auctor sapien. Mauris lobortis orci nec velit dapibus ullamcorper. Suspendisse nisl libero, eleifend quis lacus a, luctus pretium lorem.',
    },
    {
        id: 19,
        title: 'Pizza with green leaves on brown wooden table',
        category: 'dinner',
        price: 25,
        img: 'https://images.unsplash.com/photo-1602104980741-b87a33837f9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'Aliquam vitae finibus ligula, non condimentum lacus. Pellentesque et lectus bibendum, interdum diam eget, eleifend tellus.'
    },
    {
        id: 20,
        title: 'Salmon in Pepper with mashed potatoes and asparagus',
        category: 'dinner',
        price: 36.79,
        img: 'https://images.unsplash.com/photo-1622123268092-d99ea535491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'Aliquam et urna urna. Etiam urna nibh, interdum eget condimentum at, hendrerit vitae dui. Nullam suscipit lacus nulla, vitae luctus erat molestie et. Phasellus ut magna vitae justo commodo suscipit. Integer mattis est pretium odio elementum accumsan.'
    },
    {
        id: 21,
        title: 'Sliced strawberries on pan cake',
        category: 'sweets',
        price: 16.99,
        img: 'https://images.unsplash.com/photo-1464219551459-ac14ae01fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        description: 'Mauris sed arcu ac nibh commodo faucibus vel eu urna. Sed semper quis justo nec imperdiet. Curabitur varius orci egestas volutpat molestie.'
    },
    {
        id: 22,
        title: 'Oatmeal with fruits',
        category: 'sweets',
        price: 14.99,
        img: 'https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        description: 'Sed at odio id dolor posuere molestie at sagittis augue. Etiam tristique orci ut urna bibendum iaculis. Fusce et lacus dui. Donec a egestas quam, condimentum eleifend nulla.',
    },
    {
        id: 23,
        title: 'Assorted flavor donuts',
        category: 'sweets',
        price: 11.99,
        img: 'https://images.unsplash.com/photo-1527515545081-5db817172677?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'Etiam cursus turpis sit amet libero iaculis, a iaculis sapien fermentum. Vivamus accumsan sem ac feugiat egestas.',
    },
    {
        id: 24,
        title: 'Red cherries on white cake',
        category: 'sweets',
        price: 14.99,
        img: 'https://images.unsplash.com/photo-1609610022054-8328f7bdd40c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'Suspendisse dictum purus sit amet turpis fringilla, eget fringilla diam mollis. Vivamus condimentum convallis massa vel tempor.',
    }
];

const sectionCenterEl = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {

        return `<article class="menu-item">
        
        <div class='item-info'>
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$ ${item.price}</h4>  
            </header>
            <div class='product'>
              <img class="photo" src=${item.img}>
              <p class="item-text">${item.description}</p>
            </div>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenterEl.innerHTML = displayMenu;
};



