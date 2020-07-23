<template>
	<view>
			<uni-nav-bar
				left-icon="arrowleft"
				 :statusBar="true"
				 rightText="发布"
					@clickLeft="back"
					@clickRight="submit"
					>
						<view class="nav-bar-cstm" @click="showActionSheet">
							{{privacy[privacyIndex]}}
							<text class="iconfont icondown"></text>
						</view>
					</uni-nav-bar>
					<!-- 多行输入框 -->
					<view class="uni-textarea">
						<textarea placeholder="说点什么吧~" v-model="text"></textarea>
					</view>
					<!-- 选择图片 -->
					<upload-image :imageList="imageList" @changeImage="changeImage"/>
					<!-- 显示公告 -->
					<uni-popup type="center" ref="popup">
						<view class="popup-center">
							<view>
								<image src="../../static/image/submit-tip.png" mode="widthFix"></image>
							</view>
							<view class="popup-center-text">1、涉及黄色，政治，广告及骚扰信息</view>
							<view class="popup-center-text">2、涉及人身攻击</view>
							<view class="popup-center-text">3、留联系方式，透露他人隐私</view>
							<view class="popup-center-text">一经核实将禁封账号，情节严重的将永久禁封账号</view>
							<view class="popup-center-btn">
								<button @click="closePopup">朕知道了</button>
							</view>
						</view>
					</uni-popup>
	</view>
</template>

<script>
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	import uploadImage from "../../components/common/upload-images.vue"
	import uniPopup from "../../components/uni-popup/uni-popup.vue" 
	export default {
	components: {uniNavBar,uploadImage,uniPopup},
		data() {
			return {
				privacy: ['所有人可见','仅自己可见'],
				privacyIndex: 0,
				text: '',
				imageList: [],
				isBack: false
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			submit(){
				
			},
			showActionSheet(){
				uni.showActionSheet({
					itemList: this.privacy,
					success:(e)=> {
						this.privacyIndex = e.tapIndex
					}
				})
			},
			changeImage(arr) {
				this.imageList = arr
			},
			closePopup(){
				this.$refs.popup.close()
			}
		},
		onload() {
			uni.getStorage({
				key: "addInputData",
				success: (e) => {
					console.log(e.message)
					if(e.message){
						this.addInputData = JSON.parse(e.message)
					}
				}
			})
		},
		mounted() {
			this.$refs.popup.open()
		},
		// 监听返回事件 return false表示可以返回 return true表示阻止返回
		onBackPress() {
			if(this.isBack){
				return false
			}
			if(this.text || this.imageList.length > 0) {
				uni.showModal({
					content:"是否将你当前的文案保存为草稿",
					cancelText:"不保存",
					confirmText:"保存",
					confirmColor:"#efb336",
					success:(e)=> {
						if(e.confirm) {
							this.isBack = true
							uni.navigateBack()
							// uni.setStorage({
							// 	key:"addInputData",
							// 	data:JSON.stringify({text:this.text,imageList: this.imageList}),
							// 	success: () => {
							// 		this.isBack = true
							// 		uni.navigateBack()
							// 	},
							// 	fail: () => {
							// 		uni.showModal({
							// 			content:"保存失败",
							// 		})
							// 	}
							// })
						} else{
							this.isBack = true
							uni.navigateBack()
						}
					}
				})
			} else {
				this.isBack = true
				uni.navigateBack()
			}
			return true;
		}
	}
</script>

<style scoped lang="scss">
.nav-bar-cstm{
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	.icondown{
		margin-left: 5upx;
		color: $uni-text-color;
	}
}
.uni-textarea{
	border: 1upx solid#cccccc;
}
.popup-center{
	width: 80%;
	padding: 0 30upx;
	margin: auto;
	border-radius: 20upx;
	background-color: #FFFFFF;
	image{
		width: 100%;
	}
	.popup-center-text{
		padding: 2upx 0;
		font-size: $uni-font-size-big;
	}
	.popup-center-btn{
		padding: 20upx 0;
		button{
			background-color: $uni-main-color;
		}
	}
}
</style>
