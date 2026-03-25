<route type="page" lang="json">
{
  "style": {
    "navigationStyle": "custom",
    "navigationBarTextStyle": "white"
  }
}
</route>

<template>
  <view class="min-h-screen pb-8" style="background: linear-gradient(to bottom, #ff3b49, #ff5763)">
    <!-- Custom Header -->
    <view class="fixed z-50 top-0 left-0 right-0" style="padding-top: var(--status-bar-height, 0px)">
      <view class="h-11 flex items-center justify-between px-4 relative">
        <view class="text-white text-[24px] font-light z-10" @tap="goBack">
          <text class="text-[22px] leading-none">‹</text>
        </view>
        <view
          class="absolute inset-0 flex items-center justify-center text-white text-[17px] font-medium pointer-events-none"
        >
          邀请好友赚积分
        </view>
        <view class="text-white opacity-0">站位</view>
      </view>
    </view>

    <!-- Top Content Area -->
    <view class="relative w-full overflow-hidden" style="padding-top: calc(var(--status-bar-height, 0px) + 44px)">
      <!-- Main Graphic Representation -->
      <view class="relative h-[240px] w-full flex flex-col items-center pt-4">
        <view class="absolute right-0 top-3 bg-[#ffdf7e] text-[#b02213] text-[12px] px-3 py-1 rounded-l-full font-bold">
          规则
        </view>

        <text
          class="text-white font-extrabold text-[42px] tracking-wider drop-shadow-md italic mt-1"
          style="text-shadow: 2px 2px 4px rgba(200, 0, 0, 0.5)"
        >
          邀好友 分返佣
        </text>
        <text
          class="text-[#ffdf7e] font-bold text-[24px] mt-2 drop-shadow-md italic"
          style="text-shadow: 1px 1px 2px rgba(200, 0, 0, 0.5)"
        >
          好友下单返佣1%
        </text>

        <!-- Placeholder for the coins/envelopes graphic -->
        <view
          class="absolute bottom-[-10px] w-[100%] h-[150px] flex justify-center items-end"
          style="background: radial-gradient(ellipse at bottom, rgba(255, 200, 100, 0.4) 0%, transparent 70%)"
        >
          <view
            class="w-full h-[60px] bg-gradient-to-t from-[#ff1828] to-transparent opacity-80 absolute bottom-0"
          ></view>

          <view
            class="relative w-[180px] h-[90px] bg-[#e10b17] rounded-t-xl overflow-hidden flex items-center justify-center border-t-2 border-[#ffdf7e] z-10 mx-auto transform translate-y-4"
          >
            <view
              class="w-12 h-12 rounded-full border-2 border-[#ffdf7e] flex items-center justify-center relative bg-[#f11a26]"
            >
              <text class="text-[#ffdf7e] text-[20px]">¥</text>
            </view>
          </view>
          <!-- Decorative Coins -->
          <view
            class="absolute left-[15%] bottom-8 w-10 h-10 rounded-full bg-gradient-to-br from-[#ffeba8] to-[#ffb650] flex items-center justify-center text-[#d62000] font-bold shadow-md transform -rotate-12 z-20"
          >
            ¥
          </view>
          <view
            class="absolute right-[10%] bottom-4 w-14 h-14 rounded-full bg-gradient-to-br from-[#ffeba8] to-[#ffb650] flex items-center justify-center text-[#d62000] font-bold shadow-lg text-[22px] transform rotate-12 z-20"
          >
            ¥
          </view>
          <view
            class="absolute left-[8%] bottom-[70px] w-8 h-8 opacity-60 bg-[#ff3b49] rounded-sm transform rotate-45"
          ></view>
          <view
            class="absolute right-[20%] bottom-[60px] w-8 h-8 opacity-60 bg-[#ff3b49] rounded-sm transform -rotate-12"
          ></view>
        </view>
      </view>
    </view>

    <!-- Main Content Container -->
    <view class="px-4 relative z-10 mt-6">
      <!-- Scrolling Announcement -->
      <view class="flex items-center justify-center mb-5">
        <view class="bg-black/20 rounded-full py-1.5 px-3 flex items-center max-w-[95%]">
          <image src="https://via.placeholder.com/32" class="w-5 h-5 rounded-full mr-2 bg-gray-300" />
          <text class="text-white text-[12px] whitespace-nowrap overflow-hidden">
            @周先生 已邀请
            <text class="text-[#ffdf7e]">88人</text>
            获得返佣
            <text class="text-[#ffdf7e]">4963.88元</text>
          </text>
        </view>
      </view>

      <!-- 3 Steps Area -->
      <view class="bg-white rounded-xl py-5 px-2 flex items-center justify-between mb-5 shadow-sm">
        <view class="flex flex-col items-center flex-1">
          <view class="w-11 h-11 mb-2 relative">
            <view
              class="w-full h-full rounded-full bg-[#ffe4e6] flex items-center justify-center text-[#ff3b49] text-[20px]"
            >
              👤
            </view>
            <view
              class="absolute -right-1 -bottom-1 w-4 h-4 bg-[#ff3b49] rounded-full text-white text-[10px] flex items-center justify-center"
            >
              +
            </view>
          </view>
          <text class="text-[#333] text-[13px] font-medium">邀请好友</text>
        </view>
        <view class="w-6 h-[1px] bg-gray-200"></view>
        <view class="flex flex-col items-center flex-1">
          <view class="w-11 h-11 mb-2 relative">
            <view
              class="w-full h-full rounded-full bg-[#ffe4e6] flex items-center justify-center text-[#ff3b49] text-[20px]"
            >
              🔗
            </view>
            <view
              class="absolute -right-1 -bottom-1 w-4 h-4 bg-[#ff3b49] rounded-full text-white text-[10px] flex items-center justify-center"
            >
              ✓
            </view>
          </view>
          <text class="text-[#333] text-[13px] font-medium">好友关注小程序</text>
        </view>
        <view class="w-6 h-[1px] bg-gray-200"></view>
        <view class="flex flex-col items-center flex-1">
          <view class="w-11 h-11 mb-2 relative">
            <view
              class="w-full h-full rounded-full bg-[#ffe4e6] flex items-center justify-center text-[#ff3b49] text-[20px]"
            >
              🎁
            </view>
            <view
              class="absolute -right-1 -bottom-1 w-4 h-4 bg-[#ff3b49] rounded-full text-white text-[10px] flex items-center justify-center"
            >
              ✓
            </view>
          </view>
          <text class="text-[#333] text-[13px] font-medium">奖励到账</text>
        </view>
      </view>

      <!-- Buttons -->
      <view class="flex gap-3 mb-6">
        <button
          class="flex-1 rounded-full h-[46px] flex items-center justify-center text-white text-[14px] font-bold border-none m-0 shadow-md"
          style="background: linear-gradient(to right, #ff8147, #ff5715)"
        >
          立即邀请获得奖励
        </button>
        <button
          class="flex-1 rounded-full h-[46px] flex items-center justify-center text-white text-[14px] font-bold border-none m-0 shadow-md"
          style="background: linear-gradient(to right, #ffb347, #ff8920)"
        >
          生成我的专属海报
        </button>
      </view>

      <!-- My Rewards -->
      <view class="bg-white rounded-xl p-5 shadow-sm min-h-[160px]">
        <text class="text-[15px] font-bold text-black mb-5 block">我的奖励</text>

        <view class="flex items-center justify-around mb-6">
          <view class="flex flex-col items-center flex-1 border-r border-[#f0f0f0]">
            <view class="flex items-baseline text-[#ff3b49]">
              <text class="text-[26px] font-bold">0</text>
              <text class="text-[12px] ml-1 font-medium">元</text>
            </view>
            <text class="text-[#666] text-[13px] mt-1">红包</text>
          </view>

          <view class="flex flex-col items-center flex-1 border-r border-[#f0f0f0]">
            <view class="flex items-baseline text-[#ff3b49]">
              <text class="text-[26px] font-bold">0</text>
              <text class="text-[12px] ml-1 font-medium">分</text>
            </view>
            <text class="text-[#666] text-[13px] mt-1">积分</text>
          </view>

          <view class="flex flex-col items-center flex-1">
            <view class="flex items-baseline text-[#ff3b49]">
              <text class="text-[26px] font-bold">0</text>
              <text class="text-[12px] ml-1 font-medium">人</text>
            </view>
            <text class="text-[#666] text-[13px] mt-1">已邀请</text>
          </view>
        </view>

        <view
          class="w-full h-10 rounded-full border border-[#ff3b49] text-[#ff3b49] flex items-center justify-center text-[14px] font-medium"
          hover-class="bg-[#fff0f1] opacity-90"
        >
          查看奖励明细
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const goBack = () => {
  uni.navigateBack()
}
</script>
