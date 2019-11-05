/**
 * entity_shop.js
 * Created by Luo on 2019/01/30.
 */
/* *
 * 实体店
 */
var Page = {
    data: {
        searchData: {
            user_id: sessionData.user_id,
            token: sessionData.token,
            currPage: 1,
            begin_date: 0,
            end_date: 0,
            keywords: "",
            query_user_id: 0,
            position_id: 0,
            shop_state: 1, // 店铺状态（待开通=1，正常=2，停用=3，注销=4，全部=5，试用=6）
            source_id: 0,
            shop_version_id: 0
        }, //查询对象
        positionData: null, //业务组
        userData: null, //业务组
        versionData: null, //版本
        sourceData: null,
        shopDatas: null,
        packageData: null,
        currentShopData: null,
    },
    /**
     * 错误提示
     */
    layer_msg: function (msg) {
        layer.msg('' + msg, {
            icon: 5,
            anim: 6
        });
    },
    /**
     * 获取业务组
     */
    getPositionData: function () {
        var self = this;
        var templateData = {};
        templateData.user_id = sessionData.user_id;
        templateData.token = sessionData.token;
        post("/api/PositionManage/list",
            templateData,
            null,
            //请求成功执行
            function (datas) {
                if (datas.code.indexOf("success") != -1) {
                    Page.data.positionData = datas.data.list;
                    for (var i = 0; i < datas.data.list.length; i++) {
                        $('select[name="position_select"]').append('<option value="' + datas.data.list[i].position_id + '">' + datas.data.list[i].position_name + '</option>');
                    }
                    layui.form.render("select");
                } else {
                    Page.layer_msg(datas.msg);
                }
            }, false, false,
            //请求之前执行
            function (data) {
            },
            //请求完成执行
            function (data) {
            }
        );
    },
    /**
     * 获取业务员
     */
    getUserData: function () {
        var self = this;
        var templateData = {};
        templateData.user_id = sessionData.user_id;
        templateData.token = sessionData.token;
        templateData.position_id = Page.data.searchData.position_id;
        post("/api/UserManage/list",
            templateData,
            null,
            //请求成功执行
            function (datas) {
                if (datas.code.indexOf("success") != -1) {
                    Page.data.userData = datas.data.list;
                    var html = '<option value="0">全部</option>';
                    for (var i = 0; i < datas.data.list.length; i++) {
                        html += '<option value="' + datas.data.list[i].user_id + '">' + datas.data.list[i].user_name + '</option>';
                    }
                    $('select[name="user_select"]').html(html);
                    layui.form.render("select");
                } else {
                    Page.layer_msg(datas.msg);
                }
            }, false, false,
            //请求之前执行
            function (data) {
            },
            //请求完成执行
            function (data) {
            }
        );
    },
    /**
     * 获取版本
     */
    getVersionData: function () {
        var self = this;
        var templateData = {};
        templateData.user_id = sessionData.user_id;
        templateData.token = sessionData.token;
        post("/api/VersionManage/list",
            templateData,
            null,
            //请求成功执行
            function (datas) {
                if (datas.code.indexOf("success") != -1) {
                    Page.data.versionData = datas.data.list;
                    var html = "<label><em>*</em>版　本</label>";
                    for (var i = 0; i < datas.data.list.length; i++) {
                        $('select[name="version_select"]').append('<option value="' + datas.data.list[i].version_id + '">' + datas.data.list[i].version_name + '</option>');
                        html += '<a class="wc_btn wc_btn_default" href="javascript:;" onclick="shopStatus.create_shop_dialog_wc_btn($(this))" version_id="' + datas.data.list[i].version_id + '">' + datas.data.list[i].version_name + '</a>';
                    }
                    $(".create_shop_dialog .version_list").html(html);
                    layui.form.render("select");
                } else {
                    Page.layer_msg(datas.msg);
                }
            }, false, false,
            //请求之前执行
            function (data) {
            },
            //请求完成执行
            function (data) {
            }
        );
    },
    /**
     * 获取来源
     */
    getSourceData: function () {
        var self = this;
        var templateData = {};
        templateData.user_id = sessionData.user_id;
        templateData.token = sessionData.token;
        post("/api/SourceManage/list",
            templateData,
            null,
            //请求成功执行
            function (datas) {
                if (datas.code.indexOf("success") != -1) {
                    Page.data.sourceData = datas.data.list;
                    var html = "<label><em>*</em>来　源</label>";
                    for (var i = 0; i < datas.data.list.length; i++) {
                        $('select[name="source_select"]').append('<option value="' + datas.data.list[i].source_id + '">' + datas.data.list[i].source_name + '</option>');
                        html += '<a class="wc_btn wc_btn_default" href="javascript:;" onclick="shopStatus.create_shop_dialog_wc_btn($(this))" source_id="' + datas.data.list[i].source_id + '">' + datas.data.list[i].source_name + '</a>';
                    }
                    $(".create_shop_dialog .source_list").html(html);
                    layui.form.render("select");
                } else {
                    Page.layer_msg(datas.msg);
                }
            }, false, false,
            //请求之前执行
            function (data) {
            },
            //请求完成执行
            function (data) {
            }
        );
    },
    /**
     * 获取套餐
     */
    getPackageData: function () {
        var self = this;
        var templateData = {};
        templateData.user_id = sessionData.user_id;
        templateData.token = sessionData.token;
        post("/api/PackageManage/list",
            templateData,
            null,
            //请求成功执行
            function (datas) {
                if (datas.code.indexOf("success") != -1) {
                    Page.data.sourceData = datas.data.list;
                    var html = '';
                    for (var i = 0; i < datas.data.list.length; i++) {
                        html += '<input value="' + datas.data.list[i].package_id + '" title="' + datas.data.list[i].package_name + '" type="radio" name="package_radio" lay-filter="package_radio" />';
                    }
                    $(".create_shop_dialog .package_list").html(html);
                    layui.form.render("radio");
                } else {
                    Page.layer_msg(datas.msg);
                }
            }, false, false,
            //请求之前执行
            function (data) {
            },
            //请求完成执行
            function (data) {
            }
        );
    },
    /**
     * 查询列表
     */
    queryShopData: function (query_type) {
        var self = this;
        var loading = null;
        post("/api/EntityShopManage/query",
            Page.data.searchData,
            null,
            //请求成功执行
            function (datas) {
                if (datas.code.indexOf("success") != -1) {
                    Page.data.shopDatas = datas.data.list;
                    Page.createShopListTable();
                    Page.data.searchData.currPage = datas.data.total.currPage;
                    if (Page.data.searchData.currPage == 1) {
                        Page.getLayPage(datas.data.total.countPerPage, datas.data.total.rowcount)
                    }
                    //渲染--数量信息
                    $(".entity_shop_footer .examine_menu em").html(datas.data.total.wait_num);
                    $('#storeState_1').next().find('div').html('待开通(' + datas.data.total.wait_num + ')');
                    $('#storeState_6').next().find('div').html('试用(' + datas.data.total.try_num + ')');
                    $('#storeState_3').next().find('div').html('停用(' + datas.data.total.stop_num + ')');
                    $('#storeState_4').next().find('div').html('注销(' + datas.data.total.logout_num + ')');
                    layui.form.render("select");
                    if (query_type == 1) {
                        Page.shop_list_click(0);
                    }
                } else {
                    Page.layer_msg(datas.msg);
                }
            }, false, false,
            //请求之前执行
            function (data) {
                loading = layer.msg('正在获取...', {
                    icon: 16,
                    shade: 0.01,
                    time: false //取消自动关闭
                });
            },
            //请求完成执行
            function (data) {
                layer.close(loading);
            }
        );
    },
    /**
     * 插入表格列表
     */
    createShopListTable: function () {
        var shop_state_arr = [{
            name: '——',
            css: ''
        },
            {
                name: '待审核',
                css: ''
            },
            {
                name: '未核对',
                css: 'fontOrange'
            },
            {
                name: '已核对',
                css: 'fontGreen'
            },
            {
                name: '停用申请',
                css: 'fontOrange'
            },
            {
                name: '已停用',
                css: 'fontRed'
            },
            {
                name: '注销申请',
                css: 'fontOrange'
            },
            {
                name: '已注销',
                css: 'fontRed'
            },
            {
                name: '试用',
                css: 'fontRed'
            },
        ];
        var audit_state_arr = [{
            name: '——',
            css: ''
        },
            {
                name: '待审核',
                css: 'fontRed'
            },
            {
                name: '已审核',
                css: 'fontGreen'
            },
        ];
        var data = Page.data.shopDatas;
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += '<tr onclick="Page.shop_list_click(' + i + ')" tr_id="' + i + '">';
            html += '<td>' + (i + 1) + '</td>';
            if (data[i].shop_id == data[i].shop_branch_id) {
                html += '<td>' + data[i].shop_id + '</td>';
            } else {
                html += '<td>';
                html += '<p class="compayn_id"><span>总店：</span>' + data[i].shop_id + '</p>';
                html += '<p class="branch_id"><span>分店：</span>' + data[i].shop_branch_id + '</p>';
                html += '</td>';
            }
            html += '<td>' + data[i].source_name + '</td>';
            html += '<td>' + data[i].wangwang + '</td>';
            html += '<td>' + data[i].order_id + '</td>';
            html += '<td>' + data[i].shop_version_name + '</td>';
            html += '<td class="' + shop_state_arr[data[i].shop_state].css + '">' + shop_state_arr[data[i].shop_state].name + '</td>';
            html += '<td>' + data[i].user_name + '</td>';
            html += '<td>' + pos_days.timeStampToTime(data[i].build_date, 'yMd', '-') + '</td>';
            if (data[i].audit_user_name == "") data[i].audit_user_name = "——";
            html += '<td>' + data[i].audit_user_name + '</td>';
            if (data[i].audit_date == 0) {
                html += '<td>——</td>';
            } else {
                html += '<td>' + pos_days.timeStampToTime(data[i].audit_date, 'yMd', '-') + '</td>';
            }
            html += '<td class="' + audit_state_arr[data[i].audit_state].css + '">' + audit_state_arr[data[i].audit_state].name + '</td>';
            data[i].position_name = Page.getPositionName(data[i].position_id);
        }
        $("#shop_tbody").html(html);
    },
    /**
     * 根据position_id查找position_name
     */
    getPositionName: function (position_id) {
        if (Page.data.positionData == null)
            return "";
        var position_name = "——";
        for (var i = 0; i < Page.data.positionData.length; i++) {
            if (Page.data.positionData[i].position_id == position_id) {
                position_name = Page.data.positionData[i].position_name;
            }
        }
        return position_name;
    },

    /**
     * 获取分页
     */
    getLayPage(countPerPage, rowcount) {
        layui.use('laypage', function () {
            //分页
            var laypage = layui.laypage;
            laypage.render({
                elem: 'page',
                limit: countPerPage,
                count: rowcount,
                jump: function (obj, first) {
                    //obj包含了当前分页的所有参数，比如：
                    //首次不执行
                    if (!first) {
                        //do something
                        var clickPage = obj.curr;
                        Page.data.searchData.currPage = clickPage;
                        Page.queryShopData();
                    }
                }
            })
        });
    },
    //点击店铺列表事件
    shop_list_click: function (tr_id) {
        $(".main_area").hide();
        $(".shop_info_area").show();
        //var tr_id = Page.data.bindtap_obj.attr("tr_id");
        console.log("tr_id==" + tr_id);
        Page.data.currentShopData = Page.data.shopDatas[tr_id];
        shopStatus.getEntityShopInfoData();
        $(".shop_nav_list li").eq(0).trigger("click");

    },
    //关闭店铺详情窗口
    shop_info_area_close: function () {
        $(".main_area").show();
        $(".shop_info_area").hide();
    },
    init: function () {
        //Page.getList(1);
    }
}
Page.init();
/* *
 * 设置缓存值
 */
