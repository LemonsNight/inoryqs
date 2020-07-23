<template>
	<view class="menu-list">
		<block v-for="(item,index) in list" :key="index">
				<view class="menu-item" hover-class="hover-class-opacity">
				<view class="menu-item-l">
					<text class="iconfont" :class="item.icon"></text>
					<text class="menu-item-txt">{{item.title}}</text>
				</view>
				<view class="menu-item-r">
					<text class="iconfont iconright"></text>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			list: Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.menu-list{
		border-top: 1upx solid $uni-border-color;
		box-sizing: border-box;
		.menu-item{
			display: flex;
			border-bottom: 1upx solid $uni-border-color;
			padding: 30upx 0;
			.menu-item-l{
				flex: 1;
				display: flex;
				align-items: center;
				.iconfont{
					font-size: 32upx;
					margin: 0 15upx;
				}
				.iconeye{
					color: #007AFF;
				}
				.iconauth{
					color: $uni-main-color;
				}
				.iconexamine{
					color: #55aa7f;
				}
			}
			.menu-item-r{
				display: flex;
				align-items: center;
				padding-right: 20upx;
				.iconfont{
					color: $uni-thin-color;
				}
			}
		}
	}
</style>
