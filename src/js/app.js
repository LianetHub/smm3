"use strict";


import * as devFunctions from './modules/functions.js';

//  init Fancybox
if (typeof Fancybox !== "undefined" && Fancybox !== null) {
    Fancybox.bind("[data-fancybox]", {
        dragToClose: false,
        closeButton: false
    });
}

document.addEventListener('DOMContentLoaded', () => {

    devFunctions.OS();
    devFunctions.isWebp();
    devFunctions.intInputMask();


    // event handlers

    document.addEventListener('click', (e) => {

        const target = e.target;

        if (target.closest('.icon-menu') || (target.classList.contains('menu__link') && document.querySelector('.header').classList.contains('open-menu'))) {
            getMenu()
        }

    });

    function getMenu() {
        document.body.classList.toggle('lock');
        document.querySelector('.header').classList.toggle('open-menu');
    }



    //  sliders


    if (document.querySelector('.reviews__slider')) {
        new Swiper('.reviews__slider .swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.reviews__next',
                prevEl: '.reviews__prev'
            },
            breakpoints: {
                743.98: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                991.98: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1199.98: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }

        })
    }


})




