<template>
	<view>
		<uni-table class="uniTableContent" border emptyText="暂无更多数据" >
		    <!-- 表头行 -->
		    <uni-tr>
		        <uni-th width="100" align="center">提现金额</uni-th>
		        <uni-th width="100" align="center">提现时间</uni-th>
		        <uni-th width="60" align="center">状态</uni-th>
		    </uni-tr>
		    <!-- 表格数据行 -->
			<template v-for="(item, index) in tableListData">
				<uni-tr :key="index">
					<uni-td align="center">{{ item }}</uni-td>
				</uni-tr>
			</template>
		</uni-table>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tableListData: []
			};
		}
	}
</script>

<style lang="less">
</style>
