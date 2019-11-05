/* *
 ******************广州市金石开软件有限公司版权所有
 ******************2013年12月06日编
 */
/* *
 * POS
 */
/* *
 * 获取版本号
 */
var POS_version = "1.0";

try {
	var POS = {
		version_ajax: "1.0",
		version_time: new Date().getTime(),
		service_url: "", //http://192.168.1.107:8080 - http://postest.buyinchina.com
		getRequest: function() { //获取URL参数
			var url = location.search; //获取url中"?"符后的字串
			var theRequest = new Object();
			if(url.indexOf("?") != -1) {
				var str = url.substr(1);
				strs = str.split("&");
				for(var i = 0; i < strs.length; i++) {
					theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
				}
			}
			return theRequest;
		},
		getCookie: function(a) {
			var b = document.cookie.indexOf(a + "="),
				c = document.cookie.indexOf(";", b);
			return -1 == b ? "" : unescape(document.cookie.substring(b + a.length + 1, c > b ? c : document.cookie.length))
		},
		setCookie: function(a, b, c) {
			var d = new Date;
			d.setTime(d.getTime() + 2592e6);
			var e = "; path=/" + (-1 != document.domain.indexOf("poso2o.com") ? "; domain=poso2o.com" : -1 != document.domain.indexOf("jinshikai.com") ? "; domain=jinshikai.com" : "");
			if("object" == typeof a)
				for(var f in a) {
					var g = escape(f) + "=" + escape(a[f]);
					document.cookie = g + "; expires=" + d.toGMTString() + e
				} else {
					var g = escape(a) + "=" + escape(b);
					document.cookie = g + (c ? "" : "; expires=" + d.toGMTString()) + e
				}
		},
		delCookie: function(a) {
			var b = "; path=/" + (-1 != document.domain.indexOf("poso2o.com") ? "; domain=poso2o.com" : -1 != document.domain.indexOf("jinshikai.com") ? "; domain=jinshikai.com" : "");
			document.cookie = escape(a) + "=; expires=" + new Date(0).toUTCString() + b
		},
		clearCookie: function() {
			var a = document.cookie.match(/[^ =;]+(?=\=)/g);
			if(a)
				for(var b = a.length,
						c = b; c--;) POS.delCookie(a[c])
		},
		loadScript: function(a, b, id) {
			var jsSize = $("head").find("#" + id).size();
			if(jsSize > 0) {
				b && b();
				return false;
			}
			var c = document.createElement("script");
			c.readyState ? c.onreadystatechange = function() {
					("loaded" == c.readyState || "complete" == c.readyState) && (c.onreadystatechange = null, b && b())
				} : c.onload = function() {
					b && b()
				},
				c.src = a.indexOf("?") > 0 ? a + "&ver=" + POS_version : a + "?ver=" + POS_version;
			if(id) c.id = id;
			c.type = "text/javascript";
			var d = document.getElementsByTagName("script")[0];
			d.parentNode.insertBefore(c, d)
		},
		loadLink: function(a, b) {
			var c = document.createElement("link");
			c.readyState ? c.onreadystatechange = function() {
					("loaded" == c.readyState || "complete" == c.readyState) && (c.onreadystatechange = null, b && b())
				} : c.onload = function() {
					b && b()
				},
				c.rel = "stylesheet",
				c.href = a.indexOf("?") > 0 ? a + "&ver=" + POS_version : a + "?ver=" + POS_version;
			var d = document.getElementsByTagName("link")[0];
			d.parentNode.insertBefore(c, d)
		},
		ua: function() {
			return navigator.userAgent.toLowerCase()
		},
		isMobile: function() {
			return POS.ua().match(/iPhone|iPad|iPod|Android|IEMobile/i)
		},
		isAndroid: function() {
			return -1 != POS.ua().indexOf("android") ? 1 : 0
		},
		isIOS: function() {
			var a = POS.ua();
			return -1 != a.indexOf("iphone") || -1 != a.indexOf("ipad") || -1 != a.indexOf("ipod") ? 1 : 0
		},
		platform: function() {
			return POS.isMobile() ? POS.isIOS() ? "IOS" : POS.isAndroid() ? "Android" : "other-mobile" : "PC"
		},
		isWeixin: function() {
			return -1 != POS.ua().indexOf("micromessenger") ? 1 : 0
		},
		isWeixinPay: function() {
			if(POS.isWeixin()) {
				var a = POS.ua(),
					b = a.substr(a.indexOf("micromessenger"), 18).split("/");
				return Number(b[1]) >= 5 ? 1 : 0
			}
			return 0
		},
		isIE: function() {
			var browser = navigator.appName;
			var b_version = navigator.appVersion;
			var version = b_version.split(";");
			version[1] = version[1] || "";
			var trim_Version = version[1].replace(/[ ]/g, "");
			var version;
			alert(browser);
			if(browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
				version = "IE6";
			} else if(browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
				version = "IE7";
			} else if(browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
				version = "IE8";
			} else if(browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
				version = "IE9";
			}
			return {
				version: version
			}
		},
		getDateDiff: function(dateTimeStamp) { //转换时间戳为“刚刚”、“1分钟前”、“2小时前”“1天前”等格式
			var oldTime = dateTimeStamp;
			dateTimeStamp = Date.parse(oldTime.replace(/-/gi, "/"))
			var now = new Date().getTime();
			var diffValue = now - dateTimeStamp;
			if(diffValue < 0) {
				//若日期不符则弹出窗口告之
				//alert("结束日期不能小于开始日期！");
			}
			var minC = diffValue / (1000 * 60);
			var hourC = diffValue / ((1000 * 60) * 60);
			var dayC = diffValue / (((1000 * 60) * 60) * 24);
			var weekC = diffValue / (7 * (((1000 * 60) * 60) * 24));
			var monthC = diffValue / ((((1000 * 60) * 60) * 24) * 30);
			if(monthC >= 1) {
				//result = parseInt(monthC) + "个月前";
				result = oldTime.substring(5, 16);
			} else if(weekC >= 1) {
				//result = parseInt(weekC) + "周前";
				result = oldTime.substring(5, 16);
			} else if(dayC >= 1) {
				//result = parseInt(dayC) + "天前";
				result = oldTime.substring(5, 16);
				if(dayC <= 2) {
					result = "昨天 " + oldTime.substring(11, 16);
				} else {
					result = oldTime.substring(5, 16);
				}
			} else if(hourC >= 1) {
				result = parseInt(hourC) + "小时前";
			} else if(minC >= 1) {
				result = parseInt(minC) + "分钟前";
			} else result = "刚刚";
			return result;
		},
		fnOverlay: function(b) { //是否需要初始化背景遮罩层
			if(Math.floor($.browser.version) < 7) { //IE6
				b.append("<div id='itemOverlay' class='itemOverlay'></div>");
				$('#itemOverlay').css({
					'width': '100%',
					'height': $(document).height(),
					'z-index': 5,
					'position': 'absolute'
				});
			} else if(Math.floor($.browser.version) < 8) { //IE7
				b.append("<div id='itemOverlay' class='itemOverlay'></div>");
				$('#itemOverlay').css({
					'left': 0,
					'top': 0,
					'width': '100%',
					'height': $(document).height(),
					'z-index': 5,
					'position': 'fixed'
				});
			} else { //IE8--
				b.append("<div id='itemOverlay' class='itemOverlay'></div>");
				$('#itemOverlay').css({
					'left': 0,
					'top': 0,
					'width': '100%',
					'height': $(document).height(),
					'z-index': 5,
					'position': 'fixed'
				});
			}
		},
		imloadingDialog: function(tips, w) { //正在加载弹出窗口
			$("#imloadingDialog").remove();
			if(!tips) {
				tips = "正在努力加载，请稍候......";
			}
			if(!w) {
				w = 260;
			}
			var a = ['<div class="bgDialog imloadingDialog hideMouse hideDiv" style="display:none; width:' + w + 'px;" id="imloadingDialog" setid=""><div class="bgDialogCont" style="padding:10px 10px;"><div class="loading" style="font-size:14px;">' + tips + '</div></div></div>'].join("");
			$("body").append(a);
			var dialog = $("#imloadingDialog");
			var left = ($(window).width() - dialog.width()) / 2;
			var top = ($(window).height() - dialog.height()) / 2;
			if(top < 49) top = 49;
			dialog.css({
				position: 'absolute',
				top: top + $(document).scrollTop(),
				left: left + $(document).scrollLeft()
			}).fadeIn();
		},
		closeWin: function() {
			var isIE = navigator.appName == "Microsoft Internet Explorer";
			if(isIE) {
				window.opener = "";
				window.open("", "_self");
				window.close();
			} else {
				//FF 还要在 about:config 允许脚本脚本关闭窗口
				window.close();
			}
		}, //格式化金额
		formatMoney: function(s, n) { //s:传入的float数字 ，n:希望返回小数点几位
			n = n > 0 && n <= 20 ? n : 2;
			s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
			var l = s.split(".")[0].split("").reverse(),
				r = s.split(".")[1];
			t = "";
			for(i = 0; i < l.length; i++) {
				t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
			}
			return t.split("").reverse().join("") + "." + r;
		}, //去掉格式化金额
		removeFormatMoney: function(s) {
			return parseFloat(s.replace(/[^\d\.-]/g, ""));
		},
		toJSON: function(toJSON_functionX) {
			POS.loadScript("http://www.poso2o.com/WeChat/js/jquery.json-2.3.js", toJSON_functionX, "jquery_json");
		}, //评论字数统计
		fnCommentsDigital: function(b, a, c) {
			b.die().live('keyup', function() {
				var fidT = $(this).parents(c);
				var maxChars = a;
				var thisT = $(this);
				var thsiVal = $(this).val();
				var curr = maxChars - thsiVal.length;
				fidT.find(".lightblue").html(curr.toString());
				if(thsiVal.length > maxChars) {
					$(this).val(thsiVal.substring(0, maxChars));
					fidT.find(".lightblue").html("0");
				}
			}).keyup();
		}, //angular-loading-bar
		setLoadingBar: function() {
			var HTML = '<div id="loading-bar-spinner" class="loadingBar"><div class="spinner-icon"></div></div><div id="loading-bar" class="loadingBar"><div style="width:10%;" class="bar"><div class="peg"></div></div></div>';
			$(".loadingBar").remove();
			$("body").prepend(HTML);
			$("#loading-bar .bar").animate({
				width: '50%'
			});
		},
		/**
		 * 顶部文字提示
		 */
		gototoptips: function(text, type) {
			var HTML = '<div class="page_tips '+type+'"><div class="inner">' + text + '</div></div>';
			$(".page_tips").remove();
			$("body").prepend(HTML);
		},
		init: function() {
			if(Math.floor($.browser.version) < 7) { //IE6

			}
		}
	};
	POS.init();

} catch(e) {
	for(var p in e) {
		document.writeln(p + "=" + e[p]);
	}
}
/* *
 * 顶部提示
 */
