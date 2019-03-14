
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



function setadv() {

    $('.container').find('.section-add').find('#adv').removeClass('d-none');
    $('.container').find('.section-add').find('#alarm').addClass('d-none');
    $('.container').find('.section-add').find('#news').addClass('d-none');


    $('.container').find('.section-add div ul li[onclick="setadv()"]').addClass('active');
    $('.container').find('.section-add div ul li[onclick="setalarm()"]').removeClass('active');
    $('.container').find('.section-add div ul li[onclick="setnews()"]').removeClass('active');
}

function setalarm() {

    $('.container').find('.section-add').find('#alarm').removeClass('d-none');
    $('.container').find('.section-add').find('#adv').addClass('d-none');
    $('.container').find('.section-add').find('#news').addClass('d-none');

    $('.container').find('.section-add div ul li[onclick="setalarm()"]').addClass('active');
    $('.container').find('.section-add div ul li[onclick="setadv()"]').removeClass('active');
    $('.container').find('.section-add div ul li[onclick="setnews()"]').removeClass('active');
}

function setnews() {

    $('.container').find('.section-add').find('#news').removeClass('d-none');
    $('.container').find('.section-add').find('#adv').addClass('d-none');
    $('.container').find('.section-add').find('#alarm').addClass('d-none');

    $('.container').find('.section-add div ul li[onclick="setnews()"]').addClass('active');
    $('.container').find('.section-add div ul li[onclick="setalarm()"]').removeClass('active');
    $('.container').find('.section-add div ul li[onclick="setadv()"]').removeClass('active');
}

function allspecs() {

    if($(".section-uinformation").find('.title-1row')
        .find('a[class=title-1row__header]').text()==='بازگشت') {

        var $i = $(".section-uinformation").animate({height:"100%",width:"98%"},1000).removeClass('d-grid-full');

        $('.section-uworks').removeClass('d-none');
        $('.section-add').removeClass('d-none');

        $i.find('.title-1row').find('a[class=title-1row__header]').text('همه مشخصات');
    }

     else {
        var $i = $(".section-uinformation").animate({height:"100%",width:"100%"},1000).addClass('d-grid-full');

        $('.section-uworks').animate({height: '100%'}, 1000).addClass('d-none');
        $('.section-add').animate({height: '100%'}, 1000).addClass('d-none');


        $i.find('.title-1row').find('a[class=title-1row__header]').text('بازگشت');
    }

}

function allworks() {

    if($(".section-uworks").find('.title-1row')
        .find('a[class=title-1row__header]').text()==='بازگشت') {

        var $w = $( ".section-uworks" ).animate({height:"100%",width:"98%"},1000).removeClass('d-grid-full');

        $('.section-uinformation').removeClass('d-none');
        $('.section-add').removeClass('d-none');

        $w.find('.title-1row').find('a[class=title-1row__header]').text('همه فعالیت ها');
    }

    else {
        var $w = $( ".section-uworks" ).animate({height:"100%",width:"100%"},1000).addClass('d-grid-full');

        $('.section-uinformation').animate({height: '100%'}, 1000).addClass('d-none');
        $('.section-add').animate({height: '100%'}, 1000).addClass('d-none');


        $w.find('.title-1row').find('a[class=title-1row__header]').text('بازگشت');
    }
}


$(document).ready(function(){
    $(".slider-change-price").slick({
        slidesToShow: 8,
        autoplay: true,
        autoplaySpeed: 10,
        speed:3500,
        rtl: true,
        arrows:false,
        pauseOnHover:false,
        pauseOnFocus:false,
        useTransform:false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]


    });
});
  