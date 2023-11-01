//у меня все таки почему то не работает импорт fancybox
//index.js:1 Uncaught SyntaxError: Cannot use import statement outside a module (at index.js:1:1)

// import Fancybox from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Fancybox.bind("[data-fancybox]", {});
// Fancybox.bind('[data-fancybox="gallery"]', {});


//здесь ошибка такая: main.min.js:14 Uncaught ReferenceError: Swiper is not defined
    // at main.min.js:14:14
    // at main.min.js:23:12

//вроде самое простое, что можно сделать, но не работает(((

// import Swiper from 'swiper';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
// import 'swiper/css';


// const swiper = new Swiper(".swiper", {
//     slidesPerView: "4",
//     direction: "horizontal",
//     loop: true,

//     navigation: {
//         nextEl: ".button-next",
//         prevEl: ".button-prev",
//     },
// });