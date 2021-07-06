<!-- 投资记录详情 -->
<template>
  <view class="detail">
		<uni-list :border="false">
			<uni-list-item title="项目名称" :rightText="result.invest_project.title"></uni-list-item>
			<uni-list-item title="投资金额" :rightText="`${result.invest_amount}元`"></uni-list-item>
			<uni-list-item title="每日分红" :rightText="`${result.invest_project.day_bonus}元`"></uni-list-item>
			<uni-list-item title="日化收益" :rightText="`${result.invest_project.day_bonus_percent}%`"></uni-list-item>
			<uni-list-item title="投资周期" :rightText="`${result.invest_project.period}天`"></uni-list-item>
			<uni-list-item title="状态">
        <template slot="footer">
          <span class="f13" :class="{ 'green': result.status === 'FINISHED', 'orange': result.status === 'INVESTING' }">{{ statusList[result.status] }}</span>
        </template>
      </uni-list-item>
		</uni-list>
  </view>
</template>

<script>
import { investOrderDetail } from '@/static/api/api'
export default {
  data () {
    return {
      statusList: {
        'INVESTING': '投资中',
        'FINISHED': '投资完成',
      },
      result: {
        invest_amount: '',
        status: '',
        invest_project: {
          title: '',
          day_bonus: '',
          day_bonus_percent: '',
          period: ''
        }
      }
    }
  },
  methods: {
    investOrderDetail (id) {
      investOrderDetail(id).then(res => {
        this.result = res.response
      })
    }
  },
  onLoad (option) {
    this.investOrderDetail(option.id)
  }
}
</script>

<style lang="less" scoped>
.detail{
  padding: 10rpx 0;
}
</style>

