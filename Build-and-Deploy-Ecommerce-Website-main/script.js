let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }else{
        document.querySelector('#scroll-top').classList.remove('active');
    }

    if(window.scrollY > 60){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }

}

$(document).ready(function(){

    $(window).on('scroll load', function(){

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

});



var swiper = new Swiper('.gallery-slider', {
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop:true,  
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        634: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
    },
});


let accordion = document.querySelectorAll('.accordion-container .accordion');

accordion.forEach(acco =>{
    acco.onclick = () =>{
        accordion.forEach(subAcco => {subAcco.classList.remove('active')});
        acco.classList.add('active');
    }
});

// Sample products data (you might have this coming from a database or elsewhere)
const products = [
    { id: 1, name: 'Smart Watch', price: 100 },
    { id: 2, name: 'Fitness Tracker', price: 80 },
    // Add more products as needed...
];

// Initialize an empty cart
let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    
    if (productToAdd) {
        cart.push(productToAdd);
        console.log(`Added ${productToAdd.name} to the cart.`);
        // You can perform other actions here, like updating UI, storage, etc.
    } else {
        console.log(`Product with ID ${productId} not found.`);
    }
}

// Example usage: Adding a product with ID 1 to the cart
addToCart(1);

