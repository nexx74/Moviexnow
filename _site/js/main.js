
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

// take video player link

$player = $("source").attr("src");
alert($player);

$(".stream-options a").click(function(event) {
  event.preventDefault();
  $getData = $(this).attr("href");

  $replaceData = $("source").attr("src","$getData");
  alert($replaceData);
});
