$(function () {
    $(".menu-box").click(function () {
      $(".menu-box").addClass("box-open").not(this).removeClass("box-open");
      $(".item-alvo").hide();
      $("#item" + $(this).attr("target")).fadeIn();
    });
  });
  

  $(function () {
    $(".acordion-title").click(function () {
      var abierto = $(this).hasClass("acordion-open");
  
      if (abierto == false) {
        $(".acordion-title")
          .addClass("acordion-open")
          .not(this)
          .removeClass("acordion-open");
        $(".acordion-content").slideUp();
        $("#acordion" + $(this).attr("target")).slideDown();
      } else {
        $("#acordion" + $(this).attr("target")).slideUp();
        $(this).removeClass("acordion-open");
      }
    });
  });
  

  $(function () {
    var slide = $(".slider ul li"); 
    var slideC = slide.length; 
  
    counter = 0; 
  
    var liInicio = slide[0]; 
    var liFinal = slide[slideC - 1]; 
  
    $(liInicio).show(); 
  
    document.getElementById("slide-left").disabled = true; 
  

    $("#slide-right").click(function () {
      if (slide[counter] == liFinal) {
        document.getElementById("slide-right").disabled = true;
      } else {
        document.getElementById("slide-left").disabled = false;
        counter = (counter + 1) % slide.length;
  
        $(slide).hide();
        $(slide[counter]).fadeIn();
      }
    });
  

    $("#slide-left").click(function () {
      if (slide[counter] == liInicio) {
        document.getElementById("slide-left").disabled = true;
      } else {
        document.getElementById("slide-right").disabled = false;
        counter = (slide.length + counter - 1) % slide.length;
  
        $(slide).hide();
        $(slide[counter]).fadeIn();
      }
    });
  

    $("#reload").click(function () {
      counter = 0;
      $(slide).hide();
      $(slide[0]).fadeIn();
      document.getElementById("slide-right").disabled = false;
      document.getElementById("slide-left").disabled = true;
    });
  });
  