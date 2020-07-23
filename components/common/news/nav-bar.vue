<template>
	<uni-nav-bar
		 :statusBar="true"
			@clickRight="submit"
			fixed="true"
			>
				<!-- 左边 -->
				<block slot="left">
					<view class="nav-left">	
						<text class="iconfont iconsign"></text>
					</view>
				</block>
				<!-- 中间 -->
				<view class="nav-tab-bar">
					<block v-for="(item,index) in tabBars" :key="item.id">
						<view :class="{on: tabIndex === index}" @tap="tabBarChange(index)">{{item.name}}</view>
					</block>
				</view>
				<!-- 右边 -->
				<block slot="right">
					<view class="nav-right">	
						<text class="iconfont iconedit"></text>
					</view>
				</block>
	</uni-nav-bar>
</template>

<script>
	import uniNavBar from "../../uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		props:{
			tabIndex: {
				type: Number,
				default: 0
			},
			tabBars: Array
		},
		data() {
			return {
				
			}
		},
		methods: {
			tabBarChange(index){
				this.$emit("tabBarChange", index)
			},
			submit(){
				this.$store.dispatch("navigateTo", "/pages/add-input/add-input")
			}
		}
	}
</script>

<style scoped lang="scss">
.nav-left,.nav-right{
	display: flex;
	align-items: center;
	justify-content: center;
	text{
		font-size: 48upx;
	}
}
.nav-left{
	color: $uni-main-color;
}
.nav-right{
	color: $uni-text-color;
}
.nav-tab-bar{
	width: 100%;
	font-weight: bold;
	color: $uni-thin-color;
	display: flex;
	align-items: center;
	justify-content: center;
	view{
		margin: 0 15upx;
		font-size: $uni-font-size-lg;
	}
	.on{
		border-bottom: 8upx solid $uni-main-color;
		color: #000000;
	}
}

</style>
