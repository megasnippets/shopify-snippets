var feed = new Instafeed({
      
    accessToken: InstagramToken,
      template: '<div class="instaimg"><a href="{{link}}"><div class="instaimages" style=\'background: url("{{image}}"); background-size: cover; background-position: center;\'></div></a></div>', 
        after: function () {
        
  $('#instafeed').slick({
 dots: false,
 infinite: true,
    resize: true,
    rows: 1,
 speed: 500,
 slidesToShow: 6,

 autoplay: true,
 autoplaySpeed: 4000,
 arrows: false,
      responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },    
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 2
      }
    }
    
    
    ]
    
    
  });

    }

});


feed.run();






