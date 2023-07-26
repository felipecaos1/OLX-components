$( document ).ready(function() {
    
    //efecto hover sobre cada porcio de la esfera
    $( ".porcion1" ).hover(
        function() {
        $( ".porcion1" ).css("fill",'#072f35');
        $( ".p1" ).css("fill",'#5d777b');
        $( ".t1" ).addClass("show");
    }, function() {
        $( this ).css("fill",'#3a79f7');
        $( ".p1" ).css("fill",'#e0e0e0');
        $( ".t1" ).removeClass("show");
        }
      );
      $( ".porcion2" ).hover(
        function() {
        $( ".porcion2" ).css("fill",'#072f35');
        $( ".p2" ).css("fill",'#5d777b');
        $( ".t2" ).addClass("show");
        }, function() {
        $( this ).css("fill",'#3a79f7');
        $( ".p2" ).css("fill",'#e0e0e0');
        $( ".t2" ).removeClass("show");
        }
      );
    $( ".porcion3" ).hover(
        function() {
        $( ".porcion3" ).css("fill",'#072f35');
        $( ".p3" ).css("fill",'#5d777b');
        $( ".t3" ).addClass("show");
        }, function() {
        $( this ).css("fill",'#3a79f7');
        $( ".p3" ).css("fill",'#e0e0e0');
        $( ".t3" ).removeClass("show");
        }
      );
      $( ".porcion4" ).hover(
        function() {
        $( ".porcion4" ).css("fill",'#072f35');
        $( ".p4" ).css("fill",'#5d777b');
        $( ".t4" ).addClass("show");
        }, function() {
        $( this ).css("fill",'#3a79f7');
        $( ".p4" ).css("fill",'#e0e0e0');
        $( ".t4" ).removeClass("show");
        }
      );
      $( ".porcion5" ).hover(
        function() {
        $( ".porcion5" ).css("fill",'#072f35');
        $( ".p5" ).css("fill",'#5d777b');
        $( ".t5" ).addClass("show");
        }, function() {
        $( this ).css("fill",'#3a79f7');
        $( ".p5" ).css("fill",'#e0e0e0');
        $( ".t5" ).removeClass("show");
        }
      );
      $( ".porcion6" ).hover(
        function() {
        $(  ".porcion6" ).css("fill",'#072f35');
        $( ".p6" ).css("fill",'#5d777b');
        $( ".t6" ).addClass("show");
        }, function() {
        $( this ).css("fill",'#3a79f7');
        $( ".p6" ).css("fill",'#e0e0e0');
        $( ".t6" ).removeClass("show");
        }
      );
      $( ".porcion7" ).hover(
        function() {
        $( ".porcion7" ).css("fill",'#072f35');
        $( ".p7" ).css("fill",'#5d777b');
        $( ".t7" ).addClass("show");
        }, function() {
        $( this ).css("fill",'#3a79f7');
        $( ".p7" ).css("fill",'#e0e0e0');
        $( ".t7" ).removeClass("show");
        }
      );
});

// componente 3

window.addEventListener('DOMContentLoaded', event => {
  const sidebarToggle = document.body.querySelector('.sidebarToggle');
  const sidebar = document.body.querySelector('#side-bar');
  
  if (sidebarToggle) {
      sidebarToggle.addEventListener('click', event => {
          event.preventDefault();
          sidebar.classList.toggle("ocultar");
      });
  }

});