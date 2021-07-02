<!-- 在线客服 -->
<template>
	<view>
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
export default {
  data () {
    return {
      url: '',
      webviewStyles: {
        progress: {
          color: '#FF3333'
        }
      }
    }
  },
  methods: {
    optionset () {
      optionset({
        code: 'KE_FU_YU_MING'
      }).then(res => {
        this.url = res.response.value + '/php/app.php?widget-mobile'
      })
    }
  },
  mounted () {
    this.optionset()
  }
}
</script>
