$(document).ready(function (){
  

$('.owl-carousel').owlCarousel ({
    loop:true,
    margin:10,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



// $('.single-item-rtl').slick({
//   rtl: true
// });

$('.multiple-items').slick({
  infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
  dots: true,
  speed: 500,
  fade: false,
  adaptiveHeight: true,
  cssEase: 'linear',


});

  
})