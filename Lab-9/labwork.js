$(document).ready(function(){
  $('h1').hide().slideDown('slow')
  $('ul').hide().slideDown('slow');


  $('li').mouseover(function() {
    $(this).fadeTo('slow', 0.25);

  $('li').mouseleave(function() {
    $(this).fadeTo('slow',1.0);


  $('ul').on('click', function(){
    $(this).text('Clicked').css('background-color', 'lightblue')
    .css('font-size','30px');

  /*$('ul').off('click', function(){
    $(this).text('')
  });*/
    });
   });
  });
});


/*$('li').mouseover(function(){
  $('li').css('background-color','red', );
$('li').mouseout(function(){
  $('li').css('background-color','pink');
});
});*/


/*$('h1').hide().slideDown();
   var $li = $('li');
   $li.hide().each(function(index){
     $(this).delay(700 * index).fadeIn(1000);

   });
   $li.on('click', function(){
       $(this).fadeOut(700);
  });

});*/



/*$('li').hide()
 .delay(500)
 .fadeIn(1400);*/
