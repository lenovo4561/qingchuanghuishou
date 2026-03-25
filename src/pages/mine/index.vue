<route type="page" lang="json">
{
  "style": {
    "navigationStyle": "custom",
    "navigationBarTextStyle": "white"
  }
}
</route>

<template>
  <view class="min-h-screen bg-[#f7f8fa] pb-32">
    <!-- Header Gradient Area -->
    <view
      class="px-4 pb-12 rounded-b-[40rpx]"
      style="
        background: linear-gradient(180deg, #fe3247 0%, #ff4b58 48%, #ff6a75 100%);
        padding-top: var(--status-bar-height, 44px);
      "
    >
      <!-- Title -->
      <view class="text-white text-center text-[18px] h-12 leading-[48px] font-normal tracking-wider">个人中心</view>

      <!-- User Info -->
      <view class="flex items-start mt-2">
        <!-- Avatar -->
        <view class="relative mr-4 flex flex-col items-center">
          <view class="w-[70px] h-[70px] bg-white rounded-full border-2 border-white/40 overflow-hidden shadow-sm">
            <image src="https://via.placeholder.com/80/e5e7eb/a3a8b4?text=👤" class="w-full h-full object-cover" />
          </view>
          <view
            class="text-[#ff3b3b] bg-white text-[10px] px-2 py-[2px] rounded-full absolute -bottom-2 whitespace-nowrap shadow-sm font-bold z-10"
          >
            更换头像
          </view>
        </view>

        <!-- Info -->
        <view class="flex-1 justify-center text-white flex flex-col gap-1.5 mt-1">
          <view class="text-[16px] tracking-wide">用户编号：2142056</view>
          <view class="text-[13px] opacity-80 font-light">132****9366</view>
          <view class="text-[14px] text-[#ffea00] font-bold tracking-wider mt-0.5">积分:0</view>
        </view>

        <!-- Actions -->
        <view class="flex items-center gap-4 text-white text-[22px] mt-2 mr-1">
          <text>📝</text>
          <text>⚙️</text>
        </view>
      </view>
    </view>

    <view class="px-3 relative -mt-8">
      <!-- VIP Banner -->
      <view
        class="bg-gradient-to-r from-[#2a2b30] to-[#121317] rounded-xl px-4 py-3.5 flex items-center justify-between mb-3 shadow-md relative overflow-hidden"
      >
        <view class="flex flex-col relative z-10">
          <text class="text-[#fce4a1] text-[20px] font-bold italic tracking-wider mb-1">报价VIP</text>
          <text class="text-[#c9b47e] text-[11px] tracking-wide">开通VIP会员，享受更多专属特权！</text>
        </view>
        <navigator
          url="/pages/mine/vip-center"
          class="bg-gradient-to-r from-[#fff3ca] to-[#eebd68] text-[#554010] text-[12px] px-3.5 py-1.5 rounded-full font-bold relative z-10 shadow-sm"
        >
          立即开通>
        </navigator>
        <!-- Background Crown Decoration -->
        <text class="absolute right-8 -top-3 text-[60px] opacity-20 select-none">👑</text>
      </view>

      <!-- Top Tools (Wallet, Cards, Packets, Notice) -->
      <view class="bg-white rounded-xl py-4 flex justify-around shadow-sm mb-3">
        <view class="flex flex-col items-center">
          <view class="w-8 h-8 rounded-lg bg-[#fff1e5] text-[#ff9033] flex items-center justify-center text-lg mb-1.5">
            💳
          </view>
          <text class="text-[12px] text-gray-800">我的钱包</text>
        </view>
        <view class="flex flex-col items-center">
          <view class="w-8 h-8 rounded-lg bg-[#fff9db] text-[#ffb618] flex items-center justify-center text-lg mb-1.5">
            🎟️
          </view>
          <text class="text-[12px] text-gray-800">我的卡券</text>
        </view>
        <view class="flex flex-col items-center">
          <view class="w-8 h-8 rounded-lg bg-[#ffeef2] text-[#ff3c5b] flex items-center justify-center text-lg mb-1.5">
            🧧
          </view>
          <text class="text-[12px] text-gray-800">我的红包</text>
        </view>
        <view class="flex flex-col items-center">
          <view class="w-8 h-8 rounded-lg bg-[#e8f2ff] text-[#2481ff] flex items-center justify-center text-lg mb-1.5">
            💬
          </view>
          <text class="text-[12px] text-gray-800">公告中心</text>
        </view>
      </view>

      <!-- My Orders -->
      <view class="bg-white rounded-xl p-3.5 shadow-sm mb-3">
        <view class="flex justify-between items-center mb-4">
          <text class="text-[15px] font-bold text-gray-800">我的订单</text>
          <text class="text-[12px] text-gray-500">查看全部订单 ></text>
        </view>
        <view class="grid grid-cols-4 gap-y-4">
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">📦</text>
            <text class="text-[12px] text-gray-700">已下单</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">🚚</text>
            <text class="text-[12px] text-gray-700">已发货</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">📋</text>
            <text class="text-[12px] text-gray-700">质检中</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">⏳</text>
            <text class="text-[12px] text-gray-700">待确认</text>
          </view>
        </view>
      </view>

      <!-- Point Orders -->
      <view class="bg-white rounded-xl p-3.5 shadow-sm mb-3">
        <view class="flex justify-between items-center mb-4">
          <text class="text-[15px] font-bold text-gray-800">积分订单</text>
          <text class="text-[12px] text-gray-500">查看全部订单 ></text>
        </view>
        <view class="grid grid-cols-4 gap-y-4">
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">🧺</text>
            <text class="text-[12px] text-gray-700">待收货</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">✅</text>
            <text class="text-[12px] text-gray-700">已收货</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">📝</text>
            <text class="text-[12px] text-gray-700">已完成</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">🎧</text>
            <text class="text-[12px] text-gray-700">售后</text>
          </view>
        </view>
      </view>

      <!-- Point Activities -->
      <view class="bg-white rounded-xl p-3.5 shadow-sm mb-3">
        <view class="mb-4">
          <text class="text-[15px] font-bold text-gray-800">积分活动</text>
        </view>
        <view class="grid grid-cols-4 gap-y-4">
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">💰</text>
            <text class="text-[12px] text-gray-700">我的积分</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">🎁</text>
            <text class="text-[12px] text-gray-700">积分抽奖</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">🏪</text>
            <text class="text-[12px] text-gray-700">积分商城</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">✉️</text>
            <text class="text-[12px] text-gray-700">邀请好友</text>
          </view>
        </view>
      </view>

      <!-- Common Functions -->
      <view class="bg-white rounded-xl p-3.5 shadow-sm mb-3">
        <view class="mb-4">
          <text class="text-[15px] font-bold text-gray-800">常用功能</text>
        </view>
        <view class="grid grid-cols-4 gap-y-5">
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1 opacity-90">🔄</text>
            <text class="text-[12px] text-gray-700">回收流程</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1 opacity-90">🛒</text>
            <text class="text-[12px] text-gray-700">我要采购</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1 opacity-90">📭</text>
            <text class="text-[12px] text-gray-700">邮寄地址</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1 opacity-90">🛠️</text>
            <text class="text-[12px] text-gray-700">问题反馈</text>
          </view>

          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1 opacity-90">❓</text>
            <text class="text-[12px] text-gray-700">常见问题</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1 opacity-90">🧾</text>
            <text class="text-[12px] text-gray-700">反馈结果</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1 opacity-90">🤝</text>
            <text class="text-[12px] text-gray-700">商务合作</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1 opacity-90">📝</text>
            <text class="text-[12px] text-gray-700">投诉建议</text>
          </view>

          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1 opacity-90">📂</text>
            <text class="text-[12px] text-gray-700">广告录音</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1 opacity-90">📈</text>
            <text class="text-[12px] text-gray-700">行情走势</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1 opacity-90">📹</text>
            <text class="text-[12px] text-gray-700">回收教学视频</text>
          </view>
        </view>
      </view>

      <!-- Member Functions -->
      <view class="bg-white rounded-xl p-3.5 shadow-sm mb-4">
        <view class="mb-4">
          <text class="text-[15px] font-bold text-gray-800">会员功能</text>
        </view>
        <view class="grid grid-cols-4 gap-y-4">
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">⭐</text>
            <text class="text-[12px] text-gray-700">收藏报价单</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">📉</text>
            <text class="text-[12px] text-gray-700">报价变动</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">📸</text>
            <text class="text-[12px] text-gray-700">拍照查价</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-[26px] mb-1.5 opacity-90">📩</text>
            <text class="text-[12px] text-gray-700">报价短信通知</text>
          </view>
        </view>
      </view>

      <!-- Footer Contacts -->
      <view class="bg-white rounded-xl py-4 flex items-center justify-around shadow-sm mb-10">
        <view class="flex items-center text-gray-600">
          <text class="text-[18px] mr-1">💬</text>
          <text class="text-[13px]">添加微信</text>
        </view>
        <view class="w-[1px] h-4 bg-gray-200"></view>
        <view class="flex items-center text-gray-600">
          <text class="text-[18px] mr-1">📞</text>
          <text class="text-[13px]">客服电话</text>
        </view>
        <view class="w-[1px] h-4 bg-gray-200"></view>
        <view class="flex items-center text-gray-600">
          <text class="text-[18px] mr-1">🏪</text>
          <text class="text-[13px]">门店列表</text>
        </view>
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

<style scoped>
/* 无额外样式，全部使用 unocss */
</style>
