<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*"%>
<%@ page session="false" %>
<%
response.setHeader("Pragma","No-cache");
response.setHeader("Cache-Control","no-cache");
response.setDateHeader("Expires", 0);
%>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="renderer" content="webkit">
<title>微商城</title>  

<link rel="stylesheet" href="../style/css/master.css" />
<link rel="stylesheet" href="wx_shop.css">

<script type="text/javascript" src="../js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="../js/jquery.json-2.3.js"></script>
<script type="text/javascript" src="../js/main.js?v=1001"></script>

<script type="text/javascript" src="../js/new_address.js"></script>
<script type="text/javascript" src="wx_shop.js?v=1001"></script>

</head>
<body>

<!-- S header -->
<jsp:include page="/header/header.jsp" />
<!-- E header -->


<!-- S containerArea -->
<div class="containerArea clearfix">

<!-- S header -->
<jsp:include page="/entity_shop/left.jsp" />
<!-- E header -->

<!-- S rightArea -->
<div class="rightArea">

<!-- S 表格 -->
<div class="main_area" style="display:;">

<div class="main_head clearfix">

<div class="searchArea clearfix">

<div class="list"><label>时间</label><span class="combox dropDownBox" style="width:160px" bindtap="search_dat"><input class="comboxText" type="text" style="width:126px" readonly value="最近一年" comboxval=""><span class="comboxArrow"></span><div class="pannel hideDiv" style="width:160px;"><ul class="search_dat_list"><li><a comboxval="" default="最近一年" href="javascript:void(0);">最近一年</a></li></ul></div></span></div>

<div class="CA_Area" style="float:left;">

<div class="list"><label>地区</label><span class="combox CA_p dropDownBox" style="width:160px" bindtap="search_address"><input class="comboxText" type="text" style="width:126px" readonly value="请选择省份" comboxval=""><span class="comboxArrow"></span><div class="pannel hideDiv" style="width:160px;"><ul class="CA_p_lists"></ul></div></span>

</div>
<div class="list">

<span class="combox CA_c dropDownBox" style="width:160px"><input class="comboxText" type="text" style="width:126px" readonly value="请选择城市" comboxval=""><span class="comboxArrow"></span><div class="pannel hideDiv" style="width:160px;"><ul class="CA_c_lists"></ul></div></span>

</div>

</div>

<div class="list shopBoxList"><label>级别</label><span class="combox datBox dropDownBox" style="width:160px" bindtap="search_level"><input class="comboxText" type="text" style="width:126px" readonly value="全部" comboxval=""><span class="comboxArrow"></span><div class="pannel hideDiv" style="width:160px;"><ul class="datList"><li><a comboxval="" default="全部" href="javascript:void(0);">全部</a></li></ul></div></span></div>

<div class="list shopBoxList"><label>业务组</label><span class="combox datBox dropDownBox" style="width:160px" bindtap="search_business_group"><input class="comboxText" type="text" style="width:126px" readonly value="全部" comboxval=""><span class="comboxArrow"></span><div class="pannel hideDiv" style="width:160px;"><ul class="datList"><li><a comboxval="" default="全部" href="javascript:void(0);">全部</a></li></ul></div></span></div>

<div class="list shopBoxList"><label>业务员</label><span class="combox datBox dropDownBox" style="width:160px" bindtap="search_salesman"><input class="comboxText" type="text" style="width:126px" readonly value="全部" comboxval=""><span class="comboxArrow"></span><div class="pannel hideDiv" style="width:160px;"><ul class="datList"><li><a comboxval="" default="全部" href="javascript:void(0);">全部</a></li></ul></div></span></div>

<div class="list shopBoxList"><label>版本</label><span class="combox datBox dropDownBox" style="width:160px" bindtap="search_version"><input class="comboxText" type="text" style="width:126px" readonly value="全部" comboxval=""><span class="comboxArrow"></span><div class="pannel hideDiv" style="width:160px;"><ul class="datList"><li><a comboxval="" default="全部" href="javascript:void(0);">全部</a></li></ul></div></span></div>

