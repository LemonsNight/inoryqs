<template>
	<view class="setting-page">
		<block v-for="(item,index) in settingList" :key="index">
			<view class="setting-item" hover-class="hover-class-opacity" @tap="goPath(item)">
				<view class="setting-item-title">{{item.title}}</view>
				<view class="setting-item-r">
					<text class="iconfont iconright"></text>
				</view>
			</view>
		</block>
		<view class="login-out">
			<button type="primary" @tap="loginOut">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				settingList: [
					{
						title: "账号与安全",
						path: "/pages/home/setting/change-password/change-password"
					},
					{
						title: "绑定邮箱",
						path: "/pages/home/setting/change-email/change-email"
					},
					{
						title: "编辑资料",
						path: "/pages/home/setting/edit-userinfo/edit-userinfo"
					},
					{
						title: "小纸条",
						path: ""
					},
					{
						title: "清除缓存",
						path: ""
					},
					{
						title: "意见反馈",
						path: "/pages/home/setting/feedback/feedback"
					},
					{
						title: "关于趣事",
						path: "/pages/home/setting/about/about"
					}
				]
			};
		},
		methods:{
			goPath(item){
				if(item.path) {
					this.$store.dispatch("navigateTo", item.path)
				}
			},
			loginOut(){
				this.$store.dispatch("loginOut")
			}
		}
	}
</script>

<style lang="scss" scoped>
.setting-page{
	width: 100%;
	padding: 0 20upx;
	box-sizing: border-box;
	.setting-item{
		padding: 20upx 0;
		display: flex;
		border-bottom: 1upx solid $uni-border-color;
		.setting-item-title{
			flex: 1;
		}
		.setting-item-r{
			color: $uni-thin-color;
		}
	}
}
.login-out{
	width: 100%;
	padding: 20upx;
	box-sizing: border-box;
	button{
		background-color: $uni-main-color;
		border: 0;
		color: $uni-text-color;
	}
}
</style>
