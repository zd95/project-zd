//引入该模块所依赖的模块
import bubbleObjFn from "./bubble/bubble";
//将该模块导出
export default function () {
  var bubbleObj = document.querySelector("#app .content .slideBox .slideLi .teamSlide > .team-person > .bubble");
  var teamLis = document.querySelectorAll("#app .content .slideBox .slideLi .teamSlide > .team-person > .team-ul > .team-li");
  var teamPerson = document.querySelector("#app .content .slideBox .slideLi .teamSlide > .team-person");
  //设置画布的宽度
  console.log(bubbleObj)
  console.log(teamLis)
  bubbleObj.width = teamLis[0].offsetWidth;

  bubbleObj.height = teamLis[0].offsetHeight;
  //当鼠标移入每个li时设置其对应的样式
  teamLis.forEach((teamLi)=>{
    teamLi.onmouseenter = function () {
      teamLis.forEach((teamLi)=>{
        teamLi.style.opacity = 0.5;
      })
      this.style.opacity = 1;

      //气泡在每个li上显示
      bubbleObj.style.display = "block";
      bubbleObj.style.left = this.offsetLeft +"px";
      bubbleObj.style.top= this.offsetTop + 20 +"px";
      //调用函数，生成气泡
      bubbleObjFn.qipaofn(bubbleObj);
    }

  })
  //当鼠标移出teamPerson时，
  teamPerson.onmouseleave = function () {
    teamLis.forEach((teamLi)=>{
      teamLi.style.opacity=1;
    })

    bubbleObj.style.display="none";
    //console.log(bubbleObjFn.bubbleInterval.bubbleTimer1,bubbleObjFn.bubbleInterval.bubbleTimer2)
    // clearInterval(bubbleObjFn.bubbleInterval.bubbleTimer1)
    // clearInterval(bubbleObjFn.bubbleInterval.bubbleTimer2)
    clearInterval(bubbleObjFn.intervalTimer.timer1);
    clearInterval(bubbleObjFn.intervalTimer.timer2);

  }
}