$(function () {

    //默认设置
    $("input[name='date_range']").val("");
    $('input:radio[name="shop_state"]').eq(0).attr("checked", 'checked');
    $("input[name='keywords']").val("");

    //预加载
    Page.getPositionData();
    Page.getUserData();
    Page.getVersionData();
    Page.getSourceData();
    Page.getPackageData();
    Page.queryShopData();

    //选中导航样式
    $(".layui-header .entity_shop_nav").addClass("layui-this");
    $(".layui-side .layui-nav-item:eq(0)").addClass("layui-this");

    //查询筛选 - 选择日期
    var laydate = layui.laydate;
    var thirtyDays = pos_days.thirtyDays(1);
    laydate.render({
        elem: '#date_range',
        range: true,
        //value: '' + thirtyDays,
        done: function (value, date) {
            if (value.indexOf("-") != -1) {
                Page.data.searchData.begin_date = (new Date(value.split(" - ")[0] + ' 00:00:00')).getTime();
                Page.data.searchData.end_date = (new Date(value.split(" - ")[1] + ' 23:59:59')).getTime();
            } else {
                Page.data.searchData.begin_date = 0;
                Page.data.searchData.end_date = 0;
            }
            Page.data.searchData.currPage = 1;
            Page.queryShopData();
        }
    });
    //$("#date_range").val("");
    //Page.data.searchData.begin_date = (new Date(thirtyDays.split(" - ")[0] + ' 00:00:00')).getTime();
    Page.data.searchData.begin_date = (new Date('2015-01-01 00:00:00')).getTime();
    Page.data.searchData.end_date = (new Date(thirtyDays.split(" - ")[1] + ' 23:59:59')).getTime();
    layui.form.render("radio");
    layui.form.render("select");

    //表格
    var table = layui.table;
    //var dat = days.today();
    //console.log("dat===" + dat);
    //2019-06-01 00:00:00 - 2019-07-31 00:00:00

    //监听选择店铺状态
    layui.form.on('radio(shop_state)', function (data) {
        Page.data.searchData.currPage = 1;
        Page.data.searchData.shop_state = data.value;
        Page.queryShopData();
    });
    //监听选择业务组
    layui.form.on('select(position_select)', function (data) {
        Page.data.searchData.position_id = data.value;
        Page.getUserData();
        Page.queryShopData();
    });
    //监听选择业务员
    layui.form.on('select(user_select)', function (data) {
        Page.data.searchData.query_user_id = data.value;
        Page.data.searchData.currPage = 1;
        Page.queryShopData();

    });
    //监听选择版本
    layui.form.on('select(version_select)', function (data) {
        Page.data.searchData.currPage = 1;
        Page.data.searchData.shop_version_id = data.value;
        Page.queryShopData();
    });
    //监听选择客户来源
    layui.form.on('select(source_select)', function (data) {
        Page.data.searchData.source_id = data.value;
        Page.data.searchData.currPage = 1;
        Page.queryShopData();
    });

    /* *
     * 商品信息 - 搜索
     */
    $(".searchArea .pannel a, .searchArea .keywords_btn").live('click', function () {
        setTimeout(function () {
            Page.data.searchData.currPage = 1;
            Page.data.searchData.keywords = $(".searchArea input[name='keywords']").val();
            Page.queryShopData();
        }, 200);
    })
    /* *
     * 商品信息 - 搜索 删除按钮
     */
    $(".searchArea .del_btn").live("click", function () {
        $(".searchArea input[name='keywords']").val("").focus();
        $(this).hide();
        $('.searchArea .keywords_btn').trigger("click"); //处理事件
    })
    $(".searchArea input[name='keywords']").live('keyup', function (e) {
        var currKey = 0,
            CapsLock = 0,
            e = e || event;
        currKey = e.keyCode || e.which || e.charCode;
        if (currKey == 13) {
            $(".searchArea .keywords_btn").trigger("click"); //处理事件
        }
        if ($(this).val() == "") {
            $(".searchArea .del_btn").hide();
        } else {
            $(".searchArea .del_btn").show();
        }
    });

    /* *
     * 实体店 - 店铺详情列表
     */
    $(".shop_nav_list li").live("click", function () {
        $(".shop_nav_list li").removeClass("current");
        $(this).addClass("current");
        var index = $(this).index();
        $(".shop_nav_item").hide();
        $(".shop_nav_item:eq(" + index + ")").show();
        if (index == 2) {
            Branch.queryShopData();
        }
    })


})