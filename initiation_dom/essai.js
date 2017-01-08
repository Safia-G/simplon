function Valider() {
  var monAge = document.getElementById('age').innerText;
    if (monAge < 18) {
      // innertext vous etes mineur
      alert("Vous êtes mineur !")
    } else {
      // innerText vous etes majeur
      alert("Vous êtes majeur !")
    }
}
