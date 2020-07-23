<template>
	<view class="paper-item">
		<view class="paper-item-image">
			<image :src="item.userPic"></image>
		</view>
		<view class="paper-item-txt">
			<view class="paper-item-txt-title">{{item.userName}}</view>
			<view class="paper-item-txt-area">
				<tag-sex-age :age="item.age" :sex="item.sex"></tag-sex-age>
			</view>
		</view>
		<view class="paper-item-data">
			<text class="iconfont iconhook" v-if="uType !== 2"></text>
			<text class="iconfont iconround-add" v-else></text>
		</view>
	</view>
</template>

<script>
	import uniBadge from "../../uni-badge/uni-badge.vue"
	import tagSexAge from "../tag-sex-age.vue"
	export default {
		components:{
			uniBadge,
			tagSexAge
		},
		props:{
			item: Object,
			uType: {
				type: Number,
				default: 2
			}
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
.paper-item{
		display: flex;
		padding: 20upx 10upx;
		border-bottom: 1rpx solid $uni-border-color;
		.paper-item-image{
			width: 100upx;
			height: 100upx;
			image{
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.paper-item-txt{
			flex: 1;
			padding: 0 20upx;
			.paper-item-txt-title{
				font-size: $uni-font-size-big;
			}
		}
		.paper-item-data{
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 10upx;
			.iconhook{
				color: #CCCCCC;
				font-size: 40upx;
			}
			.iconround-add{
				color: $uni-main-color;
				font-size: 40upx;
			}
		}
}
.iconfont.sex{
	margin-right: 5upx;
}
</style>
