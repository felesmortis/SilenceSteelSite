$(document).ready(function () {
    $('.size-fixed').each(function () {
        $(this).css('width', $(this).width());
    });
    $('.size-fluid').each(function () {
        $(this).css('width', 'auto');
    });
});