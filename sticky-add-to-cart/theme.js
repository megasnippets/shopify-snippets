$(window).scroll(function(){

    myID = document.getElementById("sticky-add-to-cart");
  // var elementTarget = document.getElementById("prod-desc");
  
  // console.log($('#product-page--cart-form').offset().top + window.scrollY);
    
    if (window.scrollY >= $('.product-form').offset().top) {
    
  
      
    myID.className = "sticky-add-to-cart show";
    
    
    }
    
    else{
    
    
    myID.className = "sticky-add-to-cart hide";
    
    
    }
  
  
  
  
  
  
  });
  