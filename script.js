$(document).ready(() => {

    let $mobileNav = $('#mobile-menu');
    let $navUl = $('.nav-ul');

    $mobileNav.on('click', () => {
        let $burger = $('.burger');

        $burger.toggleClass('nav-open');
        $navUl.toggleClass('nav-open');
    });

});