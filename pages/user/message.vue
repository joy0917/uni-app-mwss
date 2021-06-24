<template>
	<view>
		<uni-table border emptyText="暂无更多数据">
      <!-- 表头行 -->
      <uni-tr>
        <uni-th width="220" align="center">标题</uni-th>
        <uni-th width="40" align="center">类别</uni-th>
        <uni-th width="40" align="center">状态</uni-th>
      </uni-tr>
		    <!-- 表格数据行 -->
			<template v-for="(item, index) in tableListData">
				<uni-tr :key="index">
					<uni-td align="center">
            <view @click="noticeRead(item.id)">{{ item.title }}</view>
          </uni-td>
					<uni-td align="center">
            <view @click="noticeRead(item.id)">{{ item.type }}</view>
          </uni-td>
					<uni-td align="center">
            <view :class="item.is_read === 1 ? 'read' : 'unread'" @click="noticeRead(item.id)">{{ item.is_read === 1 ? '已读' : '未读' }}</view>
          </uni-td>
				</uni-tr>
			</template>
		</uni-table>
	</view>
</template>

<script>
import { noticeList } from '@/static/api/api'
export default {
  data() {
    return {
      tableListData: []
    }
  },
  computed: {
    user_info () {
      return this.$store.state.user.user_info
    }
  },
  methods: {
    noticeList () {
      noticeList({
        id: this.user_info.id,
        per_page: 100,
        current_page: 1
      }).then(res => {
        this.tableListData = res.response.data
      })
    },
    noticeRead (id) {
      uni.navigateTo({ url: `/pages/user/message-detail?id=${id}` })
    }
  },
  onShow () {
    this.noticeList()
  }
}
</script>

<style lang="less" scoped>
	.read {
		font-weight: bold;
	}
	.unread {
		color: #19BE6B;
	}
</style>
