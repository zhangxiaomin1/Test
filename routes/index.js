//引入所需要的组件
const express=require("express");
const router=express.Router();
const pool=require("../pool");

//index.html
//轮播图
router.get("/lunbo",(req,res)=>{
  var sql="SELECT * FROM image_list" ;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
//商品推荐
router.get("/tuijian",(req,res)=>{
  var sql="SELECT * FROM tuijian";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});



module.exports=router;