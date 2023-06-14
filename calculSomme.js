


   function calculerSomme() {
   
     var r1 = parseInt(document.getElementById('r1').value);
     var r2 = parseInt(document.getElementById('r2').value);
     var r3 = parseInt(document.getElementById('r3').value);
     var r4 = parseInt(document.getElementById('r4').value);
     var r5 = parseInt(document.getElementById('r5').value);
     var r6 = parseInt(document.getElementById('r6').value);
     var r7 = parseInt(document.getElementById('r7').value);
     var r8 = parseInt(document.getElementById('r8').value);
     var r9 = parseInt(document.getElementById('r9').value);
     var r10 = parseInt(document.getElementById('r10').value);
     var r11 = parseInt(document.getElementById('r11').value);
     var r12 = parseInt(document.getElementById('r12').value);
     var r13 = parseInt(document.getElementById('r13').value);


     // Calculer la somme des réponses
     var somme = r1 + r2 + r3 +r4+r5+r6+r7+r8+r9+r10+r11+r12+r13;

// Afficher les résultats

      document.getElementById("res").textContent = "La somme est "+somme;

   }
//verifier la valeur entre 0 et 3 (pour Q1)
   function verifierValeur() {
    var input = document.getElementById("r1");
    var r1 = input.value;

    if (r1 >= 0 && r1 <= 3) {
      console.log("Valeur valide");
    } else {
      alert("Valeur non valide");
    }
  }
