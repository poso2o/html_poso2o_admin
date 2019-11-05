/**
 * login.js
 * Created by Luo on 2019/01/30.
 */
/* *
 * 用户登录
 */
var Page = {
    //验证手机号
    isPhoneNo: function (phone) {
        var pattern = /^1[0123456789]\d{9}$/;
        return pattern.test(phone);
    },
    //登录接口
    toLogin: function () {

        var self = this;
        var templateData = {};
        templateData.user_id = ($("input[name='login_username']").val()).replace(/\s+/g, "");
        if (templateData.user_id == "") {
            $("input[name='login_username']").addClass("layui-form-danger").focus();
            layer.msg('请输入账号', {
                //offset: 't',
                icon: 5,
                anim: 6
            });
            return false;
        }
        templateData.password = ($("input[name='login_password']").val()).replace(/\s+/g, "");
        if (templateData.password == "") {
            $("input[name='login_password']").addClass("layui-form-danger").focus();
            layer.msg('请输入密码', {
                //offset: 't',
                icon: 5,
                anim: 6
            });
            return false;
        }
        //console.log("xxx===" + app.json2str(templateData));
        var paramJson = jQuery.param(templateData);
        console.log("=获取营销信息=");
        post("/api/UserManage/login",
            templateData,
            null,
            //请求成功执行
            function (datas) {
                //console.log("=AjaxSimple_success=" + JSON.stringify(datas));
                if (datas.code.indexOf("success") != -1) {
                    POS.setCookie("poso2o_admin_user_id", templateData.user_id);
                    POS.setCookie("poso2o_admin_userinfo", JSON.stringify(datas.data), 1);
                    window.location.href = "/entity_shop/entity_shop.jsp";
                } else {
                    layer.msg('' + datas.msg, {
                        //offset: 't',
                        icon: 5,
                        anim: 6
                    });
                }
            }, false, false,
            //请求之前执行
            function (data) {
                console.log("=AjaxSimple_before=" + JSON.stringify(data));
                layer.msg('正在提交...', {
                    icon: 16,
                    shade: 0.01,
                    time: false //取消自动关闭
                });
            },
            //请求完成执行
            function (data) {
                console.log("=AjaxSimple_complete=");
                layer.closeAll('loading');
                //window.location.href = "/entity_shop/entity_shop.jsp";
            }
        );

    },
    init: function () {

    }
}
Page.init();

/* *
 * 用户登录 - 按键
 */
$("#loginBtn").live('click', function () {
    Page.toLogin();
});
//手机号码
$("input[name='login_username']").live('keyup', function (event) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
    if (event.keyCode == "13") {
        $('#loginBtn').trigger("click"); //处理事件
    }
}).bind("paste", function () { //CTR+V事件处理
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
}).css("ime-mode", "disabled"); //CSS设置输入法不可用 
//手机号码
$("input[name='login_password']").live('keyup', function (event) {
    //$(this).val($(this).val().replace(/[^0-9]/g, ''));
    if (event.keyCode == "13") {
        $('#loginBtn').trigger("click");//处理事件
    }
}).bind("paste", function () { //CTR+V事件处理
    //$(this).val($(this).val().replace(/[^0-9]/g, ''));
}).css("ime-mode", "disabled"); //CSS设置输入法不可用 

/* *
 * 调整窗口绝对居中
 */
function windowHeightR() {
    var windowHeight = $(window).height(); //浏览器当前窗口可视区域高度
    var contentHeight = $(".layadmin-user-login-main").height();
    var top = 20;
    if (windowHeight >= contentHeight) {
        top = (windowHeight - contentHeight) / 2 - 60 - 110;
    }
    if (top <= 0) top = 0;
    $(".layadmin-user-login-main").css({
        "marginTop": top
    });
}

$(window).resize(function () {
    windowHeightR();
})
/* *
 * 设置缓存值
 */
$(function () {
    //调整窗口大小
    windowHeightR();
    var loginname = POS.getCookie("poso2o_admin_user_id");
    if (loginname) {
        $("input[name='login_username']").val(loginname); //用户名
        $("input[name='login_password']").focus();
    } else {
        $("input[name='login_username']").focus(); //用户名
    }
    var now = new Date();
    var year = now.getFullYear(); //得到年份
    $("#footer_year").html(year);
})