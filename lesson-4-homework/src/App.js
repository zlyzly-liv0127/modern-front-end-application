import logo from './logo.svg';
import './App.css';
//引入hook api
import React, {
  useState,
  useEffect,
} from 'react';

function App() {
  //四张图片的数组

  const image = [
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg",
    "image/4.jpg"
  ];
  const len = image.length;
  const wid = window.innerWidth/5;
  const [num, setNum] = useState(0);//初始显示第一张图片
  const [click, setClick] = useState(false);//记录鼠标点击状态，初始为false
  const [position, setPosition] = useState(0);//记录鼠标当前位置
  const [distance, setDistance] = useState(0);//记录移动的距离

  function addNum(){
    if(num+1 === len){
      return 0;
    }
    else return num+1;
  }
  function subNum(){
    if(num === 0){
      return len-1;
    }
    else return num-1;
  }
  //点击鼠标触发事件
  function mouseDown(e){
    setClick(true);
    //setNum(addNum());
    setPosition(e.clientX);//获取当前坐标
    //alert(e.clientX);
    setDistance(0);
  }
  //松开鼠标触发事件
  function mouseUp(){
    setClick(false);
    setDistance(0);
  }

  function mouseMove(e){
  //移动鼠标触发事件
    //setNum(addNum());
    if(!click) return;//未点击直接返回
    setDistance(e.clientX - position);
    if(distance > 0 && distance > wid){
      setNum(addNum());//向后翻
      setClick(false);//将点击设回false
    }
    else if(distance < 0 && distance + wid < 0){
      setNum(subNum());//向前翻
      setClick(false);//将点击设回false
    }
    else{
      if(!click) return;//鼠标如果松开，直接返回
    }
  }
  useEffect(() => { 
      //setInterval实现轮播
      //只会执行一次？参考一些网络资料，去掉第二个参数就不断重复执行
      //对闭包的概念理解的还是很模糊
      const interval = setInterval(() => {
        setNum(addNum());
      }, 3000);
      //console.log(wid)
      //每三秒播放下一张
      return () => {//return函数卸载副作用
        clearInterval(interval);
      };
  });
  return (
    <div className="App" onMouseMove={mouseMove} onMouseUp={mouseUp} onMouseDown={mouseDown}>
      <div>
      <img src={image[num]} width="70%" />
      </div>
      <div>
      <button id="last" onClick={ () => setNum(subNum()) }>last</button>
      <button id="next" onClick={ () => setNum(addNum()) }>next</button>
      </div>
    </div>
 
    
  );
}

export default App;
