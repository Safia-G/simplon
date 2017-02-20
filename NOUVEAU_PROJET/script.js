//Animation Première Page.
$(window).scroll(function(){
    $(".page0").css("opacity", 1 - $(window).scrollTop() / 500);
  });



//Animations page2 :
//Mon parcours et mes experiences professionnelles

$(document).ready(function() {

var animation_elements = $.find('.animation-element');
var web_window = $(window);

function check_if_in_view() {
  var window_height = web_window.height();
  var window_top_position = web_window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each(animation_elements, function() {

    var element = $(this);
    var element_height = $(element).outerHeight();
    var element_top_position = $(element).offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      element.addClass('in-view');
    } else {
      element.removeClass('in-view');
    }
  });

}

$(window).on('scroll resize', function() {
    check_if_in_view()
  })
$(window).trigger('scroll');

});

//Animation page3 : progressbar

$(function() {

	$('.progressbar').each(function(){
		var t = $(this);
		var dataperc = t.attr('data-perc'),
				barperc = Math.round(dataperc*5.56);
		t.find('.bar').animate({width:barperc}, dataperc*25);
		t.find('.label1').append('<div class="perc"></div>');

		function perc() {
			var length = t.find('.bar').css('width'),
				perc = Math.round(parseInt(length)/5.56),
				labelpos = (parseInt(length)-2);
			t.find('.label1').css('left', labelpos);
			t.find('.perc').text(perc+'%');
		}
		perc();
		setInterval(perc, 0);
	});
});


//Animation du Formulaire de contact

$('input,textarea').blur(function () { // En sortant d'un champ du Form

        if($(this).siblings('label').attr('for')=='msg'){ // Si c'est le textarea Message
              $(this).parent().css('margin-bottom','0'); // On retire la marge
        }

        if ( $(this).val() != '' ) { // Si le champs est rempli
          $(this).siblings('label').addClass('labelOuvert'); // On laisse le label en petit
          if($(this).siblings('label').attr('for')=='msg'){ // Si c'est le champ message
              $(this).parent().addClass('messOuvert'); // Ajout de la classe pour agrandir le champ
              $(this).parent().css('margin-bottom','100px'); // On baisse le bouton
          }
        }
        else {
          $(this).siblings('label').removeClass('labelOuvert');
          if($(this).siblings('label').attr('for')=='msg'){ // Si c'est le textarea Message
            $(this).parent().removeClass('messOuvert'); // Retrait de la classe pour reduire le champ
          }
        }

});

$('textarea').focus(function () { // Au clic sur le textarea Message
  if($(this).val() == ''){ // Si le champ est vide
    $(this).parent().css('margin-bottom','100px'); // Rajout de la marge pour baisser le bouton submit
  }
});
