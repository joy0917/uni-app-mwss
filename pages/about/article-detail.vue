<!-- 公告详情 -->
<template>
  <view class="subpages">
    <view v-html="content"></view>
  </view>
</template>

<script>
import { articleDetail } from '@/static/api/api'
export default {
  data () {
    return {
      content: '',
    }
  },
  methods: {
		articleDetail (id) { // 公告列表
			articleDetail(id).then(res => {
        this.content = res.response.content.replace(/<img/gi, '<img style="max-width: 100%" height="auto"')
			})
		}
  },
  onLoad (option) {
    this.articleDetail(option.id)
  }
}
</script>

<style lang="less" scoped>
.subpages {
	padding: 10rpx;
}
</style>
