<route type="page" lang="json">
{
  "style": {
    "navigationBarTitleText": "限时特惠",
    "navigationStyle": "custom",
    "navigationBarTextStyle": "white"
  }
}
</route>

<template>
  <view class="min-h-screen bg-[#f4f5f7] pb-[100px]">
    <!-- Custom Header -->
    <view
      class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-3 transition-colors"
      :class="isScrolled ? 'bg-white' : 'bg-transparent'"
      style="height: calc(44px + var(--status-bar-height, 0px)); padding-top: var(--status-bar-height, 0px)"
    >
      <view
        class="w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors"
        :class="isScrolled ? 'bg-transparent text-black' : 'bg-black/40 text-white'"
        @click="goBack"
      >
        <!-- Use standard back icon style or simple text -->
        <text class="text-[13px] font-bold leading-none">返回</text>
      </view>
      <view v-if="isScrolled" class="flex-1 text-center font-bold text-[16px] mr-[30px] text-gray-800">限时特惠</view>
    </view>

    <!-- Swiper/Banner -->
    <view class="relative w-full h-[375px] bg-white">
      <swiper class="w-full h-full" circular autoplay :interval="3500" @change="onSwiperChange">
        <swiper-item v-for="(img, index) in banners" :key="index">
          <image :src="img" class="w-full h-full" mode="aspectFill" />
        </swiper-item>
      </swiper>
      <view
        class="absolute right-4 bottom-4 bg-black/50 text-white text-[11px] px-2.5 py-0.5 rounded-full z-10 flex items-center tracking-wider font-sans"
      >
        <text class="font-bold mr-0.5">{{ currentBanner }}</text>
        /{{ banners.length }}
      </view>
    </view>

    <!-- Info Block -->
    <view class="bg-white px-3 py-4 mb-2 shadow-sm">
      <view class="text-[16px] font-bold text-gray-800 mb-3 block">测机充电宝-双十二特惠</view>
      <view class="flex items-end justify-between mt-1">
        <view class="flex items-baseline text-[#f5222d] font-bold">
          <text class="text-[20px] leading-none">220</text>
          <text class="text-[12px] ml-1 mb-[1px] font-normal">元</text>
        </view>
        <text class="text-gray-400 text-[12px]">最近已兑375个</text>
      </view>
    </view>

    <!-- Params Block -->
    <view class="bg-white px-4 py-4 mb-2 shadow-sm">
      <view class="text-[14px] font-bold text-gray-800 mb-4 block">商品参数</view>
      <view class="flex items-center justify-between mb-3 text-[13px]">
        <text class="text-gray-500">库存</text>
        <text class="text-gray-800">0</text>
      </view>
      <view class="flex items-center justify-between mb-3 text-[13px]">
        <text class="text-gray-500">商品价值</text>
        <text class="text-gray-800">245</text>
      </view>
      <view class="flex items-center justify-between text-[13px]">
        <text class="text-gray-500">快递类型</text>
        <text class="text-gray-800">包邮</text>
      </view>
    </view>

    <!-- Details/Rich text Block -->
    <view class="bg-white flex flex-col items-center mt-2 shadow-sm pb-4">
      <view class="text-center font-bold text-[#e60012] text-[18px] leading-[2] px-4 pt-8 pb-6">
        <view>闪充测机充电宝</view>
        <view>足两万毫安</view>
        <view>双表头</view>
        <view>秒冲秒开不敢说，但是开机速度</view>
        <view>测试比之前的老款提升了两倍</view>
        <view>收货速度变快了，收的多了，实</view>
        <view>实在在的赚钱工具</view>
        <view>好马配好鞍，好船配风帆</view>
        <view>这款测机充电宝我们选品是亲自</view>
        <view>去工厂考察</view>
        <view>纯手工，对比其他充电宝，做功</view>
        <view>是最好的</view>
        <view>质保一年，一年有问题随时换新</view>
        <view>配两根2.4A的一拖三快充线，一</view>
        <view>长一短，可长可短，测手机事半</view>
        <view>功倍</view>
        <view>并且今天买的还赠送拆机工具，</view>
        <view>卡针，刀片，撬棒</view>
        <view>价格就是工厂价，双十二，限时</view>
        <view>不限量</view>
      </view>

      <!-- Detail Images (Real banners instead of placeholders) -->
      <view class="w-full flex flex-col items-center">
        <image src="/static/images/duihuan/banner1.jpg" class="w-full block" mode="widthFix" />
        <image src="/static/images/duihuan/banner2.jpg" class="w-full block" mode="widthFix" />
        <image src="/static/images/duihuan/abnner3.jpg" class="w-full block" mode="widthFix" />
      </view>
    </view>

    <!-- Guess You Like Title -->
    <view class="flex items-center justify-center pt-6 pb-4">
      <view class="text-[#e60012] font-bold text-[18px] mr-2 flex gap-1">
        <view class="w-1.5 h-3.5 bg-[#e60012] transform -skew-x-[20deg] rounded-sm"></view>
        <view class="w-1.5 h-3.5 bg-[#e60012] transform -skew-x-[20deg] rounded-sm"></view>
      </view>
      <text class="text-[16px] font-bold text-gray-800 tracking-widest px-2">猜你喜欢</text>
      <view class="text-[#e60012] font-bold text-[18px] ml-2 flex gap-1">
        <view class="w-1.5 h-3.5 bg-[#e60012] transform -skew-x-[20deg] rounded-sm"></view>
        <view class="w-1.5 h-3.5 bg-[#e60012] transform -skew-x-[20deg] rounded-sm"></view>
      </view>
    </view>

    <!-- Guess You Like Grid -->
    <view class="px-3 grid grid-cols-2 gap-2 pb-6">
      <view v-for="(item, idx) in guessLikes" :key="idx" class="bg-white rounded-lg overflow-hidden pb-3 relative">
        <view class="relative w-full aspect-square bg-[#f8f8f8]">
          <!-- Add a fallback placeholder pattern if no image available -->
          <image :src="item.img" class="w-full h-full object-cover" />
          <view v-if="item.soldOut" class="absolute inset-0 bg-black/30 flex items-center justify-center">
            <view
              class="w-[60px] h-[60px] rounded-full bg-black/60 border border-gray-400 flex items-center justify-center"
            >
              <text class="text-white text-[13px] tracking-widest font-bold">已兑完</text>
            </view>
          </view>
        </view>
        <view class="px-2 pt-2">
          <text class="text-[14px] text-gray-800 leading-snug line-clamp-2 h-10 mb-1 break-all">{{ item.title }}</text>
          <view class="flex items-baseline mb-1">
            <text class="text-[15px] font-bold text-[#f5222d]">{{ item.price }}</text>
            <text v-if="!item.price.includes('元')" class="text-[12px] text-[#f5222d] ml-[1px]">元</text>
          </view>
          <text class="text-[12px] text-gray-400">{{ item.sales }}</text>
        </view>
      </view>
    </view>

    <!-- Red Bottom Action (Avoid native bottom bar with environment variable) -->
    <view
      class="fixed bottom-0 left-0 right-0 w-auto box-border bg-white px-4 py-2 border-t border-gray-50 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]"
      style="padding-bottom: calc(10px + var(--window-bottom, 0px) + env(safe-area-inset-bottom))"
    >
      <view
        class="bg-[#f5222d] text-white rounded-full text-[15px] font-bold h-[44px] flex flex-row items-center justify-center w-full"
        hover-class="bg-[#d9161e]"
      >
        立即兑换
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onPageScroll } from '@dcloudio/uni-app'

