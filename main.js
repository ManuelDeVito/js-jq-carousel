// Rifate (con immagini a piacere e con il vostro gusto grafico) lo slider di immagini in jQuery come l'abbiamo visto stamattina.
// Aggiungete anche i pallini che si "muovono" di pari passo con le immagini.
// BONUS: cliccando su un pallino, si attiva l'immagine corrispondente. Ad esempio: sto visualizzando la prima immagine, clicco sul quarto pallino e si attiva direttamente la quarta immagine (oltre al pallino corrispondente ovviamente!)

$(document).ready(function() {

    $('.next i').click(function() {

        var img_corrente = $('img.active');

        img_corrente.removeClass('active');

        if (img_corrente.next('img').length) {
            img_corrente.next('img').addClass('active');

        } else {
            $('.slides :first-child').addClass('active');
        }

        var circles_corrente = $('i.active')
        circles_corrente.removeClass('active');

        if (circles_corrente.next('i').length) {
            circles_corrente.next('i').addClass('active');
        } else {
            $('.circles :first-child').addClass('active');
        }
    });

    $('.prev i').click(function() {

        var img_corrente = $('img.active');

        img_corrente.removeClass('active');

        if (img_corrente.prev('img').length) {
            img_corrente.prev('img').addClass('active')
        } else {
            $('.slides img:last-of-type').addClass('active');
        }
    });
});
