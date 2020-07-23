<template>
	<view>
		<view class="load-more" v-if="page.loading">加载中...</view>
		<view class="load-more error" v-else-if="page.error">加载失败，点击重试</view>
		<view class="load-more" v-else-if="!page.hasNextPage">没有更多数据了(；′⌒`)</view>
		<view class="load-more" v-else>下拉加载o(*￣▽￣*)ブ</view>
	</view>
</template>

<script>
	export default {
		props: {
			page: {
				type: Object,
				default: {
					hasNextPage: false,
					loading: false,
					error: false
				}
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
	.load-more {
		text-align: center;
		color: $uni-thin-color;
		padding: 15upx 0;
		.error{
			color: $uni-color-error;
		}
	}
</style>
