// Your JS code goes here.

var doParallax = function(element){

  var originalPosition = element.offset().top
  var altitude = element.data('altitude')

  $(window).scroll(function(){

    var distanceFromTop = $(window).scrollTop()

    element.css({
      top: originalPosition + (distanceFromTop * altitude)
    })

  })
}


var getParallax = function(element){

  if( element.data('original_position') ){
    var position = element.data('original_position')
  } else { 
    var position = element.offset().top
    element.data('original_position', position)
  }

  var altitude = element.data('altitude')
  var distanceFromTop = $(document).scrollTop()

  return position + (distanceFromTop * altitude)

}







$(function(){
  
  function setTops(){
    $('.section').each(function(){
      $(this).css({
        top: getParallax($(this)) + 'px'
      })
    })
  }

  $(document).scroll(setTops);
  setTops();

  $('#aboutbutton').click(function(event){
    event.preventDefault();
    $(window).scrollTo('#about', 1000);

  });
 
  $('#servicesbutton').click(function(event){
    event.preventDefault();
    $(window).scrollTo('#services', 1000);
  });

  $('#contactbutton').click(function(event){
    event.preventDefault();
    $(window).scrollTo('#contact', 1000);
  });

  
  $('#companybutton').click(function(event){
    $(window).scrollTo(952, 1000);
  });

  
  $('#partnersbutton').click(function(event){
    $(window).scrollTo(1765, 1000);
    
  });

  $('.logo_wrapper').click(function(){
    event.preventDefault();
    $(window).scrollTo('.maincontent_container',1000);
    $('nav#main li').removeClass('current');
  });





  $('.slider_wrapper ul').cycle({
    next: '.slider_wrapper ul'
  });

  

  $('.infica-wrapper').cycle({
    fx: 'scrollLeft',
    next: '.infica-next',
    

  });


          
  $('nav#main li').click(function() {
    $(this).addClass('current').siblings().removeClass('current');
  });
  

  $(window).scroll(function(){

    var distanceFromTop = $(window).scrollTop()

    if (distanceFromTop >= 0 && distanceFromTop <= 400) {
      $('#aboutbutton').removeClass('current').siblings().removeClass('current');
    }



    if (distanceFromTop >= 401 && distanceFromTop <= 825) {
      $('#aboutbutton').addClass('current').siblings().removeClass('current');
    }


    if (distanceFromTop >= 826 && distanceFromTop <= 1200) {
      $('#companybutton').addClass('current').siblings().removeClass('current');
    }

    if (distanceFromTop >= 1201 && distanceFromTop <= 1650) {
      $('#servicesbutton').addClass('current').siblings().removeClass('current');
    }

    if (distanceFromTop >= 1651 && distanceFromTop <= 2000) {
      $('#partnersbutton').addClass('current').siblings().removeClass('current');
    }

    if (distanceFromTop >= 2001 && distanceFromTop <= 2400) {
      $('#contactbutton').addClass('current').siblings().removeClass('current');
    }


  });
 





  






  








  
  
   
  

	
	 


	 
	   










	  



	   

	






})