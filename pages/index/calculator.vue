<!-- 计算器 -->
<template>
	<view class="container calculator">
    <template v-if="!resultPage">
      <uni-forms ref="form" :modelValue="editForm" :rules="rules">
        <uni-forms-item label="投资金额" required name="money_num">
          <uni-easyinput type="number" :clearable="false" :trim="true" v-model="editForm.money_num" placeholder="请输入" />
          <text class="extra">元</text>
        </uni-forms-item>
        <uni-forms-item label="投资期限" required name="day_num">
          <uni-easyinput type="number" :clearable="false" :trim="true" v-model="editForm.day_num" placeholder="请输入" />
          <text class="extra">日</text>
        </uni-forms-item>
        <uni-forms-item label="日化利率" required name="rate">
          <uni-easyinput type="number" :clearable="false" :trim="true" v-model="editForm.rate" placeholder="请输入" />
          <text class="extra">%</text>
        </uni-forms-item>
        <uni-forms-item label="还款方式" required name="type">
          <uni-data-picker placeholder="请选择" popup-title="还款方式" :localdata="typeData" v-model="editForm.type">
          </uni-data-picker>
        </uni-forms-item>
        <uni-row>
          <uni-col :span="11">
            <button type="primary" class="submitbtn" @click="submitForm">计算收益</button>
          </uni-col>
          <uni-col :span="11" :push="2">
            <button type="default" @click="resetForm">重新计算</button>
          </uni-col>
        </uni-row>
      </uni-forms>
    </template>
    <template v-else>
      <button type="primary" class="submitbtn mb10" @click="resultPage = false">重新计算</button>
      <uni-table border emptyText="暂无更多数据" class="mb10">
        <!-- 表头行 -->
        <uni-tr>
          <uni-th width="60" align="center" class="f12">收款日期</uni-th>
          <uni-th width="60" align="center" class="f12">收款金额</uni-th>
          <uni-th width="60" align="center" class="f12">收回本金</uni-th>
          <uni-th width="60" align="center" class="f12">收回利息</uni-th>
          <uni-th width="60" align="center" class="f12">剩余本金</uni-th>
        </uni-tr>
          <!-- 表格数据行 -->
        <template v-for="(item, index) in resultData.list">
          <uni-tr :key="index">
            <uni-td align="center" class="f12">{{ item.get_date }}</uni-td>
            <uni-td align="center" class="f12">{{ item.get_num }}</uni-td>
            <uni-td align="center" class="f12">{{ item.get_principal }}</uni-td>
            <uni-td align="center" class="f12">{{ item.get_interest }}</uni-td>
            <uni-td align="center" class="f12">{{ item.stay_principal }}</uni-td>
          </uni-tr>
        </template>
      </uni-table>
      <uni-table border emptyText="暂无更多数据">
        <!-- 表头行 -->
        <uni-tr>
          <uni-th width="60" align="center" class="f12">-</uni-th>
          <uni-th width="60" align="center" class="f12">收款金额</uni-th>
          <uni-th width="60" align="center" class="f12">收回本金</uni-th>
          <uni-th width="60" align="center" class="f12">收回利息</uni-th>
        </uni-tr>
          <!-- 表格数据行 -->
        <template v-for="(item, index) in resultData.count">
          <uni-tr :key="index">
            <uni-td align="center" class="f12">总结</uni-td>
            <uni-td align="center" class="f12">{{ item.total_get }}</uni-td>
            <uni-td align="center" class="f12">{{ item.principal }}</uni-td>
            <uni-td align="center" class="f12">{{ item.interest }}</uni-td>
          </uni-tr>
        </template>
      </uni-table>
    </template>
	</view>
</template>

<script>
import { countType, countIndex } from '@/static/api/api'
export default {
  data () {
    return {
      typeData: [],
      editForm: {
        money_num: null,
        day_num: null,
        rate: null,
        type: null
      },
      rules: {
        money_num: {
          rules: [{ required: true, errorMessage: '请输入' }]
        },
        day_num: {
          rules: [{ required: true, errorMessage: '请输入' }]
        },
        rate: {
          rules: [{ required: true, errorMessage: '请输入' }]
        },
        type: {
          rules: [{ required: true, errorMessage: '请输入' }]
        }
      },
      resultData: {
        count: [],
        list: []
      },
      resultPage: false
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate().then(res => {
        countIndex(this.editForm).then(res => {
          let { count, list } = res.response
          let arr = []
          arr.push(count)
          this.resultData = {
            count: arr,
            list: list
          }
          this.resultPage = true
        })
      })
    },
    resetForm () {
      this.$refs.form.resetFields()
    },
    countType () {
      countType().then(res => {
        let data = res.response
        this.typeData = []
        for (let item in data) {
          this.typeData.push({
            value: data[item],
            text: item
          })
        }
      })
    }
  },
  mounted () {
    this.countType()
  }
}
</script>

<style lang="less" scoped>
@import '@/static/css/theme.less';
.calculator{
  background: #fff;
  padding-top: 40rpx;
  .extra{
    position: absolute;
    right: 20rpx;
    top: 18rpx;
  }
  .submitbtn{
    color: @default;
    background: @warning;
  }
}
</style>
