
var $id;

function setIdforShowMenu(id) {

    document.getElementById(`${id}`).querySelector('.dropdown-content').classList.toggle("display-block");
    document.getElementById(`${id}`).classList.toggle("active-theme");

    window.$id =`#${id} .dropbtn`;

    jqinput = `.dropdown-content:not(#${id} .dropdown-content)`;
    var dropdowns = $(jqinput)

    for (i = 0; i < dropdowns.length; i++) {

        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('display-block')) {
          openDropdown.classList.remove('display-block');
        }
    }

    jqinput2 = `.navbar-1row-t1__item-main:not(#${id}.navbar-1row-t1__item-main)`

    // var dropdownsList = document.querySelectorAll(jqinput2);

    var dropdownsList = $(jqinput2);

    console.log(dropdownsList);
    var j;

    for (j = 0; j < dropdownsList.length; j++) {
      var openDropdown = dropdownsList[j];
      if (openDropdown.classList.contains('active-theme')) {
        openDropdown.classList.remove('active-theme');
      }
    }

}

window.onclick = function(event) {
  if (!event.target.matches($id)) {
    var dropdowns = document.getElementsByClassName("dropdown-content");

    var dropdownsList = document.querySelectorAll('li');

    var j;
    for (j = 0; j < dropdownsList.length; j++) {
      var openDropdown = dropdownsList[j];
      if (openDropdown.classList.contains('active-theme')) {
        openDropdown.classList.remove('active-theme');
      }
    }

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('display-block')) {
        openDropdown.classList.remove('display-block');
      }
    }
  }
}


// function for menu 

function menuColOpen(){

 $('#nav-collapsed').removeClass('none');

 $('#mute').removeClass('none');


 $('body').addClass("fixed");
 

}

function menuColClose(){

  $('#mute').addClass("none");

  $('#nav-collapsed').addClass('none');

  $('body').removeClass("fixed"); 

}
//slick

$(document).ready(function(){

    $(".news-box").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true,
        accessibility:false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function() {

    // $('.container').find('.section-add').find('#adv').addClass('d-none');
    $('.container').find('.section-add').find('#alarm').addClass('d-none');
    $('.container').find('.section-add').find('#news').addClass('d-none');
    $('.container').find('.section-add div ul li[onclick="setadv()"]').addClass('active');
});

function setadv() {

    $('.container').find('.section-add').find('#alarm').addClass('d-none');
    $('.container').find('.section-add').find('#news').addClass('d-none');
    $('.container').find('.section-add').find('#adv').addClass('d-none');
    
    $('.container').find('.section-add').find('#adv').removeClass('d-none');
    $('.container').find('.section-add div ul li[onclick="setadv()"]').addClass('active');
    $('.container').find('.section-add div ul li[onclick="setalarm()"]').removeClass('active');
    $('.container').find('.section-add div ul li[onclick="setnews()"]').removeClass('active');
}

function setalarm() {

    $('.container').find('.section-add').find('#adv').addClass('d-none');
    $('.container').find('.section-add').find('#news').addClass('d-none');
    $('.container').find('.section-add').find('#alarm').removeClass('d-none');
    $('.container').find('.section-add div ul li[onclick="setalarm()"]').addClass('active');
    $('.container').find('.section-add div ul li[onclick="setadv()"]').removeClass('active');
    $('.container').find('.section-add div ul li[onclick="setnews()"]').removeClass('active');
}

function setnews() {

    $('.container').find('.section-add').find('#adv').addClass('d-none');
    $('.container').find('.section-add').find('#alarm').addClass('d-none');
    $('.container').find('.section-add').find('#news').removeClass('d-none');
    $('.container').find('.section-add div ul li[onclick="setnews()"]').addClass('active');
    $('.container').find('.section-add div ul li[onclick="setalarm()"]').removeClass('active');
    $('.container').find('.section-add div ul li[onclick="setadv()"]').removeClass('active');
}

$(document).ready(function(){
    $(".slider-change-price").slick({
        slidesToShow: 8,
        autoplay: true,
        autoplaySpeed: 5,
        speed:3500,
        rtl: true,
        arrows:false,
        adaptiveHeight:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        useTransform:false


    });
});



  