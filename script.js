$(document).ready(() => {

    let $mobileNav = $('#mobile-menu');
    let $navUl = $('.nav-ul')

    $mobileNav.on('click', () => {
        let $burger = $('.burger');
        let $line1 = $burger.find('.line-1');
        let $line2 = $burger.find('.line-2');
        let $line3 = $burger.find('.line-3');

        

        $navUl.toggleClass('nav-open');
    });

});