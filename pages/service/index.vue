<!-- 在线客服 -->
<template>
	<view v-if="hasAuth">
    <template v-if="url">
		  <web-view :webview-styles="webviewStyles" :src="url"></web-view>
    </template>
    <template v-else>
      <view class="tc mt20">Loading...</view>
    </template>
	</view>
</template>

<script>
import { optionset } from '@/static/api/api'
import { checkLogin } from '@/static/libs/common'
import { servicePath } from '@/static/api/config'
export default {
  data () {
    return {
      hasAuth: false,
      url: '',
      webviewStyles: {
        progress: {
          color: '#FF3333'
        }
      }
    }
  },
  computed: {
    user_info () {
      return this.$store.state.user.user_info
    }
  },
  methods: {
    optionset () {
      optionset({
        code: 'KE_FU_YU_MING'
      }).then(res => {
        this.url = res.response.value + servicePath +
        '?business_id=1' + 
        '&groupid=0' +
        '&special=1' +
        '&theme=D3AC73' +
        '&visiter_name=' + this.user_info.real_name +
        '&id=' + this.user_info.id +
        '&phone=' + this.user_info.phone
        console.log(this.url)
      })
    }
  },
  mounted () {
    this.optionset()
  },
  onShow () {
    if (checkLogin()) {
      this.hasAuth = true
    }
  }
}
</script>
