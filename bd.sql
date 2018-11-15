创建数据库 zhoudafu
DROP DATABASE IF EXISTS zhoudafu;
CREATE DATABASE zhoudafu CHARSET=utf8;

1.进入zhoudafu
   创建用户名user
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd VARCHAR(16)
);
INSERT INTO user VALUES(null,12345678910,123456);
INSERT INTO user VALUES(null,'1234567@qq.com',789456);
INSERT INTO user VALUES(null,78951234895,'z123456');
INSERT INTO user VALUES(null,1483256478,789651);
INSERT INTO user VALUES(null,15478965412,159753);
INSERT INTO user VALUES(null,145698752,147852);
功能一：登录（对数据进行查询）
SELECT count(uid) as c FROM xz_user
WHERE uname='12345678910' AND upwd=123456;

2.图片轮播表 imagelist
CREATE TABLE imagelist(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title VARCHAR(50),
);
INSERT INTO imagelist VALUES(null,'http://127.0.0.1:3000/image/shouye/header/niuyue-niuyue.jpg',' 纽约  纽约');
INSERT INTO imagelist VALUES(null,'http:127.0.0.1:3000/public/image/shouye/header/wangkai.jpg',' 王凯');
INSERT INTO imagelist VALUES(null,'http:127.0.0.1:3000/public/image/shouye/header/beijing.jpg',' 北京小风子');
INSERT INTO imagelist VALUES(null,'http:127.0.0.1:3000/public/image/shouye/header/xiong.jpg','熊');
INSERT INTO imagelist VALUES(null,'http:127.0.0.1:3000/public/image/shouye/header/pianai.jpg','偏爱');
INSERT INTO imagelist VALUES(null,'http:127.0.0.1:3000/public/image/shouye/header/dingzhi.jpg','裸钻定制');

3.index.html商品介绍
CREATE TABLE tuijian(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(32),
  img_url VARCHAR(125),
  price DECIMAL(10,2),
  button VARCHAR(32)
);
INSERT INTO tuijian VALUES(null,'布朗熊吊坠','image/shouye/header/bulang.png',1260.00,'立即购买');
INSERT INTO tuijian VALUES(null,'可妮兔吊坠','image/shouye/header/tutu.png',1260.00,'立即购买');
INSERT INTO tuijian VALUES(null,'可爱团子吊坠','image/shouye/header/keaituanzi.png',960.00,'立即购买');
INSERT INTO tuijian VALUES(null,'告白气球项链','image/shouye/header/gaobai.png',1700.00,'立即购买');
INSERT INTO tuijian VALUES(null,'皇冠天鹅吊坠','image/shouye/header/tiane.pn',1710.00,'立即购买');
INSERT INTO tuijian VALUES(null,'海豚爱心吊坠','image/shouye/header/aixin.png',4275.00,'立即购买');
INSERT INTO tuijian VALUES(null,'小心意戒指','image/shouye/header/xiaoxinyi.png',2755.00,'立即购买');
INSERT INTO tuijian VALUES(null,'女神系列戒指','image/shouye/header/nvshen.png',660.00,'立即购买');
INSERT INTO tuijian VALUES(null,'北斗星项链','image/shouye/header/beidouxing.png',3115.00,'立即购买');

4.商品详情表 productlist
CREATE TABLE productlist IF EXISTS productlist(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  img_url VARCHAR(125),
  new_price DECIMAL(10,2),
  old_price DECIMAL(10,2),
  sales INT
);
INSERT INTO productlist VALUES(null,'周大福车花心形足金黄金戒指 ','chehua.jpg',672.60,687.00,1953);
INSERT INTO productlist VALUES(null, '周大福经典车花足金黄金戒指', 'jdch.jpg', 1134.10 ,1148.50,523);
INSERT INTO productlist VALUES(null,'周大福银925紫晶蝴蝶吊坠','zjhd.jpg', 165.50, 490.00,540);
INSERT INTO productlist VALUES(null,'周大福CoCo Cat系列 精美银925紫晶手链', 'cococat.jpg', 902.50, 950.00 ,269);
INSERT INTO productlist VALUES(null,'周大福串珠足金黄金手链', 'chuanzhu.jpg',3419.10,  3469.50, 266);
INSERT INTO productlist VALUES(null, '周大福SOINLOVE经典系列 浪漫18K金钻石戒指','lovejd.jpg', 4704.00,4800.00,156
);
INSERT INTO productlist VALUES(null, '周大福典雅十字银925手链', 'dianya.png',342.00, 360.00 ,543
);
INSERT INTO productlist VALUES(null,'周大福MONOLOGUE独白系列9K金玫瑰色气质长款托帕石耳环耳钉','monol.jpg',  1898.10,1998.00,360
);
INSERT INTO productlist VALUES(null,'周大福时尚星星18K金钻石耳饰',  'stat.jpg', 1805.00,1900.00,357
);
INSERT INTO productlist VALUES(null, '周大福圣诞麋鹿玫瑰色18K金碧玺项链','milu.jpg', 3135.00, 3500.00, 165
);
INSERT INTO productlist VALUES(null, '周大福LOVE创意环扣18K玫瑰金项链','LOVE.jpg', 1598.00, 1880.00, 152
);
INSERT INTO productlist VALUES(null, '周大福逸彩简约时尚18K金钻石戒指','jysz.jpg', 3135.00, 3300.00, 57
);
INSERT INTO productlist VALUES(null,'周大福迪士尼公主灰姑娘18K玫瑰金钻石项链','hgn.jpg',  3040.00,  3200.00, 132);
INSERT INTO productlist VALUES(null, '故宫文化系列穿珠流苏黄金足金镶玛瑙珍珠耳环', 'gershi.jpg', 21800.00, null,56);
