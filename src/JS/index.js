//使用Babel编译该文件
// import "@babel/polyfill"
import frameFn from "./frame/frame"
import maskFn from "./specialtyJS/mask"
// import homeFn from "./specialtyJS/home"
import teamFn from "./specialtyJS/tema"
// import "./specialtyJS/course"
// import "./specialtyJS/works"
import aboutFn from "./specialtyJS/about";
// import "./specialtyJS/about"
// import "./specialtyJS/tema"


//执行业务逻辑
window.onload = function(){
  frameFn();
  // homeFn();
  aboutFn();
  teamFn();
  maskFn()
}

//处理用户缩放
window.onresize = function () {
  //当用户缩放页面时，让浏览器根据缩放后的页面对JS中的设置的滑屏进行重绘
  //使页面始终只显示一屏
  var headNavs = document.querySelectorAll("#app .head .headMain .headNav .navItem");
  var content = document.querySelector("#app .content");
  var slideLi = content.querySelectorAll("#app .content .slideBox > .slideLi ");
  var arrow = document.querySelector("#app .head .headMain .arrow");
  var homeNav = headNavs[0];//获取头部第一个导航，页面打开时，默认让小箭头移动至该导航下

  slideLi.forEach((sli)=>{
    sli.style.height = content.offsetHeight + "px";
  })


  arrow.style.left = (homeNav.offsetLeft + homeNav.offsetWidth/2 - arrow.offsetWidth/2) + "px";


}
