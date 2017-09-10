
// carousel
$('.owl-carousel').owlCarousel({

   loop:true,
   margin:8,
   autoplay:true,
   autoplayTimeout:2000,
   autoplayHoverPause:false,
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

var downloadContainerTitle =document.querySelector('.page').innerHTML;

    if (downloadContainerTitle === "Movies") {
      $(".movie-table").show();
    }
    else {
      $(".shows-table").show();
    }
