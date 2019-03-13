$(document).ready(function() {
    $('.container')
        .find('.form-sign ')
        .find('.form-sign__content')
        .find('.form-sign__content--mobile').addClass('d-none');

    $('.container')
    .find('.form-signup').addClass('d-none');

});
function showsignup(){

    $('.container').find('.form-sign').animate({height:'hide'},1000);

    $('.container').find('.form-signup').animate({height:'show'},1000).removeClass('d-none');

    // $('.container')
    //     .find('.form-signup').removeClass('d-none');

    // $('.container')
    //     .find('.form-sign').addClass('d-none');


}
function showsignin(){

    $('.container').find('.form-signup').animate({height:'hide'},1000);
    $('.container').find('.form-sign').animate({height:'show'},1000).removeClass('d-none');

    // $('.container')
    //     .find('.form-signup').addClass('d-none');
    // $('.container')
    //     .find('.form-sign').removeClass('d-none');

}
function signupmobile() {

    $('.container')
         .find('.form-sign ')
         .find('.form-sign__content')
         .find('.form-sign__content--email').animate({height:'hide'},1000);

    $('.container')
        .find('.form-sign ')
        .find('.form-sign__content')
        .find('.form-sign__content--mobile').animate({height:'show'},1000).removeClass('d-none');
}
function signupemail() {

    $('.container')
        .find('.form-sign ')
        .find('.form-sign__content')
        .find('.form-sign__content--email').animate({height:'show'},1000).removeClass('d-none');

    $('.container')
        .find('.form-sign ')
        .find('.form-sign__content')
        .find('.form-sign__content--mobile').animate({height:'hide'},1000);
}
