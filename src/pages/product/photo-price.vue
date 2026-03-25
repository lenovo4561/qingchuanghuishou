<route type="page" lang="json">
{
  "style": {
    "navigationBarTitleText": "拍照查价",
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black"
  }
}
</route>

<template>
  <view class="min-h-screen bg-[#f2f3f5] pb-8">
    <image src="/static/images/paizhaochajia/1.png" class="w-full block" mode="widthFix" />

    <view class="px-4 pt-4 pb-2 bg-white">
      <text class="text-[20px] font-bold text-black">请尽量拍摄</text>
      <text class="text-[20px] font-bold text-[#ff3b3b]">手机背面</text>
      <text class="text-[20px] font-bold text-black">，特征明显的一面</text>
    </view>

    <view class="px-4 pb-4 bg-white grid grid-cols-2 gap-3">
      <image src="/static/images/paizhaochajia/2.png" class="w-full block rounded-lg" mode="widthFix" />
      <image src="/static/images/paizhaochajia/3.png" class="w-full block rounded-lg" mode="widthFix" />
    </view>

    <view class="mt-3 bg-white px-4 py-4">
      <text class="text-[18px] font-bold text-gray-800">识图记录</text>
      <view class="pt-5 pb-2 flex justify-center">
        <text class="text-[18px] text-gray-400">没有更多数据了</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'

onShow(() => {
  try {
    uni.showTabBar({
      animation: false
    })
  } catch (e) {
    // ignore
  }
})
</script>

<style scoped></style>