var topMessageboxTime;

function fntopmessagebox(b, c) {
	stopTime(topMessageboxTime);
	$('.topMessagebox').remove();
	$("body").append('<div class="topMessagebox"><div class="messagetext ' + c + '">' + b + '</div></div>');
	//初始居中
	$('.topMessagebox').slideDown("slow", function() {
		//初始居中
		var width = $(".topMessagebox").width() + 108;
		$(".topMessagebox").css("left", (($(document).width()) / 2 - (parseInt(width) / 2)) + "px");
	});
	topMessageboxTime = setTimeout(function() {
		$('.topMessagebox').slideUp(300)
	}, 2700);
	topMessageboxTime = setTimeout("$('.topMessagebox').remove()", 3000);
}

function stopTime(t) {
	clearTimeout(t);
}
/* *
 * 弹出下拉窗口
 */
$(".dropDownBox").live('click', function() {
	if($(this).find(".pannel").is(':hidden')) {
		$(this).find('.pannel').show();
	} else {
		$(this).find('.pannel').hide();
	}
})
/* *
 * 选择pannel
 */
$(".dropDownBox .pannel li").live("click", function() {
	var b = $(this).children().attr('comboxval');
	$(this).parents('.dropDownBox').find('.comboxText').val($(this).children().attr('default')).attr('comboxval', b);
	$(this).parents('.dropDownBox').find('.pannel li a').removeClass('select');
	$(this).parents('.dropDownBox').removeClass('zIndex6');
	$(this).children().addClass('select');
	$(".dropDownBox_hover").removeClass("dropDownBox_hover");
})
/* *
 *  combox事件
 */
