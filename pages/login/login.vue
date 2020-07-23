<template>
	<view class="login-page">
		<uni-status-bar color="#FFDA26"></uni-status-bar>
		<view class="login-title">
			<text class="iconfont iconclose" @tap="pathBack"></text>
			登陆趣事
		</view>
		<view class="login-bgd">
			<image src="../../static/image/login-bg.png" mode="widthFix" lazy-load></image>
		</view>
		<template v-if="loginType === 0">
			<view class="from">
				<view class="input-phone">
					<view class="input-phone-86">+86</view>
					<input type="number" v-model="phone" class="input-phone-ipt" placeholder="请输入手机号码"/>
				</view>
				<view class="input-phone">
					<input type="number" v-model="code" class="input-phone-ipt" placeholder="请输入4位纯数字验证码"/>
					<view class="send-code">
						<button type="primary" size="mini" class="send-code-on" @tap="onSendCode" v-if="codeTime === 60">获取验证码</button>
						<button type="primary" size="mini" v-else>{{codeTime}}</button>
					</view>
				</view>
				<button type="primary" class="submit-btn" :class="btnClass" @tap="onLoginPhone">登陆</button>
			</view>
		</template>
		<template v-if="loginType === 1">
			<view class="from">
				<view class="input-phone">
					<view class="input-phone-86">
						<text class="iconfont iconusernumber"></text>
					</view>
					<input type="number" v-model="phone" class="input-phone-ipt" placeholder="请输入您的账号"/>
				</view>
				<view class="input-phone">
					<view class="input-phone-86">
						<text class="iconfont iconpassword"></text>
					</view>
					<input type="number" v-model="phone" class="input-phone-ipt" placeholder="请输入密码"/>
					<view class="send-code forget-pwd">忘记密码</view>
				</view>
				<button type="primary" class="submit-btn">登陆</button>
			</view>
		</template>
		<view class="login-tap" @tap="switchLoginType">
			<text>{{['账号密码登陆','手机验证码登陆'][loginType]}}</text>
			<text class="iconfont iconright"></text>
		</view>
		
		<view class="order-login-tip" v-if="providerList.length > 0">
			<view class="order-login-tip-l"></view>
				第三方账号登陆
			<view class="order-login-tip-r"></view>
		</view>
		<login-type></login-type>
	</view>
</template>

<script>
	import {mapState} from "vuex"
	import loginType from "../../components/common/home/login-type.vue"
	import uniStatusBar from "../../components/uni-status-bar/uni-status-bar.vue"
	let codeInterval = null
	export default {
		components:{
			loginType,
			uniStatusBar
		},
		data() {
			return {
				loginType: 0, // 0手机号 1账号密码
				phone: "",
				code: "",
				btnClass: "off",
				codeTime: 60
			}
		},
		computed:{
			...mapState(["providerList"])
		},
		methods: {
			pathBack(){
				uni.navigateBack({
					delta:1
				})
			},
			checkedForm(){
				let phoneChecked = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(this.phone)
				let codeChecked = Number(this.code) > 999 && Number(this.code) < 100000
				
				if(phoneChecked && codeChecked){
					this.btnClass = "on"
				} else{
					this.btnClass = "off"
				}
				return {
					phoneChecked,
					codeChecked
				}
			},
			onLoginPhone(){
				let checkedForm = this.checkedForm()
				if(!checkedForm.phoneChecked) {
					return uni.showModal({
						showCancel:false,
						content:"手机号格式错误"
					})
					return
				}
				if(!checkedForm.codeChecked) {
					return uni.showModal({
						showCancel:false,
						content:"验证码为4位纯数字"
					})
					return
				}
			},
			onSendCode(){
				if(!this.checkedForm().phoneChecked) {
					return uni.showModal({
						showCancel:false,
						content:"手机号格式错误"
					})
					return
				}
				uni.showToast({
					icon:"none",
					title:"验证码已发送"
				})
				codeInterval = setInterval(()=>{
					if(--this.codeTime === 0) {
						clearInterval(codeInterval)
						this.codeTime = 60
					}
				},1000)
			},
			switchLoginType(){
				this.loginType = [1,0][this.loginType]
			}
		},
		watch:{
			phone:function(){
				this.checkedForm()
			},
			code:function(){
				this.checkedForm()
			}
		}
	}
</script>

<style lang="scss" scoped>
.login-page{
	width: 100%;
	.login-title{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		position: relative;
		text-align: center;
		background-color: #FFDA26;
		.iconclose{
			position: absolute;
			left: 10upx;
			top: 0;
			font-size: 50upx;
		}
		
	}
	.login-bgd{
		margin-top: -5upx;
		width: 100%;
		image{
			width: 100%;
		}
	}
}
.from{
	padding: 0 40upx;
}
.input-phone{
	border-bottom: 1upx solid $uni-border-color;
	display: flex;
	align-items: center;
	padding: 20upx 0;
	.input-phone-86{
		font-weight: bold;
		padding-right: 10upx;
	}
	.input-phone-ipt{
		flex: 1;
	}
	.send-code{
		button{
			padding: 0 20upx;
			background-color: $uni-thin-color;
		}
	}
}
.send-code-on{
	padding: 0 10upx!important;
	background-color: $uni-main-color!important;
}
.order-login-tip{
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20upx;
	.order-login-tip-l{
		flex: 1;
		height: 2upx;
		background: linear-gradient(to left, rgb(188, 188, 188), transparent);
		margin-right: 10upx;
	}
	.order-login-tip-r{
		flex: 1;
		height: 2upx;
		background: linear-gradient(to right, rgb(188, 188, 188), transparent);
		margin-left: 10upx;
	}
}
.login-tap{
			width: 100%;
			text-align: center;
			padding: 20upx;
			.iconfont{
				font-size: 24upx;
				color: $uni-thin-color;
			}
		}
		.forget-pwd{
			color: $uni-thin-color!important;
		}
</style>
