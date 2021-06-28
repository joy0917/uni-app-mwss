<!-- 站内信 -->
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
			<template v-for="(item, index) in tableData">
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
    <uni-pagination :total="total" :pageSize="editForm.per_page" :current="editForm.current_page" @change="pageChange($event.current)"></uni-pagination>
	</view>
</template>

<script>
import { noticeList } from '@/static/api/api'
export default {
  data() {
    return {
      total: 0,
      editForm: {
        id: null,
        per_page: 10,
        current_page: 1
      },
      tableData: []
    }
  },
  computed: {
    user_info () {
      return this.$store.state.user.user_info
    }
  },
  methods: {
    pageChange (page) {
      this.editForm.current_page = page
      this.noticeList()
    },
    noticeList () {
      noticeList({
        ...this.editForm,
        id: this.user_info.id
      }).then(res => {
        this.tableData = res.response.data
        this.total = res.response.total
      })
    },
    noticeRead (id) {
      uni.navigateTo({ url: `/pages/user/message-detail?id=${id}` })
    }
  },
  onShow () {
    this.pageChange(1)
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
