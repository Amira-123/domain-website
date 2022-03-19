

$(window).on('load',function(){
    $('.load').fadeOut(2000);
    $('.home').fadeIn(2000);
})
$(document).ready(function(){
    
    //change nav color
    $(window).scroll(function(){
        if($(this).scrollTop()>80){
            $('nav').addClass('navbarbg');
        }
        else{
            $('nav').removeClass('navbarbg');
           
        }
    })
   
   
    $('.list').click(function(){
      
         $('ul').toggleClass('show');
         
    })
})