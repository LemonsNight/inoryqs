<template>
	<view>
		<scroll-view
		 scroll-y
			:scroll-top="scrollTop"
			 :scroll-with-animation="true"
				:style="{height: style.contentHeght + 'px'}"
				>
			<view class="char-list">
			<block v-for="(item) in msgList" :key="item.id">
				<msg-item :item="item"></msg-item>
			</block>
		</view>
		</scroll-view>
		<input-send v-model="msg" @sendMsg="sendMsg"></input-send>
	</view>
</template>

<script>
	import inputSend from "../../components/common/user-chat/input-send.vue"
	import msgItem from "../../components/common/user-chat/msg-item.vue"
	export default {
		components:{
			inputSend,
			msgItem
		},
		data() {
			return {
				scrollTop: 0,
				msgList: [],
				msg: "",
				style: {
					contentHeght: 0,
					itemH: 0
				},
				
			}
		},
		methods: {
			// 获取信息列表
			getMsg(){
				let list = [
					{
						id: 1,
						from: 0, // 0自己 1别人
						msgType: 0, // 0纯文本 1图片 2视频 3语音
						content: "你好，很高兴认识你",
						time: 1581712309200
					},
					{
						id: 2,
						from: 1, // 0自己 1别人
						msgType: 0, // 0纯文本 1图片 2视频 3语音
						content: "你好，请问你是？？？",
						time: 1581718309200
					},
					
					{
						id: 3,
						from: 0, // 0自己 1别人
						msgType: 1, // 0纯文本 1图片 2视频 3语音
						content: "https://static-1257620396.cos.ap-guangzhou.myqcloud.com/%E5%9E%83%E5%9C%BE%E7%AE%B1/4M.jpg",
						time: 1581719309200
					},
					
					{
						id: 4,
						from: 0, // 0自己 1别人
						msgType: 0, // 0纯文本 1图片 2视频 3语音
						content: "看到这张图片就知道我是谁了吧！",
						time: 1581720309200
					},
					{
						id: 5,
						from: 1, // 0自己 1别人
						msgType: 0, // 0纯文本 1图片 2视频 3语音
						content: "原来你是一头猪🐖",
						time: 1581721309200
					},
					{
						id: 6,
						from: 1, // 0自己 1别人
						msgType: 1, // 0纯文本 1图片 2视频 3语音
						content: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/39edf36bb5f947b88452192ed923e733.gif",
						time: 1581721809200
					}
				]
				for(let i = 0; i< list.length; i++) {
					// 第一个或间隔5分钟，显示时间
					if(i ===0 || (list[i + 1] && list[i+1].time - list[i].time > 300000)){
						list[i].timeStr = this.utils.timeChange(list[i].time)
					}
				} 
				this.msgList = list
			},
			sendMsg(){
				console.log(this.msg)
				if(this.msg === ""){
					return
				}
				this.msgList.push({
						id: this.msgList.length + 1,
						from: 0, // 0自己 1别人
						msgType: 0, // 0纯文本 1图片 2视频 3语音
						content: this.msg,
						time: new Date().getTime()
					})
					this.msg = ""
					this.pegeToBottom()
			},
			// 滚动到最底下
			pegeToBottom(){
				let info = uni.createSelectorQuery().select(".char-list");
　　　  　		info.boundingClientRect((data)=> {
						if(data.height > this.style.contentHeght){
							setTimeout(()=>{
								
							this.scrollTop = data.height
							},500)
						}
						console.log(this.scrollTop , data.height)
　　    		}).exec()
		/* 		let q =  uni.createSelectorQuery();
				q.select(".char-list").boundingClientRect();
				q.selectAll(".char-item-box").boundingClientRect()
				q.exec((res)=>{
					console.log(res)
					res[1].forEach((ret)=>{
						this.style.itemH += ret.height
					})
					if(this.style.itemH > this.style.contentHeght){
						this.scrollTop = this.style.itemH
					}
					
				}) */
			}
			
		},
		onNavigationBarButtonTap(e) {
			if(e.index === 0) {
				this.$store.dispatch("navigateTo", "/pages/user-space/user-space")
			}
		},
		onLoad() {
			let that = this
			uni.getSystemInfo({
				success:(res)=> {
					this.style.contentHeght = res.windowHeight - uni.upx2px(90)
				}
			})
			this.getMsg()
		},
		onReady() {
			this.pegeToBottom()
		}
	}
</script>

<style scoped lang="scss">
	.char-list-btn{
		height: 130upx;
	}

</style>
