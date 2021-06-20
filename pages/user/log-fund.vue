<template>
	<view>
		<uni-table class="uniTableContent" border emptyText="暂无更多数据" >
		    <!-- 表头行 -->
		    <uni-tr>
		        <uni-th width="180" align="center">摘要</uni-th>
		        <uni-th width="40" align="center">金额</uni-th>
		        <uni-th width="90" align="center">时间</uni-th>
		    </uni-tr>
		    <!-- 表格数据行 -->
			<template v-for="(item, index) in tableListData">
				<uni-tr :key="index">
					<uni-td align="center">{{ item.content }}</uni-td>
					<uni-td align="center"><text style="color: #19BE6B;">{{ item.num }}</text></uni-td>
					<uni-td align="center">{{ item.date }}</uni-td>
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
					{ content: '每日签到，获得奖励3元', type: '2', num: '+3.00', date: '06-16 16:36' },
					{ content: '每日签到，获得奖励3元', type: '2', num: '+3.00', date: '06-15 15:30' },
					{ content: '会员注册，系统赠送28.00元', type: '1', num: '+28.00', date: '06-15 15:00' }
				]
			};
		}
	}
</script>

<style lang="less">
</style>
