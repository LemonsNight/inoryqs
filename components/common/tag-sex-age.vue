<template>
	<view class="common-list-title-txt-tag" :class="['unknow','woman','man'][sex]">
		<text class="iconfont" :class="['iconunknow','iconwoman','iconman'][sex]"></text>
		<text>{{age}}</text>
	</view>
</template>

<script>
	export default {
		props:{
			age:{
				type: Number,
				default: 0
			},
			sex: Number
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
.common-list-title-txt-tag{
			height: 34upx;
			line-height: 34upx;
			font-size: $uni-font-size-sm;
			display: inline-block;
			color: #FFFFFF;
			border-radius: 20upx;
			margin-left: 10upx;
			padding: 2upx 10upx;
			.iconfont{
				font-size: $uni-font-size-base;
				margin-right: 2upx;
			}
		}
		.common-list-title-txt-tag.unknow{
			background-color: #cbcbcb;
		}
		.common-list-title-txt-tag.woman{
			background-color: #FF4D94;
		}
		.common-list-title-txt-tag.man{
			background-color: #769AFF;
		}
</style>
