<route type="page" lang="json">
{
  "style": {
    "navigationBarTitleText": "回收列表",
    "navigationBarTextStyle": "black",
    "navigationBarBackgroundColor": "#ffffff"
  }
}
</route>

<template>
  <web-view :src="targetUrl" />
</template>

<script setup lang="ts">
const targetUrl =
  'https://smbjd.smhsw.com/index/make/indexV2/catId/358/hash/d2jBNrw/store_id/0//history_date/2026-03-25/points/0'
</script>
