<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x class="uni-swiper-tab" :style="swiperStyle">
			<block v-for="(item,index) in tabBars" :key="item.id">
				<view class="swiper-tab-list" :style="tabItemStyle" :class="{'active': index === tabIndex}" @click="switchTab(index)">
					<text>{{item.name}}{{item.total ? item.total : ''}}</text>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			tabBars: Array,
			tabIndex: Number,
			tabItemStyle: {
				type: String,
				default: ""
			},
			swiperStyle: {
				type: String,
				default: ""
			},
		},
		data() {
			return {
				
			}
		},
		methods: {
			switchTab(index){
				this.$emit("switchTab", index)
			}
		}
	}
</script>

<style scoped lang="scss">
.swiper-tab-list {
		font-weight: bold;
		color: $uni-thin-color;
	}

	.swiper-tab-list.active {
		color: #000000;
		text {
			border-bottom: 6upx solid $uni-main-color;
		}
	}
</style>
