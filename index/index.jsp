<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.*" %>
<%@ page session="false" %>
<%
    response.setHeader("Pragma", "No-cache");
    response.setHeader("Cache-Control", "no-cache");
    response.setDateHeader("Expires", 0);
%>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="renderer" content="webkit">
    <title>实体店</title>

    <link rel="stylesheet" href="../style/css/master.css"/>
    <link rel="stylesheet" href="index.css">

    <script type="text/javascript" src="../js/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="../js/jquery.json-2.3.js"></script>
    <script type="text/javascript" src="../js/main.js?v=1001"></script>

    <script type="text/javascript" src="index.js?v=1001"></script>

</head>
<body>

<!-- S header -->
<jsp:include page="/header/header.jsp"/>
<!-- E header -->


<!-- S containerArea -->
<div class="containerArea clearfix">

    <!-- S header -->
    <jsp:include page="/index/left.jsp"/>
    <!-- E header -->

    <!-- S rightArea -->
    <div class="rightArea">

        <!-- S 表格 -->
        <div class="main_area" style="display:none;">

            <div class="main_head clearfix">

                <div class="searchArea clearfix">

                </div>

                <div class="clearfix"></div>

            </div>
            <div class="main_body">

                <style type="text/css">
                    .js_pagebar {
                        float: right;
                        width: 60%;
                    }

                    .js_pagebar .pagination {
                        padding-top: 20px;
                        padding-bottom: 20px;
                        padding-left: 0px;
                        padding-right: 0px;
                    }
                </style>
                <div class="js_pagebar clearfix" style="display:none;">
                    <div class="pagination">
                        <span class="page_nav_area">
                        <a class="btn page_first" href="javascript:void(0);" style="display: none;"></a>
                        <a class="btn page_prev" href="javascript:void(0);" style="display: none;"><i class="arrow"></i></a>
                        <span class="page_num">
                        <label>1</label>
                        <span class="num_gap">/</span>
                        <label>2</label>
                        </span>
                        <a class="btn page_next" href="javascript:void(0);"><i class="arrow"></i></a>
                        <a class="btn page_last" href="javascript:void(0);" style="display: none;"></a>
                        </span>
                        <span class="goto_area">
                        <input type="text">
                        <a class="btn page_go" href="javascript:void(0);">跳转</a>
                        </span>
                    </div>
                </div>

            </div>

        </div>
        <!-- E 表格 -->

    </div>
    <!-- E rightArea -->

    <div class="clearfix"></div>
</div>
<!-- E containerArea -->

<!-- S footer -->
<div class="entity_shop_footer">
    <div class="cont">
        <div class="main_cont">
            <div class="menu_cont">
                <a class="menu setup_menu" href="javascript:void(0);">菜单设置</a>
                <a class="menu full_screen_menu" href="javascript:void(0);">全屏显示</a>
                <a class="menu examine_menu" href="javascript:void(0);"><i id="shop_news_icon">&nbsp;</i><em>8</em>位商家待审核</a>
            </div>
            <a class="btn assign_btn" href="javascript:void(0);">指派设置</a>
        </div>
    </div>
</div>
<!-- E footer -->


</body>
</html>