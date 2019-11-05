/**
 * JS获取今天，昨天，最近7天，最近30天，明天，后天等通用方法
 */
var pos_days = {
	// 时间转换
	timeForMat: function(count) {
		// 拼接时间
		var time1 = new Date()
		var time2 = new Date()
		if(count === 1) {
			time1.setTime(time1.getTime() - (24 * 60 * 60 * 1000))
		} else {
			if(count >= 0) {
				time1.setTime(time1.getTime())
			} else {
				if(count === -2) {
					time1.setTime(time1.getTime() + (24 * 60 * 60 * 1000) * 2)
				} else {
					time1.setTime(time1.getTime() + (24 * 60 * 60 * 1000))
				}
			}
		}

		var Y1 = time1.getFullYear()
		var M1 = ((time1.getMonth() + 1) > 9 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
		var D1 = (time1.getDate() > 9 ? time1.getDate() : '0' + time1.getDate())
		var timer1 = Y1 + '-' + M1 + '-' + D1 + ' ' + '23:59:59' // 当前时间

		time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * count))
		var Y2 = time2.getFullYear()
		var M2 = ((time2.getMonth() + 1) > 9 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
		var D2 = (time2.getDate() > 9 ? time2.getDate() : '0' + time2.getDate())
		var timer2 = Y2 + '-' + M2 + '-' + D2 + ' ' + '00:00:00' // 之前的7天或者30天
		//return [timer2, timer1]
		return timer2 + " - " + timer1;
	},
	// 时间转换
	timeForMatB: function(count) {
		// 拼接时间
		var time1 = new Date()
		var time2 = new Date()
		if(count === 1) {
			time1.setTime(time1.getTime() - (24 * 60 * 60 * 1000))
		} else {
			if(count >= 0) {
				time1.setTime(time1.getTime())
			} else {
				if(count === -2) {
					time1.setTime(time1.getTime() + (24 * 60 * 60 * 1000) * 2)
				} else {
					time1.setTime(time1.getTime() + (24 * 60 * 60 * 1000))
				}
			}
		}

		var Y1 = time1.getFullYear()
		var M1 = ((time1.getMonth() + 1) > 9 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
		var D1 = (time1.getDate() > 9 ? time1.getDate() : '0' + time1.getDate())
		var timer1 = Y1 + '-' + M1 + '-' + D1 // 当前时间

		time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * count))
		var Y2 = time2.getFullYear()
		var M2 = ((time2.getMonth() + 1) > 9 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
		var D2 = (time2.getDate() > 9 ? time2.getDate() : '0' + time2.getDate())
		var timer2 = Y2 + '-' + M2 + '-' + D2 // 之前的7天或者30天
		//return [timer2, timer1]
		return timer2 + " - " + timer1;
	},
	/**
	 * 获取最近
	 */
	days: function(num) {
		var timer = this.timeForMat(num)
		return timer
	},
	/**
	 * 最近30天
	 */
	thirtyDays: function(type) {
		// 获取最近30天
		var timer = 0;
		if(type == 1) {
			timer = this.timeForMatB(30)
		} else {
			timer = this.timeForMat(30)
		}
		return timer
	},

	/**
	 * 获取最近7天
	 */
	sevenDays: function() {
		// 获取最近7天
		var timer = this.timeForMat(7)
		return timer
	},
	/**
	 * 昨天
	 */
	yesterday: function() {
		// 校验是不是选择的昨天
		var timer = this.timeForMat(1)
		return timer
	},
	/**
	 * 今天
	 */
	today: function() {
		var timer = this.timeForMat(0)
		return timer
	},
	/**
	 * 明天
	 */
	tomorrow: function() {
		var timer = this.timeForMat(-1)
		return timer
	},
	/**
	 * 后天
	 */
	theDayAfterTomorrow: function() {
		var timer = this.timeForMat(-2)
		return timer
	},

	timeStampToTime: function(timeStamp, format, dateSeparate, timeSeparate) {
		//判断时间戳位数，如等于10位即乘1000；
		if(timeSeparate == undefined) {
			timeSeparate = ':';
		}
		if(timeStamp == "now") {
			timeStamp = Date.parse(new Date())
		}
		if(timeStamp < 9999999999) {
			timeStamp *= 1000;
		}
		var date = new Date(timeStamp);
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		month = month >= 10 ? month : '0' + month;
		var day = (date.getDate()) >= 10 ? date.getDate() : "0" + date.getDate();
		var hour = (date.getHours()) >= 10 ? date.getHours() : "0" + date.getHours();
		var minute = (date.getMinutes()) >= 10 ? date.getMinutes() : "0" + date.getMinutes();
		var second = (date.getSeconds()) >= 10 ? date.getSeconds() : "0" + date.getSeconds();

		if(format == 'y') {
			return year;
		} else if(format == 'yM') {
			if(dateSeparate == 'chn') {
				return year + '年' + month + '月';
			} else {
				return year + dateSeparate + month;
			}
		} else if(format == 'Md') {
			if(dateSeparate == 'chn') {
				return month + '月' + day + '日';
			} else {
				return month + dateSeparate + day;
			}
		} else if(format == 'yMd') {
			if(dateSeparate == 'chn') {
				return year + '年' + month + '月' + day + '日';
			} else {
				return year + dateSeparate + month + dateSeparate + day;
			}
		} else if(format == 'yMdhm') {
			return year + dateSeparate + month + dateSeparate + day + ' ' + hour + timeSeparate + minute;
		} else if(format == 'yMdhms') {
			return year + dateSeparate + month + dateSeparate + day + ' ' + hour + timeSeparate + minute + timeSeparate + second;
		}
	}
}

//console.log('今天==>', today())
//console.log('昨天==>', yesterday())
//console.log('最近7天==>', sevenDays())
//console.log('最近30天==>', thirtyDays())
//var num = 20
//console.log('获取最近' + num + '天', days(num))
//console.log('明天==>', tomorrow())
//console.log('后天==>', theDayAfterTomorrow())