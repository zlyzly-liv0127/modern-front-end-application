
function getDateDiff(dateTimeStamp){
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var month = day * 30;
  var now = new Date().getTime();
  var diffValue = now - dateTimeStamp;
  if(diffValue < 0){return;}
  var monthD =diffValue/month;
  var weekD =diffValue/(7*day);
  var dayD =diffValue/day;
  var hourD =diffValue/hour;
  var minCD =diffValue/minute;
  if(monthD >= 1 ){
    result="" + parseInt(monthC) + "月前";
  }
  else if(weekD>=1){
    result="" + parseInt(weekC) + "周前";
  }
  else if(dayD>=1){
    result=""+ parseInt(dayC) +"天前";
  }
  else if(hourD>=1){
    result=""+ parseInt(hourC) +"小时前";
  }
  else if(minD>=1){
    result=""+ parseInt(minC) +"分钟前";
  }else
  result="刚刚";
  return result;
}

function aggregation(commentnum) {
  if (commentnum < 10000) return commentnum;//1w以内的评论无需聚合
  if (commentnum > 100000){//超过十万的评论聚合
    if (commentnum % 10000 > 5000){
      commentnum = commentnum/10000 + 1
      return commentnum.toString() +'万'
    }
    else{
      commentnum = commentnum/10000 - 1
      return commentnum.toString() +'万'
    }
  }
  //1-10万之间的评论聚合
  var str = ''
  if (commentnum % 1000 > 500){
    str += commentnum/10000
    str += '.'
    commentnum -= (commentnum/10000)*10000
    str += commentnum/1000 + 1
    return str +'万'
  }
  else{
    str += commentnum/10000
    str += '.'
    commentnum -= (commentnum/10000)*10000
    str += commentnum/1000 - 1
    return str +'万'
  }

}

function loading() {
  var addData = "";
      $.ajax({
        //请求方式
        type:"GET",
        //文件位置
        url:"result.json",
        //返回数据格式为json,也可以是其他格式如
        dataType: "json",
        //请求成功后要执行的函数，拼接html
        success: function(data){
          for(let i = 1;i<data.data.length;++i){
              addData +="<p class='center-header'>"
                 + data.data[i].title
                 + "</p><span class='category_video'>"
                 + data.data[i].chinese_tag 
                 + "</span>"
                 + data.data[i].media_avatar_url
                 + "<span>"
                 + data.data[i].source
                 + "</span><span>·</span><span></span>"
                 //+ data.data[i].comments_count
                 //+ "评论</span><span>·</span><span>";
          // 对时间戳操作
          
          var commentnum = data.data[i].comments_count;
          addData += aggregation(commentnum)+"评论</span><span>·</span><span>"
          var timestamp = data.data[i].behot_time;
          be_time = getDateDiff(timestamp*1000);
          addData += be_time+"</span><div></div>"
        
        }
        document.getElementsByClassName("center-content")[0].append(addData)
      }
    });
    
}


$(function() {

  loading()
});   
    
    
 