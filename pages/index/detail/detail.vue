<template>
	<view>
		<detail-info :info="info"></detail-info>
		<view class="uni-comment">
			<view class="u-comment-title">
				最新评论{{comment.count}}
			</view>
			<block v-for="(item) in  comment.list" :key="item.id">
				<comment-item :item="item"></comment-item>
			</block>
		</view>
		<view class="input-send-dt"></view>
		<input-send v-model="msg" @sendMsg="sendMsg"></input-send>
		<!-- 分享 -->
		<share-view :shareData="shareData" :isShow="isShowShare" @closeShare="closeShare"></share-view>
	</view>
</template>

<script>
	import detailInfo from "../../../components/common/index/detail/detail-info.vue"
	import commentItem from "../../../components/common/index/detail/common-item.vue"
	import inputSend from "../../../components/common/user-chat/input-send.vue"
	export default {
		components: {
			detailInfo,
			commentItem,
			inputSend
		},
		data() {
			return {
				info: {
					userpic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
					username: "麦克",
					sex: 0,
					age: 25,
					isguangzou: false,
					title: "心软是一把刀,送给了别人伤害了自己",
					titlepic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png",
					video: false,
					morePic: ["https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png"
					],
					share: false,
					path: "江西 赣州",
					sharenum: 12,
					commentnum: 30,
					goodnum: 300
				},
				comment: {
					count: 2,
					list: []
				},
				msg: "",
				shareData: {
					title: "测试app分享功能",
					href: "https://web03.cn/",
					imageUrl: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png",
					summary: "这个文章有点料"
				},
				isShowShare: false
			}
		},
		methods: {
			getComments() {
				let list = [
					// 一级评论
					{
						id: 12,
						fid: 0, // 父级id
						userpic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png",
						username: "零零三",
						time: 1581821595627,
						data: "我爱学习，学习使我快乐"
					},
					{
						id: 13,
						fid: 12, // 父级id
						userpic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png",
						username: "零零三",
						time: 1581821595627,
						data: "你在想屁吃"
					},
					{
						id: 14,
						fid: 12, // 父级id
						userpic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png",
						username: "零零三",
						time: 1581821595627,
						data: "你在想屁吃"
					},
					{
						id: 15,
						fid: 0, // 父级id
						userpic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/de78b85705ec4de79c1305b98f5e4d52.png",
						username: "零零三",
						time: 1581821595627,
						data: "你在想屁吃"
					}
				]
				for (let i = 0; i < list.length; i++) {
					list[i].timeStr = this.utils.timeChange(list[i].time)
				}
				this.$set(this.comment, "list", list)
			},
			closeShare(){
				this.isShowShare = false
			},
			/**
			 * code 0fail 1success
			 * @param {Object} code
			 */
			shareCallback(code){
				console.log(code)
			},
			sendMsg() {

			}
		},
		onLoad() {
			this.getComments()
		},
		// 监听点击右边菜单
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				// 点击分享
				this.isShowShare = !this.isShowShare
			}
		}
	}
</script>

<style scoped lang="scss">
	.uni-comment {
		padding-left: 10upx;
	}

	.u-comment-title {
		padding: 10upx 0;
		size: $uni-font-size-big;
		font-weight: bold;
	}
	.input-send-dt{
		width: 100%;
		height: 110rpx;
	}
</style>
