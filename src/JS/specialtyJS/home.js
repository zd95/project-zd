///

//获取每一屏需要添加的效果
const rightShow = "rightShow"
const rightHide = "rightHide"
const leftShow = "leftShow"
const leftHide = "leftHide"



var content = document.querySelector("#app .content ");//内容区

var homeLis = document.querySelectorAll("#app .content .slideBox > .homeSlideLi .homeSlide > .home-list .home-li")//获取home每一屏
var homeIcons = document.querySelectorAll("#app .content .slideBox > .homeSlideLi .homeSlide > .home-icons .home-icon");//home下的li
var oldIndex = 0;//标记上一次的索引
var homeIterval = 0;//清空定时器
var autoIndex = 0;//标记自动轮播时的索引




content.onmouseleave = function () {

  //当鼠标离开内容区，开启自动轮播
  autoPaly();

}
content.onmouseenter =function () {

  //当鼠标进入内容区，停止自动轮播
  clearInterval(homeIterval);
}

//删除添加
function clearClass (node) {

  node.classList.remove(rightShow)
  node.classList.remove(rightHide)
  node.classList.remove(leftShow)
  node.classList.remove(leftHide)
}
//自动轮播
function autoPaly(){
  //上来先清定时器
  clearInterval(homeIterval);
  homeIterval = setInterval(()=>{
    autoIndex++;
    if (autoIndex === homeLis.length){
      autoIndex = 0;//如果自动轮播至最后一屏，直接切换至第一屏
    }

   // 先将元素身上的类删除
    clearClass(homeLis[autoIndex]);
    clearClass(homeLis[oldIndex]);
    //在给目标元素添加类
    homeLis[autoIndex].classList.add(rightShow);//当前元素右显
    homeLis[oldIndex].classList.add(leftHide);//上一个元素左隐
    //小圆点实时显示
    iconFn(homeIcons,autoIndex);
    // //索引值变化之前先将其获取
        oldIndex = autoIndex;

  },2000)
}


//小圆点
function iconFn (icons,currentIndex) {
  icons.forEach((icon)=>{
    icon.classList.remove("iconActive")
  })
  icons[currentIndex].classList.add("iconActive")
}
//将该模块导出
export default function () {
  //首先直接调一把自动轮播
  autoPaly();
  //点击小圆点来执行手动轮播
  homeIcons.forEach((item,index)=>{
    //将索引的值设置为item的属性，便于操作
    item.index = index;
    //当点击小圆点时，切换每一屏
    item.onclick = function () {

      //执行手动轮播时先关闭定时器
      clearInterval(homeIterval);
      //当事件元的索引与上一次点击的索引相同时，不执行切换，依旧停留在当前屏
      if (this.index === oldIndex){
        return ;//直接跳出当前函数体，不执行该函数的内部逻辑
      }


      //当事件元触发时，先将自身的类及上一屏的类清掉{同开启定时器后先将上次的定时清掉}
      clearClass(homeLis[this.index]);
      clearClass(homeLis[oldIndex])
      //如果点击的是右边
      if(this.index > oldIndex){
        // 当前屏从右边显示
        homeLis[this.index].classList.add(rightShow);
        //上一屏从左边隐藏
        homeLis[oldIndex].classList.add(leftHide);
      }

      //如果点击的是左边
      if(this.index < oldIndex){
        // 当前屏从右边显示
        homeLis[this.index].classList.add(leftShow);
        //上一屏从左边隐藏
        homeLis[oldIndex].classList.add(rightHide);
      }

      //设置小圆点高亮
      iconFn(homeIcons,this.index);

      //索引值变化之前先将其获取
      oldIndex = this.index;
      //将当前的索引值标记为自动轮播时开始的索引值
      autoIndex = this.index;
    }
  })
}
