<!-- 收益记录 -->
<template>
	<view>
		<uni-table border emptyText="暂无更多数据" >
      <!-- 表头行 -->
      <uni-tr>
        <uni-th width="100" align="center" class="f12">项目名称</uni-th>
        <uni-th width="80" align="center" class="f12">支付日</uni-th>
        <uni-th width="80" align="center" class="f12">支付金额</uni-th>
        <uni-th width="50" align="center" class="f12">状态</uni-th>
      </uni-tr>
		    <!-- 表格数据行 -->
			<template v-for="(item, index) in tableData">
				<uni-tr :key="index">
					<uni-td align="center" class="f12">{{ item.order.invest_project.title }}</uni-td>
					<uni-td align="center" class="f12">{{ item.created_at }}</uni-td>
					<uni-td align="center" class="f12">{{ item.amount }}</uni-td>
					<uni-td align="center" class="f12">已支付</uni-td>
				</uni-tr>
			</template>
		</uni-table>
    <uni-pagination :total="total" :pageSize="editForm.per_page" :current="editForm.current_page" @change="pageChange($event.current)"></uni-pagination>
	</view>
</template>

<script>
import { profitList } from '@/static/api/api'
export default {
  data() {
    return {
      total: 0,
      editForm: {
        per_page: 10,
        current_page: 1
      },
      tableData: []
    }
  },
  methods: {
    pageChange (page) {
      this.editForm.current_page = page
      this.profitList()
    },
    profitList () {
      profitList(this.editForm).then(res => {
        this.tableData = res.response.data
        this.total = res.response.total
      })
    }
  },
  mounted () {
    this.pageChange(1)
  }
}
</script>
