<!-- 充值记录 -->
<template>
	<view>
		<uni-table border emptyText="暂无更多数据" >
      <!-- 表头行 -->
      <uni-tr>
        <uni-th width="70" align="center" class="f12">充值金额</uni-th>
        <uni-th width="60" align="center" class="f12">充值方式</uni-th>
        <uni-th width="100" align="center" class="f12">充值时间</uni-th>
        <uni-th width="50" align="center" class="f12">状态</uni-th>
      </uni-tr>
		    <!-- 表格数据行 -->
			<template v-for="(item, index) in tableData">
				<uni-tr :key="index">
					<uni-td align="center" class="f12">{{ item.amount }}</uni-td>
					<uni-td align="center" class="f12">{{ item.extra_attr }}</uni-td>
					<uni-td align="center" class="f12">{{ item.created_at }}</uni-td>
					<uni-td align="center" class="f12">完成</uni-td>
				</uni-tr>
			</template>
		</uni-table>
    <uni-pagination :total="total" :pageSize="editForm.per_page" :current="editForm.current_page" @change="pageChange($event.current)"></uni-pagination>
	</view>
</template>

<script>
import { despositList } from '@/static/api/api'
export default {
  data () {
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
      this.despositList()
    },
    despositList () {
      despositList(this.editForm).then(res => {
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