<div class="list frm_radio_list search_service_list">
<label>服务</label>
<label class="frm_radio_label selected" style="padding:0px;" bindtap="search_service">
<i class="icon_radio"></i>
<span type="label_content">未订购</span>
</label>
<label class="frm_radio_label" style="padding:0px;" bindtap="search_service">
<i class="icon_radio"></i>
<span type="label_content">已订购</span>
</label>
<label class="frm_radio_label" style="padding:0px;" bindtap="search_service">
<i class="icon_radio"></i>
<span type="label_content">协助开通</span>
</label>
<label class="frm_radio_label" style="padding:0px;" bindtap="search_service">
<i class="icon_radio"></i>
<span type="label_content">待续费</span>
</label>
<label class="frm_radio_label" style="padding:0px;" bindtap="search_service">
<i class="icon_radio"></i>
<span type="label_content">已到期</span>
</label>
<label class="frm_radio_label" style="padding:0px;" bindtap="search_service">
<i class="icon_radio"></i>
<span type="label_content">全部</span>
</label>
</div>

<div class="list positionList" style="margin-left:10px;">
<input type="text" maxlength="30" value="" name="keywords" class="inputText keywords" placeholder="查找" bindinput="search_keywords">
<a class="del_btn" href="javascript:;" style="display:none;"><i></i>&nbsp;</a>
<a class="btn keywords_btn" href="javascript:void(0);">&nbsp;</a>
</div>

</div>

<div class="clearfix"></div>

</div>
<div class="main_body">

<table class="setTable clothingTable">
<thead>
<tr>
<th width="6%">级别</th>
<th width="6%">商家号</th>
<th width="6%">店名</th>
<th width="6%">注册时间</th>
<th width="6%">服务</th>
<th width="6%">套餐类型</th>
<th width="6%">试用时间</th>
<th width="6%">订购时间</th>
<th width="6%">到期时间</th>
<th width="6%"><a order="num_update" class="order_search" href="javascript:void(0);">微店商品数<i></i></a></th>
<th width="6%"><a order="num_update" class="order_search" href="javascript:void(0);">会员数<i></i></a></th>
<th width="6%"><a order="num_update" class="order_search" href="javascript:void(0);">订单数<i></i></a></th>
<th width="6%"><a order="num" class="order_search" href="javascript:void(0);">成交额<i></i></a></th>
<th width="6%">业务组</th>
<th width="6%">业务员</th>
</tr>
</thead>
<tbody>
<tr bindtap="shop_list_click">
<td colspan="15">正在加载...</td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="14">合计</td>
<td class="total_famount">0</td>
</tr>
</tfoot>
</table>

