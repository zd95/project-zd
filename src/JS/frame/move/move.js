//该模块负责处理元素的移动
//将该模块导出
export default function (index) {
  //获取头部导航元素
  var headNavs = document.querySelectorAll("#app .head .headMain .headNav .navItem");
  var homeNav = headNavs[0];//获取头部第一个导航，页面打开时，默认让小箭头移动至该导航下
  //获取箭头指针
  var arrow = document.querySelector("#app .head .headMain .arrow");


  for (var j = 0; j < headNavs.length; j++) {
    headNavs[j].classList.remove("active");
  }
  // 删掉之后再给对应的元素添加类
  headNavs[index].classList.add("active");
  //点击头部导航时，箭头指针指向该导航
  arrow.style.left = (headNavs[index].offsetLeft + headNavs[index].offsetWidth/2 - arrow.offsetWidth/2) + "px";

}
