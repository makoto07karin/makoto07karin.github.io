$(function(){
    $('.slick-list').slick({
      autoplay: true, 
      autoplaySpeed: 0, 
      speed: 5000,
      cssEase: "linear", 
      slidesToShow: 3, 
      swipe: false, 
      arrows: false, 
      pauseOnFocus: false, 
      pauseOnHover: false, 
      responsive: [
        {
          breakpoint: 787,
          settings: {
            slidesToShow: 1, 
          }
        }
      ]
    });
  });