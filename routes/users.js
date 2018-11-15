const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.post("/user",(req,res)=>{
  var {uname,upwd}=req.body;
  var sql=`select * from user where uname=? and upwd=?`;
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw err;
    res.WriteHead(200,{
      "Content-Type":"application/json;charset=uft-8",
      "Assess-Content-Allow-Origin":"*"
    });
    console.log(result);
    if(result.length>0){
      res.write(JSON.stringify({ok:1}));
    }else{
      res.write(JSON.stringify({
        ok:0,
        msg:"用户名或密码错误"
      }));
      res.end();
    }
  });
});
//导出路由
module.exports=router;