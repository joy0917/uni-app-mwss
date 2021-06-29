<!-- 在线客服 -->
<template>
	<view class="container">
		<web-view :webview-styles="webviewStyles" :src="url"></web-view>
	</view>
</template>

<script>
export default {
  data () {
    return {
      url: 'http://mankefu.dlyunkefu.net/Web/im.aspx?_=t&accountid=126412', // 米多客
      webviewStyles: {
        progress: {
          color: '#FF3333'
        }
      }
    }
  }
}
</script>
