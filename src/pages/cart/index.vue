<route type="page" lang="json">
{
  "style": {
    "navigationBarTitleText": "回收车",
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black"
  }
}
</route>

<template>
  <view class="min-h-screen bg-[#f7f8fa] pb-[calc(60px+var(--window-bottom,0px))]">
    <!-- Empty state -->
    <view v-if="cartList.length === 0" class="flex flex-col items-center pt-24">
      <view class="w-64 h-48 mb-6 relative">
        <image
          src="https://via.placeholder.com/250x180/ffeef0/ff99a8?text=Cart+Illustration"
          class="w-full h-full object-contain"
          mode="aspectFit"
        />
      </view>
      <text class="text-gray-400 text-[15px] mb-5">暂无商品，快去添加吧~~</text>
      <button
        class="!bg-[#ff2b43] !text-white rounded-full text-[16px] px-10 h-10 flex items-center justify-center m-0 shadow-sm border-none"
      >
        去添加
      </button>
    </view>

    <!-- Cart list state -->
    <view v-else class="bg-white">
      <!-- Top Summary -->
      <view class="px-3 py-3 flex justify-between items-center bg-[#fbfbfb] text-[13px] border-b border-[#f0f0f0]">
        <view class="text-[#333]">
          当前已添加
          <text class="text-[#333]">{{ totalItems }}</text>
          件商品，合计
          <text class="text-[#333]">{{ totalQuantity }}</text>
          台，已选
          <text class="text-[#f52b41]">{{ selectedQuantity }}</text>
          台
        </view>
        <view class="text-[#f52b41] flex items-center" @tap="clearCart">
          <text class="mr-1 text-[#e0e0e0]">|</text>
          清空回收车
        </view>
      </view>

      <!-- Cart Sections (Group by Category and Brand) -->
      <view
        v-for="(group, index) in groupedCart"
        :key="index"
        class="mb-2 bg-white pb-2 border-b border-[#f0f0f0] last:border-b-0"
      >
        <!-- Category Title -->
        <view class="flex justify-between items-center py-3 border-b border-[#f0f0f0] px-4">
          <text class="text-[18px] font-bold text-[#333]">{{ group.categoryName }}</text>
          <text class="text-[14px] text-[#333]" @tap="clearCategory(group)">清空</text>
        </view>

        <!-- Brand Title -->
        <view class="bg-[#f5f5f5] text-[#999] text-[14px] px-4 py-2 mt-2 mx-4 rounded-[4px]">
          {{ group.brandName }}
        </view>

        <!-- Items inside Brand -->
        <uni-swipe-action>
          <uni-swipe-action-item
            v-for="(item, iIndex) in group.items"
            :key="item.id"
            :right-options="swipeRightOptions"
            @click="onSwipeDelete(item)"
          >
            <view class="flex items-start py-4 border-b border-[#f6f6f6] last:border-b-0 px-4 bg-white">
              <!-- Checkbox -->
              <view class="mt-1" @click="toggleSelect(item)">
                <icon v-if="item.selected" type="success" size="20" color="#f52b41" />
                <icon v-else type="circle" size="20" color="#d1d1d1" />
              </view>

              <!-- Item Details -->
              <view class="flex-1 ml-3">
                <view class="flex justify-between items-start mb-1">
                  <text class="text-[16px] text-[#333]">{{ item.name }}</text>
                  <view @tap="removeItem(item)">
                    <uni-icons type="trash" size="20" color="#bbbbbb"></uni-icons>
                  </view>
                </view>

                <view class="text-[13px] text-[#999] mb-1">
                  {{ item.specs }}
                </view>

                <view class="flex justify-between items-center mt-2">
                  <text class="text-[14px] text-[#999]">
                    回收价：
                    <text class="text-[#f52b41] text-[15px] font-bold">￥{{ item.price }}</text>
                  </text>

                  <!-- Quantity Control -->
                  <view class="flex items-center border border-[#e5e5e5] rounded-[2px] overflow-hidden">
                    <view
                      class="w-[28px] h-[24px] flex justify-center items-center bg-[#f8f8f8] text-[#999] text-[14px] active:bg-[#eee]"
                      @tap="decrease(item)"
                    >
                      -
                    </view>
                    <view
                      class="w-[36px] h-[24px] flex justify-center items-center text-[#333] text-[14px] border-l border-r border-[#e5e5e5]"
                    >
                      {{ item.quantity }}
                    </view>
                    <view
                      class="w-[28px] h-[24px] flex justify-center items-center bg-[#f52b41] text-white text-[14px] active:bg-[#e0263a]"
                      @tap="increase(item)"
                    >
                      +
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>

      <!-- Bottom Hint -->
      <view class="text-[#999] text-[13px] py-4 bg-[#f7f8fa] px-4">提示：左滑可删除产品</view>

      <!-- Bottom Fixed Action Bar -->
      <view
        class="fixed bottom-[var(--window-bottom,0px)] left-0 right-0 h-[60px] bg-white border-t border-[#f0f0f0] flex items-center px-4 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]"
      >
        <view class="flex items-center" @tap="toggleSelectAll">
          <icon v-if="isAllSelected" type="success" size="20" color="#f52b41" />
          <icon v-else type="circle" size="20" color="#d1d1d1" />
          <text class="ml-2 text-[14px] text-[#666]">全选</text>
        </view>

        <view class="ml-4 flex-1">
          <text class="text-[16px] font-bold text-[#333]">合计:</text>
          <text class="text-[18px] font-bold text-[#f52b41] ml-1">￥{{ totalPrice.toFixed(2) }}</text>
        </view>

        <view class="flex space-x-2">
          <button
            class="!bg-[#ff952b] !text-white rounded-full text-[14px] px-4 h-[36px] flex items-center justify-center m-0 border-none"
          >
            继续添加
          </button>
          <button
            class="!bg-[#f52b41] !text-white rounded-full text-[14px] px-4 h-[36px] flex items-center justify-center m-0 border-none"
          >
            提交订单
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { onShow } from '@dcloudio/uni-app'

