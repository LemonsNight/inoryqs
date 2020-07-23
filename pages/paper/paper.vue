<template>
	<view class="paper-page">
		<block v-for="(item,index) in list" :key="index">
			<paper-item :item="item"></paper-item>
		</block>
		<load-type :page="page"></load-type>
		<paper-right-menu
		 @onHiddenMenu="onHiddenMenu"
		 @onSearchFriends="onSearchFriends"
		 @clearMsg="clearMsg"
		 :showMenu="showMenu"
		 ></paper-right-menu>
	</view>
</template>

<script>
	
	import paperItem from "../../components/common/paper/paper-item.vue"
	import paperRightMenu from "../../components/common/paper/paper-right-menu.vue"
	export default {
		components:{
			paperItem,
			paperRightMenu
			},
		data() {
			return {
				list: [
					{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},
					{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},
					{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},
					{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},
					{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},
					{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},
					{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},
					{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},
					{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},
					{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},
					{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},
					{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					}
				],
				page: {
					hasNextPage: true,
					loading: false,
					error: false
				},
				showMenu: false
			}
		},
		// 监听下拉刷新
		onPullDownRefresh(){
			console.log("下拉刷新")
			uni.stopPullDownRefresh();
		},
		// 监听上拉加载
		onReachBottom(){
			this.loadMore()
		},
		methods: {
			loadMore() {
				if (this.page.loading || !this.page.hasNextPage) {
					return
				}
				this.$set(this.page, 'loading', true)
			
				setTimeout(() => {
					let data = [{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三呀",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三呀",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三呀",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三呀",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					},{
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/4f6d8cdd1cd74fe18f5f02c470d3be52.jpg",
						userName: "零零三呀",
						data: "你在哪儿，我去你家找你打架",
						time: "12.45",
						noReadNum: 3
					}]
					this.list = this.list.concat(data)
					
					this.$set(this.page, 'loading', false)
					this.$set(this.page, 'hasNextPage', this.list.length < 50)
				}, 800)
			},
			onShowMenu(){
				this.showMenu = true
			},
			onHiddenMenu(){
				this.showMenu = false
			},
			// 点击搜索好友
			onSearchFriends(){
				this.onHiddenMenu()
			},
			// 点击清除信息
			clearMsg(){
				this.onHiddenMenu()
			}
			
		},
		onNavigationBarButtonTap(e) {
			if(e.index === 0) {
				// 左边用户
				this.$store.dispatch("navigateTo", "/pages/user-list/user-list")
			}else if (e.index === 1) {
				// 右边加号
				this.showMenu = !this.showMenu
			}
		}
	}
</script>

<style scoped lang="scss">
.paper-page{
	width: 100%;
	height: 100%;
	padding: 20upx;
	box-sizing: border-box;
}

</style>
