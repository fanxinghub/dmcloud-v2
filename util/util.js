/**
 * Created by Administrator on 2018/3/27.
 */
function isSn(sn){
    if(/^[a-fA-F0-9]{4}(-)[a-fA-F0-9]{4}(-)[a-fA-F0-9]{4}(-)[a-fA-F0-9]{4}$/.test(sn)){
        return true;
    }
    return false;
}
function isNull(str){
    if(str==""||str==undefined){
        return true;
    }
    return false;
}
function getStr(sn){
  var newSn=sn.trim().toUpperCase().replaceAll("-","")
  return newSn;
}

function strToBuffer(str){
    const bytes = Buffer.from(str,"hex");
    return bytes;
}
exports.isSn=isSn;
exports.isNull=isNull;
exports.getStr=getStr
exports.strToBuffer=strToBuffer;
