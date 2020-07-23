<template>
	<view class="user-info">
		<view class="user-info-pic">
			<image :src="userpic" lazy-load></image>
		</view>
		<view class="user-info-content">
			<view class="user-info-content-name">{{username}}</view>
			<view class="user-info-content-data">
				<text>总访客0 </text>
				<text> 今日0</text>
			</view>
		</view>
		<view class="user-info-r">
			<text class="iconfont iconright"></text>
		</view>
	</view>
</template>

<script>
	import {mapState} from "vuex"
	export default {
		data() {
			return {
				
			
			}
		},
		computed:{
			...mapState(["userData"]),
			username: function(){
				let username = {
					weixin: "nickName",
					qq: "nickname",
					sinaweibo: "nickName"
				}[this.userData.provider]
				return this.userData.userInfo[username]
			},
			userpic: function(){
				let userpic = {
					weixin: "avatarUrl",
					qq: "figureurl",
					sinaweibo: "avatarUrl"
				}[this.userData.provider]
				return this.userData.userInfo[userpic]
			},
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.user-info{
		width: 100%;
		display: flex;
		.user-info-pic{
			width: 140upx;
			height: 140upx;
			box-sizing: border-box;
			image{
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.user-info-content{
			flex: 1;
			display: flex;
			flex-direction: column;
			.user-info-content-name{
				flex: 1;
				font-size: $uni-font-size-big;
				display: flex;
				align-items: flex-end;
			}
			.user-info-content-data{
				flex: 1;
				color: $uni-thin-color;
			}
		}
		.user-info-r{
			display: flex;
			align-items: center;
			padding: 0 20upx;
			.iconfont{
				color: $uni-thin-color;
			}
		}
	}
</style>
