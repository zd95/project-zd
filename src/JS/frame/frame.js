//引入所依赖的模块
import move from "./move/move"
import wheelFn from "./wheelFn/wheelFn"

//当页面加载完成时
export default function () {
  //获取头部导航元素
  var headNavs = document.querySelectorAll("#app .head .headMain .headNav .navItem");
  var content = document.querySelector("#app .content");
  var slideLis = content.querySelectorAll("#app .content .slideBox > .slideLi");
  var icons = document.querySelectorAll("#app .content .iconBox .icon");
  var homeNav = headNavs[0];//获取头部第一个导航，页面打开时，默认让小箭头移动至该导航下
  //获取箭头指针
  var arrow = document.querySelector("#app .head .headMain .arrow");

  //设置箭头指针的默认位置
  arrow.style.left = (homeNav.offsetLeft + homeNav.offsetWidth/2 - arrow.offsetWidth/2) + "px";

 if(headNavs.length === icons.length){
   // 设置头部导航（点击导航时，导航突出显示，其他导航消除突出）
   for (var i = 0; i < headNavs.length; i++) {
     //将i的值设置为目标元素的属性，可以跨模块操作
     headNavs[i].index = i;
     icons[i].index = i;
     headNavs[i].onclick = icons[i].onclick = function () {
       move(this.index);
     }

   }
 }
  //content区域    设置ul>li的高度
  slideLis.forEach((itme)=>{
    itme.style.height = content.offsetHeight + "px";
    console.log(content.offsetHeight)
  })

//鼠标滚轮事件
  var wheelTimer = 0;//将定时器的默认值设置为0
  content.index = 0;//将index设置为content的属性，便于跨模块使用
//如果用兼容火狐浏览器的方式监听滚轮事件
  if(content.addEventListener){
    content.addEventListener("DOMMouseScroll",(event)=>{
      //对滚轮的滚动方式设置防抖节流
      clearTimeout(wheelTimer)
      wheelTimer = setTimeout(()=>{
        //页面随滚轮而动
        wheelFn(event,content.index)
      },50)
    })
  }
//ie||chrome浏览器的方式监听滚轮事件

  content.onmousewheel = (event)=>{
    //对滚轮的滚动方式设置防抖节流
    clearTimeout(wheelTimer)
    wheelTimer = setTimeout(()=>{
      //页面随滚轮而动
      wheelFn(event,content.index)
    },50)
  }







  // 设置头部导航（点击导航时，导航突出显示，其他导航消除突出）
  // for (var i = 0; i < headNavs.length; i++) {
  //   (function (i) {//创建闭包
  //     headNavs[i].onclick = function () {
  //       //触发点击事件，一进来先将元素身上的类删掉
  //       for (var j = 0; j < headNavs.length; j++) {
  //         headNavs[j].classList.remove("active");
  //       }
  //       // 删掉之后再给对应的元素添加类
  //       headNavs[i].classList.add("active");
  //       //点击头部导航时，箭头指针指向该导航
  //       arrow.style.left = (headNavs[i].offsetLeft + headNavs[i].offsetWidth/2 - arrow.offsetWidth/2) + "px";
  //
  //     }
  //   })(i);
  // }
}
