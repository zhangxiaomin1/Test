const express=require("express");
const router=express.Router();
const pool=require("../pool");

//product
router.get("/",(req,res)=>{
  var sql="SELECT * FROM products";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
});

module.exports=router