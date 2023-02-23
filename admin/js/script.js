$(function () {

    $('#aside .list1 > li > a').click(function () {
        if ($(this).hasClass('active')) {
            $('#aside .list1 > li > a').removeClass();
        } else {
            $('#aside .list1 > li > a').removeClass();
            $(this).addClass('active');
        }
        return false;
    });

});