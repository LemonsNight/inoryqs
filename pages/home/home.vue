<template>
	<view class="home-page">
		<!-- 用户信息 -->
		<template v-if="userData">
			<user-info></user-info>
		</template>
		<!-- 登陆 -->
		<template v-else>
			<view class="no-login-tip">登陆趣事，体验更多功能</view>
			<login-type></login-type>
			<view class="login-tap" @tap="toLoginPage">
				<text>{{providerList.length === 0 ? "前往登陆": "其他登陆方式"}}</text>
				<text class="iconfont iconright"></text>
			</view>
		</template>
		<!-- 数据 -->
		<count-menu></count-menu>
		<!-- 海报 -->
		<view class="poster" v-show="posterLoad">
			<image src="https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/0c694645bd1a493781e419063ec9dc21.jpg" lazy-load @load="onPosterLoad" mode="widthFix"></image>
		</view>
		<!-- 功能列表 -->
		<function-menu :list="functionMenuList"></function-menu>
	</view>
</template>

<script>
	import {mapActions, mapState} from "vuex"
	import userInfo from "../../components/common/home/user-info.vue"
	import functionMenu from "../../components/common/home/function-menu.vue"
	import loginType from "../../components/common/home/login-type.vue"
	import countMenu from "../../components/common/home/count-menu.vue"
	export default {
		components:{
			userInfo,
			functionMenu,
			loginType,
			countMenu
		},
		data() {
			return {
				functionMenuList: [
					{
						icon: "iconeye",
						title: "浏览历史"
					},
					{
						icon: "iconauth",
						title: "趣事认证"
					},
					{
						icon: "iconexamine",
						title: "审核趣事"
					}
				],
				posterLoad: false
			}
		},
		computed:{
			...mapState(["providerList", "userData"])
		},
		methods: {
			...mapActions(["getProvider","navigateTo"]),
			onPosterLoad(){
				this.posterLoad = true
			},
			toLoginPage(){
				this.navigateTo("/pages/login/login")
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index === 0) {
				this.$store.dispatch("navigateTo", "/pages/home/setting/setting")
			}
		}
	}
</script>

<style scoped lang="scss">
	.home-page{
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;
	}
	
	
	.poster{
		width: 100%;
		padding: 20upx 0;
		box-sizing: border-box;
		image{
			width: 100%;
			border-radius: 20upx;
		}
	}
	
	.no-login-tip{
		width: 100%;
		text-align: center;
		padding: 20upx 0;
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
</style>
