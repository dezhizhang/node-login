const http=require('http');
const Liburl=require('url');
const fs=require('fs');
const querystring=require('querystring');

//创建服务
var server=http.createServer(function(req,res){
 
//解析数据
  var str='';
  req.on('data',function(data){
     str+=data;

  });

  req.on('end',function(){
      var obj=Liburl.parse(req.url,true);
      var url=obj.parse;
      var GET=obj.query;

      var POST=querystring.parse(str);

  })
  //读取文件
  if(req.url=='/user'){

  }else{
      var file_name='./www'+url;
      fs.readFile(file_name,function(err,data){
          if(err){
              res.write('404');

          }else{
              res.write(data);
              
          }
      })
  }

});

server.listen('8082','localhost');

