<template>
	<view class="char-item-box">
		<view class="char-time" v-if="item.timeStr">{{item.timeStr}}</view>
		<view class="char-item">
		<view class="char-item-user-pic" v-if="item.from !== 0">
			<image src="https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg" lazy-load></image>
		</view>
		<view class="char-item-msg" :class="item.from === 0 ? 'me' : 'he'">
			<view class="char-item-msg-box">
				<!-- 纯文本消息 -->
				<template v-if="item.msgType === 0">
					<text>{{item.content}}</text>
				</template>
				<!-- 图片消息 -->
				<template v-else-if="item.msgType === 1">
					<image :src="item.content" lazy-load mode="widthFix" @load="imageLoad" v-show="!imgLoading" @tap="perviewImage"></image>
					<image v-if="imgLoading" :src="require('../../../static/image/laze-load-img.png')" mode="widthFix" style="width: 60px;height: 48px;"></image>
				</template>
			</view>
		</view>
		<view class="char-item-user-pic" v-if="item.from === 0">
			<image src="https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/03a06b7cbd8a47cd97791631335575b8.png" mode="widthFix" lazy-load></image>
		</view>
	</view>
	</view>
	
</template>

<script>
	export default {
		props:{
			item: Object,
		},
		data() {
			return {
				imgLoading: true
			}
		},
		methods: {
			// 监听图片加载完成
			imageLoad(){
				this.imgLoading = false
			},
			perviewImage(){
				 uni.previewImage({
				            urls: [this.item.content],
										current: 0
										})
			}
		}
	}
</script>

<style scoped lang="scss">
	.char-item{
		margin-top: 20upx;
		display: flex;
		.char-item-user-pic{
			padding: 0 20upx 20upx 20upx;
			image{
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
			}
		}
		.char-item-msg{
			flex: 1;
			.char-item-msg-box{
				display: inline-block;
				background-color: #f0f0f0;
				padding: 20upx;
				border-radius: 10upx;
				position: relative;
				text-align: left!important;
				word-wrap:break-word;
				word-break:break-all;
				image{
					max-width: 200upx;
				}
			}
			&.me{
				text-align: right;
				.char-item-msg-box{
					background-color: #f0dec1;
				}
				.char-item-msg-box:after{
					position: absolute;
					right: -30upx!important;
					top: 10upx;
					content: '';
					width: 0;
					height: 0;
					border: 16upx solid #f0dec1;
					border-color: transparent transparent transparent #f0dec1; 
				}
			}
			&.he{
				text-align: left;
			.char-item-msg-box:after{
					position: absolute;
					left: -30upx;
					top: 10upx;
					content: '';
					width: 0;
					height: 0;
					border: 16upx solid #f0f0f0;
					border-color: transparent #F0F0F0 transparent transparent; 
				}
			}
			
		}
	}
	.char-time{
		text-align: center;
		padding: 30upx 0;
		font-size: $uni-font-size-sm;
		color: $uni-thin-color;
	}
</style>
