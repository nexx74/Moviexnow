$(".wrapper").hide();

// Preloader
$(window).on('load',function(){
 $(".loader").remove();
 $(".overlay").remove();
 $(".wrapper").show();

});
