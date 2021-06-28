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
      // url: 'http://mankefu.dlyunkefu.net/Web/im.aspx?_=t&accountid=126412', // 米多客
      url: 'http://w101.ttkefu.com/k/linkurl/?t=8D3IH5', // ttkefu
      webviewStyles: {
        progress: {
          color: '#FF3333'
        }
      }
    }
  }
}
</script>
