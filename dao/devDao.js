/**
 * Created by Administrator on 2018/3/27.
 */
var gprop = require('../etc/config').prop;
if(typeof __line=="undefined" && gprop.codeline){
    require('magic-globals');
}else{
    __line="";
}
var filename= __filename.split(gprop.file_split).pop();
var flog=require('../util/log');
var query=require("./../util/mysql").query;
var mysql=require("mysql");
function checkSn(sn,cb){
  var sql=" select count(*) as cnt from tbl_ne where 1=1 and product_sns='"+sn+"'" ;
    query(sql, function(err, ret, fields) {
        if (err){
            cb(err,0);
        }
        console.log(ret)
        if (ret[0].cnt) {
            return cb(0, ret[0].cnt);
        } else {
            return cb(0, 0);
        }
    });
}
function addDev(sn,domain_name,domain_uuid,productsn,cb){
    var str="("+domain_uuid+","+"'"+domain_name+"','"+sn+"','"+productsn+"')"
  var sql=" insert into tbl_ne (domain_uuid,domain_name,product_sns,product_sn) values " +str;
     query(sql, function(err, ret, fields) {
        if (err){
           return cb(err);
        }
        if (ret.affectedRows) {
            return cb(0,ret.insertId);
        } else {
            return cb(0, 0);
        }
    });
}
function deleteDev(ids,domain_uuid,cb){

    var sql="delete from tbl_ne where 1=1 and uuid in ("+ids+") and domain_uuid="+domain_uuid;
    query(sql, function(err, ret, fields) {
        if (err){
            return cb(err);
        }
        if (ret.affectedRows) {
            return cb(0,ret.affectedRows);
        } else {
            return cb(0, 0);
        }
    });
}
function  getVersionList(productId,search,limit,start,page,cb){
    var sql="select * from tbl_version where 1=1"
    if(productId){
        sql+=" and product_id ="+productId;
    }
    if(search){
        sql+=" and package_ver like % "+search+"%"
    }
    if(limit>0){
        sql+=" limit "+start+","+limit;
    }
    query(sql, function(err, ret, fields) {
        if (err){
            return cb(err);
        }
        if (ret) {
            return cb(0,ret);
        }
    });
}
function  countVersionList(productId,search,cb){
    var sql="select count(*) as cnt from tbl_version where 1=1"
    if(productId){
        sql+=" and product_id ="+productId;
    }
    if(search){
        sql+=" and package_ver like % "+search+"%"
    }
    query(sql, function(err, ret, fields) {
        if (err){
            return cb(err);
        }
        if (ret[0].cnt) {
            return cb(0,ret[0].cnt);
        }else{
            return cb(0,0);
        }
    });
}
exports.checkSn=checkSn;
exports.addDev=addDev;
exports.deleteDev=deleteDev;
exports.getVersionList=getVersionList;
exports.countVersionList=countVersionList