<route type="home" lang="json">
{
  "style": {
    "navigationBarTitleText": "首页",
    "navigationBarBackgroundColor": "#ff4d4f",
    "navigationBarTextStyle": "white"
  }
}
</route>

<template>
  <view class="min-h-screen bg-[#f7f8fa] pb-24">
    <!-- Top red gradient background area -->
    <view class="bg-gradient-to-b from-[#ff3b3b] via-[#ff3b3b] to-[#f7f8fa] pt-1 px-3 pb-4">
      <!-- Banner -->
      <view class="w-full rounded-xl overflow-hidden mb-3 h-32 relative shadow-sm">
        <swiper
          class="w-full h-full"
          circular
          autoplay
          indicator-dots
          :interval="bannerInterval"
          :duration="bannerDuration"
          indicator-color="rgba(255,255,255,0.55)"
          indicator-active-color="#ffffff"
        >
          <swiper-item v-for="(banner, index) in bannerList" :key="index">
            <image :src="banner" class="w-full h-full object-cover" mode="aspectFill" />
          </swiper-item>
        </swiper>
      </view>

      <!-- 6 Cards Grid -->
      <view class="grid grid-cols-3 gap-2">
        <!-- Card 1 -->
        <view
          class="bg-white rounded-xl p-3 relative h-28 shadow-sm box-border flex flex-col overflow-hidden"
          @tap="goToOrder"
        >
          <text class="text-[15px] font-bold text-gray-800 relative z-10">一键下单</text>
          <text class="text-[10px] text-gray-500 mt-1 relative z-10">免估价 更便捷</text>
          <view class="mt-auto flex items-center relative z-10">
            <view
              class="bg-[#ff3b3b] text-white text-[10px] px-2 py-0.5 rounded-full inline-flex flex-row items-center justify-center"
            >
              GO
              <text class="text-[8px] ml-0.5 mt-[1px]">></text>
            </view>
          </view>
          <image
            src="https://via.placeholder.com/60?text=IMG"
            class="absolute -right-2 -bottom-2 w-12 h-12 object-contain overflow-visible"
          />
        </view>

        <!-- Card 2 -->
        <navigator
          url="/pages/product/list"
          hover-class="none"
          class="bg-white rounded-xl p-3 relative h-28 shadow-sm box-border flex flex-col overflow-hidden"
        >
          <text class="text-[15px] font-bold text-gray-800 relative z-10">快速查价</text>
          <text class="text-[10px] text-gray-500 mt-1 relative z-10">先估价 再下单</text>
          <view class="mt-auto flex items-center relative z-10">
            <view
              class="bg-[#ff3b3b] text-white text-[10px] px-2 py-0.5 rounded-full inline-flex flex-row items-center justify-center"
            >
              GO
              <text class="text-[8px] ml-0.5 mt-[1px]">></text>
            </view>
          </view>
          <image
            src="https://via.placeholder.com/60?text=IMG"
            class="absolute -right-2 -bottom-2 w-12 h-12 object-contain overflow-visible"
          />
        </navigator>

        <!-- Card 3 -->
        <navigator
          url="/pages/product/exchange"
          hover-class="none"
          class="bg-white rounded-xl p-3 relative h-28 shadow-sm box-border flex flex-col overflow-hidden"
        >
          <text class="text-[15px] font-bold text-gray-800 relative z-10">限时特惠</text>
          <text class="text-[10px] text-gray-500 mt-1 relative z-10">赠送测机拆解工</text>
          <view class="mt-auto flex items-center relative z-10">
            <view
              class="bg-[#ff3b3b] text-white text-[10px] px-2 py-0.5 rounded-full inline-flex flex-row items-center justify-center"
            >
              GO
              <text class="text-[8px] ml-0.5 mt-[1px]">></text>
            </view>
          </view>
          <image
            src="https://via.placeholder.com/60?text=IMG"
            class="absolute -right-2 -bottom-2 w-14 h-14 object-contain overflow-visible"
          />
        </navigator>

        <!-- Card 4 -->
        <navigator
          url="/pages/product/photo-price"
          hover-class="none"
          class="bg-white rounded-xl p-3 relative h-28 shadow-sm box-border flex flex-col overflow-hidden"
        >
          <text class="text-[15px] font-bold text-gray-800 relative z-10">拍照查价</text>
          <text class="text-[10px] text-gray-500 mt-1 relative z-10">拍照片 查价格</text>
          <view class="mt-auto flex items-center relative z-10">
            <view
              class="bg-[#ff3b3b] text-white text-[10px] px-2 py-0.5 rounded-full inline-flex flex-row items-center justify-center"
            >
              GO
              <text class="text-[8px] ml-0.5 mt-[1px]">></text>
            </view>
          </view>
          <image
            src="https://via.placeholder.com/60?text=IMG"
            class="absolute -right-2 -bottom-2 w-12 h-12 object-contain overflow-visible"
          />
        </navigator>

        <!-- Card 5 -->
        <navigator
          url="/pages/product/warranty-query"
          hover-class="none"
          class="bg-white rounded-xl p-3 relative h-28 shadow-sm box-border flex flex-col overflow-hidden"
        >
          <text class="text-[15px] font-bold text-gray-800 relative z-10">保修查询</text>
          <text class="text-[10px] text-gray-500 mt-1 relative z-10">查苹果 查安卓</text>
          <view class="mt-auto flex items-center relative z-10">
            <view
              class="bg-[#ff3b3b] text-white text-[10px] px-2 py-0.5 rounded-full inline-flex flex-row items-center justify-center"
            >
              GO
              <text class="text-[8px] ml-0.5 mt-[1px]">></text>
            </view>
          </view>
          <image
            src="https://via.placeholder.com/60?text=IMG"
            class="absolute -right-2 -bottom-2 w-12 h-12 object-contain overflow-visible"
          />
        </navigator>

        <!-- Card 6 -->
        <navigator
          url="/pages/product/invite-friends"
          hover-class="none"
          class="bg-white rounded-xl p-3 relative h-28 shadow-sm box-border flex flex-col overflow-hidden"
        >
          <text class="text-[15px] font-bold text-gray-800 relative z-10">邀请好友</text>
          <text class="text-[10px] text-gray-500 mt-1 relative z-10">邀好友 分佣金</text>
          <view class="mt-auto flex items-center relative z-10">
            <view
              class="bg-[#ff3b3b] text-white text-[10px] px-2 py-0.5 rounded-full inline-flex flex-row items-center justify-center"
            >
              GO
              <text class="text-[8px] ml-0.5 mt-[1px]">></text>
            </view>
          </view>
          <image
            src="https://via.placeholder.com/60?text=IMG"
            class="absolute -right-2 -bottom-2 w-14 h-14 object-contain overflow-visible"
          />
        </navigator>
      </view>
    </view>

    <view class="px-3 pb-6">
      <!-- Notice Bar -->
      <view class="bg-[#fff5f5] rounded-xl p-3 flex items-center mb-3 shadow-sm box-border">
        <image src="https://via.placeholder.com/24?text=Horn" class="w-5 h-5 mr-2" />
        <text class="text-[#ff3b3b] font-bold text-[14px] mr-2">公告</text>
        <view class="flex-1 overflow-hidden flex flex-col justify-center gap-1">
          <view class="flex items-center text-[12px]">
            <text class="text-gray-700 mr-2">惠州惠城 陈女士 门店邮寄</text>
          </view>
          <view class="flex items-center text-[12px]">
            <text class="text-[#ff3b3b]">收益3600元</text>
          </view>
        </view>
        <text class="text-gray-400 text-[12px]">105分钟前</text>
      </view>

      <!-- Nearby Store -->
      <view class="bg-white rounded-xl p-4 shadow-sm mb-4 relative box-border">
        <view class="flex items-center justify-between mb-3">
          <view class="flex items-center">
            <view class="bg-[#ff5a2c] text-white text-[11px] px-1.5 py-0.5 rounded mr-2">附近门店</view>
            <text class="font-bold text-[15px] text-gray-800">数码回收网深圳运营中心</text>
          </view>
          <text class="text-gray-400 text-[12px]">6.79km</text>
        </view>

        <view class="flex items-center justify-between mb-2.5">
          <view class="flex items-center text-gray-600 text-[13px]">
            <image src="https://via.placeholder.com/16?text=P" class="w-4 h-4 mr-2" />
            <text>张豹 15361685282</text>
          </view>
          <text class="text-[#ff3b3b] text-[13px]">拨打></text>
        </view>

        <view class="flex items-center justify-between mb-2.5">
          <view class="flex items-center text-gray-600 text-[13px]">
            <image src="https://via.placeholder.com/16?text=W" class="w-4 h-4 mr-2" />
            <text>15361685282</text>
          </view>
          <text class="text-[#ff3b3b] text-[13px]">复制></text>
        </view>

        <view class="flex items-start justify-between">
          <view class="flex items-start text-gray-600 text-[13px] pr-4 flex-1">
            <image src="https://via.placeholder.com/16?text=L" class="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
            <text class="leading-relaxed">
              广东省深圳市福田区深南中路2018号(科学馆地铁站B口步行200米)兴华大厦B座12层整层
            </text>
          </view>
          <text class="text-[#ff3b3b] text-[13px] whitespace-nowrap pt-0.5">导航></text>
        </view>
      </view>

      <!-- Search Area & Category Tabs -->
      <view class="bg-white px-3 pt-3 pb-3 mb-2 rounded-xl">
        <!-- Search Bar -->
        <view
          class="border text-[14px] border-[#ff3b3b] border-solid rounded-full flex items-center px-4 py-2.5 shadow-sm mb-4"
        >
          <image src="https://via.placeholder.com/18?text=S" class="w-4 h-4 mr-2" />
          <input
            class="flex-1 text-[13px] text-gray-800 bg-transparent"
            placeholder="查找您想看的机型报价"
            placeholder-class="text-[#999]"
          />
        </view>

        <!-- Primary Tabs -->
        <view class="flex items-center justify-around mb-2 pb-2 border-b border-gray-100">
          <view class="bg-[#ff3b3b] text-white text-[15px] px-4 py-2 rounded-lg font-bold relative">
            环保手机报价
            <view class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-white rounded-full"></view>
          </view>
          <text class="text-[#ff3b3b] text-[15px]">数码相机报价</text>
          <text class="text-[#ff3b3b] text-[15px]">新机靓机报价</text>
        </view>

        <!-- Secondary Tabs (scrollable) -->
        <scroll-view scroll-x class="whitespace-nowrap pt-2 pb-1">
          <view class="inline-flex items-center">
            <text class="text-gray-800 text-[12px] font-bold mr-3 whitespace-nowrap">常用报价</text>
            <view class="w-[1px] h-3 bg-gray-300 mr-3"></view>
            <text class="text-[#3b82f6] text-[12px] mr-4 whitespace-nowrap">电脑主机/主板</text>
            <text class="text-[#3b82f6] text-[12px] mr-4 whitespace-nowrap">卡西欧相机</text>
            <text class="text-[#3b82f6] text-[12px] mr-4 whitespace-nowrap">佳能相机</text>
            <text class="text-[#3b82f6] text-[12px] mr-4 whitespace-nowrap">条码打...</text>
          </view>
        </scroll-view>
      </view>

      <!-- Grid Items Section -->
      <!-- Dynamic Categories Section -->
      <view v-for="(category, catIndex) in categories" :key="catIndex" class="bg-white rounded-xl p-3 shadow-sm mb-3">
        <view class="text-[17px] font-bold text-gray-800 mb-4 px-1">{{ category.title }}</view>

        <view class="grid grid-cols-4 gap-y-5 gap-x-2">
          <!-- Iterate over category items -->
          <view
            v-for="(item, index) in category.items"
            :key="index"
            class="flex flex-col items-center justify-center p-1"
            @tap="onCategoryItemTap(category.title)"
          >
            <view class="relative w-12 h-12 mb-1">
              <image
                :src="item.img || 'https://via.placeholder.com/80?text=' + encodeURIComponent(item.name)"
                class="w-full h-full rounded-full bg-gray-50"
              />
              <view
                v-if="index > 0"
                class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#ffcd00] text-[#ff3b3b] text-[8px] px-1.5 py-0.5 rounded-sm whitespace-nowrap font-bold shadow-sm"
              >
                今日更新
              </view>
            </view>
            <text
              class="text-[12px] text-gray-800 mt-1 break-all text-center leading-tight max-w-[50px] line-clamp-2 h-[28px] overflow-hidden"
            >
              {{ item.name }}
            </text>
          </view>
        </view>
      </view>

      <!-- Tutorials Section -->
      <view class="bg-white rounded-xl shadow-sm mb-3 overflow-hidden">
        <!-- Header -->
        <view class="flex items-center justify-between p-3 pb-0">
          <text class="text-[17px] font-bold text-gray-800">手机回收教程</text>
          <text class="text-[13px] text-gray-500">全部视频 ></text>
        </view>

        <!-- Tabs -->
        <view class="flex items-center px-3 mt-3 border-b border-gray-100">
          <view class="relative pb-2 mr-6">
            <text class="text-[15px] font-bold text-gray-800">查看报价</text>
            <view class="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff3b3b] rounded-full"></view>
          </view>
          <text class="text-[15px] text-gray-500 pb-2 mr-6">实用功能</text>
          <text class="text-[15px] text-gray-500 pb-2 mr-6">下单相关</text>
          <text class="text-[15px] text-gray-500 pb-2">收入相关</text>
        </view>

        <!-- Video Cards Grid -->
        <view class="p-3 grid grid-cols-3 gap-2">
          <view class="flex flex-col">
            <view class="w-full h-36 bg-gray-200 rounded-lg overflow-hidden relative mb-2">
              <image src="https://via.placeholder.com/100x150?text=Video" class="w-full h-full object-cover" />
            </view>
            <text class="text-[12px] text-gray-800 text-center truncate">华为手机查询报价</text>
          </view>
          <view class="flex flex-col">
            <view class="w-full h-36 bg-gray-200 rounded-lg overflow-hidden relative mb-2">
              <image src="https://via.placeholder.com/100x150?text=Video" class="w-full h-full object-cover" />
            </view>
            <text class="text-[12px] text-gray-800 text-center truncate">报价单查看教程</text>
          </view>
          <view class="flex flex-col">
            <view class="w-full h-36 bg-gray-200 rounded-lg overflow-hidden relative mb-2">
              <image src="https://via.placeholder.com/100x150?text=Video" class="w-full h-full object-cover" />
            </view>
            <text class="text-[12px] text-gray-800 text-center truncate">报价单统货功能机</text>
          </view>
        </view>
      </view>

      <!-- Processing Flow & Notice -->
      <view class="bg-gradient-to-b from-[#ffe8e8] to-[#ffffff] rounded-xl overflow-hidden shadow-sm mb-4">
        <!-- Flow Steps -->
        <view class="flex items-center justify-center p-3 font-bold">
          <text class="text-[#ff3b3b] text-[15px]">发货下单</text>
          <text class="text-[#ff3b3b] text-[13px] mx-1">→</text>
          <text class="text-[#ff3b3b] text-[15px]">到货验机</text>
          <text class="text-[#ff3b3b] text-[13px] mx-1">→</text>
          <text class="text-[#ff3b3b] text-[15px]">确认报价</text>
          <text class="text-[#ff3b3b] text-[13px] mx-1">→</text>
          <text class="text-[#ff3b3b] text-[15px]">成交收款</text>
        </view>

        <!-- Service Features Grid -->
        <view class="grid grid-cols-4 gap-2 pt-2 px-3 pb-3">
          <view class="flex flex-col items-center">
            <image src="https://via.placeholder.com/40?text=¥" class="w-10 h-10 mb-1" />
            <text class="text-[13px] text-gray-700">报价精准</text>
          </view>
          <view class="flex flex-col items-center">
            <image src="https://via.placeholder.com/40?text=盾" class="w-10 h-10 mb-1" />
            <text class="text-[13px] text-gray-700">专业质检</text>
          </view>
          <view class="flex flex-col items-center">
            <image src="https://via.placeholder.com/40?text=电" class="w-10 h-10 mb-1" />
            <text class="text-[13px] text-gray-700">快速提现</text>
          </view>
          <view class="flex flex-col items-center">
            <image src="https://via.placeholder.com/40?text=冠" class="w-10 h-10 mb-1" />
            <text class="text-[13px] text-gray-700">高质服务</text>
          </view>
        </view>

        <!-- Action Button Section -->
        <view class="px-3 pb-5 flex items-center relative">
          <view class="bg-[#ff2b2b] text-white flex-1 text-center py-3 rounded-full text-[17px] font-bold">
            回收下单
          </view>
          <image
            src="https://via.placeholder.com/40x50?text=Girl"
            class="absolute right-3 bottom-5 w-12 h-14 object-fill"
          />
        </view>
      </view>

      <!-- Footer Text & Links (Inline) -->
      <view class="flex flex-col items-center pb-6 mt-2">
        <text class="text-gray-800 text-[13px] mb-2 font-bold">数码网·真诚服务好每一位客户</text>
        <text class="text-gray-400 text-[11px] mb-8">耕耘十余年始终为您提供最新最可靠的回收报价</text>

        <view class="flex items-center justify-center w-full text-gray-500">
          <view class="flex items-center px-4">
            <image src="https://via.placeholder.com/20?text=W" class="w-5 h-5 mr-1" />
            <text class="text-[14px]">添加微信</text>
          </view>
          <view class="w-[1px] h-4 bg-gray-300"></view>
          <!-- Vertical divider -->
          <view class="flex items-center px-4">
            <image src="https://via.placeholder.com/20?text=P" class="w-5 h-5 mr-1" />
            <text class="text-[14px]">客服电话</text>
          </view>
          <view class="w-[1px] h-4 bg-gray-300"></view>
          <!-- Vertical divider -->
          <view class="flex items-center px-4">
            <image src="https://via.placeholder.com/20?text=S" class="w-5 h-5 mr-1" />
            <text class="text-[14px]">门店列表</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import importedCategories from './categories.json'

// Dynamic Categories
const categories = ref(importedCategories)
const bannerInterval = 3500
const bannerDuration = 450
const bannerList = [
  '/static/images/index/banner/banner-1.jpg',
  '/static/images/index/banner/banner-2.png',
  '/static/images/index/banner/banner-3.gif',
  '/static/images/index/banner/banner-4.gif'
]

onShow(() => {
  // Some runtimes may keep tabBar hidden after cross-page navigation; force it visible on home.
  uni.showTabBar({
    animation: false
  })
})

const goToOrder = () => {
  uni.switchTab({
    url: '/pages/order/index'
  })
}

const onCategoryItemTap = (categoryTitle: string) => {
  if (categoryTitle === '废旧手机回收报价') {
    uni.navigateTo({
      url: '/pages/product/recycle-list-webview'
    })
  }
}
</script>

<style scoped>
/* 无额外样式，全部使用 unocss */
</style>
<style lang="scss" scoped></style>
