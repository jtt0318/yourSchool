//进度条
$(document).ready(function(){
    var elem = $("#myBar");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 163) {
        clearInterval(id);
        startToindex();
      } else {
        width++; 
        elem.css({
            width:width
        }) 
      }
    } 
    indexToques1();
    ques1Toques2();
    ques2Toques3();
    ques3Toques4();
    ques4Toques5();
    toResult();
    check();
    bindFunction();
    draw();
    save();
}
)
//loading跳转index
function startToindex(){
    $(".page_start").removeClass("block").addClass("none");
    $(".page_index").removeClass("none").addClass("block");
}
//index跳转第一题
function indexToques1(){
    $(".pic_btn").click(function(){
         var flag = true;//是否输入昵称  默认true
         $(".inputName input").each(function (){
             if($(this).val()==""){//没输入昵称，将flag置为false
                 flag = false;
                }
        });
        if(flag){
            $(".page_index").removeClass("block").addClass("none");
            $(".page_ques1").removeClass("none").addClass("block");
        }
        else{
            alert("请输入昵称");
        }  
    })
}

//第一题跳转第二题
function ques1Toques2(){
    $(".Btn1").click(function(){
        var isChoosed=$(".Btn1").css("background-color")=="rgb(244, 61, 105)";
        if(isChoosed){
           $(".page_ques1").removeClass("block").addClass("none");
           $(".page_ques2").removeClass("none").addClass("block");   
        }
        else{
        }
      
    })
}
//第二题跳转第三题
function ques2Toques3(){
    $(".Btn2").click(function(){
        var isChoosed=$(".Btn2").css("background-color")=="rgb(244, 61, 105)";
        if(isChoosed){
            $(".page_ques2").removeClass("block").addClass("none");
            $(".page_ques3").removeClass("none").addClass("block");
        }
        else{
        }
    })
}
//第三题跳转第四题
function ques3Toques4(){
    $(".Btn3").click(function(){
        var isChoosed=$(".Btn3").css("background-color")=="rgb(244, 61, 105)";
        if(isChoosed){
            $(".page_ques3").removeClass("block").addClass("none");
            $(".page_ques4").removeClass("none").addClass("block");
        }
        else{
        }
    })
}
//第四题跳转第五题
function ques4Toques5(){
    $(".Btn4").click(function(){
        var isChoosed=$(".Btn4").css("background-color")=="rgb(244, 61, 105)";
        if(isChoosed){
            $(".page_ques4").removeClass("block").addClass("none");
            $(".page_ques5").removeClass("none").addClass("block");
        }
        else{
        }
    })
}
//跳转结果页
function toResult(){
    $(".Btn5").click(function(){
        var isChoosed=$(".Btn5").css("background-color")=="rgb(244, 61, 105)";
        if(isChoosed){
            $(".page_ques5").removeClass("block").addClass("none");
            $(".page_result").css("display","flex");
            result();
        }
        else{
        }
    })
}
//点击勾选  
function check(){
    $(".background").click( function(e){
        var check=$(e.target).closest(".background").find(".check");
        $(".check").each(function(){
            $(".check").css("display","none");
        })
        check.css("display","block");
        check.closest(".content_ques").find(".nextBtn").css("background","#f43d69");
    })
}

//结果页
function result(){
    $(".name").html($(".inputName input").val());
    $("#btn_again").click(function(){
        $(".page_result").css("display","none");
        $(".page_ques1").removeClass("none").addClass("block");
        $(".nextBtn").each(function(){
            $(".nextBtn").css("background","#ddd");
        })
    });
}

