//加载express模块
var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, '')))
app.listen(5501,function(){
    //启动服务器成功后的提示语
 console.log('App listening at port 5501');
})