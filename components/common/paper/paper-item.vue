<template>
	<view class="paper-item" @tap="goPath">
		<view class="paper-item-image">
			<image :src="item.userPic"></image>
		</view>
		<view class="paper-item-txt">
			<view class="paper-item-txt-title">{{item.userName}}</view>
			<view class="paper-item-txt-area">{{item.data}}</view>
		</view>
		<view class="paper-item-data">
			<view class="paper-item-data-time">{{item.time}}</view>
			<view class="paper-item-data-num">
				<uni-badge :text="item.noReadNum" type="warning"></uni-badge>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from "../../uni-badge/uni-badge.vue"
	export default {
		components:{
			uniBadge
		},
		props:{
			item: Object
		},
		data() {
			return {
				
			}
		},
		methods: {
			goPath(){
				this.$store.dispatch("navigateTo", "/pages/user-chat/user-chat")
			}
		}
	}
</script>

<style scoped lang="scss">
.paper-item{
		display: flex;
		padding: 10upx;
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
			.paper-item-txt-area{
				font-size: $uni-font-size-lg;
				color: $uni-thin-color;
			}
		}
		.paper-item-data{
			display: flex;
			flex-direction: column;
			.paper-item-data-time{
				
			}
			.paper-item-data-num{
				flex: 1;
				display: flex;
				align-items: center;
			}
		}
}
</style>
