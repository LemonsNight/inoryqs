<template>
	<view class="no-data" :style="{height: height ? (height + 'px') : '100%'}">
		<image src="/static/image/no-data.png" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		props:['height'],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.no-data{
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		image{
			width: 50%;
			opacity: 0.6;
		}
	}
</style>
