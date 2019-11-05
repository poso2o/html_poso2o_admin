<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.*" %>
<%@ page session="false" %>
<%
    response.setHeader("Pragma", "No-cache");
    response.setHeader("Cache-Control", "no-cache");
    response.setDateHeader("Expires", 0);
%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>登入 - 日进斗金官方后台管理系统</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="icon" href="http://www.poso2o.com/favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" href="/utils/layui/css/layui.css" media="all">
    <link rel="stylesheet" href="/utils/layui/css/admin.css" media="all">
    <link rel="stylesheet" href="/login/login.css" media="all">
</head>

<body>

<div class="layadmin-user-login layadmin-user-display-show" id="LAY-user-login" style="display: none;">

    <div class="layadmin-user-login-main">
        <div class="layadmin-user-login-box layadmin-user-login-header">
            <h2>poso2o</h2>
            <p>日进斗金官方后台管理系统</p>
        </div>
        <div class="layadmin-user-login-box layadmin-user-login-body">
            <div class="layui-form-item">
                <label class="layadmin-user-login-icon layui-icon layui-icon-username" for="login_username"></label>
                <input type="text" name="login_username" id="login_username" lay-verify="required" placeholder="用户名" class="layui-input">
            </div>
            <div class="layui-form-item">
                <label class="layadmin-user-login-icon layui-icon layui-icon-password" for="login_password"></label>
                <input type="password" name="login_password" id="login_password" lay-verify="required" placeholder="密码" class="layui-input">
            </div>
            <div class="layui-form-item" style="display: none;">
                <div class="layui-row">
                    <div class="layui-col-xs7">
                        <label class="layadmin-user-login-icon layui-icon layui-icon-vercode" for="LAY-user-login-vercode"></label>
                        <input type="text" name="vercode" id="LAY-user-login-vercode" lay-verify="required" placeholder="图形验证码" class="layui-input">
                    </div>
                    <div class="layui-col-xs5">
                        <div style="margin-left: 10px;">
                            <img src="" class="layadmin-user-login-codeimg" id="LAY-user-get-vercode">
                        </div>
                    </div>
                </div>
            </div>
            <div class="layui-form-item" style="margin-bottom: 20px;" style="display: none;">
                <div class="layui-unselect layui-form-checkbox layui-form-checked" lay-skin="primary" style="display: none;">
                    <span>记住密码</span><i class="layui-icon layui-icon-ok"></i>
                </div>
                <a href="forget.html" class="layadmin-user-jump-change layadmin-link" style="margin-top: 7px;display: none;">忘记密码？</a>
            </div>
            <div class="layui-form-item">
                <button class="layui-btn layui-btn-fluid" id="loginBtn">登 入</button>
            </div>
        </div>
    </div>

    <div class="layui-trans layadmin-user-login-footer">
        <p>
            Copyright©2010-<label id="">2019</label>&nbsp;华购<a href="http://www.poso2o.com/" target="_blank">poso2o.com</a>版权所有
        </p>
    </div>

</div>

<script type="text/javascript" src="/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="/js/AjaxSimple.js"></script>
<script type="text/javascript" src="/utils/layui/layui.all.js"></script>
<script type="text/javascript" src="/js/main.js"></script>
<script type="text/javascript" src="/login/login.js"></script>

</body>

</html>