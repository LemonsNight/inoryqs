<template>
	<view class="uni-comment-list" :class="{'u-comment-list-child': item.fid !== 0}">
		<view class="uni-comment-face">
			<image :src="item.userpic" mode="widthFix"></image>
		</view>
		<view class="uni-comment-body">
			<view class="uni-comment-top">
				<text>{{item.username}}</text>
			</view>
			<view class="uni-comment-content">
				{{item.data}}
			</view>
			<view class="uni-comment-date">
				<view>{{item.timeStr}}</view>
				<view class="uni-comment-replay-btn">99+回复</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item: Object
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
	
.uni-comment-face>image{
	width: 100%!important;
	height: 100%!important;
}
.u-comment-list-child{
	padding: 20upx;
	background-color: $uni-bg-color-grey;
	border-bottom: 1upx solid #e8e8e8;
	box-sizing: border-box;
	margin: 0;
	margin-left: 70upx;
	width: auto;
}

</style>
