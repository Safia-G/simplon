function changeCouleur(couleur) {
  document.body.style.backgroundColor = couleur;
}

function masqueBloc(blocId){
   var bloc = document.getElementById(blocId);
        bloc.style.display = "none";
}

function masqueBlocs(blocId){
  afficheTousLesBlocs();
  var bloc = document.getElementById(blocId);
  bloc.style.display = "none";
  /* ? on masque le bloc cliqué */
}

function afficheTousLesBlocs(){

  /* ? on affiche tous les blocs de la page » qu'ont ils en commun ? leur class ! */
  var blocs ht= document.getElementsByClassName("bloc");
  for (var i = 0; i < blocs.length; i++) {
    blocs[i].style.display = "block";
  }
}

var moi;
moi = "Safia";
moi = "Safia GOBET";
alert("Bienvenue " + moi);
