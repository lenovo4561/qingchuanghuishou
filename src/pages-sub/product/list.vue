<template>
  <view class="flex flex-col h-screen bg-white">
    <!-- Top Search Bar -->
    <view class="flex items-center px-3 py-2 border-b border-gray-100">
      <text class="text-[15px] font-bold text-gray-800 shrink-0">选择机型</text>
      <view class="flex-1 bg-gray-100 rounded-full flex items-center px-3 py-1.5 ml-3">
        <text class="text-gray-400 text-[14px] mr-1">🔍</text>
        <input
          type="text"
          placeholder="搜索品牌/型号"
          class="text-[13px] bg-transparent flex-1 text-gray-800"
          placeholder-class="text-gray-400"
        />
      </view>
    </view>

    <!-- Top Categories -->
    <scroll-view scroll-x class="whitespace-nowrap py-2 border-b border-gray-100">
      <view class="inline-flex px-2">
        <view
          v-for="(item, index) in topCategories"
          :key="index"
          class="px-4 shrink-0 flex flex-col items-center justify-center relative h-8"
          @click="activeTopCat = index"
        >
          <text
            :class="[
              'text-[15px] whitespace-nowrap',
              activeTopCat === index ? 'font-bold text-black' : 'text-gray-500'
            ]"
          >
            {{ item }}
          </text>
          <view v-if="activeTopCat === index" class="absolute bottom-0 w-6 h-[3px] bg-[#ff3b3b] rounded-full"></view>
        </view>
      </view>
    </scroll-view>

    <!-- Main Content: Left/Right -->
    <view class="flex flex-1 overflow-hidden bg-white">
      <!-- Left Sidebar -->
      <scroll-view scroll-y class="w-[90px] h-full bg-[#f6f6f6]">
        <view
          v-for="(brand, index) in leftBrands"
          :key="index"
          class="relative py-4 px-2 text-center"
          :class="activeBrand === index ? 'bg-white' : ''"
          @click="activeBrand = index"
        >
          <view
            v-if="activeBrand === index"
            class="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-[#ff3b3b] rounded-r"
          ></view>
          <text :class="['text-[14px]', activeBrand === index ? 'font-bold text-[#ff3b3b]' : 'text-gray-600']">
            {{ brand }}
          </text>
        </view>
      </scroll-view>

      <!-- Right Content -->
      <scroll-view scroll-y class="flex-1 h-full relative">
        <view class="p-3 pb-20">
          <!-- Top Banner -->
          <view class="bg-[#fff0f0] rounded flex justify-between items-center py-2 px-3 object-contain mb-4">
            <text class="text-[#333] text-[13px]">懒得选机器？想要卖多台？</text>
            <view class="text-[#ff3b3b] text-[13px] border border-[#ff3b3b] rounded-full px-2 py-0.5 flex items-center">
              快速下单
              <text class="text-[10px] ml-0.5">▶</text>
            </view>
          </view>

          <!-- Dynamic Groups -->
          <view v-for="(group, gIndex) in currentProductGroups" :key="gIndex" class="mb-5">
            <view class="text-[#ff3b3b] text-[16px] font-bold mb-3">{{ group.title }}</view>
            <view
              v-for="(item, iIndex) in group.items"
              :key="iIndex"
              class="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
              @click="openPopup($event, item)"
            >
              <view class="flex items-center">
                <view class="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></view>
                <text class="text-[14px] text-gray-700 truncate w-[140px]">{{ item.name }}</text>
              </view>
              <view class="flex flex-col items-end">
                <text class="text-[#ff3b3b] text-[15px] font-bold" v-if="item.price">¥{{ item.price }}</text>
                <text class="text-[#ff3b3b] text-[15px] font-bold" v-else>暂无报价</text>
                <text class="text-[11px] text-gray-400 mt-1">预计可卖</text>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>

      <!-- Floating Cart Button -->
      <view
        id="cart-icon-btn"
        class="absolute bottom-8 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 z-10"
        style="box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1)"
        @click="goToCart"
      >
        <text class="text-red-500 text-2xl">🛒</text>
        <view
          class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] min-w-[16px] h-4 flex items-center justify-center rounded-full px-1 transition-transform duration-300"
          :class="{ 'scale-125': cartBouncing }"
        >
          {{ cartCount }}
        </view>
      </view>
    </view>

    <!-- Cart Animation Dots -->
    <view
      v-for="anim in animations"
      :key="anim.id"
      class="fixed w-12 h-12 bg-white rounded-lg shadow-sm z-[1000] pointer-events-none flex items-center justify-center overflow-hidden border border-gray-100"
      :style="{
        left: anim.x + 'px',
        top: anim.y + 'px',
        transition: anim.active ? 'all 0.6s cubic-bezier(0.3, -0.2, 0.7, 1)' : 'none',
        transform: anim.active ? 'scale(0.2)' : 'scale(1)',
        opacity: anim.active ? 0.5 : 1
      }"
    >
      <image src="./customer.png" mode="aspectFit" class="w-full h-full" />
    </view>

    <!-- Product Detail Popup -->
    <view v-if="showPopup" class="fixed inset-0 z-[999] flex flex-col justify-end">
      <!-- Mask -->
      <view class="absolute inset-0 bg-black/50 transition-opacity" @click="closePopup"></view>

      <!-- Content -->
      <view class="bg-white rounded-t-xl w-full flex flex-col relative z-10 transition-transform duration-300 h-[70vh]">
        <!-- Header -->
        <view class="flex items-center justify-center p-4 relative border-b border-gray-100">
          <text class="text-[16px] font-bold text-gray-800">{{ currentProduct?.name || '商品详情' }}</text>
          <view class="absolute right-4 top-1/2 -translate-y-1/2 p-2" @click="closePopup">
            <text class="text-gray-400 text-lg">✕</text>
          </view>
        </view>

        <!-- Scrollable Body -->
        <scroll-view scroll-y class="flex-1 bg-white h-0">
          <!-- Image -->
          <view class="flex justify-center items-center py-6">
            <image src="./customer.png" mode="aspectFit" class="w-48 h-48" />
          </view>

          <view class="px-4 pb-4">
            <!-- Helper text -->
            <view class="flex justify-between items-center mb-4">
              <view class="bg-[#ff3b3b] text-white text-[12px] px-2 py-0.5 rounded flex items-center">
                等级说明
                <text
                  class="ml-1 rounded-full border border-white w-3 h-3 flex items-center justify-center text-[10px]"
                >
                  ?
                </text>
              </view>
              <view class="text-[#ff3b3b] text-[13px]">查看历史价格 ></view>
            </view>

            <!-- Title -->
            <view class="flex items-center mb-4">
              <view class="w-1 h-4 bg-[#ff3b3b] mr-2"></view>
              <text class="text-[15px] font-bold text-gray-800">输入数量</text>
            </view>

            <!-- Conditions List -->
            <view class="space-y-4 pb-6">
              <view
                v-for="(condition, cIndex) in popupConditions"
                :key="cIndex"
                class="flex items-center justify-between"
              >
                <view class="flex flex-col">
                  <view class="flex items-center mb-1">
                    <text class="text-[14px] text-gray-800 mr-1">{{ condition.name }}</text>
                    <view
                      class="w-3.5 h-3.5 rounded-full bg-gray-400 text-white flex items-center justify-center text-[10px]"
                    >
                      ?
                    </view>
                  </view>
                  <text class="text-[12px] text-gray-500">
                    回收价:
                    <text class="text-[#ff3b3b] font-bold">￥{{ condition.price }} / 台</text>
                  </text>
                </view>

                <!-- Stepper -->
                <view class="flex items-center bg-[#f7f8fa] rounded">
                  <view
                    class="w-8 h-8 flex items-center justify-center text-gray-500 active:bg-gray-200"
                    @click="updateConditionCount(cIndex, -1)"
                  >
                    -
                  </view>
                  <input type="number" v-model="condition.count" class="w-10 text-center text-[14px] text-gray-800" />
                  <view
                    class="w-8 h-8 flex items-center justify-center text-gray-800 active:bg-gray-200"
                    @click="updateConditionCount(cIndex, 1)"
                  >
                    +
                  </view>
                </view>
              </view>
            </view>
          </view>
        </scroll-view>

        <!-- Bottom Actions -->
        <view
          class="flex items-center justify-between p-3 gap-3 border-t border-gray-100 bg-white pb-[var(--window-bottom,12px)]"
        >
          <text class="text-gray-500 text-[14px] px-2" @click="closePopup">关闭</text>
          <view class="flex-1 flex gap-3">
            <button
              class="flex-1 bg-white !text-[#ff3b3b] border !border-[#ff3b3b] border-solid rounded-full text-[15px] m-0 h-10 flex items-center justify-center"
            >
              回收车 {{ cartCount }}
            </button>
            <button
              class="flex-1 !bg-[#ff3b3b] !text-white rounded-full text-[15px] font-bold m-0 h-10 flex items-center justify-center relative shadow-md"
              @click="handleAddToCart"
            >
              加入回收车
            </button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const topCategories = ref([
  '二手手机',
  '电脑回收',
  '杂货铺',
  '二手平板',
  '中药材',
  '手机内配',
  '靓机回收报价',
  '新机回收报价',
  '名酒',
  '数码相机回收报价',
  '贵金属',
  '古钱币',
  '手机拆机件',
  '家电回收'
])
const activeTopCat = ref(0) // Default to '二手手机'

