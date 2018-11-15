(async function(){
	$. ajax({
		url:"http://127.0.0.1:3000/index/lunbo",
		type:"get",
    dataType:"json",
    success: function(res) {
      //console.log(res);
      /*<div id="main">
      <!--轮播图-->
      <div class="shutter">
          <div class="shutter-img">*/
      var p=res[0]; //第一个图
      // console.log(p);
      var {id,img_url,title}=p;  //解构商品属性
      //console.log(p);
      var a=document.querySelector("#main>div:first-child>div:first-child>a:first-child")
      //console.log(a);
       var html= `<img src="${img_url}">`;
      a.innerHTML=html;
     // html+=`</a>`;
     //第二个
      var p=res[1];
      var {id,img_url,title}=p;
      var a=document.querySelector("#main>div:first-child>div:first-child>a:nth-child(2)");
      var html= `<img src="${img_url}">`;
       a.innerHTML=html;
      //
      var p=res[3];
      var {id,img_url,title}=p;
      var a=document.querySelector("#main>div:first-child>div:first-child>a:nth-child(3)");
      var html= `<img src="${img_url}">`;
       a.innerHTML=html;
       //
       var p=res[4];
      var {id,img_url,title}=p;
      var a=document.querySelector("#main>div:first-child>div:first-child>a:nth-child(4)");
      var html= `<img src="${img_url}">`;
       a.innerHTML=html;
       //
       var p=res[5];
      var {id,img_url,title}=p;
      var a=document.querySelector("#main>div:first-child>div:first-child>a:nth-child(5)");
      var html= `<img src="${img_url}">`;
       a.innerHTML=html;
    }
  });
})();
(async function(){
  $.ajax({
    url:"http://127.0.0.1:3000/index/tuijian",
    type:"get",
    dataType:"json",
    success: function(res) {
      console.log(res);
      /*<div id="main">
    <!--轮播图-->
    <div id="main">
      <div class="shutter">
      </div>
      <div id="wrap"> 
      </div>
      <div class="tuijian">
          <div class="text">
          </div>
          <div class="shangpin">
              <ul class="list">*/
      var html="";
      var ul=document.querySelector("#main>div:nth-child(3)>div:nth-child(2)>ul");
      console.log(parent);
      for(var i=0;i<res.length;i++){
        var p=res[i];
        console.log(p);
        var {id,title,img_url,price,button}=p;
        html+=`<li class="list-item">
        <a href="#"><img src="${img_url}"></a>
        <h2>${title}</h2>
        <h3>￥${price.toFixed(2)}</h3>
        <button><a href="#">${button}</a></button>
    </li>`;
    //console.log(html);
      }
      ul.innerHTML=html;
      console.log(html);
    }
  })
})()