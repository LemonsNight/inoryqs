<template>
	<view class="chart-room-buttom">
		<input class="chart-room-buttom-ipt" type="text" :value="value" :cursor-spacing="10" placeholder="文明发言" @input="changeInput"/>
		<view class="chart-room-buttom-send iconfont iconsend" @tap="sendMsg"></view>
	</view>
</template>

<script>
	export default {
		props:{
			value: { // 必须要使用value
　　　　　default: '',
　　　	}
		},
		data() {
			return {
				
			}
		},
		methods: {
			changeInput(e){
				this.$emit('input', e.detail.value)
			},
			sendMsg(){
				this.$emit('sendMsg')
			}
		}
	}
</script>

<style scoped lang="scss">
.chart-room-buttom {
		background-color: #FFFFFF;
		width: 100%;
		display: flex;
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: 1upx solid $uni-bg-color-grey;
		padding: 20upx;
		box-sizing: border-box;
		.chart-room-buttom-ipt {
			flex: 1;
			height: 70upx;
			background-color: $uni-bg-color-grey;
			text-indent: 10upx;
		}

		.chart-room-buttom-send {
				display: inline-block;
				font-size: 40upx;
				width: 70upx;
				height: 70upx;
				text-align: center;
				margin: 0 10upx 0 20upx;
				border-radius: 10upx;
		}
	}
</style>
