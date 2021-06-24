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
			<template v-for="(item, index) in tableListData">
				<uni-tr :key="index">
					<uni-td align="center" class="f12">{{ item.order.invest_project.title }}</uni-td>
					<uni-td align="center" class="f12">{{ item.created_at }}</uni-td>
					<uni-td align="center" class="f12">{{ item.amount }}</uni-td>
					<uni-td align="center" class="f12">已支付</uni-td>
				</uni-tr>
			</template>
		</uni-table>
	</view>
</template>

<script>
import { profitList } from '@/static/api/api'
export default {
  data() {
    return {
      tableListData: []
    }
  },
  methods: {
    profitList () {
      profitList({
        per_page: 100,
        current_page: 1
      }).then(res => {
        this.tableListData = res.response.data
      })
    }
  },
  mounted () {
    this.profitList()
  }
}
</script>
