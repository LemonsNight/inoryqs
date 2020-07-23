<template>
	<view>
		<swiper-tabbar :tabIndex="tabIndex" :tabBars="tabBars" @switchTab="switchTab"></swiper-tabbar>

		<swiper class="swiper-box" :style="{'height':swiperHeight + 'px'}" :current="tabIndex" @change="swiperChange">
			<swiper-item v-for="(item,index) in list" :key="index">
				<scroll-view scroll-y="true" class="list" :style="{'height':swiperHeight + 'px'}" @scrolltolower="loadMore(index)">
					<view v-if="item.list.length > 0" class="ht-classify-list">
						<block v-for="(item1,index1) in item.list" :key="index1">
							<newsets :item="item1"></newsets>
						</block>
						<load-type :page="item.page"></load-type>
					</view>
					<template v-else>
						<no-data :height="swiperHeight"></no-data>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	import swiperTabbar from "../../../components/common/swiper-tabbar.vue"
	import newsets from "../../../components/common/news/newest.vue"
	export default {
		components: {
			swiperTabbar,
			newsets
		},
		data() {
			return {
				tabIndex: 0,
				swiperHeight: 0,
				tabBars: [{
						name: '最新',
						id: 'zuixin'
					},
					{
						name: '游戏',
						id: 'youxi'
					},
					{
						name: '情感',
						id: 'qinggan'
					},
					{
						name: '打卡',
						id: 'daka'
					},
					{
						name: '故事',
						id: 'gushi'
					},
					{
						name: '喜爱',
						id: 'xiai'
					}
				],
				list: [{
						list: [{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
								title: '#我的笔记#',
								desc: '从html入门到上手事记项目',
								totalNum: 321,
								todayNum: 12
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/src/three.jpg',
								title: '#感情史#',
								desc: '从当舔狗到被舔',
								totalNum: 22134,
								todayNum: 7412
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/189c2fdfbabb423e80b6f9210730bb5e.jpg',
								title: '#如何让快速上手springboot#',
								desc: '一切都是浮云，这也太简单了',
								totalNum: 4234,
								todayNum: 712
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg',
								title: '#早睡早起#',
								desc: '早睡早起身体好，记得每天过来打卡哦',
								totalNum: '152.6w',
								todayNum: 9601
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg',
								title: '#早睡早起#',
								desc: '早睡早起身体好，记得每天过来打卡哦',
								totalNum: '152.6w',
								todayNum: 9601
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg',
								title: '#早睡早起#',
								desc: '早睡早起身体好，记得每天过来打卡哦',
								totalNum: '152.6w',
								todayNum: 9601
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg',
								title: '#早睡早起#',
								desc: '早睡早起身体好，记得每天过来打卡哦',
								totalNum: '152.6w',
								todayNum: 9601
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg',
								title: '#早睡早起#',
								desc: '早睡早起身体好，记得每天过来打卡哦',
								totalNum: '152.6w',
								todayNum: 9601
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg',
								title: '#早睡早起#',
								desc: '早睡早起身体好，记得每天过来打卡哦',
								totalNum: '152.6w',
								todayNum: 9601
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg',
								title: '#早睡早起#',
								desc: '早睡早起身体好，记得每天过来打卡哦',
								totalNum: '152.6w',
								todayNum: 9601
							}
						],
						page: {
							hasNextPage: true,
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
					}, {
						list: [{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
								title: '#我的笔记#',
								desc: '从html入门到上手事记项目',
								totalNum: 321,
								todayNum: 12
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/src/three.jpg',
								title: '#感情史#',
								desc: '从当舔狗到被舔',
								totalNum: 22134,
								todayNum: 7412
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/189c2fdfbabb423e80b6f9210730bb5e.jpg',
								title: '#如何让快速上手springboot#',
								desc: '一切都是浮云，这也太简单了',
								totalNum: 4234,
								todayNum: 712
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg',
								title: '#早睡早起#',
								desc: '早睡早起身体好，记得每天过来打卡哦',
								totalNum: '152.6w',
								todayNum: 9601
							}
						],
						page: {
							hasNextPage: true,
							loading: false,
							error: false
						}
					}, {
						list: [{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
								title: '#我的笔记#',
								desc: '从html入门到上手事记项目',
								totalNum: 321,
								todayNum: 12
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/src/three.jpg',
								title: '#感情史#',
								desc: '从当舔狗到被舔',
								totalNum: 22134,
								todayNum: 7412
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/189c2fdfbabb423e80b6f9210730bb5e.jpg',
								title: '#如何让快速上手springboot#',
								desc: '一切都是浮云，这也太简单了',
								totalNum: 4234,
								todayNum: 712
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg',
								title: '#早睡早起#',
								desc: '早睡早起身体好，记得每天过来打卡哦',
								totalNum: '152.6w',
								todayNum: 9601
							}
						],
						page: {
							hasNextPage: true,
							loading: false,
							error: false
						}
					}, {
						list: [{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
								title: '#我的笔记#',
								desc: '从html入门到上手事记项目',
								totalNum: 321,
								todayNum: 12
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/src/three.jpg',
								title: '#感情史#',
								desc: '从当舔狗到被舔',
								totalNum: 22134,
								todayNum: 7412
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/189c2fdfbabb423e80b6f9210730bb5e.jpg',
								title: '#如何让快速上手springboot#',
								desc: '一切都是浮云，这也太简单了',
								totalNum: 4234,
								todayNum: 712
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg',
								title: '#早睡早起#',
								desc: '早睡早起身体好，记得每天过来打卡哦',
								totalNum: '152.6w',
								todayNum: 9601
							}
						],
						page: {
							hasNextPage: true,
							loading: false,
							error: false
						}
					}, {
						list: [{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
								title: '#我的笔记#',
								desc: '从html入门到上手事记项目',
								totalNum: 321,
								todayNum: 12
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/src/three.jpg',
								title: '#感情史#',
								desc: '从当舔狗到被舔',
								totalNum: 22134,
								todayNum: 7412
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/189c2fdfbabb423e80b6f9210730bb5e.jpg',
								title: '#如何让快速上手springboot#',
								desc: '一切都是浮云，这也太简单了',
								totalNum: 4234,
								todayNum: 712
							},
							{
								titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg',
								title: '#早睡早起#',
								desc: '早睡早起身体好，记得每天过来打卡哦',
								totalNum: '152.6w',
								todayNum: 9601
							}
						],
						page: {
							hasNextPage: true,
							loading: false,
							error: false
						}
					},
				],
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
						titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg',
						title: '#早睡早起#',
						desc: '早睡早起身体好，记得每天过来打卡哦',
						totalNum: '152.6w',
						todayNum: 9601
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
				success: (res) => {
					this.swiperHeight = res.windowHeight-uni.upx2px(100)
				}
			})
		}
	}
</script>

<style scoped>
.ht-classify-list{
	padding: 0 10upx;
}
</style>
