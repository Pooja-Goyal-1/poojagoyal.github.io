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
});