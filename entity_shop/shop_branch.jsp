<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link rel="stylesheet" href="/entity_shop/shop_branch.css">
<div style="float: right; padding-top:10px;padding-bottom: 10px;">
	<div class="layui-inline">
		<a href="javascript:void(0);" onclick="Branch.show_create_branch_shop_dialog($(this));" class="layui-btn" type="1">新增分店</a>
	</div>
</div>
<table class="layui-table">
	<thead>
		<tr>
			<th>序号</th>
			<th>账号</th>
			<th>店名</th>
			<th>联系人</th>
			<th>手机</th>
			<th>操作</th>
		</tr>
	</thead>
	<tbody id="shop_branch_tbody">
	</tbody>
</table>