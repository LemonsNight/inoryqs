<template>
	<view class="no-login">
		<view class="login-type">
			<block v-for="(item,index) in providerList" :key="index">
				<view class="login-type-item" @tap="toLogin(item)">
					<text class="iconfont" :class="item.icon"></text>
				</view>
			</block>
		</view>
		
	</view>
</template>

<script>
	import {mapActions, mapState} from "vuex"
	export default {
		data() {
			return {
			};
		},
		computed:{
			...mapState(["providerList"])
		},
		methods:{
			...mapActions(["getProvider", "toLogin"])
		},
		created() {
			this.getProvider()
		}
	}
</script>

<style scoped lang="scss">
.no-login{
		width: 100%;
		.no-login-tip{
			width: 100%;
			text-align: center;
			padding: 20upx 0;
		}
		.login-type{
			display: flex;
			justify-content: center;
			.login-type-item{
				padding: 20upx 30upx;
				.iconfont{
					font-size: 110upx;
					line-height: 110upx;
				}
			}
		}
	}
</style>
