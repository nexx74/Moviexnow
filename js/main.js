
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


// server-list


// select serverTitle
var serverTitle =document.querySelector('#top').innerHTML;

alert(serverTitle);
if (serverTitle === "Movies") {
    $("#title").append("choose servers");
}
else {
   $("#title").append("choose episodes");
}
