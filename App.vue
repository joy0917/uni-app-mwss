<script>
import { mapMutations } from 'vuex'
import { channelCode } from '@/static/api/config'
export default {
  methods: {
    ...mapMutations([
      'setUserChannelCode'
    ])
  },
  onLaunch () {
    console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上 ！')
    console.log('App Launch')
  },
  onShow (e) {  
    // #ifdef APP-PLUS
    if (channelCode) {
      this.setUserChannelCode(channelCode)
    }
    // #endif
    // #ifdef H5
    if (e.query.channelCode) {
      this.setUserChannelCode(e.query.channelCode)
    }
    // #endif
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
