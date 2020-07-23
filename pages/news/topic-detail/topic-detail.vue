<template>
	<view>
		<!-- 信息 -->
		<topic-info-view :topicInfo="topicInfo"></topic-info-view>
		<!-- 导航栏 -->
		<swiper-tabbar :tabIndex="tabIndex" :tabBars="tabBars" @switchTab="switchTab" swiperStyle="border-bottom: 0;" tabItemStyle="width:50%;"></swiper-tabbar>
		<!-- 列表 -->
		<view class="topic-detail-list">
			<template v-if="list.length > 0">
				<block v-for="(item,index) in list" :key="index">
					<common-car :item="item"></common-car>
				</block>
				<load-type :page="page"></load-type>
			</template>
			<template v-else>
				<no-data></no-data>
			</template>
		</view>
	</view>
</template>

<script>
	import topicInfoView from "../../../components/common/topic-detail/topic-info.vue"
	import swiperTabbar from "../../../components/common/swiper-tabbar.vue"
	import commonCar from "../../../components/common/common-card.vue"
	export default {
		components:{
			topicInfoView,
			swiperTabbar,
			commonCar
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: '关注',
						id: 'guanzhu'
					},
					{
						name: '推荐',
						id: 'tuijian'
					}
				],
				topicInfo:{
					titlePic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/b14f11e3c5da4be59ae7ac7a9dc1d712.jpg",
					title: "#不与傻逼论长短#",
					desc: "人要活的开心，不要与傻子论长短，不与傻子讲道理，不和三观不同的人争辩是非",
					totalNum: "32572",
					todayNum: "324"
				},
				guanzhu: {
					list: [
						// 图文
						{
							userpic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
							username: "麦克",
							sex: 0,
							age: 25,
							isguangzou: false,
							title: "心软是一把刀,送给了别人伤害了自己",
							titlepic: "",
							video: false,
							share: false,
							path: "江西 赣州",
							sharenum: 12,
							commentnum: 30,
							goodnum: 300
						},
						// 视频
						{
							userpic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
							username: "麦克",
							sex: 0,
							age: 25,
							isguangzou: false,
							title: "心软是一把刀,送给了别人伤害了自己",
							titlepic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png",
							video: {
								looknum: "12w",
								long: "22:32"
							},
							share: false,
							path: "江西 赣州",
							sharenum: 12,
							commentnum: 30,
							goodnum: 300
						},
						{
							userpic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
							username: "麦克",
							sex: 1,
							age: 25,
							isguangzou: false,
							title: "心软是一把刀,送给了别人伤害了自己",
							titlepic: "",
							video: false,
							share: {
								title: "我爱分享,分享使我快乐",
								titlepic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png"
							},
							path: "江西 九江",
							sharenum: 12,
							commentnum: 30,
							goodnum: 300
						}
					],
					page: {
						hasNextPage: true,
						loading: false,
						error: false
					}
				},
				tuijian: {
					list: [],
					page: {
						hasNextPage: false,
						loading: false,
						error: false
					}
				}
			}
		},
		computed:{
			list(){
				return this[['guanzhu','tuijian'][this.tabIndex]].list
			},
			page(){
				return this[['guanzhu','tuijian'][this.tabIndex]].page
			}
		},
		// 监听上拉加载
		onReachBottom(){
			this.loadMore()
		},
		// 监听下拉刷新
		onPullDownRefresh(){
			console.log("下拉刷新")
			
			uni.stopPullDownRefresh();
		},
		methods: {
			switchTab(index) {
				this.tabIndex = index
			},
			loadMore() {
				let type = ['guanzhu','tuijian'][this.tabIndex]
				if (this[type].page.loading || !this[type].page.hasNextPage) {
					return
				}
				this.$set(this[type].page, 'loading', true)
			
				setTimeout(() => {
					let data = [{
						userpic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
						username: "迷你",
						sex: 1,
						age: 25,
						isguangzou: false,
						title: '爱Code-' + this[type].list.length + "爱分享",
						titlepic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png",
						video: false,
						share: false,
						path: "江西 九江",
						sharenum: 12,
						commentnum: 30,
						goodnum: 300
					}]
					let list = this[type].list.concat(data)
					this.$set(this[type], 'list', list)
					this.$set(this[type].page, 'loading', false)
					this.$set(this[type].page, 'hasNextPage', list.length < 15)
				}, 800)
			},
		}
	}
</script>

<style scoped lang="scss">

</style>
