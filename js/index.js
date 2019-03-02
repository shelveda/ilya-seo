
var $id;

function setIdforShowMenu(id) {

    document.getElementById(`${id}`).querySelector('.dropdown-content').classList.toggle("show");

    window.$id =`#${id} .dropbtn`;

    jqinput = `.dropdown-content:not(#${id} .dropdown-content)`;
    var dropdowns = $(jqinput)

    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
    }

  }

  window.onclick = function(event) {
     if (!event.target.matches($id)) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
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
    [ "asid", "$320,800","","","","" ],
    [ "solfat", "$170,750","","","","" ],
    [ "manyaziom", "$86,000","","","","" ],
    [ "asid", "$320,800","","","","" ],
    [ "solfat", "$170,750","","","","" ],
    [ "manyaziom", "$86,000","","","","" ],
];
$(document).ready(function() {
    $('.table__child tfoot tr th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );
    var table = $('.table__child').DataTable({
        "autoWidth" : false,
        scrollY:        200,
        scrollCollapse: true,
        // width:
        paging:         false,
        dom:"<frtp>",
        data: dataSet,
        // "columns.width" : 20,
        columns: [
            { title: "عنوان" },
            { title: "قیمت" },
            // { title: "Change" },
            // { title: "Minimum" },
            // { title: "Maximum" },
            // { title: "Price" },
            // { title: "Time" },
        ]
    });
    table.columns().every( function () {
        var that = this;

        $( 'input' ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );








  