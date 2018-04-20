/**
 * Created by Administrator on 2018/3/27.
 */
var devDao=require('../dao/devDao')
function checkSn(sn,cb){
   devDao.checkSn(sn,function(err,ret){
     if(err){
      return cb(err)
     }
       return cb(0,ret)
   })
}
function addDev(sn,domain_name,domain_uuid,productsn,cb){
   devDao.addDev(sn,domain_name,domain_uuid,productsn,function(err,ret){
       if(err){
           return cb(err)
       }
       return cb(0,ret)
   })
}
function deleteDev(ids,domain_uuid,cb){
    devDao.deleteDev(ids,domain_uuid,function(err,ret){
        if(err){
            return  cb(err)
        }
        return cb(0,ret)
    })
}
function  getVersionList(productId,search,limit,start,page,cb){
    devDao.getVersionList(productId,search,limit,start,page,function(err,ret) {
        if (err) {
            return cb(err)
        }
        return cb(0, ret)
    })
}
function  countVersionList(productId,search,cb){
    devDao.countVersionList(productId,search,function(err,ret) {
        if (err) {
            return cb(err)
        }
        return cb(0, ret)
    })
}
exports.checkSn=checkSn;
exports.addDev=addDev;
exports.deleteDev=deleteDev;
exports.getVersionList=getVersionList;
exports.countVersionList=countVersionList;