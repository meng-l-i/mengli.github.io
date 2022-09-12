$(function () {
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
    window.addlove = function () {//.save这个是为了把这个函数变为全局函数使得html能够直接调用
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
        if ($("#about").css("position") == "fixed" && event.target.id != "about") {
            $("#about").remove();
            $("*").css("cursor", "context-menu");
        }
    });
    $("#topmenu").click(function () {
        event.stopPropagation();
    });
    window.out1 = function () {//创建简要信息
        $("*").css("cursor", "url(mouse.ico),auto");
        $("body").append("<div id=\"about\"><h style=\"font-size:30px;font-weight:700;\">about it</h><br>author:萌狸<br>contact:2574792845@qq.com<br><br><p style=\"\">click outside<\p></div> ");
        $("#about").css("cursor", "copy");
    }
    var jss = 0;
    $('#sureinput').click(res => {
        if (localStorage.getItem("user-"+$('#userinput').val()) == null)//null
            alert("未注册");
        else {
            if (localStorage.getItem("user-" + $('#userinput').val())== $('#passwordinput').val()) {
                alert("登录成功");
              //  history.back(-1);
                open('../index.html', "_self");
            }
            else
                alert("密码错误");
        }
    })
    $('#newinput').click(res => {
        open('../registered.html', "_self");
    })
    if (sessionStorage.getItem("user") == null) {
        alert('请先登录');
        open('../login.html', "_self");
    }
    else {
        if ($('#myuser').text() == "未登录") {
            console.log("已登录");
            $('#myuser').empty();
            $('#myuser').append("用户:" + sessionStorage.getItem("user"));
        }
    }
});