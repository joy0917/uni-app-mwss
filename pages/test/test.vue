<template>
    	<view class="aboutDetail">
			<view class="content" v-html="detail.content"></view>
    	</view>
    </template>

    <script>
    	import {
    		aboutDetail
    	} from 'static/api/api'
    	export default {
    		data() {
    			return {
    				// text: {
    				// 	0: '如何注册',
    				// 	1: '如何投资',
    				// 	2: '银行入款充值步骤',
    				// 	zfbsmczbz: '支付宝扫码充值步骤',
    				// 	wxsmczbz: '微信扫码充值步骤',
    				// 	zfbzzdyhkczbz: '支付宝转账到银行卡充值步骤',
    				// 	wxzzdyhkczbz: '微信转账到银行卡充值步骤',
    				// 	zfbzzzfb'支付宝转账支付宝账号步骤',
    				// 	'常见问题',
    				// 	'公司公告',
    				// 	'公司简介',
    				// 	'企业文化',
    				// 	'企业宗旨',
    				// 	'安全保障',
    				// 	'银行存管',
    				// 	'资金托管',
    				// 	'保险协议',
    				// 	'企业资质',
    				// 	'会员等级',
    				// 	'APP下载',
    				// 	'福利活动',
    				// 	'推广活动',
    				// 	'联系我们'
    				// }
					detail: {}
    			}
    		},
    		onLoad(options) {
    			console.log(options)
    		},
    		methods: {
    			aboutDetail(text) {
    				aboutDetail({ type: text }).then(res => {
    					console.log(res)
						this.detail = res.response
						uni.setNavigationBarTitle({
						    title: this.detail.title
						});
    				})
    			}
    		},
			mounted () {
				this.aboutDetail('联系我们')
			}
    	}
    </script>

    <style lang="less" scoped>
    	img {
    		display: block;
    		width: 100%;
    	}
		.content {
			padding: 10rpx;
		}
    </style>
