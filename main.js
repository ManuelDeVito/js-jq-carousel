// Rifate (con immagini a piacere e con il vostro gusto grafico) lo slider di immagini in jQuery come l'abbiamo visto stamattina.
// Aggiungete anche i pallini che si "muovono" di pari passo con le immagini.
// BONUS: cliccando su un pallino, si attiva l'immagine corrispondente. Ad esempio: sto visualizzando la prima immagine, clicco sul quarto pallino e si attiva direttamente la quarta immagine (oltre al pallino corrispondente ovviamente!)

$(document).ready(function() {

    $('.next i').click(function() {
        alert('ciao');

        // var img_corrente = $('img.active');
        //
        // img_corrente.removeClass('active');
        //
        // if (img_corrente.next().length) {
        //     img_corrente.next()addClass('active')
        // } else {
        //     $('.slides :first-child').addClass('active');
        // }
    });
});
