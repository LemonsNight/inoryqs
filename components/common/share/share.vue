<template>
	<view class="share-modal" v-if="isShowMenu" @tap="onCloseShare">
		<view class="share-modal-bottom animated" :class="showAnimated">
			<view class="share-modal-title">分享到</view>
			<view class="share-menus">
				<block v-for="(item,index) in shareList" :key="index">
					<view class="share-item" hover-class="hover-bgd" @tap="onShare(item)">
						<text class="iconfont" :class="item.icon"></text>
						<text class="share-item-txt">{{item.name}}</text>
					</view>
				</block>
			</view>
			<view class="share-modal-cancel" hover-class="hover-bgd" @tap="onCloseShare">
				取消
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			shareData: Object,
			isShow: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				shareList: [],
				showAnimated: "",
				isShowMenu: false,
				timeOut: ""
			}
		},
		methods: {
			// 取消分享
			onCloseShare(code){
				this.$emit("closeShare",code)
			},
			onShare(item){
				uni.share({
					provider: item.provider,
					scene: item.scene || "",
					...this.shareData,
					success: (res)=> {
						console.log("分享成功")
						this.onCloseShare(1)
					}
				})
			}
		},
		watch:{
			"isShow": function(e){
				if(e) {
					this.showAnimated = 'slideInUp'
					clearTimeout(this.timeOut)
					this.isShowMenu = e
				}else{
					this.showAnimated = 'slideOutDown'
					this.timeOut = setTimeout(()=>{
						this.isShowMenu = e
					},800)
				}
				
				
			}
		},
		created() {
			uni.getProvider({
				service:"share",
				success: (e)=>{
					console.log(JSON.stringify(e))
					let data = []
					for (let i = 0; i < e.provider.length;i++) {
						switch(e.provider[i]) {
							case "weixin":
								data.push({
									name: "微信",
									icon: "iconweixin",
									provider: "weixin",
									scene: "WXSceneSession"
								})
								data.push({
									name: "朋友圈",
									icon: "iconpengyouquan",
									provider: "WXSenceTimeline",
									scene: "WXSenceTimeline"
								})
								break;
							case "sinaweibo":
								data.push({
									name: "微博",
									icon: "iconweibo",
									provider: "sinaweibo"
								})
								break;
							case 'qq':
								data.push({
									name: "QQ",
									icon: "iconqq",
									provider: "qq"
								})
							break;
						}
					}
					this.shareList = data
				}
			})
		}
	}
</script>

<style scoped lang="scss">
	.share-modal{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.2);
		
		.share-modal-bottom{
			width: 100%;
			position: absolute;
			left: 0;
			bottom: 0;
			background-color: #FFFFFF;
			.share-modal-title{
				width: 100%;
				padding: 20upx 0;
				text-align: center;
				font-size: $uni-font-size-big;
			}
			.share-menus{
				width: 100%;
				display: flex;
				.share-item{
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 10upx 0;
					.iconfont{
						font-size: 100upx;
						display: inline-block;
						line-height: 100upx;
					}
					
					.share-item-txt{
						font-size: $uni-font-size-lg;
						color: $uni-text-color-grey;
					}
				}
			}
			.share-modal-cancel{
				text-align: center;
				padding: 20upx 0;
				border-top: 1upx solid $uni-border-color;
			}
		}
	}
	.hover-bgd{
		background-color: #fafafa;
	}
</style>
