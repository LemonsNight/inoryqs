<template>
	<view class="common-list animated fadeIn">
		<!-- 左边 -->
		<view class="common-list-l">
			<image :src="info.userpic" lazy-load mode="scaleToFill"></image>
		</view>
		<!-- 右边 -->
		<view class="common-list-r">
			<!-- 头部 -->
			<view class="common-list-title">
				<view class="common-list-title-txt">
					<view class="common-list-title-txt-n">
						<text>{{info.username}}</text>
						<tag-sex-age :age="info.age" :sex="info.sex"></tag-sex-age>
					</view>
					<view class="common-list-title-txt-time">
						22天前
					</view>
				</view>
				<view class="common-list-title-r">
					<view class="common-list-title-r-box">
						<view class="follow-btn animated" hover-class="fadeOut" v-if="info.isguangzhu">
							<text class="iconfont iconok"></text>
							<text>已关注</text>
						</view>
						<view class="follow-btn animated" hover-class="fadeOut" v-else>
							<text class="iconfont iconadd"></text>
							<text>关注</text>
						</view>
						<view class="animated item-close iconfont iconclose" hover-class="fadeOut"></view>
					</view>
				</view>
			</view>
			<!-- 内容 -->
			<view class="common-list-content">
				<view class="content-txt">{{info.title}}</view>
				<view class="content-src">
					<!-- 图片模式 -->
					<template>
						<block v-for="(item,index) in info.morePic" :key="index">
							<image :src="item" mode="aspectFill" class="main-image" lazy-load @tap="showImage(index)"></image>
						</block>
					</template>
						<!-- 视频模式 -->
					<template v-if="info.video">
						<image :src="item" mode="aspectFill" class="main-image" lazy-load v-if="info.titlepic"></image>
						<view class="content-src-video" @tap="showVideo">
						<text class="iconfont iconplay"></text>
						<text class="content-src-video-info">{{info.video.looknum}}次播放 {{info.video.long}}</text>
					</view>
					</template>
				</view>
				<!-- 分享模式 -->
				<view class="common-list-content-share" v-if="info.share">
					<view class="content-share-image">
						<image :src="info.share.titlepic" mode="aspectFill"></image>
					</view>
					<view class="content-share-text">
						<ellipsis-text :text="info.share.title" clamp="2"></ellipsis-text>
					</view>
				</view>
			</view>
			<!-- 底部 -->
			<view class="common-list-footer">
			    <view class="common-list-footer-left">
						{{info.path}}
					</view>
			    <view class="common-list-footer-right">
						<view class="common-list-footer-btn animated" hover-class="pulse">
							<text class="iconfont iconforward"></text>
							<text class="common-list-footer-btn-num">{{info.sharenum}}</text>
						</view>
						<view class="common-list-footer-btn animated" hover-class="pulse">
							<text class="iconfont iconcomment"></text>
							<text class="common-list-footer-btn-num">{{info.commentnum}}</text>
						</view>
						<view class="common-list-footer-btn animated" hover-class="pulse">
							<text class="iconfont icongood"></text>
							<text class="common-list-footer-btn-num">{{info.goodnum}}</text>
						</view>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from "../../tag-sex-age.vue"
	export default {
		components:{
			tagSexAge
		},
		props:{
			info: Object
		},
		data() {
			return {
				
			}
		},
		methods: {
			showImage(current) {
				 uni.previewImage({
					urls: this.info.morePic,
					current,
					loop:true
				 })
			},
			showVideo(){
				console.log("播放视频")
			}
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../css/common-card.scss";
	
	.common-list{
		border-bottom: 1upx solid #F0F0F0;
	}
	.common-list-footer{
		border-bottom: 0;
	}
	.common-list-title-txt{
		display: block!important;
		.common-list-title-txt-n{
			display: flex;
			align-items: center;
		}
		.common-list-title-txt-time{
			color: $uni-thin-color;
			font-size: $uni-font-size-sm;
		}
	}
	.common-list-title-r{
		display: block!important;
		.common-list-title-r-box{
			display: flex;
			align-items: center;
		}
	}
</style>
