<template>
	<view class="user-space">
		<view class="user-space-window">
			<view class="follow-btn">
				<text class="iconfont iconadd"></text>
				<text>关注</text>
			</view>
			<text class="user-n-a">
				<text class="user-n">inory</text>
				<tag-sex-age :age="24" :sex="1"></tag-sex-age>
			</text>
			<image src="https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg" mode="widthFix" lazy-load class="user-pic"></image>
		</view>
		
		<view class="count-menu">
			<view class="count-item">
				<text class="count-item-num">12.3w</text>
				<text class="count-item-txt">获赞</text>
			</view>
			<view class="count-item">
				<text class="count-item-num">30</text>
				<text class="count-item-txt">关注</text>
			</view>
			<view class="count-item">
				<text class="count-item-num">1547</text>
				<text class="count-item-txt">粉丝</text>
			</view>
		</view>
		<view class="space-data-list">
			<swiper-tabbar :tabIndex="tabIndex" :tabBars="tabBars" @switchTab="switchTab" swiperStyle="border-bottom: 0;" tabItemStyle="width:33.3%;"></swiper-tabbar>
			<template v-if="tabIndex === 0">
				<view class="user-space-data">
					<view class="user-space-data-box">
						<view class="user-space-data-box-t">账号信息</view>
						<view class="user-space-data-box-c">
							<view>趣龄：1年5月23日</view>
							<view> 趣事app ID : QS3030</view>
						</view>
					</view>
					<view class="user-space-data-box">
						<view class="user-space-data-box-t">个人信息</view>
						<view class="user-space-data-box-c">
							<view>星座：双鱼座</view>
							<view>爱好：喜欢编程，更喜欢妹子</view>
							<view>职业：IT互联网</view>
							<view>故乡：幻想乡</view>
							<view>情感：非常丰富</view>
						</view>
					</view>
				</view>
			</template>
			<template v-else-if="tabIndex === 1">
				<view>
					<no-data></no-data>
				</view>
			</template>
			<template v-else-if="tabIndex === 2">
				<view>
					<no-data></no-data>
				</view>
			</template>
		</view>
		<space-right-menu
		@onHiddenMenu="onHiddenMenu"
		@onRemarks="onRemarks"
		@onPullBlack="onPullBlack"
		:showMenu="showMenu"
		></space-right-menu>
	</view>
</template>

<script>
	import tagSexAge from "../../components/common/tag-sex-age.vue"
	import swiperTabbar from "../../components/common/swiper-tabbar.vue"
	import spaceRightMenu from "../../components/common/user-space/space-right-menu.vue"
	export default {
		components:{tagSexAge,swiperTabbar,spaceRightMenu},
		data() {
			return {
				tabBars: [{
						name: '主页',
						id: 'zhuye'
					},
					{
						name: '趣事',
						id: 'qushi'
					},
					{
						name: '动态',
						id: 'dongtai'
					}
					
				],
				tabIndex: 0,
				showMenu: false
			}
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh()
		},
		// 导航栏按钮点击
		onNavigationBarButtonTap(e) {
			if(e.index === 0) {
				this.showMenu = !this.showMenu
			}
		},
		methods: {
			switchTab(index) {
				this.tabIndex = index
			},
			onHiddenMenu(){
				this.showMenu = false
			},
			// 拉黑
			onPullBlack(){
					console.log("拉黑")
					this.onHiddenMenu()
			},
			// 备注
			onRemarks(){
				console.log("备注")
				this.onHiddenMenu()
			}
		}
	}
</script>

<style scoped lang="scss">
	.user-space{
		background-color: #fafafa;
	}
.user-space-window{
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	background-image: url(../../static/image/space-bgd.jpg);
	background-size: 100% 100%;
	height: 420upx;
	.user-pic{
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}
	.user-n-a{
		margin: 10upx 0;
		.user-n{
			font-size: $uni-font-size-big;
			color: #FFFFFF;
		}
	}
	.follow-btn{
		padding: 0 20upx;
		border-radius: 10upx;
		background-color: $uni-main-color;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		margin-bottom: 50upx;
	}
}
.count-menu{
		width: 100%;
		display: flex;
		border-radius: 20upx 20upx 0 0;
		transform: translateY(-20upx);
		background-color: #FFFFFF;
		.count-item{
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 20upx 0;
			.count-item-num{
				font-size: 40upx;
				line-height: 40upx;
			}
			.count-item-txt{
				color: $uni-thin-color;
			}
		}
	}
	.space-data-list{
		background-color: #FFFFFF;
	}
	.user-space-data{
		padding: 20upx;
		.user-space-data-box{
			border-bottom: 1upx solid $uni-border-color;
			padding: 20upx 0;
			.user-space-data-box-t{
			}
			.user-space-data-box-c{
				font-size: 22upx;
				color: $uni-thin-color;
			}
		}
		
	}
</style>
