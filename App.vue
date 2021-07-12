<script>
	export default {
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
	@import '@/static/css/base.css';
	.container{
		padding: 0 30rpx;
		background: #F0F0F0;
		font-size: 26rpx;
		color: #333;
	}
</style>