const allCategoriesData = {
  二手手机: [
    '热门老年机',
    '智能机/电容屏',
    'oppo',
    'vivo',
    '小米',
    '华为',
    '三星',
    '苹果',
    '金立',
    '联想',
    '酷派',
    '魅族',
    '锤子',
    '360',
    'HTC',
    '黑莓',
    '一加',
    '真我/realme',
    '诺基亚',
    '美图',
    '乐视',
    '努比亚',
    '中国移动',
    'TCL',
    '中兴',
    '糖果/国美',
    '国美',
    '海信',
    '步步高',
    '朵唯',
    '摩托罗拉',
    '华硕',
    '柔宇',
    'Infinix传音',
    '苹果单板',
    '谷歌Google',
    '格力',
    '8848'
  ],
  电脑回收: [
    '点数cpu',
    'CPU',
    '品牌笔记本',
    '杂牌笔记本',
    '主机光驱/电源',
    '电脑硬盘',
    '电脑主板',
    '显卡',
    '内存条',
    '显示器',
    '电脑一体机',
    '海康录像机'
  ],
  杂货铺: [],
  二手平板: [],
  中药材: [],
  手机内配: [],
  靓机回收报价: [],
  新机回收报价: [],
  名酒: [],
  数码相机回收报价: [],
  贵金属: [],
  古钱币: [],
  手机拆机件: [],
  家电回收: []
}

