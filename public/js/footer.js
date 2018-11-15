$(function(){
  $(`<link href="favicon.ico" rel="shortcut icon">`).appendTo("head");
  $(`<link rel="stylesheet" href="css/footer.css"/>`).appendTo("head");
  $.ajax({
    url:"footer.html",
    type:"GET",
    success:function(res){
      $(res).replaceAll("#footer");
    }
  })
})