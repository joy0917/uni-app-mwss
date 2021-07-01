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
      url: 'http://chat.100888.xyz/php/app.php?widget-mobile',
      webviewStyles: {
        progress: {
          color: '#FF3333'
        }
      }
    }
  }
}
</script>
