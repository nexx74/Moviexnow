$(".wrapper").hide();

// Preloader
$(window).on('load',function(){
 $(".loader").remove();
 $(".overlay").remove();
 $(".wrapper").show();

});

// carousel
$('.owl-carousel').owlCarousel({

   loop:true,
   margin:7,
   autoplay:true,
   autoplayTimeout:2000,
   autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }

    }
})
