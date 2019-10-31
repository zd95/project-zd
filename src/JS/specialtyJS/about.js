//封装一个函数创建ul下的子元素
function creationFn (ul) {
  //循环创建ul下的li
  for (var i = 0; i <4 ; i++) {
    //定义li的宽高
    var w = ul.offsetWidth/2;
    var h = ul.offsetHeight/2;
    //创建li元素
    var liNode = document.createElement("li");
    //创建li下的img元素
    var imgNode = document.createElement("img");
    //设置img的src属性
     imgNode.src= ul.dataset.src;


     liNode.style.width = `${w}px`;
     liNode.style.height = `${h}px`;

     //设置每个img元素的位置
    imgNode.style.left = `${-(i%2*w)}px`;
    imgNode.style.top = `${-(Math.floor(i/2)*h)}px`;

     // 将创建的img添加至li元素中
    liNode.appendChild(imgNode);
    //将创建的li元素添加至ul元素中
    ul.appendChild(liNode);

  }
}



//将该模块导出
export default function () {
  //获取相关元素
  var aboutPics = document.querySelectorAll("#app .content .slideBox .slideLi > .aboutSlide > .about-pic");
  var aboutPicUl = document.querySelectorAll("#app .content .slideBox .slideLi > .aboutSlide > .about-pic > ul");
  //设置当鼠标移入时，每个li移动的距离
  var l = aboutPicUl[0].offsetWidth/2;
  var t = aboutPicUl[0].offsetHeight/2;



  //给每个ul添加li
  aboutPicUl.forEach((item)=>{
    creationFn(item);
  })

  //当鼠标移入每个aboutPic时，其内部li中的图片向中间聚拢，合成一张新的图片
  aboutPics.forEach((aboutPic)=>{
    //当鼠标移入时
    aboutPic.onmouseenter = function () {
      //获取该元素节点下的img元素
      var imgNodes = this.querySelectorAll("ul > li > img");
      //设置每个li的显示方式
      imgNodes.forEach((imgNode,index)=>{
        // switch (){case 0:  break}
      //  一种判断表达式：当switch中的表达式与case中的值相等时，需要执行的判断逻辑、
        //当执行完该逻辑之后，跳出当前判断，如果不满足继续往下匹配，
        //如果没有与表达式匹配的case,执行default中的逻辑
        switch (index) {
          case 0:
            //当鼠标移入时，下标为0的img的移动方式:从上至下移动
            //由于其本身的宽高和父元素相同，且其父元素已设置溢出隐藏，
            //当img的移动距离大于等于其父元素的宽高时，会被隐藏，
            //后面的图片会显示
            imgNode.style.top = `${t}px`;
            break;

          case 1:
            imgNode.style.left = `${-2*l}px`;
            break;

          case 2:
            imgNode.style.left = `${l}px`;
            break;

          case 3:
            imgNode.style.top = `${-2*t}px`;

        }
      })
    }

    //当鼠标移出时
    aboutPic.onmouseleave = function () {
      //获取该元素节点下的img元素
      var imgNodes = this.querySelectorAll("ul > li > img");
      //设置每个li的显示方式
      imgNodes.forEach((imgNode,index)=>{
        // switch (){case 0:  break}
        //  一种判断表达式：当switch中的表达式与case中的值相等时，需要执行的判断逻辑、
        //当执行完该逻辑之后，跳出当前判断，如果不满足继续往下匹配，
        //如果没有与表达式匹配的case,执行default中的逻辑
        switch (index) {
          case 0:
            //当鼠标移入时，下标为0的img的移动方式:从上至下移动
            //由于其本身的宽高和父元素相同，且其父元素已设置溢出隐藏，
            //当img的移动距离大于等于其父元素的宽高时，会被隐藏，
            //后面的图片会显示
            imgNode.style.top = `${0}px`;
            break;

          case 1:
            imgNode.style.left = `${-l}px`;
            break;

          case 2:
            imgNode.style.left = `${0}px`;
            break;

          case 3:
            imgNode.style.top = `${-t}px`;

        }
      })
    }

  })
}


