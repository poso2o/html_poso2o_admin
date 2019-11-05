<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="header clearfix">
	<div class="head_box">
		<a class="logo" href="http://www.poso2o.com/">
			<span class="logoimg logo-icon">日进斗金</span>
		</a>
		<!-- S navArea -->
		<div class="navArea clearfix">
			<ul>
				<li class="entity_shop_nav">
					<a href="/entity_shop/entity_shop.jsp">实体店</a>
				</li>
				<li class="scan_payment">
					<a href="/scan_payment/scan_payment.jsp">扫码支付</a>
				</li>
				<li class="wx_shop_nav">
					<a href="/wx_shop/wx_shop.jsp">微商城</a>
				</li>
				<li class="le_chuan_nav">
					<a href="/le_chuan/le_chuan.jsp">爱乐传</a>
				</li>
				<li class="clearance_nav">
					<a href="/clearance/clearance.jsp">清仓</a>
				</li>
			</ul>
		</div>
		<!-- E navArea -->
		<div class="rightDiv">
			<a class="logout" id="logout" href="/user.htm?Act=logout">退出</a>
			<a class="head" href="http://www.poso2o.com/UserAccount/">
				<p class="nick"><span>店铺名称</span></p>
				<p class="type">工号：001</p>
				<img src="http://account.poso2o.com/style/img/user222_222.jpg" class="avatar">
			</a>
		</div>
	</div>
</div>
<script type="text/javascript">
	var userInfo = POS.getCookie("WC_UserInfo");
	if(userInfo) {
		userInfo = eval("(" + userInfo + ")");
		$(".header .rightDiv .nick span").html(userInfo.uid);
		$(".header .rightDiv img").attr("src", userInfo.pic74_74);
		$(".header .rightDiv").show();
	} else {
		//window.location.href="http://www.poso2o.com/UserAccount/login.jsp?a=EntityStore";
	}
</script>