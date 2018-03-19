
$(function(){
    "use strict";
    
    // ======================导航栏轮播图实现================================

        $(".right_menu").on("click",function(){
            var nowtag =$(".show_start");
            if(nowtag.attr("class")==="pic4 show_start"){
                $(".pic1").addClass("show_start").siblings("img").css("opacity",0).removeClass('show_start');
                }
            else{
                $(nowtag).prev("img").addClass("show_start").siblings("img").css("opacity",0).removeClass('show_start');
                }
                var cls =$(".show_start").attr("class");
    // ==================截取图片的class属性对应的序号======================，
                var lindex = cls.substring(3,4)-1;
    // ==================对应的关联到轮播图下方的小圆点.====================
                var liurl = ".carfig_btn_list"+">"+"li"+":"+"eq("+lindex+")";
                $(liurl).css("background","#fff").siblings("li").css("background","rgb(0,0,0,.4)");
        });

        $(".left_menu").on("click",function(){
            var nowtag =$(".show_start");
                if(nowtag.attr("class")==="pic1 show_start"){
                    $(".pic4").addClass("show_start").siblings("img").css("opacity",0).removeClass('show_start');
                }
                else{
                    $(nowtag).next("img").addClass("show_start").siblings("img").css("opacity",0).removeClass('show_start');
                }
                    var cls =$(".show_start").attr("class");
                    var lindex = cls.substring(3,4)-1;
                    var liurl = ".carfig_btn_list"+">"+"li"+":"+"eq("+lindex+")";
                    $(liurl).css("background","#fff").siblings("li").css("background","rgb(0,0,0,.4)");

        });
            // ===================轮播图下方小按钮点击效果================
        $(".carfig_btn_list").on("click",function(e){
            var event = e||window.event;
            var tag = e.target||e.srcElement;
            $(tag).css("background","#fff").siblings("li").css("background","rgb(0,0,0,.4)");
            var indexNum = $(tag).index() +1;
            var pic_show = ".pic"+indexNum;
            $(pic_show).addClass('show_start').siblings("img").css("opacity",0).removeClass('show_start');
        })

        // ==================轮播图结束==================================

        // =======================家电 影音 电脑分类栏的交互实现=========
        $(".screen3_navbtns").on("mouseover",function(e){
            var event = e||window.event;
            var target = event.target||event.srcElement;
            var tag = $(target).prop("tagName");
            var cls = $(target).prop("class");
            if(tag.toLowerCase() =="a"){
                switch(cls){
                    case "RM":
                    $(".screen3_content1").css("display","block").siblings().css("display","none");
                    $(".screen3_navbtn_bottom").css({"marginLeft":"0","width":"2rem"});
                    break;
                    case "DSYY":
                    $(".screen3_content2").css("display","block").siblings().css("display","none");
                    $(".screen3_navbtn_bottom").css({"marginLeft":"3.9rem","width":"4rem"});
                    break;
                    case "DN":
                    $(".screen3_content3").css("display","block").siblings().css("display","none");
                    $(".screen3_navbtn_bottom").css({"marginLeft":"9.8rem","width":"2rem"});
                    break;
                    case "JJ":
                    $(".screen3_content4").css("display","block").siblings().css("display","none");
                    $(".screen3_navbtn_bottom").css({"marginLeft":"13.7rem","width":"2rem"});
                    break;

                    default:
                    $(".screen3_content1").css("display","block").siblings().css("display","none");
                    $(".screen3_navbtn_bottom").css({"marginLeft":"0","width":"2rem"});

                }
            }
        })

        // =========================限时闪购里的倒计时实现函数============
    function countDown(){
                var starttime = new Date().getTime();
            var endtime = new Date("2018-3-22 15:20:50").getTime();
        //================== 获取活动时间到目前时间之间的毫秒数===========
        var lefttime = endtime-starttime;
        //===================截止时间的小时数=============================
        var hour = parseInt(lefttime/1000/60/60);
        // ==================截止时间的分钟数=============================
        var minute  =parseInt(lefttime/1000/60%60);
        // ==================截止时间的秒数===============================
        var second = parseInt(lefttime/1000%60);
        $(".time_limit_H").text(hour);
        $(".time_limit_M").text(minute);
        $(".time_limit_S").text(second);
    }
    //===================倒计时效果通过时延函数实现=======================
    var timehander = setInterval(countDown,1000);
    // ==================倒计时代码部分结束===============================

    //===================内容展示区域代码开始=============================

    //=======内容展示区域左右按钮的mouseover/mouseout效果=================
    $(".left-btn").on("mouseover",show).on("mouseout",hidden);
    $(".right-btn").on("mouseover",show).on("mouseout",hidden);
    function show(e){
        $(this).css("opacity",.6);
        var e= e||window.event;
        e.stopPropagation();
        e.cancelBubble = true;
    }
    function hidden(e){
        var e= window.event||e;
        $(this).css("opacity",0);
        e.stopPropagation();
        e.cancelBubble = true;
    }


    //===============各个单页显示事件委托给父元素。========================
    // ==============当前内容有mouseover/mouseout鼠标事件发生时============
    $(".screen4_content").on("mouseover",function(e){
        var event = e||window.event;
        var tag = event.target||event.srcElement; 
    //================左右滑动按钮显示===================================== 
    $(tag).parent().parent().next('.left-btn').css("opacity",0.3).next().css("opacity",0.3);
    })

    $(".screen4_content").on("mouseout",function(e){
        var event = e||window.event;
        var tag = event.target||event.srcElement;
    //================左右滑动按钮隐藏===================================== 
    $(tag).parent().parent().next('.left-btn').css("opacity",0).next().css("opacity",0);
    })

    // ===============左滑按钮功能实现=====================================
    $(".left-btn").on("click",function(){
    //================获取当前被操作元素的父元素=========================== 
        var parentele = $(this).prev();
    //通过给父元素设置margin值来实现按扭的左右滑动效果===================== 
        var margin = $(parentele).css("marginLeft");
    // ==============如果当前页面不处于第一幅图，进入if条件================
    if(parseInt(margin)<0){
        var marginleft = parseInt(margin)+18.54*16+"px";
    $(parentele).css("marginLeft",marginleft);
    }
    else{
    // ==============如果当前页面处于第一幅图,左滑按扭颜色变浅=============
    $(this).css("opacity",0.3);
    }
    })

    // ===============右滑按钮功能实现=====================================
    $(".right-btn").on("click",function(){            
        var parentele = $(this).prev().prev();
        var margin = $(parentele).css("marginLeft");
    //======判断幕布容器的大小 以此决定用何种模式（3或是4屏）==============
        var width = parseInt($(parentele).css("width"));
    //===============四屏内容时进入if判断==================================
        if(width>55.62*16){
            if(parseInt(margin)>(-18.54*32)){
            var marginleft =parseInt(margin)-18.54*16+"px";
            $(parentele).css("marginLeft",marginleft);
        }
        else{
    // ================右滑到尽头时，按扭颜色变浅暗示不可再滑动============
            $(this).css("opacity",0.3);
        }
    }
    // ===============三屏内容画面入口=====================================
        else{
            if(parseInt(margin)>(-18.54*16)){
            var marginleft =parseInt(margin)-18.54*16+"px";
            $(parentele).css("marginLeft",marginleft);
        }
        else{
            $(this).css("opacity",0.3);
        }
    }
    });
// =================index.js代码部分结束===============================
})