// Mock Data
const cartList = ref([
  {
    id: 1,
    categoryId: 'c1',
    categoryName: '二手手机',
    brandId: 'b1',
    brandName: '苹果',
    name: 'iphone 16promax',
    specs: '开机屏坏（无ID）',
    price: 3000,
    quantity: 1,
    selected: true
  },
  {
    id: 2,
    categoryId: 'c1',
    categoryName: '二手手机',
    brandId: 'b1',
    brandName: '苹果',
    name: 'iphone 16promax',
    specs: '开机屏好（无ID）',
    price: 4800,
    quantity: 1,
    selected: true
  },
  {
    id: 3,
    categoryId: 'c2',
    categoryName: '二手手机',
    brandId: 'b2',
    brandName: '热门老年机',
    name: '翻盖老款机（称斤杂机）',
    specs: '价格',
    price: 200,
    quantity: 1,
    selected: true
  }
])

const swipeRightOptions = [
  {
    text: '删除',
    style: {
      backgroundColor: '#f52b41'
    }
  }
]

// Computed grouping
const groupedCart = computed(() => {
  const groups: Record<string, any> = {}

  cartList.value.forEach(item => {
    const key = `${item.categoryId}-${item.brandId}`
    if (!groups[key]) {
      groups[key] = {
        categoryId: item.categoryId,
        categoryName: item.categoryName,
        brandId: item.brandId,
        brandName: item.brandName,
        items: []
      }
    }
    groups[key].items.push(item)
  })

  return Object.values(groups)
})

const totalItems = computed(() => new Set(cartList.value.map(i => i.id)).size)
const totalQuantity = computed(() => cartList.value.reduce((acc, curr) => acc + curr.quantity, 0))
const selectedQuantity = computed(() =>
  cartList.value.filter(i => i.selected).reduce((acc, curr) => acc + curr.quantity, 0)
)
const totalPrice = computed(() =>
  cartList.value.filter(i => i.selected).reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
)

const isAllSelected = computed(() => {
  return cartList.value.length > 0 && cartList.value.every(i => i.selected)
})

const toggleSelectAll = () => {
  const newState = !isAllSelected.value
  cartList.value.forEach(item => (item.selected = newState))
}

const toggleSelect = (item: any) => {
  item.selected = !item.selected
}

const increase = (item: any) => {
  item.quantity++
}

const decrease = (item: any) => {
  if (item.quantity > 1) {
    item.quantity--
  }
}

const clearCart = () => {
  uni.showModal({
    title: '提示',
    content: '确定清空所有商品吗？',
    success: res => {
      if (res.confirm) {
        cartList.value = []
      }
    }
  })
}

const clearCategory = (category: any) => {
  uni.showModal({
    title: '提示',
    content: `确定清空${category.categoryName}下的商品吗？`,
    success: res => {
      if (res.confirm) {
        cartList.value = cartList.value.filter(i => i.categoryId !== category.categoryId)
      }
    }
  })
}

const removeItem = (item: any) => {
  cartList.value = cartList.value.filter(i => i.id !== item.id)
}

const onSwipeDelete = (item: any) => {
  removeItem(item)
}

onShow(() => {
  try {
    uni.showTabBar({
      animation: false
    })
  } catch (e) {
    // 忽略异常
  }
})
</script>

<style scoped>
button::after {
  display: none;
}
</style>
