<template>
	<view class="newest-item animated fadeIn" @tap="goDetail">
		<view class="newest-item-image">
			<image :src="item.titlepic"></image>
		</view>
		<view class="newest-item-content">
			<view class="newest-item-content-title">{{item.title}}</view>
			<view class="newest-item-content-text">{{item.desc}}</view>
			<view class="newest-item-content-text">动态{{item.totalNum}} 今日{{item.todayNum}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object
		},
		data() {
			return {

			}
		},
		methods: {
			goDetail(){
				this.$store.dispatch("navigateTo", "/pages/news/topic-detail/topic-detail")
			}
		}
	}
</script>

<style scoped lang="scss">
	.newest-title {
		font-size: $uni-font-size-lg;
	}

	.newest-item {
		display: flex;
		height: 180upx;
		padding: 20upx 0;
		border-bottom: 1upx solid $uni-border-color;

		.newest-item-image {
			width: 180upx;

			image {
				width: 100%;
				height: 100%;
				border-radius: 15upx;
			}
		}

		.newest-item-content {
			flex: 1;
			padding-left: 20upx;

			.newest-item-content-title {
				font-size: $uni-font-size-lg;
			}

			.newest-item-content-text {
				color: $uni-thin-color;
			}
		}
	}
</style>
