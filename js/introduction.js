$(function () {
    window.addlove = function () {//.save这个是为了把这个函数变为全局函数使得html能够直接调用

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
        if ($("#about").css("position") == "fixed" && event.target.id != "about") {
            $("#about").remove();
            $("body").css("cursor", "auto");
        }
    });
    $("#topmenu").click(function () {
        event.stopPropagation();
    });
    window.out1 = function () {
        $("body").css("cursor", "url(mouse.cur),auto");
        $("body").append("<div id=\"about\"><h style=\"font-size:30px;font-weight:700;\">about it</h><br>author:萌狸<br>contact:2574792845@qq.com<br><br><p style=\"\">click outside<\p></div> ");
        $("#about").css("cursor", "copy");
    }
    var nowid = 1;
    var nowcontent;
    function changecontent(id) {
        if (id == 1)
            return 'introduceme';
        else if (id == 2)
            return 'introducewhat';
        else if (id == 3)
            return 'introducewhy';
    }
    var stop = 0;
    document.getElementById('content').addEventListener('wheel', e => {//事件句柄不能用在tag获取的对象
        console.log(stop);//每次执行后，当前图片都会到最后一页，其他都会向上。
        if (stop == 0) {
            stop = 1;
            if (e.wheelDelta > 0) {//向上
                $('#' + changecontent(nowid)).addClass('out');
                nowid--;
                if (nowid == 0)
                    nowid = 3;
                console.log("nowid=" + nowid);
                $('#' + changecontent(nowid)).addClass('enter');
                console.log("down");
                setTimeout(res => {
                    for (var i = 1; i <= 3; i++) {
                        $('#' + changecontent(i)).removeClass('enter');
                        $('#' + changecontent(i)).removeClass('out');
                    }
                    $('#' + changecontent(nowid)).css("top", "0px");
                    for (var i = 1; i <= 3; i++) {
                        if (nowid != i) {
                            $('#' + changecontent(i)).css("top", "1050px");
                        }
                    }
                }, 2000)
            }
            else if (e.wheelDelta < 0) {//向下
                $('#' + changecontent(nowid)).addClass('out');
                nowid++;
                if (nowid == 4)
                    nowid = 1;
                console.log("nowid=" + nowid);
                $('#' + changecontent(nowid)).addClass('enter');
                console.log("down");
                setTimeout(res => {
                    for (var i = 1; i <= 3; i++) {
                            $('#' + changecontent(i)).removeClass('enter');
                            $('#' + changecontent(i)).removeClass('out');
                    }
                    $('#' + changecontent(nowid)).css("top", "0px");
                    for (var i = 1; i <= 3; i++) {
                        if (nowid != i) {
                            $('#' + changecontent(i)).css("top","1050px");
                        }
                    }
                }, 2000)
            }
            setTimeout(res => { stop = 0; console.log("clean") }, 2000)
        }
        else if (stop == 1) {
            ;
             }
            //if (stop == 0) {
            //     stop = 1;
            //     if (e.wheelDelta > 0) {//向上
            //         //nowid是当前页面的id号。当前的回到最后，其余的往上一格
            //         nowid--;
            //         changecontent();
            //         $('#' + nowcontent).animate({ top:"-1050px" }, 2000);

            //         changecontent();
            //         console.log("up");
            //     }
            //     else if (e.wheelDelta < 0) {//向下
            //         changecontent();
            //         $('#' + nowcontent).addClass('out');
            //         nowid++;
            //         changecontent();
            //         $('#' + nowcontent).addClass('enter');
            //         console.log("down");
            //         setTimeout(res => {
            //             console.log("wite")
            //             $('#' + nowcontent).removeClass('enter');
            //             nowid--;
            //             changecontent();
            //             $('#' + nowcontent).removeClass('out');
            //             nowid++;
            //             changecontent();
            //         }, 2000)
            //     }
            //     setTimeout(res=>{ stop = 0; console.log("clean")},2000)
            // }
            // else if (stop == 1) {
            //     ;
            // }
    });
    if (sessionStorage.getItem("user") == null) {
        //alert('请先登录');
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
