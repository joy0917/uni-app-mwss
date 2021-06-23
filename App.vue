<script>
	export default {  
    globalData: {  
      userInfo: {}
    },
    mounted () {
			uni.getStorage({
				key: 'user_info',
				success: (e) => {
          this.globalData.userInfo = e.data
				}
			})
    },
		onLaunch () {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow () {
			console.log('App Show')
		},
		onHide () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*公共css */
	@import '/static/css/base.css';
	.container{
		padding: 0 40rpx;
		background: #F0F0F0;
		font-size: 24rpx;
		color: #333;
	}
</style>
