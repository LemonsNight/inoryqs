<template>
	<view>
		<uni-collapse>
		    <uni-collapse-item title="客服什么时候在线" :showAnimation="true" :open="true">
		        <view style="padding: 30rpx;">
		            每个工作日的早上9:00~晚上8:00,特殊情况会再公告声明
		        </view>
		    </uni-collapse-item>
		    <uni-collapse-item title="忘记密码怎么办">
		        <view style="padding: 30rpx;">
		            可以选择找回密码,输入你的账号和绑定的邮箱或者手机号
		        </view>
		    </uni-collapse-item>
		    <uni-collapse-item title="如何清除缓存">
		        <view style="padding: 30rpx;">
		            在我的(右上角)-设置-清除缓存 即可
		        </view>
		    </uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import uniCollapse from "../../../../components/uni-collapse/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "../../../../components/uni-collapse/uni-collapse-item/uni-collapse-item.vue"
	export default {
		components:{
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