const leftBrands = computed(() => {
  const category = topCategories.value[activeTopCat.value]
  return allCategoriesData[category] || allCategoriesData['二手手机']
})

const activeBrand = ref(0)
const activeBrandName = computed(() => {
  const brands = leftBrands.value
  return brands[activeBrand.value]
})

watch([activeTopCat, activeBrand], () => {
  // Logic to fetch data if strictly necessary, but computed handles view
})

// Mock Data Store
const productsData = {
  点数cpu: [
    {
      title: '点数系列',
      items: [
        { name: '英特尔', price: '3.5' },
        { name: 'AMD全针', price: '8' },
        { name: 'AMD半针', price: '7' },
        { name: '陶瓷', price: '25' }
      ]
    },
    {
      title: '其他',
      items: []
    }
  ],
  CPU: [
    {
      title: '其他',
      items: [
        { name: '杂牌内外双度', price: '120' },
        { name: '单镀', price: '45' },
        { name: '大陶瓷', price: '35' },
        { name: '小陶瓷', price: '25' },
        { name: '铝壳', price: '25' },
        { name: '塑料壳', price: '7' }
      ]
    },
    {
      title: '锐龙 (RYZEN)',
      items: [
        { name: '1200', price: '15' },
        { name: '1300X', price: '25' },
        { name: '1400', price: '30' },
        { name: '1500', price: '30' },
        { name: '1500X', price: '50' },
        { name: '1600', price: '70' },
        { name: '1600X', price: '75' },
        { name: '1700', price: '110' },
        { name: '1700X', price: '115' },
        { name: '1700', price: '165' },
        { name: '1800x', price: '125' },
        { name: '3000G', price: '45' },
        { name: '200GE', price: '30' },
        { name: 'R3 1200', price: '0' },
        { name: 'R3 1500', price: '0' },
        { name: 'R3 3100', price: '70' }
      ]
    }
  ],
  热门老年机: [
    {
      title: '统货回收价格',
      items: [
        { name: '功能机（老年机）有...', price: '11' },
        { name: '功能机（老年机）无...', price: '10' }
      ]
    },
    {
      title: '非统货回收价格',
      items: [
        { name: '翻盖老款机（称斤杂...', price: '200' },
        { name: '两成以上翻盖机（称...', price: '90' },
        { name: '直板机（称斤杂机）', price: '75' },
        { name: '双卡大屏机', price: '8.1' }
      ]
    },
    {
      title: '挑货老年机回收价',
      items: [
        { name: '老款5110系列', price: '40' },
        { name: '老款翻盖系列', price: '28' },
        { name: '老款低档诺基亚系列', price: '23' },
        { name: '老款低档诺基亚n70、...', price: '30' },
        { name: '老款低档诺基亚摩托v...', price: '30' },
        { name: '老款摩托罗拉大哥大', price: '80' }
      ]
    },
    {
      title: '保千里',
      items: [{ name: '保千里打令VR至尊版', price: '1999' }]
    },
    {
      title: 'TCL热门机型',
      items: [{ name: 'TCL999d', price: '1666' }]
    },
    {
      title: '双小卡老年机挑货',
      items: [
        { name: '双小卡老年机挑货', price: '12' },
        { name: '双小卡老年机通点', price: '11' }
      ]
    },
    {
      title: '其他',
      items: []
    }
  ],
  default: [
    {
      title: '统货回收价格',
      items: [
        { name: '功能机（老年机）有...', price: '11' },
        { name: '功能机（老年机）无...', price: '10' }
      ]
    },
    {
      title: '非统货回收价格',
      items: [
        { name: '翻盖老款机（称斤杂...', price: '200' },
        { name: '两成以上翻盖机（称...', price: '90' },
        { name: '直板机（称斤杂机）', price: '75' },
        { name: '双卡大屏机', price: '8.1' }
      ]
    }
  ]
}

