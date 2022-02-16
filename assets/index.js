$(document).ready(function() {
    $( ".menu_mobile" ).click(function() {
        if ($( "#menu" ).css("display") == "none") {
            $( "#menu" ).css("display" ,"flex");
            $( ".menu_mobile" ).css({"background-image":"url(assets/images/menu_black.png)"});
            $( ".menu_mobile" ).css("position","fixed");
        } else {
            $( "#menu" ).css("display" ,"none");
            $( ".menu_mobile" ).css("background-image", "url(assets/images/menu.png)");
            $( ".menu_mobile" ).css("position","absolute");
        }
      });
 });