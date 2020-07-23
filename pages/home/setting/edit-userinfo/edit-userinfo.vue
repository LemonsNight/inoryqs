<template>
	<view class="edit-info">
		<view class="edit-info-item">
			<view class="edit-info-item-l">头像</view>
			<view class="edit-info-item-r" @tap="changePic">
				<image class="info-pic" :src="userData.userPic"></image>
				<text class="iconfont iconedit"></text>
			</view>
		</view>
		<view class="edit-info-item">
			<view class="edit-info-item-l">昵称</view>
			<view class="edit-info-item-r" @tap="onEditUserName">
				<template v-if="editUserName">
					<input type="text" v-model="userData.userName" placeholder="昵称" class="edit-input" focus="true"/>
				</template>
				<template v-else>
					<text class="edit-info-item-r-txt">{{userData.userName}}</text>
					<text class="iconfont iconedit"></text>
				</template>
			</view>
		</view>
		<view class="edit-info-item">
			<view class="edit-info-item-l">性别</view>
			<view class="edit-info-item-r" @tap="changeSex">
				<text class="edit-info-item-r-txt">{{userData.sex}}</text>
				<text class="iconfont iconedit"></text>
			</view>
		</view>
		<view class="edit-info-item">
			<view class="edit-info-item-l">生日</view>
			<picker mode="date" :value="userData.birthday" @change="birthdayChange" :start="startDate" :end="endDate">
				<view class="edit-info-item-r">
				<text class="edit-info-item-r-txt">{{userData.birthday}}</text>
				<text class="iconfont iconedit"></text>
			</view>
			</picker>
		</view>
		<view class="edit-info-item">
			<view class="edit-info-item-l">情感</view>
			<view class="edit-info-item-r" @tap="changeQG">
				<text class="edit-info-item-r-txt">{{userData.qg}}</text>
				<text class="iconfont iconedit"></text>
			</view>
		</view>
		<view class="edit-info-item">
			<view class="edit-info-item-l">职业</view>
			<view class="edit-info-item-r" @tap="changeJob">
				<text class="edit-info-item-r-txt">{{userData.job}}</text>
				<text class="iconfont iconedit"></text>
			</view>
		</view>
		<view class="edit-info-item">
			<view class="edit-info-item-l">家乡</view>
			<view class="edit-info-item-r" @tap="changeAddress">
				<text class="edit-info-item-r-txt">{{userData.address.label}}</text>
				<text class="iconfont iconedit"></text>
			</view>
			<simple-address ref="simpleAddress" :pickerValueDefault="userData.address.value" @onConfirm="onConfirmAddress" themeColor='#007AFF'></simple-address>
		</view>
		<button type="primary" class="submit-btn">完成</button>
		
		
		
		 
		
	</view>
</template>

<script>
	import simpleAddress from "../../../../components/simple-address/simple-address.nvue"
	export default {
		components:{simpleAddress},
		data() {
			return{
				userData: {
						userPic: "https://yuan-1252477692.cos.ap-guangzhou.myqcloud.com/blog/images/898e2af972874e7ca287d879b35cd1b5.jpeg",
						userName: "零零三",
						sex: "男",
						qg: "单身",
						job: "IT互联网",
						birthday: "1998-01-01",
						address: {"label":"北京市-市辖区-西城区","value":[0,0,1],"cityCode":"1101","areaCode":"110102","provinceCode":"11"}
					},
					editUserName: false,
					visibleDatePink: false
			}
		},
		methods: {
			/**
			 * 修改头像
			 */
			changePic(){
				uni.chooseImage({
					count:1,
					sizeType:["compressed"],
					success:(e)=> {
						this.userData.userPic = e.tempFilePaths[0]
					}
				})
			},
			/**
			 * 点击修改昵称
			 */
			onEditUserName(){
				this.editUserName = true
			},
			/**
			 * 修改性别
			 */
			changeSex(){
				let itemList = ["保密","男","女"]
				uni.showActionSheet({
					itemList,
					success:(e)=> {
						this.sex = itemList[e.tapIndex]
					}
				})
			},
			/**
			 * 情感
			 */
			changeQG(){
				let itemList = ["保密","单身","已婚","离异"]
				uni.showActionSheet({
					itemList,
					success:(e)=> {
						this.qg = itemList[e.tapIndex]
					}
				})
			},
			/**
			 * 职业
			 */
			changeJob(){
				let itemList = ["IT互联网","销售/经营","公务员","自由职业"]
				uni.showActionSheet({
					itemList,
					success:(e)=> {
						this.qg = itemList[e.tapIndex]
					}
				})
			},
			/**
			 * 生日
			 */
			birthdayChange(e){
				this.userData.birthday = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
						year = year - 60;
				} else if (type === 'end') {
						year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			 },
			 /**
				* 地址
				*/
			 changeAddress() {
					 this.$refs.simpleAddress.open();
			 },
			 onConfirmAddress(e) {
					 this.userData.address = e
			 }
		},
		computed: {
		        startDate() {
		            return this.getDate('start');
		        },
		        endDate() {
		            return this.getDate('end');
		        }
		    }
	}
</script>

<style scoped lang="scss">
.edit-info{
	padding: 0 40upx;
	.edit-info-item{
		padding: 20upx 0;
		display: flex;
		border-bottom: 1upx solid $uni-border-color;
		view{
			display: flex;
			align-items: center;
		}
		.edit-info-item-l{
			flex: 1;
			color: $uni-thin-color;
			font-weight: bold;
		}
		.edit-info-item-r{
			.edit-input{
				text-align: right;
			}
			.info-pic{
				width: 100upx;
				height: 100upx;
				border-radius: 50%;
				margin: 0 10upx;
			}
			.iconfont{
				color: $uni-thin-color;
			}
			.edit-info-item-r-txt{
				margin: 0 10upx;
			}
		}
	}
}
</style>
