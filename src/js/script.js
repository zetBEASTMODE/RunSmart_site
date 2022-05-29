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

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    responsive: {
        320: {
            nav: true,
            navPosition: "bottom"
        },
        1100: {
            nav: false,
        }
    }
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });  /* tiny-slider */