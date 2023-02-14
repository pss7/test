$(function () {

    $('#aside .list1 > li > a').click(function () {
        if ($(this).hasClass('active')) {
            $('#aside .list1 > li > a').removeClass();
            $('#aside .list2').slideUp();
        } else {
            $('#aside .list1 > li > a').removeClass();
            $(this).addClass('active');
            $('#aside .list2').slideUp();
            $(this).next().slideDown();
        }
        return false;
    });

});