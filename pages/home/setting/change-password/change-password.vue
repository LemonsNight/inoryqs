<template>
	<view class="change-password-page">
		<view class="input-item">
			<input type="password" placeholder="输入旧密码" v-model="oldPsw"/>
		</view>
		<view class="input-item">
			<input type="password" placeholder="输入新密码" v-model="newPsw"/>
		</view>
		<view class="input-item">
			<input type="password" placeholder="输入确认密码" v-model="confirmPsw"/>
		</view>
		<button type="primary" class="submit-btn" :class="btnClass">确认</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPsw: "",
				newPsw: "",
				confirmPsw: "",
				btnClass: "off"
			}
		},
		methods: {
			checkedForm(){
				let pwdExp = /^[a-zA-Z]\w{5,17}$/
				
				let oldPwdChecked = pwdExp.test(this.oldPsw)
				let newPwdChecked = pwdExp.test(this.newPsw)
				let eqalPwd = this.newPsw === this.confirmPsw
				if(oldPwdChecked && newPwdChecked && eqalPwd){
					this.btnClass = "on"
				} else{
					this.btnClass = "off"
				}
				return {
					oldPwdChecked,
					newPwdChecked,
					eqalPwd
				}
			},
			confirm(){
				let checkedForm = this.checkedPsw()
				if(!checkedForm.oldPwdChecked) {
					return uni.showModal({
						showCancel:false,
						title:"旧密码格式错误",
						content:"密码格式为：以字母开头，长度在6~18之间，只能包含字母、数字和下划线"
					})
					return
				}
				if(!checkedForm.oldPwdChecked) {
					return uni.showModal({
						showCancel:false,
						title:"新密码格式错误",
						content:"密码格式为：以字母开头，长度在6~18之间，只能包含字母、数字和下划线"
					})
					return
				}
				if(!checkedForm.oldPwdChecked) {
					return uni.showModal({
						showCancel:false,
						title:"提示",
						content:"新密码与确认密码不相等"
					})
					return
				}
			}
		},
		watch:{
			oldPsw:function(){
				this.checkedForm()
			},
			newPsw:function(){
				this.checkedForm()
			},
			confirmPsw:function(){
				this.checkedForm()
			},
		}
	}
</script>

<style scoped lang="scss">
.change-password-page{
	width: 100%;
	padding: 20upx;
	box-sizing: border-box;
	.input-item{
		border-bottom: 1upx solid $uni-border-color;
		padding: 20upx 0;
	}
}
</style>
