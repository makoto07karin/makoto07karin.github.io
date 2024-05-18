$(function(){
    $('.exhibition_01-img-left').waypoint({
        handler: function (direction) {
          if (direction === 'down') {
            $(this.element).addClass('animate__fadeInLeft');
            this.destroy();
          }
        },
      
        offset: '90%',
      });

      $('.exhibition_02-img-right').waypoint({
        handler: function (direction) {
          if (direction === 'down') {
            $(this.element).addClass('animate__fadeInRight');
            this.destroy();
          }
        },
      
        offset: '90%',
      });

      $('.exhibition_03-img-left').waypoint({
        handler: function (direction) {
          if (direction === 'down') {
            $(this.element).addClass('animate__fadeInLeft');
            this.destroy();
          }
        },
      
        offset: '90%',
      });

      $('.exhibition_04-img-right').waypoint({
        handler: function (direction) {
          if (direction === 'down') {
            $(this.element).addClass('animate__fadeInRight');
            this.destroy();
          }
        },
      
        offset: '90%',
      });

});
