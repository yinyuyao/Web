/**
 * Created by Administrator on 2017/4/29.
 */
window.onload=function(){
    // css--------------------------------------------------------------------------------------------------------
    var div1=document.getElementById("css1");
    // 1 获取画布对象
    var css=document.getElementById("css");
    var ctx=css.getContext("2d");
    // 2 确定圆环的参数
    var w=css.width;
    var h=css.height;
    ctx.lineWidth=20;
    // 坐标
    var x=w/2;
    var y=h/2;
    // 半径
    var r=Math.min(w,h)/2-ctx.lineWidth/2;
    var target=0.6;
    var total=10;
    var progress=0;
    // 3 绘制进度条
    function draw(){
        if(progress>total) {
            return false;
        }
        ctx.clearRect(0,0,w,h)
        // 3.1 绘制背景进度条
        ctx.beginPath();
        ctx.strokeStyle="#fff";
        ctx.arc(x,y,r,0,Math.PI*2);
        ctx.stroke();
        var rate=progress/total;
        // 3.2 绘制活动进度条
        var start=Math.PI*3/2*rate;
        // 0-->Math.PI*3/2
        var end=Math.PI*2* target*rate+start;
        ctx.beginPath();
        ctx.lineCap="round";
        ctx.strokeStyle="rgba(96,156,207,.7)";
        ctx.arc(x,y,r,start,end);
        ctx.stroke();
        ctx.font="30px arial";
        ctx.fillStyle="red";
        ctx.textAlign="center"
        ctx.textBaseline="middle";
        var p=parseInt((target*progress/total)*100)+"%";
        ctx.fillText(p,x,y)
        ctx.textAlign="center"

        progress++;
    }
    div1.onmouseover=function(){
        setInterval(draw,100)
    };
// html-----------------------------------------------------------------------------------------------------------
    var div2=document.getElementById("html1");
// 1 获取画布对象
    var html=document.getElementById("html");
    var ctx1=html.getContext("2d");
// 2 确定圆环的参数
    var w1=css.width;
    var h1=css.height;
    ctx1.lineWidth=20;
// 坐标
    var x1=w1/2;
    var y1=h1/2;
// 半径
    var r1=Math.min(w1,h1)/2-ctx1.lineWidth/2;
    var target1=0.8;
    var total1=10;
    var progress1=0;
// 3 绘制进度条
    function draw1(){
        if(progress1>total1) {
            return false;
        }
        ctx1.clearRect(0,0,w,h)
        // 3.1 绘制背景进度条
        ctx1.beginPath();
        ctx1.strokeStyle="#fff";
        ctx1.arc(x1,y1,r1,0,Math.PI*2);
        ctx1.stroke();
        var rate1=progress1/total1;
        // 3.2 绘制活动进度条
        var start1=Math.PI*3/2*rate1;
        // 0-->Math.PI*3/2
        var end1=Math.PI*2* target1*rate1+start1;
        ctx1.beginPath();
        ctx1.lineCap="round";
        ctx1.strokeStyle="rgba(96,156,207,.7)";
        ctx1.arc(x1,y1,r1,start1,end1);
        ctx1.stroke();

        ctx1.font="30px arial";
        ctx1.fillStyle="red";
        ctx1.textAlign="center"
        ctx1.textBaseline="middle";
        var p1=parseInt((target1*progress1/total1)*100)+"%";
        ctx1.fillText(p1,x1,y1)
        ctx1.textAlign="center"
        progress1++;
    }
    div2.onmouseover=function(){
        setInterval(draw1,100)
    };
// jq-----------------------------------------------------------------------------------------------------------
    var div3=document.getElementById("jq1");
// 1 获取画布对象
    var jq=document.getElementById("jq");
    var ctx2=jq.getContext("2d");
// 2 确定圆环的参数
    var w2=css.width;
    var h2=css.height;
    ctx2.lineWidth=20;
// 坐标
    var x2=w2/2;
    var y2=h2/2;
// 半径
    var r2=Math.min(w2,h2)/2-ctx2.lineWidth/2;
    var target2=0.4;
    var total2=10;
    var progress2=0;
// 3 绘制进度条
    function draw2(){
        if(progress2>total2) {
            return false;
        }
        ctx2.clearRect(0,0,w,h)
        // 3.1 绘制背景进度条
        ctx2.beginPath();
        ctx2.strokeStyle="#fff";
        ctx2.arc(x2,y2,r2,0,Math.PI*2);
        ctx2.stroke();
        var rate2=progress2/total2;
        // 3.2 绘制活动进度条
        var start2=Math.PI*3/2*rate2;
        // 0-->Math.PI*3/2
        var end2=Math.PI*2* target2*rate2+start2;
        ctx2.beginPath();
        ctx2.lineCap="round";
        ctx2.strokeStyle="rgba(96,156,207,.7)";
        ctx2.arc(x2,y2,r2,start2,end2);
        ctx2.stroke();

        ctx2.font="30px arial";
        ctx2.fillStyle="red";
        ctx2.textAlign="center"
        ctx2.textBaseline="middle";
        var p2=parseInt((target2*progress2/total2)*100)+"%";
        ctx2.fillText(p2,x2,y2)
        ctx2.textAlign="center"
        progress2++;
    }
    div3.onmouseover=function(){
        setInterval(draw2,100)
    };


// jq-----------------------------------------------------------------------------------------------------------
    var div4=document.getElementById("js1");
// 1 获取画布对象
    var js=document.getElementById("js");
    var ctx3=js.getContext("2d");
// 2 确定圆环的参数
    var w3=css.width;
    var h3=css.height;
    ctx3.lineWidth=20;
// 坐标
    var x3=w3/2;
    var y3=h3/2;
// 半径
    var r3=Math.min(w3,h3)/2-ctx3.lineWidth/2;
    var target3=0.3;
    var total3=10;
    var progress3=0;
// 3 绘制进度条
    function draw3(){
        if(progress3>total3) {
            return false;
        }
        ctx3.clearRect(0,0,w,h)
        // 3.1 绘制背景进度条
        ctx3.beginPath();
        ctx3.strokeStyle="#fff";
        ctx3.arc(x3,y3,r3,0,Math.PI*2);
        ctx3.stroke();
        var rate3=progress3/total3;
        // 3.2 绘制活动进度条
        var start3=Math.PI*3/2*rate3;
        // 0-->Math.PI*3/2
        var end3=Math.PI*2* target3*rate3+start3;
        ctx3.beginPath();
        ctx3.lineCap="round";
        ctx3.strokeStyle="rgba(96,156,207,.7)";
        ctx3.arc(x3,y3,r3,start3,end3);
        ctx3.stroke();

        ctx3.font="30px arial";
        ctx3.fillStyle="red";
        ctx3.textAlign="center"
        ctx3.textBaseline="middle";
        var p3=parseInt((target3*progress3/total3)*100)+"%";
        ctx3.fillText(p3,x3,y3)
        ctx3.textAlign="center"
        progress3++;
    }
    div4.onmouseover=function(){
        setInterval(draw3,100)
    };
// photoshop-----------------------------------------------------------------------------------------------------------
    var div5=document.getElementById("photoshop1");
// 1 获取画布对象
    var ph=document.getElementById("photoshop");
    var ctx4=ph.getContext("2d");
// 2 确定圆环的参数
    var w4=css.width;
    var h4=css.height;
    ctx4.lineWidth=20;
// 坐标
    var x4=w4/2;
    var y4=h4/2;
// 半径
    var r4=Math.min(w4,h4)/2-ctx4.lineWidth/2;
    var target4=0.75;
    var total4=10;
    var progress4=0;
// 3 绘制进度条
    function draw4(){
        if(progress4>total4) {
            return false;
        }
        ctx4.clearRect(0,0,w,h)
        // 3.1 绘制背景进度条
        ctx4.beginPath();
        ctx4.strokeStyle="#fff";
        ctx4.arc(x4,y4,r4,0,Math.PI*2);
        ctx4.stroke();
        var rate4=progress4/total4;
        // 3.2 绘制活动进度条
        var start4=Math.PI*3/2*rate4;
        // 0-->Math.PI*3/2
        var end4=Math.PI*2* target4*rate4+start4;
        ctx4.beginPath();
        ctx4.lineCap="round";
        ctx4.strokeStyle="rgba(96,156,207,.7)";
        ctx4.arc(x4,y4,r4,start4,end4);
        ctx4.stroke();
        ctx4.font="30px arial";
        ctx4.fillStyle="red";
        ctx4.textAlign="center"
        ctx4.textBaseline="middle";
        var p4=parseInt((target4*progress4/total4)*100)+"%";
        ctx4.fillText(p4,x4,y4)
        ctx4.textAlign="center"
        progress4++;
    }
    div5.onmouseover=function(){
        setInterval(draw4,100)
    };
};

$(function(){
    var center=$(".center");
    for(var i=0;i<4;i++){
        var deg=i*90;
        $("<div class='item'></div>")
            .css({
                "background-image":"url(images/pic"+i+".jpg)",
                "transform":"rotateX("+deg+"deg) translateZ(200px)"
            })
            .appendTo(center)
    }
    //点击事件
    var num=0;
    $(".center").click(function(){
        num++;
        $(".item").each(function(index,element){
            var deg=index*90-num*90;
            $(this).css({
                "transform":"rotateX("+deg+"deg) translateZ(200px)"
            })
        })
    })





});





















