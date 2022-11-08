window.onload = function () {//这个是控制字一个个跳出。
    function showtext(text, time, id) {//text是跳出的文字，time是跳出的间隔，id是需要设定文字跳动的标签id
        var num = text.length, i = 1;
        function show() {
            var shower = text.substr(0, i);//每次都截一段，每次截的长度+1
            document.getElementById(id).innerHTML = shower;//输入到id里面
            i++;
            if (i - 1 >= num)
                clearInterval(done);//当超过输入的文字字数的时候就会停止循环
        }
        var done = setInterval(show, time);//循环进行函数
    }
    showtext('编程对于许多人来说其实并不是高高在上的一种技术。<br />只要肯认真学习，<br />仍然还是可以把握最基本的编程能力，制作出一个令人满意的作品。<br />\
                但是无论是专业学习者，还是业余爱好者，<br />都需要有一个明确的技术路线，适当的技术帮助。<br />本网站选取了一些有助于初学者的文章和资源。希望帮助到你。', 40, "read");
}

$(function () {
    t = 0;
    window.onload = function () {
        function showtext(text, time, id) {//text是跳出的文字，time是跳出的间隔，id是需要设定文字跳动的标签id
            var num = text.length, i = 1;
            function show() {
                var shower = text.substr(0, i);
                document.getElementById(id).innerHTML = shower;
                i++;
                if (i - 1 >= num)
                    clearInterval(done);
            }
            var done = setInterval(show, time);
        }
    }
    window.addlove=function() {//.save这个是为了把这个函数变为全局函数使得html能够直接调用
        try {
            window.external.AddFavorite("http://#", "萌狸的大作业");
        }
        catch (e) {
            alert("加入收藏失败，有劳您手动添加。");
        }
    }
    $("#topmenu").hide();
    $(".menu-icon").click(function () {//下面三个函数都是关于点击就隐蔽小型菜单栏
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
            $("*").css("cursor", "context-menu");
       }
   });
    $("#topmenu").click(function () {
        event.stopPropagation();
    });
    window.out1 = function () {//创建简要信息
        t++;
        $("*").css("cursor", "url(mouse.ico),auto");
        $("body").append("<div id=\"about\"><h style=\"font-size:30px;font-weight:700;\">about it</h><br>author:萌狸<br>contact:2574792845@qq.com<br><br><p style=\"\">click outside<\p></div> ");
        $("#about").css("cursor", "copy");
        if (t == 3) {
            alert("All right.\nAre you really idle?");
        }
        if (t == 4) {
            alert("Well. Since you are so idle, let you read my memories.");
            window.location.href = "../memories.html";
        }
    }
    if (sessionStorage.getItem("user") == null) {
       // alert('请先登录');
        //open('../login.html', "_self");
    }
    else {
        if ($('#myuser').text() == "未登录") {
            console.log("已登录");
            $('#myuser').empty();
            $('#myuser').append("用户:" + sessionStorage.getItem("user"));
        }
    }
});
