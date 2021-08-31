$(document).ready(function(){
    let $btns = $('.skills-area .button-group button');

    $btns.click(function(e){
        $('.skills-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.skills-area .grid').isotope({
            filter:selector
        });

        return false;
    })

    //owl-carousel
    $('.site-main .projects-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive:{
            0: {
                item:1
            },
            544: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed(){
        if($('.header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll>=nav_offset_top){
                    $('.header_area .main-menu').addClass('navbar_fixed');
                }
                else{
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
            
        }
    }

    navbarFixed();

});

