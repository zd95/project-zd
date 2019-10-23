//引入所依赖的模块
import move from "./move/move"

//当页面加载完成时
window.onload = function () {
  //获取头部导航元素
  var headNavs = document.querySelectorAll("#app .head .headMain .headNav .navItem");
  var homeNav = headNavs[0];//获取头部第一个导航，页面打开时，默认让小箭头移动至该导航下
  //获取箭头指针
  var arrow = document.querySelector("#app .head .headMain .arrow");

  //设置箭头指针的默认位置
  arrow.style.left = (homeNav.offsetLeft + homeNav.offsetWidth/2 - arrow.offsetWidth/2) + "px";

  // 设置头部导航（点击导航时，导航突出显示，其他导航消除突出）
  for (var i = 0; i < headNavs.length; i++) {
    //将i的值设置为目标元素的属性，可以跨模块操作
    headNavs[i].index = i;
      headNavs[i].onclick = function () {
        move(this.index);
      }
    
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
