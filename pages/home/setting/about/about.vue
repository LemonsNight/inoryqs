<template>
	<view class="sbout-page">
		<view class="about-logo">
			<image src="../../../../static/image/logo.png" mode="widthFix" lazy-load></image>
		</view>
		<view class="version">test 1.0.0</view>
		<view class="ls-list">
			<view class="ls-list-item">
				<view class="ls-list-item-l">新版本检测</view>
				<view class="ls-list-item-r">
					<text class="iconfont iconright"></text>
				</view>
			</view>
			<view class="ls-list-item">
				<view class="ls-list-item-l">用户协议</view>
				<view class="ls-list-item-r">
					<text class="iconfont iconright"></text>
				</view>
			</view>
			<view class="ls-list-item" @tap="team">
				<view class="ls-list-item-l">开发团队</view>
				<view class="ls-list-item-r">
					<text class="iconfont iconright"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			team(){
				uni.showModal({
					showCancel:false,
					title: "声明",
					content:"开发者:零三\nQQ:823680621\n网址:https://web03.cn\n项目开源地址:https://gitee.com/yuan30/qs"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.sbout-page{
	width: 100%;
	.about-logo{
		width: 100%;
		image{
			width: 100%;
		}
	}
	.version{
		text-align: center;
		color: $uni-thin-color;
		font-size: $uni-font-size-sm;
	}
	.ls-list{
		padding: 0 50upx!important;
	}
}
</style>
