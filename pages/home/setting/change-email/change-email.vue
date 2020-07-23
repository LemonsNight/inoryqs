<template>
	<view class="change-email-page">
		<view class="input-item">
			<input type="text" placeholder="输入密码" v-model="password"/>
		</view>
		
		<view class="input-item">
			<input type="text" placeholder="输入新邮箱" v-model="email"/>
		</view>
		<button type="primary" class="confirm-btn" :class="btnClass" @tap="onConfirm">确认</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password: "",
				email: "",
				btnClass: "off"
			}
		},
		methods: {
			checkedPsw(){
				let emailChecked = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)
				let pwdChecked = /^[a-zA-Z]\w{5,17}$/.test(this.password)
				if(pwdChecked && emailChecked){
					this.btnClass = "on"
				} else{
					this.btnClass = "off"
				}
				return {
					pwdChecked,
					emailChecked
				}
			},
			onConfirm(){
				let checkedPsw = this.checkedPsw()
				if(!checkedPsw.pwdChecked) {
					return uni.showModal({
						showCancel:false,
						content:"密码格式为：以字母开头，长度在6~18之间，只能包含字母、数字和下划线"
					})
					return
				}
				if(!checkedPsw.emailChecked) {
					return uni.showModal({
						showCancel:false,
						content:"邮箱格式错误"
					})
					return
				}
			}
		},
		watch:{
			password:function(){
				this.checkedPsw()
			},
			email:function(){
				this.checkedPsw()
			}
		}
	}
</script>

<style scoped lang="scss">
.change-email-page{
	width: 100%;
	padding: 20upx;
	box-sizing: border-box;
	.input-item{
		border-bottom: 1upx solid $uni-border-color;
		padding: 20upx 0;
	}
}
.confirm-btn{
	margin-top: 40upx;
	background-color: #f0f0f0;
	&.on{
		background-color: $uni-main-color!important;
	}
}
</style>
