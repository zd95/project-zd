//设置滚轮事件的回调函数
import move from "../move/move"
export default function (ev,index) {
  ev = ev || event;//考虑兼容性；获取鼠标信息
  //获取需要滚动的区域{内容区}
  var content = document.querySelector("#app .content");
//获取小圆点
  var icons = document.querySelectorAll("#app .content .iconBox .icon");
//获取小圆点的个数，用于衡量滚动的位置
  var wheelLength = icons.length;
//声明一个变量来标记滚轮滚动的方向
  var dir = "";

//在ie或chrome浏览器中
  //如果存在滚轮事件，且滚动的增量>0
  if(ev.wheelDelta &&  ev.wheelDelta > 0){ //上滑：120
      dir = "up"
  }else if(ev.wheelDelta &&  ev.wheelDelta <0){ //如果存在滚轮事件，且滚动的增量<0
      dir = "down"                                          //下滑：-120
  }

  //如果是在火狐浏览器中
  if(ev.detail &&  ev.detail > 0){
    dir = "down"
  }else if(ev.detail &&  ev.detail < 0){
    dir ="up"
  }


  switch (dir){
    case "up"://当滚轮上滑时，index的变化范围
      index > 0 ? index-- : 0;
      move(index)
      break;
    case "down"://当滚轮下滑时，index的变化范围
      index < (wheelLength-1) ? index++ :(wheelLength-1) ;
      move(index)
      break;
  }
  content.index = index;
}
