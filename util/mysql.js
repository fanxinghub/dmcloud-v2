var gprop = require('../etc/config').prop;
if(typeof __line=="undefined" && gprop.codeline){
  require('magic-globals');
}else{
  __line="";
}
var filename= __filename.split(gprop.file_split).pop();
var flog=require('./log');

var mysql=require("mysql");
var pool = mysql.createPool({
  host     : gprop.mysql_url,
  user     : gprop.mysql_user,
  password : gprop.mysql_pwd,
  database : gprop.database
});
function getConnection(){
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host     : gprop.mysql_url,
    user     : gprop.mysql_user,
    password : gprop.mysql_pwd,
    database : gprop.database
  });
  connection.connect();
  return connection;
}
function query(sql,callback){
  var conn_str="mysql://"+gprop.mysql_url+":3306/"+gprop.database;
  //if(sql.indexOf("select")==0){
  //  flog.do_log("mysql","debug",filename,__line,sql+","+conn_str);
  //}else{
  //  flog.do_log("mysql","info",filename,__line,sql+","+conn_str);
  //}
  pool.getConnection(function(err,conn){
    if(err){
      flog.do_log("mysql","error",filename,__line,"获取连接失败,"+err+","+sql+","+conn_str);
      callback(err,null,null);
    }else{
      conn.query(sql,function(qerr,vals,fields){
        //释放连接
        conn.release();
        //事件驱动回调
        if(qerr){
          flog.do_log("mysql","error",filename,__line,"查询失败,"+qerr+","+sql+","+conn_str);
          callback(qerr);
        }else{
          if(sql.indexOf("select")==0){
            flog.do_log("mysql","debug",filename,__line,"查询成功,"+sql+","+conn_str);
          }else if(vals.affectedRows){
            flog.do_log("mysql","info",filename,__line,"查询成功,"+sql+",影响行数："+vals.affectedRows+","+conn_str);
          }else{
            flog.do_log("mysql","warn",filename,__line,"查询成功,"+sql+",未修改数据库，请注意检查sql语句"+","+conn_str);
          }
          callback(0,vals,fields);
        }
      });
    }
  });
}
var ret={
  getConnection:getConnection,
  query:query,
  escape:mysql.escape
}
module.exports=ret;
//query("update tbl_ne set rm_run_status=0 where product_sns='da00-0050-4600-0051'",function(err){
//
//})
//query("select *  from tbl_ne where product_sns='da00-0050-4600-0051'",function(err,ret){
//})