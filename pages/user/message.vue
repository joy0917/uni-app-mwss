<template>
	<view>
		<uni-table class="uniTableContent" border emptyText="暂无更多数据" >
		    <!-- 表头行 -->
		    <uni-tr>
		        <uni-th width="220" align="center">标题</uni-th>
		        <uni-th width="40" align="center">类别</uni-th>
		        <uni-th width="40" align="center">状态</uni-th>
		    </uni-tr>
		    <!-- 表格数据行 -->
			<template v-for="(item, index) in tableListData">
				<uni-tr :key="index">
					<uni-td align="center">{{ item.title }}</uni-td>
					<uni-td align="center">{{ item.type }}</uni-td>
					<uni-td align="center"><text :class="item.status === '1' ? 'read' : 'unread'">{{ item.status === '1' ? '已读' : '未读' }}</text></uni-td>
				</uni-tr>
			</template>
		</uni-table>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tableListData: [
					{ title: '充值问题', type:'公示', status:'1' }
				]
			};
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
