<template>
	<view class="common-list animated fadeIn">
		<!-- 左边 -->
		<view class="common-list-l">
			<image :src="item.userpic" lazy-load mode="scaleToFill"></image>
		</view>
		<!-- 右边 -->
		<view class="common-list-r">
			<!-- 头部 -->
			<view class="common-list-title">
				<view class="common-list-title-txt">
					<text>{{item.username}}</text>
					<tag-sex-age :age="item.age" :sex="item.sex"></tag-sex-age>
					
				</view>
				<view class="common-list-title-r">
					<view class="follow-btn animated" hover-class="fadeOut" v-if="item.isguangzhu">
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
			<!-- 内容 -->
			<view class="common-list-content">
				<view class="content-txt">{{item.title}}</view>
				<view class="content-src">
					<image :src="item.titlepic" mode="aspectFill" class="main-image" lazy-load v-if="item.titlepic"></image>
					<template v-if="item.video">
						<!-- 视频模式 -->
					<view class="content-src-video">
						<text class="iconfont iconplay"></text>
						<text class="content-src-video-info">{{item.video.looknum}}次播放 {{item.video.long}}</text>
					</view>
					</template>
				</view>
				<!-- 分享模式 -->
				<view class="common-list-content-share" v-if="item.share">
					<view class="content-share-image">
						<image :src="item.share.titlepic" mode="aspectFill"></image>
					</view>
					<view class="content-share-text">
						<ellipsis-text :text="item.share.title" clamp="2"></ellipsis-text>
					</view>
				</view>
			</view>
			<!-- 底部 -->
			<view class="common-list-footer">
			    <view class="common-list-footer-left">
						{{item.path}}
					</view>
			    <view class="common-list-footer-right">
						<view class="common-list-footer-btn animated" hover-class="pulse">
							<text class="iconfont iconforward"></text>
							<text class="common-list-footer-btn-num">{{item.sharenum}}</text>
						</view>
						<view class="common-list-footer-btn animated" hover-class="pulse">
							<text class="iconfont iconcomment"></text>
							<text class="common-list-footer-btn-num">{{item.commentnum}}</text>
						</view>
						<view class="common-list-footer-btn animated" hover-class="pulse">
							<text class="iconfont icongood"></text>
							<text class="common-list-footer-btn-num">{{item.goodnum}}</text>
						</view>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from "./tag-sex-age.vue"
	export default {
		components:{tagSexAge},
		props:{
			item: Object,
			index: Number
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
@import "./css/common-card.scss"
</style>
