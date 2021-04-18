$(document).ready(function () {

    //Smooth scrolling
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    //tooltip
    $('[data-toggle="tooltip"]').tooltip()

    // toggle 
    $('#destacados').on('dblclick', 'h2', function () {
        $('.cartas').toggle()
    });

    //cambiar color h2

    $("h2").on("click", function () {
        $(this).css("color", "#17A2B8");
    });


});
