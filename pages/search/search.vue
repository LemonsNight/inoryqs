<template>
	<view>
		
		
		<template v-if="list.length > 0">
			<block v-for="(item,index) in list" :key="index">
				<index-item :item="item"></index-item>
			</block>
			<load-type :page="page"></load-type>
		</template>
		<template v-else>
			<no-data></no-data>
		</template>
		
	</view>
</template>

<script>
	import indexItem from "../../components/common/index/index-item.vue"
	export default {
		components:{indexItem},
		data() {
			return {
				searchText: '',
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
					},
					{
						title: '爱Code',
						thumbnail: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
						extra: '技术没有上限',
						mainimage: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png',
						contenttext: '心软是一把刀,送给了别人伤害了自己'
					},{
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
			}
		},
		methods: {
			loadMore() {
				if (this.page.loading || !this.page.hasNextPage) {
					return
				}
				this.$set(this.page, 'loading', true)
			
				setTimeout(() => {
					let data = [{
						title: '爱Code ' + this.list.length,
						thumbnail: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg',
						extra: '技术没有上限',
						mainimage: 'https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png',
						contenttext: '心软是一把刀,送给了别人伤害了自己'
					}]
					this.list = this.list.concat(data)
					this.$set(this.page, 'loading', false)
					this.$set(this.page, 'hasNextPage', this.list.length < 15)
				}, 800)
			}
		},
		// 监听输入框改变事件
		onNavigationBarSearchInputChanged(e){
			console.log(e.text)
			this.searchText = e.text
		},
		// 监听点击搜索事件
		onNavigationBarSearchInputConfirmed(){
			console.log(123)
		},
		// 监听按钮点击事件
		onNavigationBarButtonTap(e){
			if(e.float === 'right'){
				uni.navigateBack()
			}
		},
		// 监听上拉加载
		onReachBottom(){
			this.loadMore()
		},
		// 监听下拉加载
		onPullDownRefresh() {
			uni.stopPullDownRefresh();
		}
	}
</script>

<style>

</style>
