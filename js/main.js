// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,

//     // // If we need pagination
//     // pagination: {
//     //     el: '.swiper-pagination',
//     // },

//     // // Navigation arrows
//     // navigation: {
//     //     nextEl: '.swiper-button-next',
//     //     prevEl: '.swiper-button-prev',
//     // },

//     // // And if we need scrollbar
//     // scrollbar: {
//     //     el: '.swiper-scrollbar',
//     // },
// });
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

