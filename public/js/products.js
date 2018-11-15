(async function(){
  $.ajax({
    url:"http://127.0.0.1:3000/products",
    type:"get",
    dataType:"json",
    success:function(res){
      console.log(res);
      var html="";
      /*
      <div id="main">
        <div class="start">
        </div>
        <div class="shop">
          <div  id="products">
            <div id="list">
            </div>
            <div id="product">
              <ul class="meil">
      */
      var ul=document.querySelector("#product>ul");
      console.log(ul);
      for(var i=0;i<res.length;i++){
        var p=res[i];
        console.log(p);
        var {id,title,img_url,new_price,old_price,sales}=p;
        html+=`<li>
        <a href="detail.html"><img src="${img_url}"></a>
        <h2>${title}</h2>
        <h3>￥${new_price}</h3>
        <h5>${old_price}</h5>
        <span>月销：</span><span>${sales}件</span>
    </li>`;
    //console.log(html);
      }
      ul.innerHTML=html;
      console.log(html);
    }
  })
})()