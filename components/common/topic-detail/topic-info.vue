<template>
	<view>
		<!-- 毛玻璃背景 -->
		<view class="topic-bg">
			<image :src="topicInfo.titlePic" mode="aspectFill" lazy-load></image>
		</view>
		<view class="topoc-info">
			<view class="topic-title">
				<view class="topic-pic">
					<image :src="topicInfo.titlePic" mode="aspectFill" lazy-load></image>
				</view>
				<view class="topic-title-txt">{{topicInfo.title}}</view>
			</view>
			<view class="topic-num">
				动态{{topicInfo.totalNum}} 今日{{topicInfo.todayNum}}
			</view>
			<view class="topic-desc">
				{{topicInfo.desc}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			topicInfo: Object
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
.topic-bg{
	width: 100%;
	height: 300upx;
	position: relative;
	overflow: hidden;
	image{
		width: 100%;
		filter: blur(5px);
	}
}
.topoc-info{
	padding: 20upx;
	.topic-title{
		position: relative;
		padding-bottom: 20upx;
		.topic-pic{
			width: 200upx;
			height: 200upx;
			position: absolute;
			left: 0;
			top: -120upx;
			image{
				width: 100%;
				height: 100%;
				border-radius: 20upx;
			}
		}
		.topic-title-txt{
			padding-left: 220upx;
			font-size: $uni-font-size-lg;
			font-weight: bold;
		}
	}
	.topic-num{
		padding: 10upx 0;
		color: #CCCCCC;
	}
	.topic-desc{
		color: $uni-thin-color;
	}
}
</style>