const currentProductGroups = computed(() => {
  // If we have specific data for the selected brand, used it
  if (productsData[activeBrandName.value]) {
    return productsData[activeBrandName.value]
  }
  // Fallback logic or default data
  return productsData['default']
})

// Popup state
const showPopup = ref(false)
const currentProduct = ref<any>(null)
const popupConditions = ref<any[]>([])

// Reference condition setup based on the screenshot provided
const defaultConditions = [
  { name: '开机屏好', price: '3500', count: 0 },
  { name: '开机屏好外屏碎', price: '2600', count: 0 },
  { name: '开机屏坏未拆标', price: '2600', count: 0 },
  { name: '开机屏坏', price: '1600', count: 0 },
  { name: '不开机', price: '180', count: 0 },
  { name: '废板-整机', price: '150', count: 0 }
]

// Save click position from list item
const lastClickPos = ref({ x: 0, y: 0 })

const openPopup = (e: any, item: any) => {
  // Save touch/click position for animation
  let startX = uni.getSystemInfoSync().windowWidth / 2
  let startY = uni.getSystemInfoSync().windowHeight / 2

  if (e && e.touches && e.touches.length > 0) {
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY
  } else if (e && e.detail && e.detail.x) {
    startX = e.detail.x
    startY = e.detail.y
  } else if (e && e.clientX) {
    startX = e.clientX
    startY = e.clientY
  }
  lastClickPos.value = { x: startX, y: startY }

  currentProduct.value = item
  // Initialize conditions for this product (deep copy mapping mock data)
  popupConditions.value = defaultConditions.map(cond => ({
    ...cond,
    // Just mockup varying prices based on item's base price if available, here we just use the static list or adapt
    price: item.price && item.price !== '0' && cond.name === '开机屏好' ? item.price : cond.price,
    count: 0
  }))
  showPopup.value = true
}

const closePopup = () => {
  showPopup.value = false
}

const updateConditionCount = (index: number, delta: number) => {
  const currentCount = popupConditions.value[index].count
  const newCount = currentCount + delta
  if (newCount >= 0) {
    popupConditions.value[index].count = newCount
  }
}

// Cart Animation and State
const cartCount = ref(3)
const cartBouncing = ref(false)
const animations = ref<any[]>([])

const handleAddToCart = () => {
  // Use the saved click position from opening the popup as start position
  const sysInfo = uni.getSystemInfoSync()
  const windowWidth = sysInfo.windowWidth
  const windowHeight = sysInfo.windowHeight

  let startX = lastClickPos.value.x || windowWidth / 2
  let startY = lastClickPos.value.y || windowHeight / 2

  // Get cart icon position
  const query = uni.createSelectorQuery()
  query
    .select('#cart-icon-btn')
    .boundingClientRect((data: any) => {
      let targetX = windowWidth - 40 // Default fallback right area
      let targetY = windowHeight - 80 // Default fallback bottom area

      if (data) {
        targetX = data.left + data.width / 2 - 10 // Center of icon
        targetY = data.top + data.height / 2 - 10
      }

      const id = Date.now() + Math.random()

      // Initialize dot at start position
      animations.value.push({
        id,
        x: startX,
        y: startY,
        active: false
      })

      // Close popup right away
      closePopup()

      // Trigger animation to target location slightly after render
      setTimeout(() => {
        const animIndex = animations.value.findIndex(a => a.id === id)
        if (animIndex !== -1) {
          animations.value[animIndex].x = targetX
          animations.value[animIndex].y = targetY
          animations.value[animIndex].active = true
        }

        // Clean up animation dot after transition duration (600ms)
        setTimeout(() => {
          removeAnim(id)
        }, 600)
      }, 50)
    })
    .exec()
}

const removeAnim = (id: string | number) => {
  animations.value = animations.value.filter(a => a.id !== id)

  // Increment cart and bounce
  cartCount.value++
  cartBouncing.value = true
  setTimeout(() => {
    cartBouncing.value = false
  }, 300)
}

const goToCart = () => {
  uni.switchTab({
    url: '/pages/cart/index'
  })
}
</script>

<style scoped>
/* Scoped styles if necessary, handled mostly by unocss */
</style>
