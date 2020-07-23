<template>
	<view @click="goPath" :hover-class="hoverClass">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props:{
			url: String,
			type: {
				type: String,
				default: "navigateTo"
			},
			hoverClass: {
				type: String,
				default: "hover-class-opacity"
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			goPath(){
				if(this.nvt){
					return
				}
				uni.showLoading({
					title:"加载中..."
				})
				this.nvt = true
				uni[this.type]({
					url: this.url,
					success:()=> {
						this.nvt = false
						uni.hideLoading()
					}
				})
			}
		}
	}
</script>

<style>

</style>
