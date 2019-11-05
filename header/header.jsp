<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="layui-header">
	<div class="layui-logo">日进斗金官方后台管理系统</div>
	<!-- 头部区域（可配合layui已有的水平导航）  layui-this-->
	<ul class="layui-nav layui-layout-left">
		<li class="layui-nav-item entity_shop_nav">
			<a href="/entity_shop/entity_shop.jsp">实体店</a>
		</li>
		<li class="layui-nav-item">
			<a href="">扫码支付</a>
		</li>
		<li class="layui-nav-item wx_shop_nav">
			<a href="">微商城</a>
		</li>
		<li class="layui-nav-item">
			<a href="">爱乐传</a>
		</li>
		<li class="layui-nav-item">
			<a href="">清仓</a>
		</li>
	</ul>
	<ul class="layui-nav layui-layout-right">
		<li class="layui-nav-item">
			<a href="javascript:;" class="user_info">
				<img src="/style/img/user30_30.jpg" class="layui-nav-img">
				<span class="user_id" style="display: none;"></span>
				<span class="user_name"></span>
			</a>
		</li>
		<li class="layui-nav-item">
			<a href="javascript:logout();">退出</a>
		</li>
	</ul>
</div>
<script type="text/javascript">
	var sessionData = POS.getCookie("poso2o_admin_userinfo");
	if(sessionData) {
		sessionData = eval("(" + sessionData + ")");
		$(".user_info .user_id").html(sessionData.user_id);
		$(".user_info .user_name").html(sessionData.user_id + "-" +sessionData.user_name);
		if(sessionData.user_logo) {
			$(".user_info img").attr("src", sessionData.user_logo);
		}
	} else {
		window.location.href = "/login/login.jsp";
	}
	/**
	 * 注销
	 */
	function logout() {
		POS.delCookie("poso2o_admin_userinfo");
		window.location.href = "/login/login.jsp";
	}
</script>