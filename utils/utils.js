export default{
	timeChange(time){
			let thisTime = new Date().getTime()
			let timeObj = new Date(time)
			let hours = timeObj.getHours()
			let minutes = timeObj.getMinutes()
			let timeStr = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
			// 今天凌晨的时间
			let thisTime0 = new Date(new Date(thisTime).setHours(0, 0, 0, 0)).getTime()
			// 需要转换的时间的凌晨时间
			let time0 = new Date(new Date(time).setHours(0, 0, 0, 0)).getTime()
			// 相差天数
			let dayDiff = Math.floor((thisTime0 - time0)/86400000)
			
			if(dayDiff === 0) {
				return timeStr
			} else if(dayDiff === 1) {
				return "昨天 " + timeStr
			} else if (dayDiff === 2) {
				return "前天" + timeStr
			} else {
				let month = timeObj.getMonth()
				let day = timeObj.getDate()
				return `${timeObj.getFullYear()}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${timeStr}`
			}
	}
}