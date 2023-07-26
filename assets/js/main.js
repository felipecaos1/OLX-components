jQuery( document ).ready(function() {
    
    //efecto hover sobre cada porcio de la esfera
    jQuery( ".porcion1" ).hover(
        function() {
        jQuery( ".porcion1" ).css("fill",'#072f35');
        jQuery( ".p1" ).css("fill",'#5d777b');
        jQuery( ".t1" ).addClass("show");
    }, function() {
        jQuery( this ).css("fill",'#3a79f7');
        jQuery( ".p1" ).css("fill",'#e0e0e0');
        jQuery( ".t1" ).removeClass("show");
        }
      );
      jQuery( ".porcion2" ).hover(
        function() {
        jQuery( ".porcion2" ).css("fill",'#072f35');
        jQuery( ".p2" ).css("fill",'#5d777b');
        jQuery( ".t2" ).addClass("show");
        }, function() {
        jQuery( this ).css("fill",'#3a79f7');
        jQuery( ".p2" ).css("fill",'#e0e0e0');
        jQuery( ".t2" ).removeClass("show");
        }
      );
    jQuery( ".porcion3" ).hover(
        function() {
        jQuery( ".porcion3" ).css("fill",'#072f35');
        jQuery( ".p3" ).css("fill",'#5d777b');
        jQuery( ".t3" ).addClass("show");
        }, function() {
        jQuery( this ).css("fill",'#3a79f7');
        jQuery( ".p3" ).css("fill",'#e0e0e0');
        jQuery( ".t3" ).removeClass("show");
        }
      );
      jQuery( ".porcion4" ).hover(
        function() {
        jQuery( ".porcion4" ).css("fill",'#072f35');
        jQuery( ".p4" ).css("fill",'#5d777b');
        jQuery( ".t4" ).addClass("show");
        }, function() {
        jQuery( this ).css("fill",'#3a79f7');
        jQuery( ".p4" ).css("fill",'#e0e0e0');
        jQuery( ".t4" ).removeClass("show");
        }
      );
      jQuery( ".porcion5" ).hover(
        function() {
        jQuery( ".porcion5" ).css("fill",'#072f35');
        jQuery( ".p5" ).css("fill",'#5d777b');
        jQuery( ".t5" ).addClass("show");
        }, function() {
        jQuery( this ).css("fill",'#3a79f7');
        jQuery( ".p5" ).css("fill",'#e0e0e0');
        jQuery( ".t5" ).removeClass("show");
        }
      );
      jQuery( ".porcion6" ).hover(
        function() {
        jQuery(  ".porcion6" ).css("fill",'#072f35');
        jQuery( ".p6" ).css("fill",'#5d777b');
        jQuery( ".t6" ).addClass("show");
        }, function() {
        jQuery( this ).css("fill",'#3a79f7');
        jQuery( ".p6" ).css("fill",'#e0e0e0');
        jQuery( ".t6" ).removeClass("show");
        }
      );
      jQuery( ".porcion7" ).hover(
        function() {
        jQuery( ".porcion7" ).css("fill",'#072f35');
        jQuery( ".p7" ).css("fill",'#5d777b');
        jQuery( ".t7" ).addClass("show");
        }, function() {
        jQuery( this ).css("fill",'#3a79f7');
        jQuery( ".p7" ).css("fill",'#e0e0e0');
        jQuery( ".t7" ).removeClass("show");
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