//主筛选逻辑
function bindFunction(){
    var menu_data=//数组
    [
        {"subject":"计算机","school":"安徽大学","place":"安徽合肥","level":"中","wenli":"文科","food":"咸鲜","name":"以北以南"},
        {"subject":"地理学","school":"北京大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"法学","school":"北京大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"公共管理","school":"北京大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"化学","school":"北京大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"教育学","school":"北京大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"考古学","school":"北京大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"临床医学","school":"北京大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"生物学","school":"北京大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"世界史","school":"北京大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"数学","school":"北京大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"物理学","school":"北京大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"西班牙语","school":"北京大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"心理学","school":"北京大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"新闻传播","school":"北京大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"哲学","school":"北京大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"恋恋风尘"},
        {"subject":"表演","school":"北京电影学院","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"乡村骑士"},
        {"subject":"土木工程","school":"北京工业大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"咱们工人有力量"},
        {"subject":"计算机","school":"北京航空航天大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"航空兵进行曲"},
        {"subject":"物联网","school":"北京科技大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"北京北京"},
        {"subject":"地理学","school":"北京师范大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"北京爱情"},
        {"subject":"公共管理","school":"北京师范大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"北京爱情"},
        {"subject":"教育学","school":"北京师范大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"北京爱情"},
        {"subject":"世界史","school":"北京师范大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"北京爱情"},
        {"subject":"数学","school":"北京师范大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"北京爱情"},
        {"subject":"心理学","school":"北京师范大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"北京爱情"},
        {"subject":"哲学","school":"北京师范大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"北京爱情"},
        {"subject":"体育学","school":"北京体育大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"运动员进行曲"},
        {"subject":"临床医学","school":"北京协和医学院","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"白衣天使"},
        {"subject":"体育学","school":"成都体育学院","place":"四川成都","level":"中","wenli":"文科","food":"辣味","name":"运动员进行曲"},
        {"subject":"土木工程","school":"大连理工大学","place":"辽宁大连","level":"高","wenli":"理科","food":"咸鲜","name":"大连一方"},
        {"subject":"保险","school":"东北财经大学","place":"辽宁大连","level":"中","wenli":"文科","food":"咸鲜","name":"东北东北"},
        {"subject":"教育学","school":"东北师范大学","place":"吉林长春","level":"高","wenli":"文科","food":"咸鲜","name":"我们在长春相遇"},
        {"subject":"世界史","school":"东北师范大学","place":"吉林长春","level":"高","wenli":"文科","food":"咸鲜","name":"我们在长春相遇"},
        {"subject":"土木工程","school":"东南大学","place":"江苏南京","level":"高","wenli":"理科","food":"咸鲜","name":"那年夏天"},
        {"subject":"地理学","school":"福建师范大学","place":"福建福州","level":"中","wenli":"文科","food":"鲜甜","name":"住在海边的猫头鹰"},
        {"subject":"体育学","school":"福建师范大学","place":"福建福州","level":"中","wenli":"文科","food":"鲜甜","name":"住在海边的猫头鹰"},
        {"subject":"公共管理","school":"复旦大学","place":"上海","level":"高","wenli":"文科","food":"鲜甜","name":"最爱上海滩"},
        {"subject":"化学","school":"复旦大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"最爱上海滩"},
        {"subject":"临床医学","school":"复旦大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"最爱上海滩"},
        {"subject":"生物学","school":"复旦大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"最爱上海滩"},
        {"subject":"世界史","school":"复旦大学","place":"上海","level":"高","wenli":"文科","food":"鲜甜","name":"最爱上海滩"},
        {"subject":"数学","school":"复旦大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"最爱上海滩"},
        {"subject":"物理学","school":"复旦大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"最爱上海滩"},
        {"subject":"新闻传播","school":"复旦大学","place":"上海","level":"高","wenli":"文科","food":"鲜甜","name":"最爱上海滩"},
        {"subject":"哲学","school":"复旦大学","place":"上海","level":"高","wenli":"文科","food":"鲜甜","name":"最爱上海滩"},
        {"subject":"计算机","school":"哈尔滨工业大学","place":"黑龙江哈尔滨","level":"高","wenli":"理科","food":"咸鲜","name":"哈尔滨姑娘"},
        {"subject":"土木工程","school":"哈尔滨工业大学","place":"黑龙江哈尔滨","level":"高","wenli":"理科","food":"咸鲜","name":"哈尔滨姑娘"},
        {"subject":"物联网","school":"合肥工业大学","place":"安徽合肥","level":"高","wenli":"理科","food":"咸鲜","name":"翅膀"},
        {"subject":"水利工程","school":"河海大学","place":"江苏南京","level":"高","wenli":"理科","food":"咸鲜","name":"万里江河绕长城"},
        {"subject":"金融学","school":"湖南大学","place":"湖南长沙","level":"高","wenli":"文科","food":"辣味","name":"和长沙在一起"},
        {"subject":"土木工程","school":"湖南大学","place":"湖南长沙","level":"高","wenli":"理科","food":"辣味","name":"和长沙在一起"},
        {"subject":"茶学","school":"湖南农业大学","place":"湖南长沙","level":"中","wenli":"理科","food":"辣味","name":"美丽湘江"},
        {"subject":"智能电网信息工程","school":"华北电力大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"电力人"},
        {"subject":"地理学","school":"华东师范大学","place":"上海","level":"高","wenli":"文科","food":"鲜甜","name":"夜上海"},
        {"subject":"教育学","school":"华东师范大学","place":"上海","level":"高","wenli":"文科","food":"鲜甜","name":"夜上海"},
        {"subject":"世界史","school":"华东师范大学","place":"上海","level":"高","wenli":"文科","food":"鲜甜","name":"夜上海"},
        {"subject":"体育学","school":"华东师范大学","place":"上海","level":"高","wenli":"文科","food":"鲜甜","name":"夜上海"},
        {"subject":"心理学","school":"华东师范大学","place":"上海","level":"高","wenli":"文科","food":"鲜甜","name":"夜上海"},
        {"subject":"法学","school":"华东政法大学","place":"上海","level":"高","wenli":"文科","food":"鲜甜","name":"被风吹过的夏天"},
        {"subject":"核工程","school":"华南理工大学","place":"广东广州","level":"高","wenli":"理科","food":"清淡","name":"南边的城市"},
        {"subject":"美术","school":"华南师范大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"南风吹"},
        {"subject":"音乐","school":"华南师范大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"南风吹"},
        {"subject":"教育学","school":"华南师范大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"南风吹"},
        {"subject":"体育学","school":"华南师范大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"南风吹"},
        {"subject":"心理学","school":"华南师范大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"南风吹"},
        {"subject":"公共管理","school":"华中科技大学","place":"湖北武汉","level":"高","wenli":"文科","food":"咸鲜","name":"我思念的城市"},
        {"subject":"计算机","school":"华中科技大学","place":"湖北武汉","level":"高","wenli":"理科","food":"咸鲜","name":"我思念的城市"},
        {"subject":"临床医学","school":"华中科技大学","place":"湖北武汉","level":"高","wenli":"理科","food":"咸鲜","name":"我思念的城市"},
        {"subject":"新闻传播","school":"华中科技大学","place":"湖北武汉","level":"高","wenli":"文科","food":"咸鲜","name":"我思念的城市"},
        {"subject":"教育学","school":"华中师范大学","place":"湖北武汉","level":"高","wenli":"文科","food":"咸鲜","name":"学习飞翔"},
        {"subject":"心理学","school":"华中师范大学","place":"湖北武汉","level":"高","wenli":"文科","food":"咸鲜","name":"学习飞翔"},
        {"subject":"法学","school":"吉林大学","place":"吉林长春","level":"高","wenli":"文科","food":"咸鲜","name":"我爱你塞北的雪"},
        {"subject":"化学","school":"吉林大学","place":"吉林长春","level":"高","wenli":"理科","food":"咸鲜","name":"我爱你塞北的雪"},
        {"subject":"考古学","school":"吉林大学","place":"吉林长春","level":"高","wenli":"文科","food":"咸鲜","name":"我爱你塞北的雪"},
        {"subject":"哲学","school":"吉林大学","place":"吉林长春","level":"高","wenli":"文科","food":"咸鲜","name":"我爱你塞北的雪"},
        {"subject":"播音与主持","school":"暨南大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"少年中国"},
        {"subject":"戏剧影视文学","school":"暨南大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"少年中国"},
        {"subject":"国际贸易","school":"暨南大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"少年中国"},
        {"subject":"音乐","school":"暨南大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"少年中国"},
        {"subject":"金融学","school":"暨南大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"少年中国"},
        {"subject":"新闻传播","school":"暨南大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"少年中国"},
        {"subject":"纺织科学","school":"江南大学","place":"江苏无锡","level":"高","wenli":"理科","food":"鲜甜","name":"江南"},
        {"subject":"食品工程","school":"江南大学","place":"江苏无锡","level":"高","wenli":"理科","food":"鲜甜","name":"江南"},
        {"subject":"物联网","school":"江南大学","place":"江苏无锡","level":"高","wenli":"理科","food":"鲜甜","name":"江南"},
        {"subject":"法医学","school":"解放军海军军医大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"大海啊故乡"},
        {"subject":"临床医学","school":"解放军海军军医大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"大海啊故乡"},
        {"subject":"博物馆学","school":"兰州大学","place":"甘肃兰州","level":"高","wenli":"文科","food":"面食","name":"关于兰州"},
        {"subject":"公共管理","school":"兰州大学","place":"甘肃兰州","level":"高","wenli":"文科","food":"面食","name":"关于兰州"},
        {"subject":"地理学","school":"兰州大学","place":"甘肃兰州","level":"高","wenli":"文科","food":"面食","name":"关于兰州"},
        {"subject":"地理学","school":"南京大学","place":"江苏南京","level":"高","wenli":"文科","food":"咸鲜","name":"追光者"},
        {"subject":"化学","school":"南京大学","place":"江苏南京","level":"高","wenli":"理科","food":"咸鲜","name":"追光者"},
        {"subject":"考古学","school":"南京大学","place":"江苏南京","level":"高","wenli":"文科","food":"咸鲜","name":"追光者"},
        {"subject":"生物学","school":"南京大学","place":"江苏南京","level":"高","wenli":"理科","food":"咸鲜","name":"追光者"},
        {"subject":"世界史","school":"南京大学","place":"江苏南京","level":"高","wenli":"文科","food":"咸鲜","name":"追光者"},
        {"subject":"数学","school":"南京大学","place":"江苏南京","level":"高","wenli":"理科","food":"咸鲜","name":"追光者"},
        {"subject":"物理学","school":"南京大学","place":"江苏南京","level":"高","wenli":"理科","food":"咸鲜","name":"追光者"},
        {"subject":"哲学","school":"南京大学","place":"江苏南京","level":"高","wenli":"文科","food":"咸鲜","name":"追光者"},
        {"subject":"公共管理","school":"南京农业大学","place":"江苏南京","level":"高","wenli":"文科","food":"咸鲜","name":"郁金香"},
        {"subject":"地理学","school":"南京师范大学","place":"江苏南京","level":"高","wenli":"文科","food":"咸鲜","name":"对话老师"},
        {"subject":"教育学","school":"南京师范大学","place":"江苏南京","level":"高","wenli":"文科","food":"咸鲜","name":"对话老师"},
        {"subject":"心理学","school":"南京师范大学","place":"江苏南京","level":"高","wenli":"文科","food":"咸鲜","name":"对话老师"},
        {"subject":"化学","school":"南开大学","place":"天津","level":"高","wenli":"理科","food":"咸鲜","name":"夏天的味道"},
        {"subject":"考古学","school":"南开大学","place":"天津","level":"高","wenli":"文科","food":"咸鲜","name":"夏天的味道"},
        {"subject":"生物学","school":"南开大学","place":"天津","level":"高","wenli":"理科","food":"咸鲜","name":"夏天的味道"},
        {"subject":"世界史","school":"南开大学","place":"天津","level":"高","wenli":"文科","food":"咸鲜","name":"夏天的味道"},
        {"subject":"数学","school":"南开大学","place":"天津","level":"高","wenli":"理科","food":"咸鲜","name":"夏天的味道"},
        {"subject":"物理学","school":"南开大学","place":"天津","level":"高","wenli":"理科","food":"咸鲜","name":"夏天的味道"},
        {"subject":"哲学","school":"南开大学","place":"天津","level":"高","wenli":"文科","food":"咸鲜","name":"夏天的味道"},
        {"subject":"蒙医学","school":"内蒙古医科大学","place":"内蒙古呼和浩特","level":"中","wenli":"理科","food":"面食","name":"乌兰巴托之夜"},
        {"subject":"法学","school":"清华大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"美若黎明"},
        {"subject":"公共管理","school":"清华大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"美若黎明"},
        {"subject":"化学","school":"清华大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"美若黎明"},
        {"subject":"计算机","school":"清华大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"美若黎明"},
        {"subject":"生物学","school":"清华大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"美若黎明"},
        {"subject":"数学","school":"清华大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"美若黎明"},
        {"subject":"土木工程","school":"清华大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"美若黎明"},
        {"subject":"物理学","school":"清华大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"美若黎明"},
        {"subject":"新闻传播","school":"清华大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"美若黎明"},
        {"subject":"哲学","school":"清华大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"美若黎明"},
        {"subject":"酒店管理","school":"三亚学院","place":"海南三亚","level":"低","wenli":"文科","food":"清淡","name":"南海姑娘"},
        {"subject":"海洋科学","school":"厦门大学","place":"福建厦门","level":"高","wenli":"理科","food":"清淡","name":"渔家姑娘在海边"},
        {"subject":"化学","school":"厦门大学","place":"福建厦门","level":"高","wenli":"理科","food":"清淡","name":"渔家姑娘在海边"},
        {"subject":"美术","school":"厦门大学","place":"福建厦门","level":"高","wenli":"文科","food":"清淡","name":"渔家姑娘在海边"},
        {"subject":"音乐","school":"厦门大学","place":"福建厦门","level":"高","wenli":"文科","food":"清淡","name":"渔家姑娘在海边"},
        {"subject":"考古学","school":"山东大学","place":"山东济南","level":"高","wenli":"文科","food":"咸鲜","name":"睡在我上铺的兄弟"},
        {"subject":"数学","school":"山东大学","place":"山东济南","level":"高","wenli":"理科","food":"咸鲜","name":"睡在我上铺的兄弟"},
        {"subject":"物理学","school":"山东大学","place":"山东济南","level":"高","wenli":"理科","food":"咸鲜","name":"睡在我上铺的兄弟"},
        {"subject":"汽修","school":"山东蓝翔高级技工学校","place":"山东济南","level":"低","wenli":"理科","food":"咸鲜","name":"民工兄弟"},
        {"subject":"挖掘机","school":"山东蓝翔高级技工学校","place":"山东济南","level":"低","wenli":"理科","food":"咸鲜","name":"民工兄弟"},
        {"subject":"数学","school":"陕西师范大学","place":"陕西西安","level":"高","wenli":"文科","food":"面食","name":"西安人的歌"},
        {"subject":"国际贸易","school":"陕西师范大学","place":"陕西西安","level":"高","wenli":"文科","food":"面食","name":"西安人的歌"},
        {"subject":"文物与博物馆学","school":"陕西师范大学","place":"陕西西安","level":"高","wenli":"文科","food":"面食","name":"西安人的歌"},
        {"subject":"物流管理","school":"上海对外经贸大学","place":"上海","level":"中","wenli":"文科","food":"鲜甜","name":"上海小姑娘"},
        {"subject":"公共管理","school":"上海交通大学","place":"上海","level":"高","wenli":"文科","food":"鲜甜","name":"少年中国强"},
        {"subject":"核工程","school":"上海交通大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"少年中国强"},
        {"subject":"计算机","school":"上海交通大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"少年中国强"},
        {"subject":"临床医学","school":"上海交通大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"少年中国强"},
        {"subject":"生物学","school":"上海交通大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"少年中国强"},
        {"subject":"物理学","school":"上海交通大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"少年中国强"},
        {"subject":"体育学","school":"上海体育学院","place":"上海","level":"中","wenli":"文科","food":"鲜甜","name":"运动员进行曲"},
        {"subject":"日语","school":"上海外国语大学","place":"上海","level":"高","wenli":"文科","food":"鲜甜","name":"哆啦A梦"},
        {"subject":"体育学","school":"沈阳体育学院","place":"辽宁沈阳","level":"中","wenli":"文科","food":"咸鲜","name":"北国之春"},
        {"subject":"地理学","school":"首都师范大学","place":"北京","level":"中","wenli":"文科","food":"咸鲜","name":"恩师颂"},
        {"subject":"教育学","school":"首都师范大学","place":"北京","level":"中","wenli":"文科","food":"咸鲜","name":"恩师颂"},
        {"subject":"世界史","school":"首都师范大学","place":"北京","level":"中","wenli":"文科","food":"咸鲜","name":"恩师颂"},
        {"subject":"临床医学","school":"首都医科大学","place":"北京","level":"中","wenli":"理科","food":"咸鲜","name":"小天使"},
        {"subject":"考古学","school":"四川大学","place":"四川成都","level":"高","wenli":"文科","food":"辣味","name":"成都"},
        {"subject":"金融学","school":"四川大学","place":"四川成都","level":"高","wenli":"文科","food":"辣味","name":"成都"},
        {"subject":"化学","school":"四川大学","place":"四川成都","level":"高","wenli":"理科","food":"辣味","name":"成都"},
        {"subject":"临床医学","school":"四川大学","place":"四川成都","level":"高","wenli":"理科","food":"辣味","name":"成都"},
        {"subject":"新闻传播","school":"四川大学","place":"四川成都","level":"高","wenli":"文科","food":"辣味","name":"成都"},
        {"subject":"茶学","school":"四川农业大学","place":"四川成都","level":"中","wenli":"理科","food":"辣味","name":"梦回成都"},
        {"subject":"法学","school":"苏州大学","place":"江苏苏州","level":"中","wenli":"文科","food":"鲜甜","name":"梦中的姑苏"},
        {"subject":"纺织科学","school":"苏州大学","place":"江苏苏州","level":"中","wenli":"理科","food":"鲜甜","name":"梦中的姑苏"},
        {"subject":"土木工程","school":"天津大学","place":"天津","level":"高","wenli":"理科","food":"咸鲜","name":"久违的事"},
        {"subject":"体育学","school":"天津体育学院","place":"天津","level":"中","wenli":"文科","food":"咸鲜","name":"运动员进行曲"},
        {"subject":"车辆工程","school":"同济大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"情在上海"},
        {"subject":"桥梁与隧道工程","school":"同济大学","place":"上海","level":"高","wenli":"理科","food":"鲜甜","name":"情在上海"},
        {"subject":"地理学","school":"武汉大学","place":"湖北武汉","level":"高","wenli":"文科","food":"咸鲜","name":"醉赤壁"},
        {"subject":"法学","school":"武汉大学","place":"湖北武汉","level":"高","wenli":"文科","food":"咸鲜","name":"醉赤壁"},
        {"subject":"公共管理","school":"武汉大学","place":"湖北武汉","level":"高","wenli":"文科","food":"咸鲜","name":"醉赤壁"},
        {"subject":"核工程","school":"武汉大学","place":"湖北武汉","level":"高","wenli":"理科","food":"咸鲜","name":"醉赤壁"},
        {"subject":"化学","school":"武汉大学","place":"湖北武汉","level":"高","wenli":"理科","food":"咸鲜","name":"醉赤壁"},
        {"subject":"生物学","school":"武汉大学","place":"湖北武汉","level":"高","wenli":"理科","food":"咸鲜","name":"醉赤壁"},
        {"subject":"世界史","school":"武汉大学","place":"湖北武汉","level":"高","wenli":"文科","food":"咸鲜","name":"醉赤壁"},
        {"subject":"数学","school":"武汉大学","place":"湖北武汉","level":"高","wenli":"理科","food":"咸鲜","name":"醉赤壁"},
        {"subject":"新闻传播","school":"武汉大学","place":"湖北武汉","level":"高","wenli":"文科","food":"咸鲜","name":"醉赤壁"},
        {"subject":"哲学","school":"武汉大学","place":"湖北武汉","level":"高","wenli":"文科","food":"咸鲜","name":"醉赤壁"},
        {"subject":"武术表演","school":"武汉体育学院","place":"湖北武汉","level":"中","wenli":"文科","food":"咸鲜","name":"我的功夫"},
        {"subject":"计算机","school":"西安电子科技大学","place":"陕西西安","level":"高","wenli":"理科","food":"面食","name":"好风长吟"},
        {"subject":"信息对抗技术","school":"西安电子科技大学","place":"陕西西安","level":"高","wenli":"理科","food":"面食","name":"好风长吟"},
        {"subject":"计算机","school":"西安交通大学","place":"陕西西安","level":"高","wenli":"理科","food":"面食","name":"故乡"},
        {"subject":"哲学","school":"西安交通大学","place":"陕西西安","level":"高","wenli":"文科","food":"面食","name":"故乡"},
        {"subject":"法学","school":"西安交通大学","place":"陕西西安","level":"高","wenli":"文科","food":"面食","name":"故乡"},
        {"subject":"航空宇航器制造工程","school":"西安交通大学","place":"陕西西安","level":"高","wenli":"理科","food":"面食","name":"故乡"},
        {"subject":"金融学","school":"西北大学","place":"陕西西安","level":"中","wenli":"文科","food":"面食","name":"温暖"},
        {"subject":"考古学","school":"西北大学","place":"陕西西安","level":"中","wenli":"文科","food":"面食","name":"温暖"},
        {"subject":"新闻传播学","school":"西北大学","place":"陕西西安","level":"中","wenli":"文科","food":"面食","name":"温暖"},
        {"subject":"世界史","school":"西北大学","place":"陕西西安","level":"中","wenli":"文科","food":"面食","name":"温暖"},
        {"subject":"公共管理","school":"西南大学","place":"重庆","level":"高","wenli":"文科","food":"辣味","name":"家在长江边"},
        {"subject":"教育学","school":"西南大学","place":"重庆","level":"高","wenli":"文科","food":"辣味","name":"家在长江边"},
        {"subject":"心理学","school":"西南大学","place":"重庆","level":"高","wenli":"文科","food":"辣味","name":"家在长江边"},
        {"subject":"法学","school":"西南政法大学","place":"重庆","level":"高","wenli":"文科","food":"辣味","name":"正义之道"},
        {"subject":"瓜果雕刻","school":"新东方烹饪学校","place":"全国","level":"低","wenli":"文科","food":"无","name":"我请你吃饭"},
        {"subject":"凉菜卤烤","school":"新东方烹饪学校","place":"全国","level":"低","wenli":"文科","food":"无","name":"我请你吃饭"},
        {"subject":"台湾珍珠奶茶调制","school":"新东方烹饪学校","place":"全国","level":"低","wenli":"文科","food":"无","name":"我请你吃饭"},
        {"subject":"化学","school":"浙江大学","place":"浙江杭州","level":"高","wenli":"理科","food":"鲜甜","name":"杭州"},
        {"subject":"计算机","school":"浙江大学","place":"浙江杭州","level":"高","wenli":"理科","food":"鲜甜","name":"杭州"},
        {"subject":"教育学","school":"浙江大学","place":"浙江杭州","level":"高","wenli":"文科","food":"鲜甜","name":"杭州"},
        {"subject":"临床医学","school":"浙江大学","place":"浙江杭州","level":"高","wenli":"理科","food":"鲜甜","name":"杭州"},
        {"subject":"数学","school":"浙江大学","place":"浙江杭州","level":"高","wenli":"理科","food":"鲜甜","name":"杭州"},
        {"subject":"土木工程","school":"浙江大学","place":"浙江杭州","level":"高","wenli":"理科","food":"鲜甜","name":"杭州"},
        {"subject":"物理学","school":"浙江大学","place":"浙江杭州","level":"高","wenli":"理科","food":"鲜甜","name":"杭州"},
        {"subject":"心理学","school":"浙江大学","place":"浙江杭州","level":"高","wenli":"文科","food":"鲜甜","name":"杭州"},
        {"subject":"物流管理","school":"浙江万里学院","place":"浙江宁波","level":"低","wenli":"文科","food":"鲜甜","name":"海边"},
        {"subject":"新闻传播","school":"中国传媒大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"新闻联播"},
        {"subject":"化学","school":"中国科学技术大学","place":"安徽合肥","level":"高","wenli":"理科","food":"咸鲜","name":"星球"},
        {"subject":"计算机","school":"中国科学技术大学","place":"安徽合肥","level":"高","wenli":"理科","food":"咸鲜","name":"星球"},
        {"subject":"生物学","school":"中国科学技术大学","place":"安徽合肥","level":"高","wenli":"理科","food":"咸鲜","name":"星球"},
        {"subject":"数学","school":"中国科学技术大学","place":"安徽合肥","level":"高","wenli":"理科","food":"咸鲜","name":"星球"},
        {"subject":"物理学","school":"中国科学技术大学","place":"安徽合肥","level":"高","wenli":"理科","food":"咸鲜","name":"星球"},
        {"subject":"飞机制造技术","school":"中国民航飞行学院","place":"四川广汉","level":"中","wenli":"理科","food":"辣味","name":"逆光飞翔"},
        {"subject":"生物学","school":"中国农业大学","place":"北京","level":"高","wenli":"理科","food":"咸鲜","name":"北京深秋"},
        {"subject":"法学","school":"中国人民大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"相信无限"},
        {"subject":"公共管理","school":"中国人民大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"相信无限"},
        {"subject":"新闻传播","school":"中国人民大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"相信无限"},
        {"subject":"哲学","school":"中国人民大学","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"相信无限"},
        {"subject":"土木工程","school":"中南大学","place":"湖南长沙","level":"高","wenli":"理科","food":"辣味","name":"潇湘雨"},
        {"subject":"数学","school":"中南大学","place":"湖南长沙","level":"高","wenli":"文科","food":"辣味","name":"潇湘雨"},
        {"subject":"心理学","school":"中南大学","place":"湖南长沙","level":"高","wenli":"文科","food":"辣味","name":"潇湘雨"},
        {"subject":"地理学","school":"中山大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"珠江水"},
        {"subject":"公共管理","school":"中山大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"珠江水"},
        {"subject":"化学","school":"中山大学","place":"广东广州","level":"高","wenli":"理科","food":"清淡","name":"珠江水"},
        {"subject":"考古学","school":"中山大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"珠江水"},
        {"subject":"临床医学","school":"中山大学","place":"广东广州","level":"高","wenli":"理科","food":"清淡","name":"珠江水"},
        {"subject":"物理学","school":"中山大学","place":"广东广州","level":"高","wenli":"理科","food":"清淡","name":"珠江水"},
        {"subject":"哲学","school":"中山大学","place":"广东广州","level":"高","wenli":"文科","food":"清淡","name":"珠江水"},
        {"subject":"美术","school":"中央美术学院","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"画出彩虹"},
        {"subject":"表演","school":"中央戏剧学院","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"演员"},
        {"subject":"导演","school":"中央戏剧学院","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"演员"},
        {"subject":"京剧","school":"中央戏剧学院","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"演员"},
        {"subject":"作曲","school":"中央音乐学院","place":"北京","level":"高","wenli":"文科","food":"咸鲜","name":"最佳歌手"}
    ]
//文理科    
    $(".Q1").click(function(e){
        var islike=$(e.target).closest(".background").find(".ans").html()=="理科";
        var iswenke=$(e.target).closest(".background").find(".ans").html()=="文科";
        if(islike){
            var like=menu_data.filter(function (e) { 
                return e.wenli == "理科"; 
            });
            var a=like;
            Ques2(like,a);
        }
        else{
            if(iswenke){
            var wenke=menu_data.filter(function (e) { 
                return e.wenli == "文科"; 
            });
            var a=wenke;
            Ques2(wenke,a);
            }
        }
    })
//第二题筛选
function Ques2(a){
    $(".Q2").click(function(e){
        var subject=$(e.target).closest(".background").find(".ans").html();        
        switch(subject){
            case "互联网": 
                var internet=a.filter(function (e) { 
                return e.subject == "计算机" ||e.subject == "数学"||e.subject == "新闻传播"||e.subject == "物联网"; 
                });
                
                var b=internet;
            break;
            
            case "基础科研":
                var basescience=a.filter(function (e) { 
                return e.subject == "物理学" ||e.subject == "地理"||e.subject == "生物学"||e.subject == "化学"||e.subject == "数学"||e.subject == "考古"||e.subject == "哲学"; 
                });
              
                var b=basescience;
            break;
           
            case "医疗":
                var Medical=a.filter(function (e) { 
                return e.subject == "临床医学" ||e.subject == "心理学"||e.subject == "法医学"||e.subject == "蒙医学"; 
                });
               
                var b=Medical;
            break;
            
            case "教育":
                var education=a.filter(function (e) { 
                return e.subject == "教育学" ||e.subject == "物理学"||e.subject == "生物学"||e.subject == "化学"||e.subject == "数学"||e.subject == "体育学"||e.subject == "世界史"; 
                });
               
                var b=education;
            break;
            
            case "金融":
                var finance=a.filter(function (e) { 
                return e.subject == "数学" ||e.subject == "金融学"||e.subject == "公共管理"||e.subject == "国际贸易";
            });
                
                var b=finance;
            break;
            
            case "其他":
                Ques3(a);
                var b=a;
            break;
        }
        Ques5(a,b);
})   
}
//第二题选其他，进入第三题筛选
function Ques3(a){
    $(".Q3").click(function(e){
        var hobby=$(e.target).closest(".background").find(".ans").html();        
        switch(hobby){
            case "阅读": 
                var reading=a.filter(function (e) { 
                return e.subject == "世界史" ||e.subject == "哲学"||e.subject == "新闻传播"||e.subject == "法学"||e.subject == "保险"||e.subject == "茶学"||e.subject == "蚕学"; 
                });
                
            break;
            
            case "听歌":
                var listening=a.filter(function (e) { 
                return e.subject == "表演" ||e.subject == "音乐"||e.subject == "美术"||e.subject == "作曲"; 
                });
               
            break;
           
            case "打游戏":
                var playing=a.filter(function (e) { 
                return e.subject == "计算机" ||e.subject == "物联网"||e.subject == "新闻传播"||e.subject == "心理学"; 
                });
               
            break;

            case "旅游":
                var traveling=a.filter(function (e) { 
                return e.subject == "地理学" ||e.subject == "考古学"||e.subject == "世界史"||e.subject == "博物馆学"||e.subject == "西班牙语"||e.subject == "日语"; 
                });
            
            break;
            
            case "体育运动":
                var sport=a.filter(function (e) { 
                return e.subject == "体育学" ||e.subject == "保险";
            });
               
            break;
            
            case "其他":
              
            break;
        }
})
}

function Ques5(a,b){//第5题筛选
    $(".background5").click(function(e){
        var feeling=$(e.target).closest(".background5").find(".ans").html();        
        switch(feeling){
            case "无敌，是多么的寂寞": 
                var high=b.filter(function (e) { 
                return e.level == "高" ; 
                });
                var c=high;
            break;
            
            case "惊喜的预言，我的天统统应验了":
                var mid=a.filter(function (e) { 
                return e.level == "中" ; 
                });
                var c=mid;
            break;
           
            case "来不及轰轰烈烈，就保留告别的尊严":
                var low=a.filter(function (e) { 
                return e.level == "低" ; 
                });
                var c=low;
            break;
        }
        //改变数据
        var item = c[Math.floor(Math.random()*c.length)];
        var $school=item.school;
        var $place=item.place;
        var $major=item.subject;
        var music=item.name;
        $(".college").html($school);
        $(".city").html($place);
        $(".study").html($major);
        $(".music").html(music);

        var rev=item.school
        $(".schoolLogo").css("background-image",'url(./imgs/school/' + rev + '.png)');
    })
}
}

function draw(){
    $("#btn_save").on("click", function(event) {
        event.preventDefault();
        var page_result=$(".page_result");
        html2canvas(page_result, {
        allowTaint: true,
        taintTest: false,
        onrendered: function(canvas) {
            canvas.id = "mycanvas";
            //document.body.appendChild(canvas);
            //生成base64图片数据
            var dataUrl = canvas.toDataURL();
            var newImg = document.createElement("img");
            newImg.setAttribute('class','save');
            newImg.src =  dataUrl;
            document.body.appendChild(newImg);
        }
    });
    });

}
function save(){
    var saveimg=$(".save");
    saveimg.bind("click",function(){
        alert("1")
        $(".save").css("display","none");
    })
}
