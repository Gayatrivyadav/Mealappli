//for searching
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#main  *").filter(function(){     $(this).toggle($(this).text().toLowerCase().indexOf(value) >-1)
    });
  });
});
//for showing favitem list
function showFav(name){
  var nameType = name.getAttribute("data-name");
  document.getElementById("fav").innerHTML += name.innerHTML+nameType+"<br>";
}
//for hide and show toggle effect
$(document).ready(function(){
$("#addto").click(function(){
$("#fav").toggle(2000);
});
});

