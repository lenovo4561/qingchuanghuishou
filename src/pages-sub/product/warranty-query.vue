<route type="page" lang="json">
{
  "style": {
    "navigationStyle": "custom",
    "navigationBarTextStyle": "black"
  }
}
</route>

<template>
  <view class="min-h-screen bg-[#f3f4f6]">
    <view
      class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
      style="padding-top: var(--status-bar-height, 0px)"
    >
      <view class="h-11 flex items-center justify-center relative px-4">
        <view class="absolute left-4 text-gray-700 text-[22px] leading-none" @tap="goBack"><text>‹</text></view>
        <text class="text-[18px] font-medium text-black">保修查询</text>
      </view>
    </view>

    <view class="px-3 pb-6" style="padding-top: calc(var(--status-bar-height, 0px) + 52px)">
      <view class="grid grid-cols-2 gap-2 mb-2">
        <view
          class="rounded-xl p-4 bg-gradient-to-br from-[#ff8796] via-[#ff4b67] to-[#ff2f4f] h-[126px] relative overflow-hidden"
        >
          <text class="text-white text-[15px]">我的余额</text>
          <view class="mt-4 flex items-baseline text-white">
            <text class="text-[46px] leading-none font-bold">0</text>
            <text class="text-[30px] leading-none ml-1 font-medium">元</text>
          </view>
          <view class="absolute right-3 bottom-2 w-16 h-12 border-3 border-white/30 rounded-lg"></view>
        </view>

        <view class="h-[126px] flex flex-col gap-2">
          <view class="flex-1 rounded-xl bg-[#f7d3d8] px-3 flex items-center justify-between">
            <view>
              <text class="text-[20px] font-bold text-[#8a2d16] leading-none">立即充值</text>
              <text class="text-[18px] font-bold text-[#d6342a] ml-1">></text>
              <view class="text-[13px] text-[#d6342a] mt-1">充值送现金</view>
            </view>
            <view class="w-14 h-14 rounded-full bg-[#ffd7b8] flex items-center justify-center text-[24px]">🧧</view>
          </view>
          <view class="flex-1 rounded-xl bg-[#f5ebce] px-3 flex items-center justify-between">
            <view>
              <text class="text-[20px] font-bold text-[#5b3600]">查询历史</text>
              <text class="text-[18px] font-bold text-[#5b3600] ml-1">></text>
              <view class="text-[13px] text-[#7b5a2d] mt-1">历史结果都在这</view>
            </view>
            <view class="w-14 h-14 rounded-full bg-[#ffe165] flex items-center justify-center text-[24px]">🔎</view>
          </view>
        </view>
      </view>

      <view class="bg-white rounded-md overflow-hidden">
        <view class="grid grid-cols-3 gap-[2px] bg-[#eceff3]">
          <view
            v-for="(item, index) in menuItems"
            :key="item"
            class="h-9 flex items-center justify-center text-[13px]"
            :class="index === 0 ? 'bg-[#ff1f2d] text-white font-medium' : 'bg-[#f4f6f8] text-gray-700'"
          >
            {{ item }}
          </view>
        </view>
      </view>

      <view class="mt-3 bg-white px-3 py-4 border-t border-gray-100">
        <view class="text-[15px] text-gray-800 mb-3">
          <text class="text-[#ff1f2d]">苹果ID激活锁</text>
          <text class="text-gray-500">~今日剩余免费0次~单价0.6元</text>
        </view>

        <view class="flex gap-2 mb-3">
          <view class="flex-1 h-10 bg-[#f5f6f8] rounded flex items-center px-3 text-gray-400 text-[15px]">
            输入IMEI或序列号
          </view>
          <view class="w-10 h-10 bg-[#f5f6f8] rounded flex items-center justify-center text-gray-400 text-[18px]">
            ◫
          </view>
          <view class="w-24 h-10 bg-[#ff2d2d] rounded text-white text-[16px] flex items-center justify-center">
            查询
          </view>
        </view>

        <view class="text-[#2f6fff] text-[15px] leading-8">IMEI或者序列号是什么?</view>
        <view class="text-[#2f6fff] text-[15px] leading-8">苹果保修是什么?</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const menuItems = [
  '苹果ID激活锁',
  '容量/颜色',
  '网络锁查询',
  '苹果监管锁',
  '维修状态查询',
  '苹果ID黑白锁',
  '苹果保修查询',
  '苹果串房互查',
  '苹果验机(旗舰版)',
  '购买日期查询',
  '苹果验机(购买日期)',
  '苹果验机(网络锁)',
  'Mac激活锁查询',
  '销售地查询',
  '运营商查询',
  '苹果型号号码查询',
  'IMEI查询(型号)',
  'IMEI查询(生产日期)',
  'IMEI查询(黑名单)',
  '苹果终极鉴定',
  '华为保修查询',
  '小米保修查询',
  '努比亚保修查询',
  '小米账号锁查询',
  '一加保修查询',
  '三星保修查询',
  'vivo保修查询',
  'OPPO保修查询',
  '真我保修查询',
  '荣耀保修查询',
  '中兴保修查询',
  'moto保修查询'
]

const goBack = () => {
  const pages = getCurrentPages()
  if (pages.length > 1) {
    uni.navigateBack({ delta: 1 })
    return
  }
  uni.switchTab({ url: '/pages/index/index' })
}
</script>

<style scoped></style>
