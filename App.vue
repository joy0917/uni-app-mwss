<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*公共css */
	@import '/static/libs/base.css';
	.container{
		padding: 0 40rpx;
		background: #fff;
		font-size: 24rpx;
		color: #333;
	}
</style>