$(".dropDownBox").live("mouseover", function() {
	$(this).addClass("dropDownBox_hover");
})
$(".dropDownBox").live("mouseleave", function() {
	$(this).removeClass("dropDownBox_hover");
})

/* *
 * 点击非div区域隐藏div
 */
$(document).bind('mousedown', function(event) {
	var $target = $(event.target);
	if((!($target.parents().andSelf().is($('.pannel'))))) {
		$(".pannel").fadeOut('slow');
	}
	if((!($target.parents().andSelf().is($('.appidDialog')))) && (!($target.parents().andSelf().is($('.appidDialog .textDiv'))))) {
		$(".appidDialog").slideUp(200);
		$(".appidDiv .textDiv").removeClass("textDiv_active");
	}
})

/* *
 * 退出登录
 */
$("#logout").live("click", function() {
	POS.setCookie("allinpay_admin_userinfo", "", 1);
	window.location.href = "/allinpay/admin/login/login.jsp";
})
/* *
 * 警告提示 - 打开
 */
function showWarningDialog(title, text, links) {
	var HTML = '';
	HTML += '<div class="warningDialogOverlay"></div>';
	HTML += '<div class="dialog warningDialog">';
	HTML += '<div class="dialog_hd">';
	HTML += '<h3>温馨提示</h3>';
	HTML += '<a class="closed pop_closed" onClick="return false" href="javascript:;">关闭</a>';
	HTML += '</div>';
	HTML += '<div class="dialog_bd">';
	HTML += '<div class="simple_dialog_content">';
	HTML += '<span class="msg_icon_wrapper"><i class="icon_msg info"></i></span>';

	HTML += '<div class="msg_content ">';
	HTML += '<h4>' + title + '</h4>';
	HTML += '<p>' + text + '</p>';
	HTML += '</div>';
	HTML += '</div>';
	HTML += '</div>';
	HTML += '<div class="dialog_ft">';
	HTML += '<a href="javascript:;" class="btn btn_default closed">取消</a>';
	HTML += '<a href="' + links + '" class="btn btn_primary">确定</a>';
	HTML += '</div>';
	HTML += '</div>';
	$('.warningDialog, .warningDialogOverlay').remove();
	$("body").append(HTML);
	var dialog = $('.warningDialog');
	var left = ($(window).width() - dialog.width()) / 2;
	var top = ($(window).height() - dialog.height()) / 2;
	if(top < 0) top = 0;
	dialog.css({
		position: 'absolute',
		top: top + $(document).scrollTop(),
		left: left + $(document).scrollLeft()
	}).fadeIn();
}
/* *
 * 警告提示 - 关闭
 */
function closeWarningDialog() {
	$('.warningDialog, .warningDialogOverlay').fadeOut();
}
$('.warningDialog .closed').live('click', function() {
	closeWarningDialog();
})