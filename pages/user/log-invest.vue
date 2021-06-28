<!-- 投资记录 -->
<template>
	<view>
		<uni-table border emptyText="暂无更多数据" >
      <!-- 表头行 -->
      <uni-tr>
        <uni-th width="200" align="center" class="f12">项目名称</uni-th>
        <uni-th width="100" align="center" class="f12">投资金额</uni-th>
        <uni-th width="100" align="center" class="f12">状态</uni-th>
        <uni-th width="100" align="center" class="f12">合同</uni-th>
        <uni-th width="100" align="center" class="f12">详情</uni-th>
      </uni-tr>
		    <!-- 表格数据行 -->
			<template v-for="(item, index) in tableData">
				<uni-tr :key="index">
					<uni-td align="center" class="f12">{{ item.invest_project.title }}</uni-td>
					<uni-td align="center" class="f12">{{ item.invest_amount }}</uni-td>
					<uni-td align="center" class="f12">
            <text :class="{ 'green': item.status === 'FINISHED', 'orange': item.status === 'INVESTING' }">{{ statusList[item.status] }}</text>
          </uni-td>
					<uni-td align="center" class="f12">{{ '-' }}</uni-td>
					<uni-td align="center" class="f12">
						<navigator :url="`/pages/index/invest-detail?id=${item.invest_project_id}`">
							<button size="mini" type="primary">查看</button>
						</navigator>
          </uni-td>
				</uni-tr>
			</template>
		</uni-table>
    <uni-pagination :total="total" :pageSize="editForm.page_num" :current="editForm.page" @change="pageChange($event.current)"></uni-pagination>
	</view>
</template>

<script>
import { investOrderList } from '@/static/api/api'
export default {
  data() {
    return {
      statusList: {
        'INVESTING': '投资中',
        'FINISHED': '投资完成',
      },
      total: 0,
      editForm: {
        page_num: 10,
        page: 1
      },
      tableData: []
    }
  },
  methods: {
    pageChange (page) {
      this.editForm.page = page
      this.investOrderList()
    },
    investOrderList () {
      investOrderList(this.editForm).then(res => {
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
