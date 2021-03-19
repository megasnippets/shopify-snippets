var feed = new Instafeed({
      limit: 12,
    accessToken: InstagramToken,
  template: '<a href="{{link}}" target="_blank"><div class="instafeed-image-square"><img src="{{image}}"/></div></a>', 
        after: function () {
        
  $('#instafeed').slick({
 dots: false,
 infinite: true,
    resize: true,
    rows: 1,
 speed: 500,
 slidesToShow: 8,
lazyLoad: 'ondemand',
 autoplay: true,
 autoplaySpeed: 4000,
 arrows: false,
      responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 6,
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
    }
    
    
    ]
    
    
  });

    }

});


feed.run();






