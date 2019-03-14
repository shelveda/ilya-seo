
function showsignup(){

    $('body')
        .find('.form-signup').removeClass('d-none');

    $('body')
        .find('.form-sign').addClass('d-none');

}
function showsignin(){

    $('body')
        .find('.form-signup').addClass('d-none');

    $('body')
        .find('.form-sign').removeClass('d-none');

}
function signupmobile() {

    $('body')
         .find('.form-sign ')
         .find('.form-sign__content')
         .find('.form-sign__content--email').addClass('d-none');

    $('body')
        .find('.form-sign ')
        .find('.form-sign__content')
        .find('.form-sign__content--mobile').removeClass('d-none');
}