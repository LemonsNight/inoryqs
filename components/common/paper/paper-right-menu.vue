<template>
	<view v-if="isShowMenu">
		<view class="menu-popup" @touchstart="onHiddenMenu"></view>
		<view class="menu-right animated" :class="showAnimated">
			<view class="menu-right-item" @tap="onSearchFriends">
				<text class="iconfont iconsearch"></text>搜索好友
			</view>
			<view class="menu-right-item" @tap="clearMsg">
				<text class="iconfont iconclear"></text>清除未读
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			showMenu: {
				type:Boolean,
				default: false
			}
		},
		data() {
			return {
				isShowMenu: false,
				showAnimated: "slideInRight",
				timeOut: ""
			}
		},
		methods: {
			onHiddenMenu(){
				this.$emit("onHiddenMenu")
			},
			// 点击搜索好友
			onSearchFriends(){
				this.$emit("onSearchFriends")
			},
			// 点击清除信息
			clearMsg(){
				this.$emit("clearMsg")
			}
		},
		watch:{
			"showMenu": function(e){
				if(e) {
					this.showAnimated = 'slideInRight'
					clearTimeout(this.timeOut)
					this.isShowMenu = e
				}else{
					this.showAnimated = 'slideOutRight'
					this.timeOut = setTimeout(()=>{
						this.isShowMenu = e
					},800)
				}
				
				
			}
		},
		created() {
			this.isShowMenu = this.showMenu
		}
	}
</script>

<style scoped lang="scss">
.menu-popup{
	position: fixed;
	right: 0;
	top: 0;
	z-index: 2;
	width: 100%;
	height: 100%;
}
.menu-right{
	position: fixed;
	right: 0;
	top: 2upx;
	// #ifdef H5
	top: 45px;
	// #endif
	z-index: 3;
	width: 50%;
	background-color: #ffffff;
	box-shadow: 1upx 1upx 20upx 2upx #cccccc;
	.menu-right-item{
		display: flex;
		align-items: center;
		padding: 15upx 20upx;
		.iconfont{
			margin-right: 10upx;
		}
	}
}
</style>
