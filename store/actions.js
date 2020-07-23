/*
  通过mutation间接更新state的多个方法的对象
*/

export default {
	navigateTo({state},url){
		if(this.nvt){
			return
		}
		uni.showLoading({
			title:"加载中..."
		})
		this.nvt = true
		uni.navigateTo({
			url,
			success:()=> {
				this.nvt = false
				uni.hideLoading()
			}
		})
	},
	// 获取登陆入口
	getProvider({state}){
		if(state.providerList.length > 0) {
			return
		}
		uni.getProvider({
			service:"oauth",
			success:(result)=> {
				state.providerList = result.provider.map((value)=>{
					// xiaomi: "小米登陆",
					// alipay: "支付宝登陆",
					// baidu: "百度登陆",
					// toutiao: "头条登陆"
					let providerObj = {
						weixin: {
							name: "微信登陆",
							icon: "iconweixin",
						},
						qq: {
							name: "QQ登陆",
							icon: "iconqq",
						},
						sinaweibo: {
							name: "微博登陆",
							icon: "iconweibo",
						}
					}
					return {
						...providerObj[value],
						id: value
					}
				})
			},
			fail() {
				console.log("获取登陆通道失败")
			}
		})
	},
	/**点击登陆
	 * provider= 
	 * weixin,qq,sinaweibo
	 */
	toLogin({state},provider){
		uni.login({
			provider:provider.id,
			success:(authResultObj)=> {
				uni.getUserInfo({
					provider:provider.id,
					success:(userInfoObj)=> {
						state.userData = {
							authResult:authResultObj.authResult,
							userInfo: userInfoObj.userInfo,
							provider: provider.id
						}
					}
				})
			},
			fail(err) {
				console.log(JSON.stringify(err))
			}
		})
	},
	/**
	 * 退出登陆
	 */
	loginOut({state}){
		state.userData = null
		uni.reLaunch({
			url:"/pages/home/home"
		})
	}
}
