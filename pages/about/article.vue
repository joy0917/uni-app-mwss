<!-- 平台公告 -->
<template>
  <view>
    <uni-list>
      <template v-for="(item, index) in articleData">
        <uni-list-item :key="index" :title="item.title" link :to="item.url"></uni-list-item>
      </template>
    </uni-list>
  </view>
</template>

<script>
import { articleList } from '@/static/api/api'
export default {
  data () {
    return {
      articleData: [],
    }
  },
  methods: {
		articleList () { // 公告列表
			articleList({
        title: '',
        type: '平台公告',
        per_page: 100,
        current_page: 1
      }).then(res => {
        let data = res.response.data
        this.articleData = data.map(res => {
          return {
            title: `【${res.type}】 ${res.title}`,
            url: `/pages/about/article-detail?id=${res.id}`
          }
        })
			})
		}
  },
  mounted() {
    this.articleList()
  }
}
</script>