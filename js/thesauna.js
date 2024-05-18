$(function(){
    $('.zasauna_01-img').waypoint({
        handler: function (direction) {
          if (direction === 'down') {
            $(this.element).addClass('animate__fadeInLeft');
            this.destroy();
          }
        },
      
        offset: '70%',
      });

      $('.thesauna_02-img').waypoint({
        handler: function (direction) {
          if (direction === 'down') {
            $(this.element).addClass('animate__fadeInRight');
            this.destroy();
          }
        },
      
        offset: '70%',
      });

});
