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

        // Stampare a schermo tutti i cd
        stampaCd(data);

        // Al click del genere da filtrare
        filtroGenere();

      },
      error: function(){
        alert('Errore caricamento API');
      }
    });
});

// Stampare a schermo tutti i cd
function stampaCd(data){
  // Inserimento nella lista tutti i brani
  var listaCd = data.response;
  console.log(listaCd);
  var source = document.getElementById("cd-template").innerHTML;
  var template = Handlebars.compile(source);

  for (var i = 0; i < listaCd.length; i++) {
    var cdSingolo = listaCd[i];
    var html = template(cdSingolo);
    $('.cds-container').append(html);
  }
}

// Al click del genere da filtrare
function filtroGenere(){
  $('select').change(function(){

    // Inserire il genere selezionato nella variabile
    var genereSelezionato = $(this).val();
    console.log('genere selezionato: ' + genereSelezionato);
    $('.cd').hide();
    $('.cd.' + genereSelezionato).show();
  });
}
