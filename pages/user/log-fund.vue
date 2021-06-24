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
			<template v-for="(item, index) in tableListData">
				<uni-tr :key="index">
					<uni-td align="center" class="f12">{{ item.desc }}</uni-td>
					<uni-td align="center" class="f12"><text class="green">{{ item.amount }}</text></uni-td>
					<uni-td align="center" class="f12">{{ item.created_at }}</uni-td>
				</uni-tr>
			</template>
		</uni-table>
	</view>
</template>

<script>
import { capitalFolw } from '@/static/api/api'
export default {
  data () {
    return {
      tableListData: []
    }
  },
  methods: {
    capitalFolw () {
      capitalFolw({
        per_page: 100,
        current_page: 1
      }).then(res => {
        this.tableListData = res.response.data
      })
    }
  },
  mounted () {
    this.capitalFolw()
  }
}
</script>
