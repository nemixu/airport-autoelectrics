const burgerIcon = $('.burger-button');
const mobileNav = $('.mobile-nav');
const mobileNavBg = $('.nav-background');
const mobileNavItem = $('.mobile-nav-link-items');
const toTop = document.getElementById('top-button');
const toTopMobile = $('top-button');

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

mobileNavItem.click(function(){
    mobileNavBg.removeClass('overlay-nav');
    mobileNav.removeClass('transition');
})


window.addEventListener('scroll', () => {
    if(window.scrollY > 700){
        toTop.classList.add('slide-in');
    }
    else if (window.scrollY < 600) {
         toTop.classList.remove('slide-in');
    } 
})

