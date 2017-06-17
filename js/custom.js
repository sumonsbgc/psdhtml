$(document).ready(function(){

/*
Adding Active class for isotope plugin
*/
    $('ul.portMenu').find('li').on('click', function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    }); 


/*
    This is for isotope activating.
*/    
    var $grid = $('.grid').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('.filter-button-group').on( 'click', '.button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });



/*
    This is for owl carousel..
*/

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        slideBy: 3,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:4,
                nav:true
            },
            1000:{
                items:6,
                nav:true,
                loop:false
            }
        }
    });

})
