

var $id;


function setIdforShowMenu(id) {

    jqinput = `.dropbtn:not(#${id} .dropbtn)`;


    // console.log(jqinput);

    // console.log($('.dropbtn:not(#nav-li-1 .dropbtn)'))


    // var dropdowns2 = $(jqinput);
    // console.log(dropdowns2);


    document.getElementById(`${id}`).querySelector('.dropdown-content').classList.toggle("show");

   

    // var dropdowns = $(jqinput);
    // var i;
    // for (i = 0; i < dropdowns.length; i++) {
    //     var openDropdown = dropdowns[i];
    //     if (openDropdown.classList.contains('show')) {
    //       openDropdown.classList.remove('show');
    //     }
    // }

    // console.log(dropdowns);

    // var dropdowns = document.getElementsByClassName("dropdown-content");
    // var i;
    // for (i = 0; i < dropdowns.length; i++) {
    //     var openDropdown = dropdowns[i];
    //     if (openDropdown.classList.contains('show')) {
    //       openDropdown.classList.remove('show');
    //     }
    // }

   

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



//   function setIdforShowMenu(id) {
    
//     document.getElementById("myDropdown").classList.toggle("show");
//     window.$id =`#${id} .dropbtn`;
//   }











  // Close the dropdown if the user clicks outside of it
 

  

  