window.onload = function () {//这个是控制字一个个跳出。
    function showtext(text, time, id) {//text是跳出的文字，time是跳出的间隔，id是需要设定文字跳动的标签id
        var num = text.length, i=1;
        function show() {
            var shower = text.substr(0, i);//每次都截一段，每次截的长度+1
            document.getElementById(id).innerHTML = shower;//输入到id里面
            i++;
            if (i-1 >= num)
                clearInterval(done);//当超过输入的文字字数的时候就会停止循环
        }
        var done = setInterval(show, time);//循环进行函数
    }
   // showtext("你今天吃了吗", 500, "cp"); 这个为使用格式。填入的值同上。需要注意，这个函数要放在window.onload内部或者用jq处理
}
$(function () {
    window.addlove=function() {//.save这个是为了把这个函数变为全局函数使得html能够直接调用

        try {
            window.external.AddFavorite("https://luoqi.tiancity.com/homepage/v3/index.html", "萌狸的过去");
        }
        catch (e) {
            alert("加入收藏失败，有劳您手动添加。");
        }
    }
    $("#topmenu").hide();
    $(".menu-icon").click(function () {
        if ($("#topmenu").css("display") == "none") {
            $("#topmenu").show();
            event.stopPropagation();
        }
        else {
            $("#topmenu").hide();
        }
       //触发是指查看函数条件，冒泡是指从最新放入的函数先执行。大概。所以这个函数大概就是阻止这一叠加点击事件的后续事件？所以如果是触发这个，那么后面的都会被禁止。
    });
    $("body").click(function () {//注意，用*不是只执行一次，而是叠层多少就触发多少
       if ($("#topmenu").css("display") != "none")
            $("#topmenu").hide();
        if ($("#about").css("position") == "fixed" && event.target.id!="about") {
            $("#about").remove();
            $("body").css("cursor", "auto");
       }
   });
    $("#topmenu").click(function () {
        event.stopPropagation();
    });
    window.out1 = function () {
        $("body").css("cursor", "url(images/mouse.cur),auto");
        $("body").append("<div id=\"about\"><h style=\"font-size:30px;font-weight:700;\">about it</h><br>author:萌狸<br>contact:2574792845@qq.com<br><br><p style=\"\">click outside<\p></div> ");
        $("#about").css("cursor", "copy");
    }
});