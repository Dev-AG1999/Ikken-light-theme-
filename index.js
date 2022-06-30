$(document).ready(function(){
  $('.slider').slick({

      dots:true,
      arrows:false,
  });
  $('.slider2').slick({

      dots:true,
  });
  AOS.init();


  
});


// window.onscroll = function() {scrollFunction()};


function clickFunction() {

    document.getElementById("input").style.width = "80%";
//  document.getElementById("side-menu").style.display = "flex";
 document.getElementById("side-menu").style.width = "400px";
  
    document.getElementById("slider").style.filter = "brightness(0.6)";
    

  }

  function menuInput(){
    document.getElementById("input2").style.width = "80%";
  }

  

  function removeMenu(){
    document.getElementById("side-menu").style.width = "0"
    document.getElementById("slider").style.filter = "brightness(1)";
  }