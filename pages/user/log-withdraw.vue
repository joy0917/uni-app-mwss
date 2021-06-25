<template>
	<view>
		<uni-table border emptyText="暂无更多数据" >
      <!-- 表头行 -->
      <uni-tr>
        <uni-th width="100" align="center" class="f12">提现金额</uni-th>
        <uni-th width="100" align="center" class="f12">提现时间</uni-th>
        <uni-th width="60" align="center" class="f12">状态</uni-th>
      </uni-tr>
		    <!-- 表格数据行 -->
			<template v-for="(item, index) in tableListData">
				<uni-tr :key="index">
					<uni-td align="center" class="f12">{{ item.cash_amount }}</uni-td>
					<uni-td align="center" class="f12">{{ item.created_at }}</uni-td>
					<uni-td align="center" class="f12">{{ item.status }}</uni-td>
				</uni-tr>
			</template>
		</uni-table>
	</view>
</template>

<script>
import { cashOutList } from '@/static/api/api'
export default {
  data() {
    return {
      tableListData: []
    }
  },
  methods: {
    cashOutList () {
      cashOutList({
        per_page: 100,
        current_page: 1
      }).then(res => {
        this.tableListData = res.response.data
      })
    }
  },
  mounted () {
    this.cashOutList()
  }
}
</script>
