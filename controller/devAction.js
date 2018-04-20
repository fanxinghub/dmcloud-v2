/**
 * Created by Administrator on 2018/3/27.
 */
var util=require('./../util/util')
var devService=require('../service/devService')
function addDev(req,res){
    var sn=req.body.sn||req.query.sn;
    var domain_uuid=req.body.domain_uuid||req.query.domain_uuid
    var domain_name=req.body.domain_name||req.query.domain_name
    var ps=req.body.ps||req.query.ps
    if(!util.isSn(sn)||util.isNull(domain_uuid)||util.isNull(domain_name)){
        return res.json({success:false,reason:'参数错误'});
    }
    devService.checkSn(sn,function(err,ret) {
        if (err) {
            return res.json({success: false, reason: err});
        }
        if (ret > 0) {
            return res.json({success: false, reason: '设备序列号已存在'});
        } else {
            var productsn=util.strToBuffer(util.getStr(sn))
            console.log(productsn)
         devService.addDev(sn,domain_name,domain_uuid,ps,function(err,ret){
             if (err) {
                 return res.json({success: false, reason: err});
             }
             if(ret>0){
                 return res.json({success: true, reason:'',uuid:ret});
             }else{
                 return res.json({success: false, reason: err});
             }


         })
        }

    })

}
function checkSn(req,res){
    var sn=req.body.sn||req.query.sn;

    if(!util.isSn(sn)){
      return res.json({success:false,reason:'参数错误'});
    }
    devService.checkSn(sn,function(err,ret){
        if(err){
            return res.json({success:false,reason:err});
        }
        if(ret>0){
            console.log("SS")
            return res.json({success:false,reason:'设备序列号已存在'});
        }
        return res.json({success:true,reason:''});
    })

}
function deleteDev(req,res){
    var ids=req.body.ids||req.query.ids;
    var domain_uuid=req.body. domain_uuid||req.query. domain_uuid;
    if(util.isNull(domain_uuid)||util.isNull(ids)){
        return res.json({success:false,reason:'参数错误'});
    }
    devService.deleteDev(ids,domain_uuid,function(err,ret){
        if(err){
            return res.json({success:false,reason:err});
        }
        if(ret>0){
            return res.json({success:true,reason:""});
        }
        return res.json({success:false,reason:""});
    })
}
function getVersionList(req,res){
    var productId=req.body.productId||req.query.productId;
    console.log(productId)
    var search=req.body.search||req.query.search;
    var limit=req.body.limit||req.query.limit;
    var start=req.body.start||req.query.start;
    var page=req.body.page||req.query.page;
    devService.countVersionList(productId,search,function(err,total){
        if(err){
            return res.json({success:false,reason:err});
        }
        if(total){
            devService.getVersionList(productId,search,limit,start,page,function(err,ret){
                if(ret){
                    return res.json({success:true,versionList:ret,total:total});
                }
                return res.json({success:false,reason:""});
            })
        }else{
            return res.json({success:false,reason:""});
        }
    })

}
exports.addDev=addDev;
exports.checkSn=checkSn;
exports.deleteDev=deleteDev;
exports.getVersionList=getVersionList;