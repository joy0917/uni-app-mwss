
<!-- 二级页面 -->
<template>
  <view class="subpages">
    <image v-if="qrImg" :src="qrImg" class="qrImg"/>
    <view v-else v-html="detail.content"></view>
  </view>
</template>

<script>
import { aboutDetail, channelDetail } from '@/static/api/api'
export default {
	data () {
		return {
			text: {
				0: '如何注册',
				1: '如何投资',
				2: '银行入款充值步骤',
				3: '支付宝扫码充值步骤',
				4: '微信扫码充值步骤',
				5: '支付宝转账到银行卡充值步骤',
				6: '微信转账到银行卡充值步骤',
				7: '支付宝转账支付宝账号步骤',
				8: '常见问题',
				9: '公司公告',
				10: '公司简介',
				11: '企业文化',
				12: '企业宗旨',
				13: '安全保障',
				14: '银行存管',
				15: '资金托管',
				16: '保险协议',
				17: '企业资质',
				18: '会员等级',
				19: 'APP下载',
				20: '福利活动',
				21: '推广活动',
				22: '联系我们',
				23: '隐私政策',
				24: '用户协议',
				25: '防疫工作'
			},
			detail: {},
      qrImg: ''
		}
	},
  computed: {
    channel_code () {
      return this.$store.state.user.user_channel_code
    }
  },
	onLoad(options) {
    if (this.channel_code && options.text === '19') {
      this.channelDetail()
    } else {
      this.aboutDetail(this.text[options.text])
    }
	},
	methods: {
    channelDetail () {
      channelDetail({
        channel_code: this.channel_code
      }).then(res => {
        this.qrImg = this.$hostsUrl + res.response.download_qrcode
        uni.setNavigationBarTitle({ title: 'APP下载' })
      })
    },
		aboutDetail(text) {
			aboutDetail({ type: text }).then(res => {
				this.detail = res.response
				this.detail.content = this.detail.content.replace(/<img/gi, '<img style="max-width: 100%" height="auto"')
				uni.setNavigationBarTitle({ title: this.detail.title })
			})
		}
	}
}
</script>

<style lang="less" scoped>
img {
	display: block !important;
	max-width: 100% !important;
}
.subpages {
	padding: 10rpx;
}
.qrImg{
  display: block;
  width: 100%;
}
</style>
