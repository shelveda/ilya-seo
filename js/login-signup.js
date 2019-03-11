$(document).ready(function() {
    $('.container')
        .find('.form-sign ')
        .find('.form-sign__content')
        .find('.form-sign__content--mobile').addClass('d-none');

    $('.container')
    .find('.form-signup').addClass('d-none');

});
function showsignup(){

    $('.container')
        .find('.form-signup').removeClass('d-none');

    $('.container')
        .find('.form-sign').addClass('d-none');

}
function showsignin(){

    $('.container')
        .find('.form-signup').addClass('d-none');

    $('.container')
        .find('.form-sign').removeClass('d-none');

}
function signupmobile() {

    $('.container')
         .find('.form-sign ')
         .find('.form-sign__content')
         .find('.form-sign__content--email').addClass('d-none');

    $('.container')
        .find('.form-sign ')
        .find('.form-sign__content')
        .find('.form-sign__content--mobile').removeClass('d-none');
}