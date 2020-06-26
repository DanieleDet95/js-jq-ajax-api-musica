$(document).ready(function() {
  // Attraverso una chiamata ajax all’Api di boolean avremo a
  // disposizione una decina di dischi musicali.
  // Servendoci di handlebars stampiamo tutto a schermo.
  // In questo momento non è importante la parte grafica.
  // Bonus: Creare una select con i seguenti generi: pop, rock,
  // metal e jazz. In base a cosa scegliamo nella select vedremo i
  // corrispondenti cd.

  // Chiamata ajax
  $.ajax(
    {
      url: 'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function(data){
        // Inserimento nella lista tutti i brani
        var listaCd = data.response;
        console.log(listaCd);
        var source = document.getElementById("cd-template").innerHTML;
        var template = Handlebars.compile(source);

        // Stampare a schermo tutti i cd
        for (var i = 0; i < listaCd.length; i++) {
          var cdSingolo = listaCd[i];
          var html = template(cdSingolo);
          $('.cds-container').append(html);
        }

        // Al click del genere da filtrare
        $('select#genere option').click(function(){

          // Inserire il genere selezionato nella variabile
          var genereSelezionato = $(this).val();
          console.log('genere selezionato: ' + genereSelezionato);

          // Far scomparire tutti gli album
          $('.cd').addClass('hidden');

          // Ciclare su tutti i cd
          for (var i = 0; i < listaCd.length; i++) {

            // Inserire nella variabile il genere del cd
            var genereCdSingolo = listaCd[i].genre;
            console.log('genereCdSingolo: ' + genereCdSingolo);

            // Se il genere selezionato é uguale al genere del cd rimuovere hidden
            if(genereCdSingolo == genereSelezionato){
              var visualizza = $('.cd');
              console.log(visualizza);
              // $(this).removeClass('hidden');
            }
          }

        });

      },
      error: function(){
        alert('Errore caricamento API');
      }
    });
});
