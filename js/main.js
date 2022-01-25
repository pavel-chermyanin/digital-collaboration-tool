$(function(){
    $('.menu-burger').on('click', function() {
        $('.menu').toggleClass('active');
        $('.menu-burger').toggleClass('active');
    });


    $('.btn-sub-list').on('click', function() {
        $('.menu__sublist').toggleClass('menu__sublist--active');
        $('.arrow-down').toggleClass('menu__list-item--sub-menu-active');
    })
    
    $('.header__search').on('click', function() {
        $('.header__search-overlay').addClass('active');
    })

    $('.header__search-overlay').on('click', function(e) {
        if(!(e.target.className === 'header__search-input')) {
            $('.header__search-overlay').removeClass('active');
        }
    })
    
});