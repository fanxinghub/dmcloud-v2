var gprop = require('../etc/config').prop;
var log4js = require('log4js');
var filename= __filename.split(gprop.file_split).pop();
log4js.configure({
  appenders: [
    {
      type: 'console'
    }
    ,
    {
      type: "file",
      filename: gprop.log_path+'mysql.log',
      maxLogSize: 10*1024*1024,
      backups:10,
      category: 'mysql'
    }
    ,
    {
      type: "file",
      filename: gprop.log_path+'access.log',
      maxLogSize: 10*1024*1024,
      backups:10,
      category: 'access'
    }
    //,
    //{
    //  type: "dateFile",
    //  filename: gprop.log_path+'access.log',
    //  "pattern":"-yyyy-MM-dd.log",
    //  "alwaysIncludePattern":false,
    //  category: 'access'
    //}
    ,
    {
      type: "file",
      filename: gprop.log_path+'error.log',
      maxLogSize: 10*1024*1024,
      backups:10,
      category: 'error'
    }
    ,
    {
      type: "file",
      filename: gprop.log_path+'dat.log',
      maxLogSize: 10*1024*1024,
      backups:10,
      category: 'remote'
    }
  ],
  "levels": {
    "[all]": gprop.log_level
  },
  replaceConsole: true
});

exports.use = function(app) {
  var access_log=log4js.getLogger("access");
  access_log.setLevel("debug");
  app.use(log4js.connectLogger(access_log, { level: 'auto', format:  ':method :url :status :response-time ms :remote-addr'}));
}
function do_log(name,level,filename,__line,content){
  //错误日志单独输出
  if(level=="error" && name!=level){
    name=level;
  }
  var logger=log4js.getLogger(name);
  if(!logger[level]){
    return;
  }
  if(!content){
    return;
  };
  var logger_filter=global.logger_filter || gprop.logger_filter;
  var log_content=__line?(filename+" line_"+__line+" "+content):(filename+" "+content);
  if(logger_filter){
    var reg = new RegExp(logger_filter, 'i');
    if(content.match(reg)){
      return logger[level](log_content);
    }else{
      return;
    }
  }
  logger[level](log_content);
}
exports.do_log=do_log;
exports.log_name="v1Api";

//do_log("mysql","error","mysql.js","","hello 好DA00-0040-C900-0221");