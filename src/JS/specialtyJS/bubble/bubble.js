// //设置气泡
//
// //将定时器设置为对象的属性
// var bubbleInterval = {
//   //先将定时器清空
//   bubbleTimer1:0,
//   bubbleTimer2:0
// }
//
//
// //将该 模块内的数据包在一个对象内导出
// export default {
//   bubbleInterval,
//   //封装一个函数，设置气泡
//
//   bubbleFn:function (bubbleCtx) {
//     //上来先将两个定时器关掉
//     console.log("_____________");
//     clearInterval(bubbleInterval.bubbleTimer1);
//     clearInterval(bubbleInterval.bubbleTimer2);
//     //定义一个数组，用来存储绘制气泡的数据
//     var bubbleArr = [];
//     //获取绘制环境
//     var ctx = bubbleCtx.getContext("2d");
//
//
//     //使用定时器循环生成气泡绘制时所需要的数据
//     bubbleInterval.bubbleTimer1 = setInterval(()=>{
//       // 设置气泡的最大半径{且随机生成}
//       var radius = Math.round(Math.random()*6) + 4;
//       //设置气泡出现的坐标{在一定范围内随机出现}
//       // 设置气泡一开始的出现位置
//       //X轴随机，y轴限定范围
//       var x = Math.round(Math.random() * bubbleCtx.width);
//       var y = bubbleCtx.height - 2*radius;
//
//       //设置气泡的颜色
//       var r = Math.round(Math.random()*255);
//       var g = Math.round(Math.random()*255);
//       var b = Math.round(Math.random()*255);
//       var a = 1;
//
//
//
//       //设置气泡的运动轨迹
//       var deg = 0;
//       //获取气泡首次生成时的起始位置{生成气泡的圆心的坐标}
//       var startX = x;
//       var startY = y;
//
//       //设置每个气泡自身的运动幅度及轨迹{幅度最小不低于10}
//       var stepX = Math.round(Math.random()*50) + 10;
//       var stepY = Math.round(Math.random()*50)+10;
//
//       //将气泡的数据添加至数组中
//       bubbleArr.push({
//         radius,
//         x,
//         y,
//         r,
//         g,
//         b,
//         a,
//         deg,
//         startX,
//         startY,
//         stepX,
//         stepY
//       })
//
//     },50)
//
//     //绘制气泡
//     bubbleInterval.bubbleTimer2 = setInterval(()=>{
//       //清空画布
//       ctx.clearRect(0,0, bubbleCtx.width, bubbleCtx.height);
//       //遍历数组，获取绘制气泡的数据,并对其进行处理
//       bubbleArr.forEach((item,index)=>{
//         //设置气泡移动的角度
//         item.deg += 10;
//         //设置每个气泡生成时的坐标
//         item.x = item.startX - (Math.sin((item.deg*Math.PI)/180)*item.stepX)
//         item.Y = item.startY - ((item.deg*Math.PI)/180*item.stepY);
//
//         //当y小于半径时，将其清除
//         if(item.y < -2*item.radius){
//           bubbleArr.splice(index,1);
//         }
//       });
//
//       //绘制气泡
//       bubbleArr.forEach((item)=>{
//         ctx.save()
//         ctx.beginPath()
//         ctx.fillStyle = `rgba(${item.r},${item.g},${item.b},${item.a})`
//         ctx.arc(item.x,item.y,item.radius,0,2*Math.PI)
//         ctx.fill()
//         ctx.restore()
//       })
//     },1000/60)
//   }
//
// }
var intervalTimer = {
  timer1:0,
  timer2:0
}
export default {
  intervalTimer,
  qipaofn:function (oc) {
    clearInterval(intervalTimer.timer1)
    clearInterval(intervalTimer.timer2)

    var arr =[];
    var ctx = oc.getContext("2d");
    intervalTimer.timer1 = setInterval(()=>{
      var radius = Math.round(Math.random()*6) + 4;
      var x =  Math.round(Math.random() * oc.width);
      var y =  oc.height - radius ;

      var r = Math.round(Math.random() * 255);
      var g = Math.round(Math.random() * 255);
      var b = Math.round(Math.random() * 255);
      var a = 1;

      var deg = 0;
      var startX = x;
      var startY = y;
      var stepX = Math.round(Math.random()*40) + 10
      var stepY = Math.round(Math.random()*40) + 10

      arr.push({
        x,
        y,
        radius,
        r,
        g,
        b,
        a,
        deg,
        startX,
        startY,
        stepX,
        stepY
      })
    },50)
    intervalTimer.timer2 = setInterval(()=>{
      ctx.clearRect(0, 0, oc.width, oc.height)

      arr.forEach((item,index)=>{
        item.deg += 10;
        item.x =  item.startX - (Math.sin( (item.deg*Math.PI)/180 )*item.stepX)
        item.y =  item.startY - ((item.deg*Math.PI)/180*item.stepY)

        if(item.y < -item.radius){
          arr.splice(index,1)
        }
      })


      arr.forEach((item)=>{
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = `rgba(${item.r},${item.g},${item.b},${item.a})`;
        ctx.arc(item.x,item.y,item.radius,0,2*Math.PI)
        ctx.fill()
        ctx.restore()
      })
    },1000/60)
  }
}
