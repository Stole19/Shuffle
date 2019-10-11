

$(document).ready(function () {


    let $randomNbr = $('.nbr');
    let $timer = 30;
    let $it;
    let $data = 0;
    let index;
    let change;
    let letters = ["s", "t", "o", "j", "a", "n", "c", "h", "o", "m", "i", "c", "e", "v", "s", "k","i"];


    $randomNbr.each(function () {

        change = Math.round(Math.random() * 100);

        $(this).attr('data-change', change);


    });


    function random() {

        return Math.round(Math.random() * 9);
    };

    function select() {

        return Math.round(Math.random() * $randomNbr.length + 1);

    };

    function value() {

        $('.nbr:nth-child(' + select() + ')').html('' + random() + '');

        $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);

        $data++;

        $randomNbr.each(function () {

            if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {

                index = $('.ltr').index(this);

                $(this).html(letters[index]);

                $(this).removeClass('nbr');
            }
        });

    };

    $it = setInterval(value, $timer);

   

});