<template>
	<view class="index-page">
		
		<swiper-tabbar :tabIndex="tabIndex" :tabBars="tabBars" @switchTab="switchTab"></swiper-tabbar>
		<swiper class="swiper-box" :style="{'height':swiperHeight + 'px'}" :current="tabIndex" @change="swiperChange">
			<swiper-item v-for="(item,index) in list" :key="index">
				<scroll-view scroll-y="true" class="list" :style="{'height':swiperHeight + 'px'}" @scrolltolower="loadMore(index)">
					<template v-if="item.list.length > 0">
						<block v-for="(item1,index1) in item.list" :key="index1">
							<index-item :item="item1"></index-item>
						</block>
						<load-type :page="item.page"></load-type>
					</template>
					<template v-else>
						<no-data :height="swiperHeight"></no-data>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import indexItem from "../../components/common/index/index-item.vue"
	import swiperTabbar from "../../components/common/swiper-tabbar.vue"
	export default {
		components: {
			indexItem,
			swiperTabbar
		},
		data() {
			return {
				tabIndex: 0,
				swiperHeight: 0,
				tabBars: [{
						name: '关注',
						id: 'guanzhu'
					},
					{
						name: '推荐',
						id: 'tuijian'
					},
					{
						name: '体育',
						id: 'tiyu'
					},
					{
						name: '热点',
						id: 'redian'
					},
					{
						name: '财经',
						id: 'caijin'
					},
					{
						name: '娱乐',
						id: 'yule'
					}
				],
				list: [{
						list: [{
								title: '爱Code',
								thumbnail: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
								extra: '技术没有上限',
								mainimage: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png',
								contenttext: '心软是一把刀,送给了别人伤害了自己'
							},
							{
								title: '爱Code',
								thumbnail: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
								extra: '技术没有上限',
								mainimage: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png',
								contenttext: '心软是一把刀,送给了别人伤害了自己'
							},
						],
						page: {
							hasNextPage: true,
							loading: false,
							error: false
						}
					},
					{
						list: [{
								title: '爱Code',
								thumbnail: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
								extra: '技术没有上限',
								mainimage: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png',
								contenttext: '心软是一把刀,送给了别人伤害了自己'
							},
							{
								title: '爱Code',
								thumbnail: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
								extra: '技术没有上限',
								mainimage: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png',
								contenttext: '心软是一把刀,送给了别人伤害了自己'
							},
							{
								title: '爱Code',
								thumbnail: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
								extra: '技术没有上限',
								mainimage: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png',
								contenttext: '心软是一把刀,送给了别人伤害了自己'
							}
						],
						page: {
							hasNextPage: true,
							loading: false,
							error: false
						}
					},
					{
						list: [{
							title: '爱Code',
							thumbnail: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
							extra: '技术没有上限',
							mainimage: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png',
							contenttext: '心软是一把刀,送给了别人伤害了自己'
						}],
						page: {
							hasNextPage: true,
							loading: false,
							error: false
						}
					},
					{
						list: [{
							title: '爱Code',
							thumbnail: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
							extra: '技术没有上限',
							mainimage: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png',
							contenttext: '心软是一把刀,送给了别人伤害了自己'
						}],
						page: {
							hasNextPage: false,
							loading: false,
							error: false
						}
					},
					{
						list: [],
						page: {
							hasNextPage: false,
							loading: false,
							error: false
						}
					},
					{
						list: [{
							title: '爱Code',
							thumbnail: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
							extra: '技术没有上限',
							mainimage: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png',
							contenttext: '心软是一把刀,送给了别人伤害了自己'
						}],
						page: {
							hasNextPage: true,
							loading: false,
							error: false
						}
					}
				]
			}
		},
		methods: {
			switchTab(index) {
				this.tabIndex = index
			},
			swiperChange(e) {
				this.tabIndex = e.detail.current
			},
			// 加载更多
			loadMore(index) {
				if (this.list[index].page.loading || !this.list[index].page.hasNextPage) {
					return
				}
				this.$set(this.list[index].page, 'loading', true)

				setTimeout(() => {
					let data = [{
						title: '爱Code' + index + '-' + this.list[index].list.length,
						thumbnail: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
						extra: '技术没有上限',
						mainimage: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png',
						contenttext: '心软是一把刀,送给了别人伤害了自己'
					}]
					let list = this.list[index].list.concat(data)
					this.$set(this.list[index], 'list', list)
					this.$set(this.list[index].page, 'loading', false)
					this.$set(this.list[index].page, 'hasNextPage', list.length < 15)
				}, 800)
			}
		},
		onLoad() {
			let that = this
			uni.getSystemInfo({
				success:(res)=> {
					this.swiperHeight = res.windowHeight - uni.upx2px(100)
					// #ifdef APP-PLUS
						this.swiperHeight = this.swiperHeight - 55
					// #endif
				}
			})
		},
		// 监听顶部搜索栏的点击
		onNavigationBarSearchInputClicked() {
			this.$store.dispatch("navigateTo", "/pages/search/search")
		},
		// 监听原生搜索栏按钮点击事件
		onNavigationBarButtonTap(e) {
			// 点击了发布按钮
			if(e.index === 1) {
				this.$store.dispatch("navigateTo", "/pages/add-input/add-input")
			}else if (e.index === 0) {
				console.log("点击了签到")
			}
		}
	}
</script>

<style scoped lang="scss">
	.index-page {
		background-color: #FFFFFF;
	}

	

	.uni-swiper-tab {
		border-bottom: 1upx solid #F0F0F0;
	}
</style>
