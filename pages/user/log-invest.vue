<template>
	<view>
		<uni-table class="uniTableContent" border emptyText="暂无更多数据" >
		    <!-- 表头行 -->
		    <uni-tr>
		        <uni-th width="80" align="center">项目名称</uni-th>
		        <uni-th width="80" align="center">投资金额</uni-th>
		        <uni-th width="50" align="center">状态</uni-th>
		        <uni-th width="50" align="center">详情</uni-th>
		        <uni-th width="50" align="center">合同</uni-th>
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
