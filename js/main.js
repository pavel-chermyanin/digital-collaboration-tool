$(function(){
    $('.menu-burger').on('click', function() {
        $('.menu').toggleClass('active');
        $('.menu-burger').toggleClass('active');
    });


    $('.btn-sub-list').on('click', function() {
        $('.menu__sublist').toggleClass('menu__sublist--active');
    })
    

});