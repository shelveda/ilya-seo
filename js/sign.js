
function showsignup(){

    $('.form-sign').animate({height:'hide'},1000);
    $('.form-signup').animate({height:["100%","swing" ],duration: 5000},1000,'linear')
        .slideDown()
        .removeClass('d-none');

}
function showsignin(){

    $('.form-signup').animate({height:'hide'},1000);
    $('.form-sign').animate({height:["80%","swing" ],duration: 5000},1000,'linear')
        .slideDown()
        .removeClass('d-none');

}
function signupmobile() {

    $('.form-sign ')
        .find('.form-sign__content')
        .find('.form-sign__content--email').animate({height:'hide'},1000);

    $('.form-sign ')
        .find('.form-sign__content')
        .find('.form-sign__content--mobile').animate({height:["80%","swing" ],duration: 5000},1000,'linear')
        .slideDown()
        .removeClass('d-none');
}
function signupemail() {

    $('.form-sign ')
        .find('.form-sign__content')
        .find('.form-sign__content--email').animate({height:["100%","swing" ],duration: 5000},1000,'linear')
        .slideDown()
        .removeClass('d-none');

    $('.form-sign ')
        .find('.form-sign__content')
        .find('.form-sign__content--mobile').animate({height:'hide'},1000);
}