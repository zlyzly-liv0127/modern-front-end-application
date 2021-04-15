import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";
export default function Home() {
  const [state, setState] = useState({
    data: {},
  });

  useEffect(() => {
    
    fetch("/api/hello").then(async (res) => {
      const data = await res.json();
      setState({
        data,
      });
    });
    
  }, []);
  let addData = "";
  let data = Array.from(state.data)
  return (
    
    <div>
      <Head>
        <title>toutiao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body class="homePage">
    <div className="toutiao-header">
    <span className="left-header1">下载APP</span><span className="left-header2">注册头条号</span><span className="left-header3">北京</span><span className="left-header4">浮尘</span><span className="left-header5">4℃/12℃</span>
    <div className="right-header">
        <span className="right-header1">侵权投诉</span><span className="right-header2">头条产品</span>
    </div>
    </div>
    <main>
        <div className="center-content">
            <p className="center-header">习近平向孟加拉国纪念“国父”穆吉布·拉赫曼诞辰100周年暨庆祝独立50周年活动发表视频致辞</p>
            <span className="category_video">视频</span>
            <img src="/images/yangshiwang.jpg"/>
            <span>央视网新闻</span><span>·</span><span>537评论</span><span>·</span><span>15小时前</span>
            <div></div>
            <img src="/images/USAprofessor.png" className="sideImg"/>
            <p className="center-header">美教授狠批“中国威胁论”，上万美国网友点赞</p>
            <span className="category_inter">国际</span>
            <img src="/images/huanqiuwang.jpg"/>
            <span>环球网</span><span>·</span><span>1.4万评论</span><span>·</span><span>16小时前</span>
            <div></div>
            {data.map((x, i) =><div><p className='center-header' key={i}>{x.title}</p><span className='category_video' key={i}>{x.chinese_tag}</span ><span>{x.source}</span><span></span></div>)}
        </div>
        <div className="sidebar1">
            <p className="toutiao">今日头条</p>
            <p className="recommendation">推荐</p>
            <p>西瓜视频</p>
            <p>热点</p>
            <p>直播</p>
            <p>图片</p>
            <p>科技</p>
            <p>娱乐</p>
            <p>游戏</p>
            <p>体育</p>
            <p>懂车帝</p>
            <p>财经</p>
            <p>数码</p>
            <p>更多</p>
        </div>
        <div className="sidebar2">
            <input type="text" className="fname" placeholder="搜索站内资讯视频或用户"/>
            <input type="submit" className="search" value="搜索" />
            <div className="logIn">
                <div className="logIn1">
                    <span>登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</span>
                    <input type="submit" className="logIn2" value="登录" />
                    <img src="/images/QQ.png"/>
                    <img src="/images/wechat.jpg"/>
                    <p>
                        <span>QQ 微信</span>
                    </p>
                </div>
            </div>
            <div className="sideChoice">
                <p className="firstChoice">
                    <span>更多</span>
                </p>
                <p className="otherChoice">
                    <span className="otherChoice1">关于头条</span><span className="otherChoice2">加入头条</span><span className="otherChoice3">媒体报道</span><span  className="otherChoice4">媒体合作</span>
                    <p></p>
                    <span className="otherChoice1">产品合作</span><span className="otherChoice2">合作说明</span><span className="otherChoice3">广告投放</span><span  className="otherChoice4">联系我们</span>
                    <p></p>
                    <span className="otherChoice1">用户协议</span><span className="otherChoice2">隐私政策</span><span className="otherChoice3">侵权投诉</span><span  className="otherChoice4">廉洁举报</span>
                    <p></p>
                    <span className="otherChoice1">企业认证</span><span className="otherChoice2">肺炎求助</span><span className="otherChoice3">辟谣专区</span>
                </p>
            </div>
            <div className="sideChoice">
                <p className="firstChoice">
                    <span>友情链接</span>
                </p>
                <p className="otherChoice">
                    <span className="otherChoice1">光明网</span><span class="otherChoice2">央广网</span><span className="otherChoice3">国际在线</span><span  className="otherChoice4">中国西藏网</span>
                    <p></p>
                    <span className="otherChoice1">参考消息</span><span className="otherChoice2">环球网</span><span className="otherChoice3">中青在线</span><span  className="otherChoice4">中青网</span>
                    <p></p>
                    <span className="otherChoice1">中工网</span><span className="otherChoice2">海外网</span><span className="otherChoice3">中国网</span><span  className="otherChoice4">未来网</span><span  class="otherChoice4">千龙网</span>
                    <p></p>
                    <span className="otherChoice1">新京报</span><span className="otherChoice2">北青网</span><span className="otherChoice3">法制晚报</span><span  className="otherChoice4">北京晨报</span>
                    <p></p>
                    <span className="otherChoice1">北京商报</span><span className="otherChoice2">北京娱乐信报</span><span className="otherChoice3">奥一网</span><span  className="otherChoice4">金羊网</span>
                    <p></p>
                    <span className="otherChoice1">华商网</span><span className="otherChoice2">新民网</span><span className="otherChoice3">红网</span><span  className="otherChoice4">中国江苏网</span>
                    <p></p>
                    <span className="otherChoice1">中国江西网</span><span className="otherChoice2">齐鲁网</span><span className="otherChoice3">南海网</span><span  className="otherChoice4">安徽网</span>
                    <p></p>
                    <span className="otherChoice1">河北新闻网</span><span className="otherChoice2">闽南网</span><span className="otherChoice3">海峡网</span><span  className="otherChoice4">华声在线</span>
                    <p></p>
                    <span className="otherChoice1">中国蓝TV</span><span className="otherChoice2">北国网</span><span className="otherChoice3">龙虎网</span><span  className="otherChoice4">东莞时间网</span>
                    <p></p>
                    <span className="otherChoice1">懂车帝</span><span className="otherChoice2">汽车之家</span><span className="otherChoice3">Onlylady女人杂志</span>
                    <p></p>
                    <span className="otherChoice1">中国搜索</span><span className="otherChoice2">每日经济新闻</span><span className="otherChoice3">网上车市</span>
                    <p></p>
                    <span className="otherChoice1">网通社汽车</span><span className="otherChoice2">北方网</span><span className="otherChoice3">湖南省旅发委官网</span>
                    <p></p>
                    <span className="otherChoice1">乐居网</span><span className="otherChoice2">人民论坛网</span><span className="otherChoice3">中国财富网</span>
                </p>
            </div>
            <div className="sideNote">
                <p>© 2021 今日头条</p>
                <p>扫黄打非网上举报</p>
                <p>网络谣言曝光台</p>
                <p>中国互联网举报中心 京ICP证140141号</p>
                <p>京ICP备12025439号-3 网络文化经营许可证</p>
                <p>营业执照</p>
                <p>京-非经营性-2016-0081</p>
                <p>互联网药品信息服务资格证书</p>
                <p>跟帖评论自律管理承诺书</p>
                <p>违法和不良信息举报：400-140-2108</p>
                <p>举报邮箱：jubao@toutiao.com</p>
                <p>公司名称：北京字节跳动科技有限公司</p>
                <p>京公网安备 11000002002023号</p>
            </div>
        </div>
    
    </main>
    </body>
    <style jsx>{`
      body  {
        font: 100% 宋体, 新宋体;
        margin: 0;
        padding: 0;
        background: white;
        color: black;
    }
    .toutiao-header {
        width: 100%;
        background: black;
        color: white;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .toutiao-header .left-header1{
        padding-left: 10px;
        padding-right: 5px;
        border-right: 1px solid white;
    }
    .toutiao-header .left-header2{
        padding-left: 5px;
        padding-right: 5px;
    }
    .toutiao-header .left-header3{
        padding-left: 5px;
        padding-right: 5px;
    }
    .toutiao-header .left-header4{
        padding-left: 5px;
        padding-right: 5px;
    }
    .toutiao-header .left-header5{
        padding-left: 5px;
    }
    .toutiao-header .right-header{
        float: right;  
    }
    .toutiao-header .right-header .right-header1{
        padding-right: 5px;
        border-right: 1px solid white;
    }
    .toutiao-header .right-header .right-header2{
        padding-left: 5px;
        padding-right: 10px;
    }
    .right-header::after{
        content: "";
        display: block;
        clear: both;
    }
    main{
        padding-left: 30%;
        padding-right: 30%;
    }
    main > div{
        float: left;
        width: 300px;
        padding: 10px;
        position: relative;
        background: white;
    
    }
    .center-content{
        padding: 0px 20px;
        width: 100%;
    }
    .center-content .center-header{
        font-weight: bold;
        font-family: Yuanti SC;
        font-size: 120%;
    }
    .center-content > span{
        padding-left: 3px;
        padding-right: 3px;
    }
    .center-content .category_video{
        border: 1px solid red;
        color: red;
        font-size: 80%;
    }
    
    .center-content .category_politics{
        border: 1px solid green;
        color: green;
        font-size: 80%;
    }
    .center-content .category_inter{
        border: 1px solid green;
        color: green;
        font-size: 80%;
    }
    .center-content > div{
        border-bottom: 1px solid grey;
        padding-bottom: 10px;
    }
    .center-content > img{ 
        max-width: 8%; 
    }
    .center-content .sideImg{
        float: left;
        padding-top: 20px;
        padding-right: 20px;
        max-width: 20%;
    }
    .sidebar1{
        width: 100px;
        padding: 0 5px;
        margin-left: -100%;
        right: 10px;
        text-align: center;
    
    }
    .sidebar1 .toutiao{
        color: red;
        font-size: 150%;
        font-weight: bold; 
        font-family: Yuanti SC;
    
    }
    .sidebar1 .recommendation{
        background: red;
        color: white;
    }
    .sidebar2{
        width: 200px;
        padding: 0 10px;
        margin-right: -10%;
    }
    .sidebar2 .fname{
        width: 200px;
        height: 25px;
    }
    .sidebar2 .search{
        width: 60px;
        height: 25px;
        background: blue;
        color: white;
    }
    .sidebar2 .logIn{
        margin-top: 10px;
        margin-bottom: 10px;
        background: grey;
        padding: 10px;
    }
    .logIn .logIn1{
        padding: 15px;
        background: white;
        border: 1px solid;
        text-align: center;
    }
    .logIn1 > span{
        font-size: 50%;
    }
    .logIn1 .logIn2{
        width: 200px;
        background: red;
        color: white;
        height: 40px;
    }
    .logIn1 > img{ 
        max-width: 12%; 
    }
    .sidebar2 .sideChoice{
        background: grey;
        margin-top: 20px;
        padding-left: 10px;
        padding-bottom: 10px;
        border-top:2px solid red;
    }
    .firstChoice{
        font-size: 130%;
        font-weight: bold;
    }
    .otherChoice1{
        padding-right: 5px;
        font-size: 90%;
    }
    .otherChoice2{
        padding-left: 5px;
        padding-right: 5px;
        font-size: 90%;
    }
    .otherChoice3{
        padding-left: 5px;
        padding-right: 5px;
        font-size: 90%;
    }
    .otherChoice4{
        padding-left: 5px;
        padding-right: 5px;
        font-size: 90%;
    }
    .otherChoice4{
        padding-left: 5px;
        font-size: 90%;
    }
    .sidebar2 .sideNote{
        background: grey;
        margin-top: 20px;
        padding: 10px;
        font-size: 90%;
    }
    `}</style>
    </div>
    )
}
