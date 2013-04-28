/* Initilize slided down navigation menu */
$(function () {
    var slideUpDelayer;

    $('#header-container').show(0);
    if ($.cookie("appery-preview-menu") == null) {
        $('#header-container').slideUp(0);
    }

    $('#header-trigger').click(function (event) {
        $('#header-container').slideDown();
        if (slideUpDelayer) {
            clearTimeout(slideUpDelayer);
            slideUpDelayer = null;
        }
        $.cookie("appery-preview-menu", "visible");
    });

    $('#header-close-trigger').click(function (event) {
        slideUpDelayer = null;
        $('#header-container').slideUp();
        $.cookie("appery-preview-menu", null);
    });

});            