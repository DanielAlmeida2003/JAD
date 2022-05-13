function Hide_Menu() {

    $(".menu").addClass("hide");
    $('body').addClass('stop-scrolling')
    document.getElementById("Mobile_Options").style.marginLeft = '0%';

}

function Close_Menu() {

    $(".menu").removeClass("hide");
    $('body').removeClass('stop-scrolling')
    document.getElementById("Mobile_Options").style.marginLeft = '100%';

}

function ScreenMenu(x) {

    if (x.matches) { // If media query matches

    } else {

        $(".menu").removeClass("hide");
        $('body').removeClass('stop-scrolling')
        document.getElementById("Mobile_Options").style.marginLeft = '100%';

    }

}