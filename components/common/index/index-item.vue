<template>
	<view class="uni-card animated fadeIn" @click="onClick">
	
		<!-- 标题 -->
		<view class="uni-card__title">
			<view class="uni-card__title-header">
				<image class="uni-card__title-header-image" :src="item.thumbnail" mode="scaleToFill" />
			</view>
			<view class="uni-card__title-content">
				<text class="uni-card__title-content-title">{{ item.title }}</text>
				<text class="uni-card__title-content-extra">{{ item.extra }}</text>
			</view>
			<view class="uni-card__header-extra-text">
				<view class="follow-btn animated" hover-class="fadeOut" v-if="item.follow === 1">
					<text class="iconfont iconok"></text>
					<text>已关注</text>
				</view>
				<view class="follow-btn animated" hover-class="fadeOut" v-else>
					<text class="iconfont iconadd"></text>
					<text>关注</text>
				</view>
				<view class="item-close iconfont iconclose animated" hover-class="fadeOut"></view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="uni-card__content uni-card__content--pd">
			<view class="content-text">{{ item.contenttext }}</view>
			<view class="content-src">
				<image :src="item.mainimage" mode="aspectFill" class="main-image"></image>
				<view class="content-src-video">
					<text class="iconfont iconplay"></text>
					<text class="content-src-video-info">3k次播放 7:23</text>
				</view>
			</view>
			
			<slot />
		</view>
		
		<!-- 底部 -->
		<view class="footer-box">
		    <view class="footer-box-left">
					<view class="footer-box-btn animated" hover-class="pulse">
						<text class="iconfont iconsmiling-face"></text>
						<text class="footer-box-btn-num">123</text>
					</view>
					<view class="footer-box-btn animated" hover-class="pulse">
						<text class="iconfont iconcrying-face"></text>
						<text class="footer-box-btn-num">3</text>
					</view>
				</view>
		    <view class="footer-box-right">
					<view class="footer-box-btn animated" hover-class="pulse">
						<text class="iconfont iconcomment"></text>
						<text class="footer-box-btn-num">5</text>
					</view>
					<view class="footer-box-btn animated" hover-class="pulse">
						<text class="iconfont iconforward"></text>
						<text class="footer-box-btn-num">4</text>
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniCard',
		props: {
			item: Object
		},
		methods: {
			onClick() {
				this.$store.dispatch("navigateTo", "/pages/index/detail/detail")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-card {
		/* #ifndef APP-NVUE */
		display: flex;
		flex: 1;
		/* #endif */
		position: relative;
		flex-direction: column;
		overflow: hidden;
		border-bottom: 1upx solid #f0f0f0;
		padding: 10px 0;
		box-shadow: none;
	}

	
	.uni-card__title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 0 10px;
	}

	.uni-card__title-header {
		width: 40px;
		height: 40px;
		overflow: hidden;
		border-radius: 5px;
	}

	.uni-card__title-header-image {
		width: 40px;
		height: 40px;
	}

	.uni-card__title-content {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		padding-left: 10px;
		height: 40px;
		overflow: hidden;


	}

	.uni-card__title-content-title {
		font-size: $uni-font-size-base;
		line-height: 22px;
		lines: 1;
	}

	.uni-card__title-content-extra {
		font-size: 26rpx;
		line-height: 35rpx;
		color: #999;
	}

	.uni-card__header {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		position: relative;
		flex-direction: row;
		padding: $uni-spacing-col-lg;
		align-items: center;
		border-bottom-color: $uni-border-color;
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}

	
	.uni-card__header-extra-img {
		height: $uni-img-size-sm;
		width: $uni-img-size-sm;
		margin-right: $uni-spacing-col-base;
	}

	.uni-card__header-extra-text {
		margin-left: $uni-spacing-col-base;
		font-size: $uni-font-size-base;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		.follow-btn{
			height: 50upx;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-left: 5upx;
			padding-right: 10upx;
			border-radius: 5upx;
			background-color: #f0f0f0;
		}
		.item-close{
			padding-left: 15upx;
			color: $uni-text-color-grey;
		}
	}

	.uni-card__content {
		color: $uni-text-color;
		font-size: $uni-font-size-lg;
	}

	.uni-card__content--pd {
		padding: 10upx 20upx;
	}
	
	.content-text{
		padding-bottom: 10upx;
	}
	.main-image{
		width: 100%;
		height: 400upx;
		border-radius: 10upx;
	}
	
	.footer-box{
		color: #808080;
		padding-left: 20upx;
		padding-right: 20upx;
		display: flex;
	}
	.footer-box>view{
		flex: 1;
	}
	.footer-box-right{
		text-align: right;
	}
	.footer-box-btn{
		display: inline-block;
		margin: 0 8upx;
		.iconfont{
			font-size: $uni-font-size-big;
		}
		.footer-box-btn-num{
			font-size: $uni-font-size-lg;
			margin-left: 2upx;
		}
	}

	.content-src{
		position: relative;
		border-radius: 10upx;
		overflow: hidden;
	}
	.content-src-video{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: center;
		.iconplay{
			color: white;
			font-size: 120upx;
		}
		.content-src-video-info{
			font-size: 24upx;
			position: absolute;
			right: 10upx;
			bottom: 20upx;
			color: #dcdcdc;
			display: inline-block;
			background-color: rgba(0,0,0,0.5);
			border-radius: 10upx;
			padding: 0 10upx;
		}
	}
	
</style>
