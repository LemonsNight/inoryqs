<template>
	<view>
		<swiper-tabbar
			:tabBars="tabBars"
			:tabIndex="tabIndex"
			@switchTab="switchTab"
			swiperStyle="border-bottom: 0;"
			tabItemStyle="width:33.33%;">
		</swiper-tabbar>
		<swiper class="swiper-box" :style="{'height':swiperHeight + 'px'}" :current="tabIndex" @change="swiperChange">
			<swiper-item v-for="(item,index) in list" :key="index">
				<scroll-view scroll-y="true" class="list" :style="{'height':swiperHeight + 'px'}" @scrolltolower="loadMore(index)">
					<template v-if="item.list.length > 0">
						<block v-for="(item1,index1) in item.list" :key="index1">
							<user-item :item="item1" :uType="index"></user-item>
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
	import swiperTabbar from "../../components/common/swiper-tabbar.vue"
	import userItem from "../../components/common/user-list/user-item.vue"
	export default {
		components:{swiperTabbar,userItem},
		data() {
			return {
				swiperHeight: 0,
				tabIndex: 0,
				tabBars: [{
						name: '互关',
						id: 'huguan',
						total: 12
					},
					{
						name: '关注',
						id: 'guanzhu',
						total:43
					},
					{
						name: "粉丝",
						id: "fenshi",
						total: 482
					}
				],
				list: [{
						list: [],
						page: {
							hasNextPage: false,
							loading: false,
							error: false
						}
					},
					{
							list: [{
									userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
									userName: "零零三",
									sex: 1,
									age: 21
								},
								{
										userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
										userName: "零零四",
										sex: 0,
										age: 21
									},
									{
											userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
											userName: "零零五",
											sex: 2,
											age: 21
										},
										{
												userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
												userName: "零零六",
												sex: 2,
												age: 21
											},
											{
													userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
													userName: "零零三",
													sex: 1,
													age: 21
												},
												{
														userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
														userName: "零零三",
														sex: 0,
														age: 21
													},
													{
															userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
															userName: "零零三",
															sex: 2,
															age: 21
														},
														{
																userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
																userName: "零零三",
																sex: 1,
																age: 21
															},
															{
																	userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
																	userName: "零零三",
																	sex: 1,
																	age: 21
																},
																{
																		userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
																		userName: "零零三",
																		sex: 1,
																		age: 21
																	},
																	{
																			userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
																			userName: "零零三",
																			sex: 1,
																			age: 21
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
										userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
										userName: "零零三",
										sex: 1,
										age: 21
									}
								],
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
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
						userName: "零零三",
						sex: 1,
						age: 21
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
					
				}
			})
		},
		onNavigationBarButtonTap(e) {
			if(e.index === 0) {
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>

</style>
