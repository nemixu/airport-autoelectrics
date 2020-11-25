const burgerIcon = $('.burger-button');
const mobileNav = $('.mobile-nav');
const mobileNavBg = $('.nav-background');

burgerIcon.click(function(){
    mobileNavBg.show();
    mobileNavBg.addClass('overlay-nav');
    mobileNav.addClass('transition');
    return false;
});

mobileNavBg.click(function(){
    mobileNavBg.removeClass('overlay-nav');
    mobileNav.removeClass('transition');
})

let toTop = document.getElementById('top-button');

window.addEventListener('scroll', () => {
    if(window.scrollY > 700){
        toTop.classList.add('slide-in');
    }
    else if (window.scrollY < 600) {
         toTop.classList.remove('slide-in');
    } 
})