<style type="text/css">
.js_pagebar{
	float:right;
	width:60%;
}
.js_pagebar .pagination{
	padding-top:20px;
	padding-bottom:20px;
	padding-left:0px;
	padding-right:0px;
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

<!-- S 店铺详情 -->
<div class="shop_info_area" style="display:;">

<a class="shop_info_area_close" href="javascript:void(0);" bindtap="shop_info_area_close">&nbsp;</a>

<div class="shop_head">
<div class="pic" mode="aspectFill"></div>
<div class="shop_name">店铺名称</div>
<div class="shop_other clearfix">
<ul>
<li>商家编号：<span>XXX</span></li>
<li>注册时间：<span>XXX</span></li>
<li>业务组：<span>XXX</span></li>
<li>业务员：<span>XXX</span></li>
</ul>
</div>
<div class="clearfix"></div>
</div>

<div class="shop_details_text">
<ul>
<li>联系人：<span>XXX</span></li>
<li>手机：<span>XXX</span></li>
<li>电话：<span>XXX</span></li>
<li>微信：<span>XXX</span></li>
<li>QQ：<span>XXX</span></li>
<li>Email：<span>XXX</span></li>
<li>微信：<span>XXX</span></li>
<li>主营：<span>XXX</span></li>
<li>店铺面积：<span>XXX</span></li>
<li>租金：<span>XXX</span></li>
<li>员工数：<span>XXX</span></li>
<li>地址：<span>XXX</span></li>
</ul>
<div class="clearfix"></div>
</div>

<!-- S shop_news -->
<div class="shop_news">
<a class="head" href="javascript:void(0);" bindtap="show_shop_news">
<i>&nbsp;</i>最新动态：<span>XXX</span>
<em>展开</em>
</a>
<ul style="display:none;">
<li>2019-02-20 12:00 开通扫码支付</li>
<li>2019-02-20 12:00 开通扫码支付</li>
<li>2019-02-20 12:00 开通扫码支付</li>
<li>2019-02-20 12:00 开通扫码支付</li>
<li>2019-02-20 12:00 开通扫码支付</li>
<li>2019-02-20 12:00 开通扫码支付</li>
<li>2019-02-20 12:00 开通扫码支付</li>
<li>2019-02-20 12:00 开通扫码支付</li>
</ul>
</div>
<!-- E shop_news -->

<!-- S shop_nav_list -->
<div class="shop_nav_list">
<ul>
<li class="current"><a href="javascript:void(0);">服务(<em>1</em>)</a></li>
<li class=""><a href="javascript:void(0);">资质(<em>已认证</em>)</a></li>
<li class=""><a href="javascript:void(0);">违规(<em>0</em>)</a></li>
<li class=""><a href="javascript:void(0);">成交(<em>888笔</em>)</a></li>
<li class=""><a href="javascript:void(0);">商品(<em>288</em>)</a></li>
<li class=""><a href="javascript:void(0);">会员(<em>168</em>)</a></li>
<li class=""><a href="javascript:void(0);">售后记录(<em>0</em>)</a></li>
</ul>
<div class="clearfix"></div>
</div>
<!-- E shop_nav_list -->

<!-- S shop_service -->
<div class="shop_service shop_nav_item" style="display:none;">
<div class="items">

<div class="item code_payment_item current">
<span class="name">扫码支付</span>
<span class="state">待审核</span>
<div class="clearfix"></div>
<i></i>
<span style="text-align:center;">手续费用<em style="color:#F00;">0.38%</em>/笔</span>
<span>&nbsp;</span>
<span>&nbsp;</span>
<span>申请时间：2019-02-10</span>
<span>审核时间：2019-02-10</span>
<span>审核结果：2019-02-10</span>
<span>所属业务：2019-02-10</span>
<div class="clearfix"></div>

<div class="btn_item">
<a class="btn btn_primary audit_pass_btn" href="javascript:void(0);">前往审核</a>
</div>

</div>

<div class="item wx_shop_item">
<span class="name">微商城</span>
<span class="state">待审核</span>
<div class="clearfix"></div>
<i></i>
<div class="clearfix"></div>

<div class="list">
<div class="li">
<em style="color:#F00;">￥1999.00</em>
<em>基础版</span>
</div>
<div class="li">
<em style="color:#F00;">￥2999.00</em>
<em>专业版</span>
</div>
<div class="li" style="border:none;">
<em style="color:#F00;">￥3999.00</em>
<em>高级版</span>
</div>
</div>

<div class="clearfix"></div>

<span>&nbsp;</span>
<span>申请人：2019-02-10</span>
<span>联系信息：2019-02-10</span>
<span>申请时间：2019-02-10</span>
<span>所属业务：2019-02-10</span>
<div class="clearfix"></div>
<div class="btn_item">
<a class="btn btn_primary audit_pass_btn" href="javascript:void(0);">前往审核</a>
</div>
</div>

<div class="item distribution_item">
<span class="name">爱传乐分销</span>
<span class="state">待审核</span>
<div class="clearfix"></div>
<i></i>
<span style="text-align:center;">手续费用<em style="color:#F00;">0.38%</em>/笔</span>
<span>&nbsp;</span>
<span>&nbsp;</span>
<span>申请人：2019-02-10</span>
<span>申请条件：2019-02-10</span>
<span>申请时间：2019-02-10</span>
<span>所属业务：2019-02-10</span>
<div class="clearfix"></div>

<div class="btn_item">
<a class="btn btn_primary audit_pass_btn" href="javascript:void(0);">前往审核</a>
</div>

</div>

<div class="clearfix"></div>
</div>
</div>
<!-- E shop_service -->

<!-- S shop_aptitude -->
<div class="shop_aptitude shop_nav_item" style="display:none;">


<div class="pub-wrap">
<ul class="pub-process process-3 pub-process-flex" id="pubProcess">
<li class="active active_ok">
<span class="ball">&nbsp;</span>
<span class="ball_text">实名认证</span>
</li>
<li class="active active_error">
<span class="ball">&nbsp;</span>
<span class="ball_text">收款账号</span>
</li>
<li class="active">
<span class="ball">&nbsp;</span>
<span class="ball_text">企业资质</span>
</li>
<li>
<span class="ball">&nbsp;</span>
<span class="ball_text">完成</span>
</li>
</ul>
</div>

<!-- S 实名认证 -->
<div class="items real_name_act_items">

<div class="imgs">
<div class="imgs_cont">
<img src="http://account.poso2o.com/style/img/logo_256.png">
</div>
</div>
<div class="texts">
<p class="title"><i>&nbsp;</i>法人代表</p>
<p>姓名：<span>XXX</span></p>
<p>身份证：<span>XXX</span></p>
<p>有效期：<span>XXX</span></p>
</div>
<div class="btn_item">
<a class="btn btn_primary audit_pass_btn" href="javascript:void(0);">审核通过</a>
<a class="btn btn_default non_conformity_btn" href="javascript:void(0);">&emsp;不符合&emsp;</a>
</div>

<div class="clearfix"></div>
</div>
<!-- E 实名认证 -->

<!-- S 收款账号 -->
<div class="items receiving_account_items">

<div class="imgs">
<div class="imgs_cont">
<img src="http://account.poso2o.com/style/img/logo_256.png">
</div>
</div>
<div class="texts">
<p class="title"><i>&nbsp;</i>收款账号</p>
<p>财务联系人：<span>XXX</span></p>
<p>电话/手机号：<span>XXX</span></p>
<p>幵户人：<span>XXX</span></p>
<p>银行卡号：<span>XXX</span></p>
<p>开户行（支行）：<span>XXX</span></p>
</div>
<div class="btn_item">
<a class="btn btn_primary audit_pass_btn" href="javascript:void(0);">审核通过</a>
<a class="btn btn_default non_conformity_btn" href="javascript:void(0);">&emsp;不符合&emsp;</a>
</div>

<div class="clearfix"></div>
</div>
<!-- E 收款账号 -->

<!-- S 企业资质 -->
<div class="items enterprise_qualification_items">

<div class="imgs">
<div class="imgs_cont">
<img src="http://account.poso2o.com/style/img/logo_256.png">
</div>
</div>
<div class="texts">
<p class="title"><i>&nbsp;</i>企业资质</p>
<p>法人代表：<span>XXX</span></p>
<p>企业全称：<span>XXX</span></p>
<p>营业执照号：<span>XXX</span></p>
</div>
<div class="btn_item">
<a class="btn btn_primary audit_pass_btn" href="javascript:void(0);">审核通过</a>
<a class="btn btn_default non_conformity_btn" href="javascript:void(0);">&emsp;不符合&emsp;</a>
</div>

<div class="clearfix"></div>
</div>
<!-- E 企业资质 -->

<div class="clearfix"></div>
</div>
<!-- E shop_aptitude -->

<!-- S shop_violation -->
<div class="shop_violation shop_nav_item" style="display:none;">
<p>违规</p>
<div class="clearfix"></div>
</div>
<!-- E shop_violation -->

<!-- S shop_deal -->
<div class="shop_deal shop_nav_item" style="display:none;">
<p>成交</p>
<div class="clearfix"></div>
</div>
<!-- E shop_deal -->

<!-- S shop_goods -->
<div class="shop_goods shop_nav_item" style="display:none;">
<p>商品</p>
<div class="clearfix"></div>
</div>
<!-- E shop_goods -->

<!-- S shop_member -->
<div class="shop_member shop_nav_item" style="display:none;">
<p>会员</p>
<div class="clearfix"></div>
</div>
<!-- E shop_member -->

<!-- S shop_after_sale -->
<div class="shop_after_sale shop_nav_item" style="display:none;">
<p>售后记录</p>
<div class="clearfix"></div>
</div>
<!-- E shop_after_sale -->


</div>
<!-- E 店铺详情 -->

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


<!--审核店铺资质 start-->
<style type="text/css">
.CheckQualificationsDialog{
	float:left;
	width:640px;
	position:fixed;
	top:49px;
	left:100px;
}
.CheckQualificationsDialog .dialog_bd{
	padding-left:74px;
	padding-top:30px;
	padding-right:0;
	padding-bottom:30px;
}
.CheckQualificationsDialog .list{
	margin-bottom:14px;
}
.CheckQualificationsDialog .list .label{
	float:left;
	width:50px;
	padding-top:10px;
	position:relative;
}
.CheckQualificationsDialog .list em{
	float:left;
	color: #f17e3f;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
	position:absolute;
	top:8px;
	left:-10px;
}
.CheckQualificationsDialog .description {
    border: 1px solid #ddd;
    height: 118px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 6px 0 0 6px;
    position: relative;
    resize: none;
    width: 480px;
}
.CheckQualificationsDialog .description:hover, .CheckQualificationsDialog .description:focus{
	border: 1px solid #44b549;
}
</style>
<div class="dialog CheckQualificationsDialog" seid="">
<div class="dialog_hd">
<h3>审核确认</h3>
<a class="closed pop_closed" onClick="return false" href="javascript:;">关闭</a>
</div>
<div class="dialog_bd clearfix">
<div class="list">
请选择原因：
</div>
<div class="list">
<label class="frm_checkbox_label selected" data="0"><i class="icon_checkbox"></i>身份证证件模糊</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>身份证信息错误</label>
</div>
<div class="list">
<label class="frm_checkbox_label" data="2"><i class="icon_checkbox"></i>其他原因</label>
</div>
<div class="list">
<textarea name="description" cols="45" rows="5" class="description" placeholder="其他原因"></textarea>
</div>
</div>
<div class="dialog_ft clearfix">
<a href="javascript:;" class="btn btn_default closed">取消</a>
<a href="javascript:;" class="btn btn_primary CheckQualificationsPrimaryBtn" id="CheckQualificationsPrimaryBtn">确定</a>
</div>
</div>
<script type="text/javascript">
/* *
 * 审核店铺资质窗口 - 打开
 */
$(".real_name_act_items .non_conformity_btn").live('click',function(){
	showCheckQualificationsDialog();
})
function showCheckQualificationsDialog(){
	$(".CheckQualificationsDialog").attr("seid","");
	var dialog = $('.CheckQualificationsDialog');
	var left = ($(window).width() - dialog.width()) / 2;
	var top = ($(window).height() - dialog.height()) / 2;
	if(top<49) top=49;
	dialog.css({position:'absolute',top:top+$(document).scrollTop(),left:left+$(document).scrollLeft()}).fadeIn();
	WC.fnOverlay($('body'));
}
/* *
 * 审核店铺资质窗口 - 关闭
 */
function closeCheckQualificationsDialog(){
	$('.CheckQualificationsDialog, .itemOverlay').fadeOut();
	setTimeout(function (){$(".itemOverlay").remove();},300);
}
$('.CheckQualificationsDialog .closed').live('click',function(){
	closeCheckQualificationsDialog();
})
/* *
 * 审核店铺资质窗口 - 请选择原因
 */
$('.CheckQualificationsDialog .frm_checkbox_label').live('click',function(){
	$('.CheckQualificationsDialog .frm_checkbox_label').removeClass("selected");
	$(this).addClass("selected");
	var data = $(this).attr("data");
	if(data == "2"){
		$(".CheckQualificationsDialog textarea[name='description']").focus();
	}
})
/* *
 * 审核店铺资质窗口 - 其他原因
 */
$(".CheckQualificationsDialog textarea[name='description']").live('focus',function(){
	$('.CheckQualificationsDialog .frm_checkbox_label').removeClass("selected");
	$('.CheckQualificationsDialog .frm_checkbox_label:eq(2)').addClass("selected");
	$(".CheckQualificationsDialog textarea[name='description']").focus();
})
/* *
 * 审核店铺资质窗口 - 添加类别
 */
$("#CheckQualificationsPrimaryBtn").live('click',function(){
	addStoreCustomer();
})
function addStoreCustomer(){
	var paramObject = new Object();
	paramObject.sessionUid = userInfo.uid;
	paramObject.sessionKey = userInfo.password;
	var directory=$.trim($(".CheckQualificationsDialog input[name='directory']").val());
	var length=directory.length; //先把汉字看成一个字符 
	for (var i=0;i<directory.length;i++) { //做循环检查每一个字符 
		if (directory.charAt(i)>'~') { //发现一个汉字总长度+1 
			length=length+1; 
		}
	}
	if(length>16){
		fntopmessagebox('不得超过8个汉字或16个字符.','error');
		$(".CheckQualificationsDialog input[name='directory']").select();
		return false;
	}else if(length==0){
		fntopmessagebox('名称不能为空.','error');
		$(".CheckQualificationsDialog input[name='directory']").focus();
		return false;
	}
	paramObject.directory = directory;
	var fid=$(".CheckQualificationsDialog").attr("seid");
	var url="/directory.htm?Act=add";
	if(fid!=""){
		paramObject.fid = fid;
		url="/directory.htm?Act=edit";
	}
	var paramJson=jQuery.param(paramObject);
	$(".CheckQualificationsPrimaryBtn").attr("id","").addClass("loadingBtn");
	$.ajax({
		type:"POST",cache:false,dataType:"json",url:url,data:paramJson,timeout:20000,success:function(datas){
			if(datas.code.indexOf("success")!=-1){
				fntopmessagebox("操作成功",'success');
				$(".CheckQualificationsDialog, .itemOverlay").hide();
				setTimeout(function () {location.reload();}, 300);
			}else if(datas.code.indexOf("repeat")!=-1){
				fntopmessagebox('类别已存在.','error');
			}else{
				fntopmessagebox(datas.data,'error');
			}
		},error:function(){
			fntopmessagebox('提交失效.','error');
		}
	}).always(function(){
		$(".CheckQualificationsPrimaryBtn").attr("id","CheckQualificationsPrimaryBtn").removeClass("loadingBtn");
	})
}
</script>
<!--审核店铺资质 end-->


<!--菜单设置 start-->
<style type="text/css">
.MenuSettingsDialog{
	float:left;
	width:640px;
	position:fixed;
	top:49px;
	left:100px;
}
.MenuSettingsDialog .dialog_bd{
	padding-left:74px;
	padding-top:30px;
	padding-right:0;
	padding-bottom:30px;
}
.MenuSettingsDialog .list{
	margin-bottom:14px;
}
.MenuSettingsDialog .list .label{
	float:left;
	width:50px;
	padding-top:10px;
	position:relative;
}
.MenuSettingsDialog .list em{
	float:left;
	color: #f17e3f;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
	position:absolute;
	top:8px;
	left:-10px;
}
.MenuSettingsDialog .frm_checkbox_label{
	min-width:120px;
	padding-bottom:10px;
}
</style>
<div class="dialog MenuSettingsDialog" seid="">
<div class="dialog_hd">
<h3>菜单设置</h3>
<a class="closed pop_closed" onClick="return false" href="javascript:;">关闭</a>
</div>
<div class="dialog_bd clearfix">
<div class="list">
<label class="frm_checkbox_label selected" data="0"><i class="icon_checkbox"></i>级别</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>版本</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>店名</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>旺旺号</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>注册时间</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>商品数</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>会员数</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>订单数</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>成交额</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>服务商</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>扫码支付</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>扫码总额</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>扫码支付比例</label>
<label class="frm_checkbox_label" data="1"><i class="icon_checkbox"></i>最后联系</label>
</div>
</div>
<div class="dialog_ft clearfix">
<a href="javascript:;" class="btn btn_default closed">取消</a>
<a href="javascript:;" class="btn btn_primary CheckQualificationsPrimaryBtn" id="CheckQualificationsPrimaryBtn">确定</a>
</div>
</div>
<script type="text/javascript">
/* *
 * 菜单设置窗口 - 打开
 */
$(".entity_shop_footer .setup_menu").live('click',function(){
	showMenuSettingsDialog();
})
function showMenuSettingsDialog(){
	$(".MenuSettingsDialog").attr("seid","");
	var dialog = $('.MenuSettingsDialog');
	var left = ($(window).width() - dialog.width()) / 2;
	var top = ($(window).height() - dialog.height()) / 2;
	if(top<49) top=49;
	dialog.css({position:'absolute',top:top+$(document).scrollTop(),left:left+$(document).scrollLeft()}).fadeIn();
	WC.fnOverlay($('body'));
}
/* *
 * 菜单设置窗口 - 关闭
 */
function closeMenuSettingsDialog(){
	$('.MenuSettingsDialog, .itemOverlay').fadeOut();
	setTimeout(function (){$(".itemOverlay").remove();},300);
}
$('.MenuSettingsDialog .closed').live('click',function(){
	closeMenuSettingsDialog();
})
/* *
 * 菜单设置窗口 - 请选择原因
 */
$('.MenuSettingsDialog .frm_checkbox_label').live('click',function(){
	//$('.MenuSettingsDialog .frm_checkbox_label').removeClass("selected");
	$(this).addClass("selected");
})
</script>
<!--菜单设置 end-->



</body>
</html>