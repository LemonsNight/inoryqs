<template>
	<view class="hot-nav">
		<view class="hot-nav-title">
			<view class="hot-nav-title-l">热门分类</view>
			<view class="hot-nav-title-r" hover-class="hot-nav-title-hover" @tap="goDetail">
				更多<text class="iconfont iconright"></text>
			</view>
		</view>
		<view class="hot-nav-tab">
				<block v-for="(item, index) in nav" :key="index">
					<view hover-class="hot-nav-tab-hover">{{item.name}}</view>
				</block>
			</view>
	</view>
</template>

<script>
	export default {
		props: {
			nav: Array
		},
		data() {
			return {

			}
		},
		methods: {
			goDetail(){
				this.$store.dispatch("navigateTo", "/pages/news/topic-classify/topic-classify")
			}
		}
	}
</script>

<style scoped lang="scss">
	.hot-nav {
		padding: 20upx 10upx;
		border: 1upx solid $uni-border-color;
		border-left: none;
		border-right: none;

		.hot-nav-title {
			display: flex;

			.hot-nav-title-l {
				flex: 1;
				text-align: left;
				font-size: $uni-font-size-lg;
			}

			.hot-nav-title-r {
				display: block;
				flex: 1;
				text-align: right;
				font-size: $uni-font-size-lg;

				.iconright {
					font-size: 30upx;
				}
			}
		}

		.hot-nav-tab {
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: 15upx 0;

			view {
				display: inline-block;
				background-color: $uni-bg-color-grey;
				padding: 8upx 20upx;
				border-radius: 8upx;
				color: #A2A1A2;
			}
		}
	}

	.hot-nav-tab-hover {
		background-color: $uni-bg-color-hover !important;
		color: #cccccc !important;
	}

	.hot-nav-title-hover {
		color: #cccccc;
	}
</style>
