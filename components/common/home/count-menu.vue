<template>
	<view class="count-menu">
		<view class="count-item">
			<text class="count-item-num">0</text>
			<text class="count-item-txt">趣事</text>
		</view>
		<view class="count-item">
			<text class="count-item-num">0</text>
			<text class="count-item-txt">动态</text>
		</view>
		<view class="count-item">
			<text class="count-item-num">0</text>
			<text class="count-item-txt">评论</text>
		</view>
		<view class="count-item">
			<text class="count-item-num">0</text>
			<text class="count-item-txt">收藏</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.count-menu{
		width: 100%;
		display: flex;
		.count-item{
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 20upx 0;
			.count-item-num{
				font-size: 40upx;
				line-height: 40upx;
			}
			.count-item-txt{
				color: $uni-thin-color;
			}
		}
	}
</style>
