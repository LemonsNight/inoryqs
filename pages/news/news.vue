<template>
	<view>
		<!-- 导航栏 -->
		<nav-bar :tabBars="tabBars" :tabIndex="tabIndex" @tabBarChange="tabBarChange"></nav-bar>
		<swiper class="swiper-box" :style="{'height':swiperHeight + 'px'}" :current="tabIndex" @change="swiperChange">
			<swiper-item>
				<scroll-view scroll-y="true" class="list" :style="{'height':swiperHeight + 'px'}" @scrolltolower="loadMore">
					<template v-if="guanzhu.list.length > 0">
						<!-- 列表 -->
						<block v-for="(item,index) in guanzhu.list" :key="index">
							<common-car :item="item" :index="index"></common-car>
						</block>
						<load-type :page="guanzhu.page"></load-type>
					</template>
					<template v-else>
						<no-data :height="swiperHeight"></no-data>
					</template>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" class="list" :style="{'height':swiperHeight + 'px'}" @scrolltolower="loadMoreNewset">
					<!-- 搜索框 -->
					<view class="search-input">
						<input class="uni-input" placeholder-class="iconfont iconsearch search-input-placeholder" placeholder="输入关键字" />
					</view>
					<!-- 轮播图 -->
					<view class="news-swiper">
						<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
							<block v-for="(item,index) in topic.swiper" :key="index">
								<swiper-item>
									<view class="swiper-item">
										<image :src="item.url" mode="scaleToFill" lazy-load class="swiper-item-image"></image>
									</view>
								</swiper-item>
							</block>
						</swiper>
					</view>
					<!-- 热门分类 -->
					<hot-nav :nav="topic.nav"></hot-nav>
					<!-- 最近更新 -->
					<view class="newest">
						<view class="newest-title">最近更新</view>
						<template v-if="topic.list.length > 0">
							<block v-for="(item,index) in topic.list" :key="index">
								<newsets :item="item"></newsets>
							</block>
							<load-type :page="topic.page"></load-type>
						</template>
						<template v-else>
							<no-data :height="swiperHeight"></no-data>
						</template>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import commonCar from "../../components/common/common-card.vue"
	import navBar from "../../components/common/news/nav-bar.vue"
	import hotNav from "../../components/common/news/hot-nav.vue"
	import newsets from "../../components/common/news/newest.vue"
	export default {
		components: {
			navBar,
			commonCar,
			hotNav,
			newsets
		},
		data() {
			return {
				swiperHeight: 0,
				tabIndex: 0,
				tabBars: [{
					name: '关注',
					id: 'guanzhu'
				}, {
					name: '话题',
					id: 'huati'
				}],
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
				topic: {
					swiper: [{
							url: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/b14f11e3c5da4be59ae7ac7a9dc1d712.jpg'
						},
						{
							url: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/976ae7febf8a4b3fafe6320afdf62000.jpg'
						},
						{
							url: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/0e680ccf960d43f3a88aa4fa8868b133.jpg'
						}
					],
					nav: [{
							name: '最新'
						},
						{
							name: '游戏'
						},
						{
							name: '情感'
						},
						{
							name: '打卡'
						},
						{
							name: '故事'
						},
						{
							name: '喜爱'
						},
					],
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
				}
			}
		},
		methods: {
			tabBarChange(index) {
				this.tabIndex = index
			},

			switchTab(index) {
				this.tabIndex = index
			},
			swiperChange(e) {
				this.tabIndex = e.detail.current
			},
			// 加载更多 -关注
			loadMore() {
				if (this.guanzhu.page.loading || !this.guanzhu.page.hasNextPage) {
					return
				}
				this.$set(this.guanzhu.page, 'loading', true)

				setTimeout(() => {
					let data = [{
						userpic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
						username: "迷你",
						sex: 1,
						age: 25,
						isguangzou: false,
						title: '爱Code-' + this.guanzhu.list.length + "爱分享",
						titlepic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png",
						video: false,
						share: false,
						path: "江西 九江",
						sharenum: 12,
						commentnum: 30,
						goodnum: 300
					}]
					let list = this.guanzhu.list.concat(data)
					this.$set(this.guanzhu, 'list', list)
					this.$set(this.guanzhu.page, 'loading', false)
					this.$set(this.guanzhu.page, 'hasNextPage', list.length < 15)
				}, 800)
			},
			// 加载更多 最近更新
			loadMoreNewset(){
					if (this.topic.page.loading || !this.topic.page.hasNextPage) {
						return
					}
					this.$set(this.topic.page, 'loading', true)
					setTimeout(() => {
						let data = [{
							titlepic: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
							title: '#我的笔记#',
							desc: '从html入门到上手事记项目',
							totalNum: 321,
							todayNum: 12
						}]
						let list = this.topic.list.concat(data)
						this.$set(this.topic, 'list', list)
						this.$set(this.topic.page, 'loading', false)
						this.$set(this.topic.page, 'hasNextPage', list.length < 15)
					}, 800)
			}

		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.swiperHeight = res.windowHeight - uni.upx2px(100)
					// #ifdef APP-PLUS
					this.swiperHeight = this.swiperHeight - 55
					// #endif
				}
			})
		}
	}
</script>

<style scoped lang="scss">
	.search-input {
		padding: 10upx 20upx;

		input {
			background-color: $uni-bg-color-grey;
			border-radius: 10upx;
		}
	}

	.search-input-placeholder {
		text-align: center;
		font-size: 28upx;
	}

	.news-swiper {
		padding: 10upx 20upx;
	}

	.swiper-item,
	.swiper-item-image {
		width: 100%;
		height: 100%;
		border-radius: 10upx;
	}

	.newest {
		padding: 20upx 10upx;
		border-top: 1upx solid $uni-border-color;
	}
</style>
