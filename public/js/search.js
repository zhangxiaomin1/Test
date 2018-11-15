window.onload=function(){
  var tab=document.getElementById('tab-list');
  var list=document.getElementById('list').getElementsByTagName('li');
  var div=tab.getElementsByTagName('div');
  var timer=null;
  var index=0;
  for(var i=0;i<list.length;i++){
   list[i].num=i;
   list[i].onmouseover=function(){
    Change(this.num);
   }
  }
  function Change(curIndex){
   for(var i=0;i<list.length;i++){
    list[i].className="";
    div[i].className="hidden";
   }
   list[curIndex].className="active";
   div[curIndex].className="show";
   index=curIndex;
  }
  //自动播放
  function autoPlay(){
   timer=setInterval(function(){
    index++;
    if(index > list.length - 1){
     index=0;
    }
    Change(index);
   },80000);
  }
  autoPlay();
  tab.onmouseover=function(){
   clearInterval(timer);
  }
  tab.onmouseout=function(){
   autoPlay();
  }
 }