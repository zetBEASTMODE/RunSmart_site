/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                dots: true,
                arrows: false
                }
            }
        ]
      });
  }); */ /* slick-slider jQuery */

  var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controlsText: [
        '<img src="icons/arrow/left.png"></img>',
        '<img src="icons/arrow/right.png"></img>'
    ]
  });