const banners = [
  '/static/images/duihuan/banner1.jpg',
  '/static/images/duihuan/banner2.jpg',
  '/static/images/duihuan/abnner3.jpg'
]

const currentBanner = ref(1)
const isScrolled = ref(false)

const onSwiperChange = (e: any) => {
  currentBanner.value = e.detail.current + 1
}

const guessLikes = [
  {
    title: '废旧手机回收基础入门课程（针对新...',
    price: '100积分+19.9元',
    sales: '已兑1687件',
    img: 'https://via.placeholder.com/300x300?text=Course',
    soldOut: false
  },
  {
    title: '机大侠 手机回收专业质检工具',
    price: '239',
    sales: '已兑188件',
    img: 'https://via.placeholder.com/300x300?text=Tool',
    soldOut: true
  },
  {
    title: '地摊海报',
    price: '22',
    sales: '已兑2042件',
    img: 'https://via.placeholder.com/300x300?text=Poster',
    soldOut: false
  },
  {
    title: '雨棚',
    price: '268',
    sales: '已兑0件',
    img: 'https://via.placeholder.com/300x300?text=Tent',
    soldOut: false
  },
  {
    title: '拆机工具',
    price: '50',
    sales: '已兑20件',
    img: 'https://via.placeholder.com/300x300?text=Tools',
    soldOut: false
  },
  {
    title: '录音储存',
    price: '22',
    sales: '已兑289件',
    img: 'https://via.placeholder.com/300x300?text=Storage',
    soldOut: false
  },
  {
    title: '一体2w测机充电宝',
    price: '200',
    sales: '已兑54件',
    img: 'https://via.placeholder.com/300x300?text=Powerbank',
    soldOut: true
  },
  {
    title: '苹果安卓手机拆机套装（1套）',
    price: '25',
    sales: '已兑2730件',
    img: 'https://via.placeholder.com/300x300?text=Suit',
    soldOut: false
  }
]

const goBack = () => {
  // If navigating directly or refreshed, navigateBack might fail, fallback to home
  const pages = getCurrentPages()
  if (pages.length > 1) {
    uni.navigateBack({ delta: 1 })
  } else {
    uni.switchTab({ url: '/pages/index/index' })
  }
}

onPageScroll(e => {
  isScrolled.value = e.scrollTop > 50
})
</script>

<style scoped></style>
