
var $id;

function setIdforShowMenu(id) {

    document.getElementById(`${id}`).querySelector('.dropdown-content').classList.toggle("show");
    document.getElementById(`${id}`).classList.toggle("show2");

    window.$id =`#${id} .dropbtn`;

    jqinput = `.dropdown-content:not(#${id} .dropdown-content)`;
    var dropdowns = $(jqinput)

    for (i = 0; i < dropdowns.length; i++) {

        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
    }

    jqinput2 = `.navbar-1row-t1__item-main:not(#${id}.navbar-1row-t1__item-main)`

    // var dropdownsList = document.querySelectorAll(jqinput2);

    var dropdownsList = $(jqinput2);

    console.log(dropdownsList);

    var j;

    for (j = 0; j < dropdownsList.length; j++) {
      var openDropdown = dropdownsList[j];
      if (openDropdown.classList.contains('show2')) {
        openDropdown.classList.remove('show2');
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
      if (openDropdown.classList.contains('show2')) {
        openDropdown.classList.remove('show2');
      }
    }

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//// data table just test

var dataSet = [
    [ "asid", "$320,800","ff","dd","$320,800" ],
    [ "solfat", "$170,750","fd","gd","$320,800" ],
    [ "manyaziom", "$86,000","dd","df","$320,800" ],
    [ "asid", "$320,800","gf","gf","$320,800"],
    [ "solfat", "$170,750","df","ddd","$320,800" ],
    [ "manyaziom", "$86,000","fs","sf","$320,800"],
];


    $('#example tfoot th#title').each(function () {
        var title = $(this).text();
        $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });

    var table = $('#example').DataTable({
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function (row) {
                        var data = row.data();
                        return 'Details for ' + data[0] + ' ' + data[1];
                    }
                }),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll(),
            }
        },
        columnDefs: [
            { className: 'none',
                targets:   -1,
            },
        ],
        fixedColumns: true,
        scrollY: 100,
        deferRender: true,
        scroller: {
            srowHeight: 40,
        },
        dom: "<<'table't><'page'p>>",
        data: dataSet,
        columns: [
            {title: "Title"},
            {title: "Price"},
            {title: "Change"},
            {title: "Minimum",className: "none"},
            {title: "Maximum",className: "none"},
        ],
    });

    table.columns().every(function () {
        var that = this;

        $('input', this.footer()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });

// function for menu 

function menuColOpen(){

 $('#nav-collapsed').removeClass('none');

 $('#mute').removeClass('none');

//  $('#mute').addClass('mute__toggle');

 $('body').addClass("fixed");

//  $('#mute').addClass("none");
//  document.getElementById('main-wrapper').style.marginRight = "26vw";

}

function menuColClose(){
  // document.getElementById('mute').classList.remove('none');

  $('#mute').addClass("none");

  $('#nav-collapsed').addClass('none');

  $('body').removeClass("fixed"); 



}









  