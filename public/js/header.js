$(function(){
  $(`<link href="favicon.ico" rel="shortcut icon">`).appendTo("head");
  $(`<link rel="stylesheet" href="css/header.css"/>`).appendTo("head");
  $.ajax({
    url:"header.html",
    type:"GET",
    success:function(res){
      $(res).replaceAll("#header");
    }
  })
})