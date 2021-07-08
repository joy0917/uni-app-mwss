<!-- 资金明细 -->
<template>
	<view>
		<uni-table border emptyText="暂无更多数据" >
      <!-- 表头行 -->
      <uni-tr>
        <uni-th align="center" class="f12">摘要</uni-th>
        <uni-th align="center" class="f12">金额</uni-th>
        <uni-th align="center" class="f12">时间</uni-th>
      </uni-tr>
		    <!-- 表格数据行 -->
			<template v-for="(item, index) in tableData">
				<uni-tr :key="index">
					<uni-td align="center" class="f12">{{ item.desc }}</uni-td>
					<uni-td align="center" class="f12">
            <text :class="{ 'green': item.symbol_tag === 'INCREASE', 'red': item.symbol_tag === 'DECREASE' }">
              <text v-if="item.symbol_tag === 'INCREASE'">+</text>
              <text v-if="item.symbol_tag === 'DECREASE'">-</text>
              {{ item.amount }}
            </text>
          </uni-td>
					<uni-td align="center" class="f12">{{ item.created_at }}</uni-td>
				</uni-tr>
			</template>
		</uni-table>
    <uni-pagination :total="total" :pageSize="editForm.per_page" :current="editForm.current_page" @change="pageChange($event.current)"></uni-pagination>
	</view>
</template>

<script>
import { capitalFolw } from '@/static/api/api'
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
      this.capitalFolw()
    },
    capitalFolw () {
      capitalFolw(this.editForm).then(res => {
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
