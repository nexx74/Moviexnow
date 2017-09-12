
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


$(".stream-options a").click(function(event) {
  event.preventDefault();
  $getData = $(this).attr("href");
  document.getElementById("my-video_html5_api").src = $getData;
  document.getElementById("my-video_html5_api").load();
  document.getElementById("my-video_html5_api").play();

});
