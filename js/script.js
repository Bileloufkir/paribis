$(document).ready(function(){
    
var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    accueilImg = $img.length - 1, // on définit l'accueil du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'accueil i (0 pour l'instant)

$img.css('display', 'none'); // on cache les images
$currentImg.css('display', 'block'); // on affiche seulement l'image courante

$carrousel.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');

$('.next').click(function(){ // image suivante

    i++; // on incrémente le compteur

    if( i <= accueilImg ){
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = accueilImg;
    }

});

$('.prev').click(function(){ // image précédente

    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

});

function slideImg(){
    setTimeout(function(){ // on utilise une fonction anonyme
						
        if(i < accueilImg){ // si le compteur est inférieur au dernier accueil
	    i++; // on l'incrémente
	}
	else{ // sinon, on le remet à 0 (première image)
	    i = 0;
	}

	$img.css('display', 'none');

	$currentImg = $img.eq(i);
	$currentImg.css('display', 'block');

	slideImg(); // on oublie pas de relancer la fonction à la fin

    }, 3000); // on définit l'intervalle à 7000 millisecondes (7s)
}

slideImg(); // enfin, on lance la fonction une première fois

//---------------------- haut de page ----------------------//
$('a').on('click',function(evt){
		let target = $(this).attr('href');
		$('html,body').stop().animate({
			scrollTop: $(target).offset().top - 70
		},2000);
		});
/*-----------------------------------------------*/



//$(function(){
	
	
	$(".offre1,.offre2,.offre3,.offre4").hide();



	$(".fas").click(function(){
		$(function(){
		$("div").show()
			});
	$(".offre1").addClass('bounce1');
	$(".offre2").addClass('bounce2');
	$(".offre3").addClass('bounce3');
	$(".offre4").addClass('bounce4');

		
	});
	
	/*$(function() {
  				$('.tarif').hide();
			});
	
			$(window).scroll(function(){  
        		posScroll = $(document).scrollTop();  
        		if(posScroll = 90)  
            $('.tarif').slideDown(550);  
        	else  
            $('.nav').slideUp(550);  
    		});  */
			
			 $('.tarif').hide();  // d'abord, on masque le deuxième menu de navigation, qui porte la classe "navigation2"
 var hauteur = 100; // XXX, c'est le nombre de pixels à partir duquel on déclenche le tout
 $(function(){
   $(window).scroll(function () {//Au scroll dans la fenetre on déclenche la fonction
      if ($(this).scrollTop() > hauteur) { //si on a défile de plus de XXX (variable "hauteur) pixels du haut vers le bas
            // $('nav').slideUp(550); // On masque le 1
            $('.tarif').slideDown(550); // On affiche le 2
      } else {
            $('.tarif').slideUp(550); // "et vice et versa" (© Les inconnus, 1990 ^^)
            // $('nav').slideDown(550);
      }
   });
 });
	$(function(){
    // Menu toggle-button
    $("nav").on("click", function(){
        $("nav ul").toggleClass("showing");
    });
});
function responsiveMenu() {	
	$('.menuTitle').click(function () {
		$('.menu').slideToggle("slow");
		$('.menu').css({"max-height":"800px"});
	});
};

$(function() {
	$(".menu").css({"display":"none","transition":"none","max-height":"inherit"});
	$("#toggleMenu").remove();
	responsiveMenu();
});


// animation titre ------------------------------------------------



$(function() {
   setTimeout(function() {
     $(".fly-in-text").removeClass("hidden");
   }, 500);
});

	
});












