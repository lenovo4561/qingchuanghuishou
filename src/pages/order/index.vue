<route type="page" lang="json">
{
  "style": {
    "navigationBarTitleText": "快速下单",
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black"
  }
}
</route>

<template>
  <view class="min-h-screen bg-[#f7f8fa] pb-[160px] text-[14px]">
    <!-- Top 3 Tabs -->
    <view class="flex items-center justify-between px-3 py-3 gap-2">
      <!-- Active Tab -->
      <view class="flex-1 bg-[#fff5f5] border border-[#ff3b3b] rounded-xl flex items-center p-2 relative">
        <view class="w-8 h-8 rounded-full bg-[#ffea3b] flex items-center justify-center mr-2">
          <text class="text-white text-lg">🚀</text>
        </view>
        <view class="flex flex-col">
          <text class="text-[14px] font-bold text-gray-800 break-keep">快速下单</text>
          <text class="text-[10px] text-gray-500 break-keep">免估价 更便捷</text>
        </view>
      </view>

      <!-- Inactive Tab 2 -->
      <view class="flex-1 bg-white border border-gray-200 rounded-xl flex items-center p-2">
        <view class="w-8 h-8 rounded-full bg-[#ff7b3b] flex items-center justify-center mr-2">
          <text class="text-white text-lg">📱</text>
        </view>
        <view class="flex flex-col">
          <text class="text-[14px] font-bold text-gray-800 break-keep">靓机下单</text>
          <text class="text-[10px] text-gray-500 break-keep">多卖35%</text>
        </view>
      </view>

      <!-- Inactive Tab 3 -->
      <view class="flex-1 bg-white border border-gray-200 rounded-xl flex items-center p-2">
        <view class="w-8 h-8 rounded-full bg-[#3bbaff] flex items-center justify-center mr-2">
          <text class="text-white text-lg">♻️</text>
        </view>
        <view class="flex flex-col">
          <text class="text-[14px] font-bold text-gray-800 break-keep">精准下单</text>
          <text class="text-[10px] text-gray-500 break-keep">回收价预测</text>
        </view>
      </view>
    </view>

    <!-- First Card: Order Amount & Price -->
    <view class="mx-3 bg-white rounded-xl p-4 shadow-sm mb-3">
      <view class="mb-4">
        <view class="flex items-center mb-2">
          <text class="font-bold text-[15px] text-gray-800">下单数量（台）</text>
        </view>
        <view class="bg-[#f7f8fa] flex items-center px-3 py-2 rounded-lg">
          <input type="number" class="flex-1 text-[16px]" placeholder="1" value="1" />
        </view>
      </view>

      <view>
        <view class="flex items-center mb-2">
          <text class="font-bold text-[15px] text-gray-800">预估金额（元）</text>
          <text class="text-[12px] text-gray-400 ml-2">(最终成交价以质检金额为准)</text>
        </view>
        <view class="bg-[#f7f8fa] flex items-center px-3 py-2 rounded-lg">
          <input type="number" class="flex-1 text-[16px]" placeholder="1" value="1" />
        </view>
      </view>
    </view>

    <!-- Second Card: Shipping Methods & Notification -->
    <view class="mx-3 bg-white rounded-xl p-4 shadow-sm mb-3">
      <!-- Tabs -->
      <view class="flex items-center mb-3 text-[15px]">
        <view class="relative mr-8" @click="shippingMethod = 'logistics'">
          <text :class="['font-bold', shippingMethod === 'logistics' ? 'text-gray-800' : 'text-gray-500 font-normal']">
            物流发货
          </text>
          <view
            v-if="shippingMethod === 'logistics'"
            class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-[#ff3b3b] rounded-full"
          ></view>
        </view>
        <view class="relative mr-8" @click="shippingMethod = 'delivery'">
          <text :class="['font-bold', shippingMethod === 'delivery' ? 'text-gray-800' : 'text-gray-500 font-normal']">
            送货上门
          </text>
          <view
            v-if="shippingMethod === 'delivery'"
            class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-[#ff3b3b] rounded-full"
          ></view>
        </view>
        <view class="relative" @click="shippingMethod = 'technician'">
          <text :class="['font-bold', shippingMethod === 'technician' ? 'text-gray-800' : 'text-gray-500 font-normal']">
            师傅上门
          </text>
          <view
            v-if="shippingMethod === 'technician'"
            class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-[#ff3b3b] rounded-full"
          ></view>
        </view>
      </view>

      <!-- Logistics Content -->
      <view v-if="shippingMethod === 'logistics'">
        <!-- Notice -->
        <view class="text-[#ff3b3b] bg-[#fff5f5] text-[12px] p-2 rounded mb-3">
          新用户首次下单享运费补贴（仅手机，金额600元以上）
        </view>

        <!-- Voice Notification -->
        <view class="flex items-center text-[14px]">
          <text class="font-bold text-gray-800 mr-4">订单语音通知</text>
          <view class="flex items-center mr-4">
            <view class="w-4 h-4 rounded-full bg-[#ff3b3b] flex items-center justify-center mr-1">
              <text class="text-white text-[10px]">✓</text>
            </view>
            <text class="text-gray-700 text-[13px]">接收通知</text>
          </view>
          <view class="flex items-center">
            <view class="w-4 h-4 rounded-full border border-gray-300 mr-1"></view>
            <text class="text-gray-400 text-[13px]">无需通知</text>
          </view>
        </view>
      </view>

      <!-- Delivery Content -->
      <view v-else-if="shippingMethod === 'delivery'">
        <!-- Search & Filter -->
        <view class="flex items-center justify-between mb-4">
          <view class="flex-1 bg-gray-50 rounded px-3 py-1.5 flex items-center mr-3">
            <text class="text-gray-400 text-lg mr-2">🔍</text>
            <input type="text" placeholder="门店搜索" class="text-[14px] flex-1 bg-transparent" />
          </view>
          <view class="bg-[#ff3b3b] text-white text-[13px] px-3 py-1.5 rounded font-bold" @click="openRegionPicker">
            选择地区
          </view>
        </view>

        <!-- Stores List -->
        <view class="space-y-4">
          <view
            v-for="(store, index) in stores"
            :key="index"
            class="border-b border-gray-50 last:border-0 pb-4 last:pb-0"
          >
            <!-- Header -->
            <view class="flex items-center justify-between mb-1">
              <view class="flex items-center">
                <text class="font-bold text-[15px] text-gray-800 mr-2">{{ store.name }}</text>
                <text v-if="store.isDefault" class="text-[#ff3b3b] text-[12px]">默认站点</text>
              </view>
              <text class="text-gray-400 text-[12px]">{{ store.distance }}</text>
            </view>

            <!-- Address -->
            <view class="text-[13px] text-gray-600 mb-1 leading-relaxed">
              {{ store.address }}
            </view>

            <!-- Hours -->
            <view class="text-[13px] text-gray-500 mb-3">营业时间：{{ store.hours }}</view>

            <!-- Actions Buttons -->
            <view class="flex flex-wrap gap-2">
              <button
                class="bg-white border border-gray-300 text-gray-600 text-[12px] px-3 py-1 rounded-full m-0 leading-normal"
              >
                复制地址
              </button>
              <button
                class="bg-white border border-gray-300 text-gray-600 text-[12px] px-3 py-1 rounded-full m-0 leading-normal"
              >
                拨打电话
              </button>
              <button
                class="bg-white border border-gray-300 text-gray-600 text-[12px] px-3 py-1 rounded-full m-0 leading-normal"
              >
                导航到店
              </button>
              <button
                class="bg-white border border-gray-300 text-gray-600 text-[12px] px-3 py-1 rounded-full m-0 leading-normal"
              >
                附近快递
              </button>
            </view>
          </view>
        </view>
      </view>

      <!-- Technician Content -->
      <view v-else-if="shippingMethod === 'technician'">
        <view class="space-y-0">
          <!-- Nearby Station -->
          <view class="flex items-center justify-between py-4 border-b border-gray-50" @click="openStationPicker">
            <!-- added click handler placeholder -->
            <view class="flex items-center flex-1">
              <text class="w-20 text-gray-500 text-[14px]">附近站点</text>
              <text class="flex-1 text-right text-[#ff3b3b] font-bold text-[14px] truncate ml-2">
                青创回收网深圳运营中心
              </text>
            </view>
            <text class="text-gray-300 text-[14px] ml-1">></text>
          </view>

          <!-- Contact Person -->
          <view class="flex items-center py-4 border-b border-gray-50">
            <text class="w-20 text-gray-500 text-[14px]">联系人</text>
            <view class="w-[1px] h-3 bg-gray-200 mx-2"></view>
            <input
              type="text"
              class="flex-1 text-[14px]"
              placeholder="请输入联系人姓名"
              placeholder-class="text-gray-300"
            />
          </view>

          <!-- Phone -->
          <view class="flex items-center py-4 border-b border-gray-50">
            <text class="w-20 text-gray-500 text-[14px]">联系电话</text>
            <view class="w-[1px] h-3 bg-gray-200 mx-2"></view>
            <input
              type="number"
              class="flex-1 text-[14px]"
              value="13249709366"
              placeholder="请输入联系电话"
              placeholder-class="text-gray-300"
            />
          </view>

          <!-- Region -->
          <view class="flex items-center py-4 border-b border-gray-50" @click="openRegionPicker">
            <text class="w-20 text-gray-500 text-[14px]">所在地区</text>
            <view class="w-[1px] h-3 bg-gray-200 mx-2"></view>
            <text v-if="selectedRegions.length > 0" class="flex-1 text-[14px] text-gray-800">
              {{ selectedRegions.map(r => r.name).join('') }}
            </text>
            <text v-else class="flex-1 text-[14px] text-gray-300">请选择地址</text>
          </view>

          <!-- House Number -->
          <view class="flex items-center py-4 border-b border-gray-50">
            <text class="w-20 text-gray-500 text-[14px]">门牌号</text>
            <view class="w-[1px] h-3 bg-gray-200 mx-2"></view>
            <input
              type="text"
              class="flex-1 text-[14px]"
              placeholder="请输入详细地址，例如**室"
              placeholder-class="text-gray-300"
            />
          </view>

          <!-- Visit Time -->
          <view class="flex items-center py-4" @click="openTimePicker">
            <text class="w-20 text-gray-500 text-[14px]">上门时间</text>
            <view class="w-[1px] h-3 bg-gray-200 mx-2"></view>
            <text v-if="selectedTime" class="flex-1 text-[14px] text-gray-800">{{ selectedTime }}</text>
            <text v-else class="flex-1 text-[14px] text-gray-300">请选择上门时间</text>
          </view>
        </view>
      </view>
    </view>

    <template v-if="shippingMethod === 'logistics'">
      <!-- Third Card: Receiving Info -->
      <view class="mx-3 bg-white rounded-xl p-4 shadow-sm mb-3">
        <view class="flex items-center justify-between mb-3">
          <text class="font-bold text-[15px] text-gray-800">收货信息</text>
          <view class="flex items-center text-[#ff3b3b] text-[13px]">
            <text class="mr-4">周边快递</text>
            <text>更换地址</text>
          </view>
        </view>

        <view class="bg-[#fff5f5] rounded-lg p-3 text-[13px] text-[#e63232] relative">
          <view class="mb-1 flex items-center justify-between">
            <text>收件人: 青创回收</text>
            <view class="bg-[#ff3b3b] text-white px-3 py-0.5 rounded-full text-[12px] absolute right-3 top-3">
              复制
            </view>
          </view>
          <view class="mb-1"><text>联系电话: 13005286705</text></view>
          <view class="leading-relaxed pr-2">
            <text>收货地址: 广东省深圳市福田区南园街道福田区上步南路国企大厦永富楼A栋16D</text>
          </view>
        </view>
      </view>

      <!-- Fourth Card: Tracking Number -->
      <view class="mx-3 bg-white rounded-xl p-4 shadow-sm mb-3">
        <view class="font-bold text-[15px] text-gray-800 mb-3">快递单号 (选填)</view>
        <view class="bg-[#f7f8fa] flex items-center px-3 py-3 rounded-lg mb-3">
          <view class="w-5 h-5 mr-2 text-[#ff3b3b] flex justify-center items-center">
            <view class="border border-[#ff3b3b] w-4 h-4 border-dashed relative">
              <view class="absolute top-1/2 left-0 w-full h-[1px] bg-[#ff3b3b]"></view>
            </view>
          </view>
          <input
            type="text"
            class="flex-1 text-[13px]"
            placeholder="如您已经发货，请在此处填写快递单号"
            placeholder-class="text-[#999]"
          />
        </view>
        <view class="text-[#ff3b3b] text-[13px]">添加多个快递单号 ></view>
      </view>

      <!-- Fifth Card: Remarks -->
      <view class="mx-3 bg-white rounded-xl p-4 shadow-sm mb-3">
        <view class="font-bold text-[15px] text-gray-800 mb-3">备注</view>
        <textarea
          class="w-full text-[13px] h-20 mb-3"
          placeholder="请输入您要备注的信息"
          placeholder-class="text-[#999]"
        ></textarea>
        <!-- Image Upload Placeholder -->
        <view
          class="w-20 h-20 bg-[#f7f8fa] flex items-center justify-center rounded-lg border border-gray-200 border-dashed"
        >
          <text class="text-gray-400 text-3xl">📷</text>
        </view>
      </view>
    </template>

    <template v-if="shippingMethod === 'technician'">
      <!-- Remarks for Technician -->
      <view class="mx-3 bg-white rounded-xl p-4 shadow-sm mb-3">
        <view class="font-bold text-[15px] text-gray-800 mb-3">备注</view>
        <textarea
          class="w-full text-[13px] h-20 mb-3"
          placeholder="请输入您要备注的信息"
          placeholder-class="text-gray-300"
        ></textarea>
        <!-- Image Upload Placeholder -->
        <view
          class="w-20 h-20 bg-[#f7f8fa] flex items-center justify-center rounded-lg border border-gray-200 border-dashed"
        >
          <text class="text-gray-400 text-3xl">📷</text>
        </view>
      </view>
    </template>

    <!-- Supplementary Info -->
    <view class="mx-3 mb-6">
      <text class="font-bold text-[14px] text-gray-800 block mb-2">补充说明</text>
      <view class="text-[12px] text-gray-600 leading-relaxed space-y-1">
        <view>1. 回收业务范围不包含炸弹机、卡贴机、有锁机、ID机、盗抢机！</view>
        <view>2. 邮费自理，到付拒收，新用户首单有运费补贴（限手机类金额600元以上），邮费补贴将在质检后返还。</view>
        <view>3. 达到标准、照单全收、货到公司、当天质检、当天回款！</view>
        <view>4. 快递发货请输入快递单号，物流发货用户请在包裹内留下您的联系方式以便联系。</view>
        <view>5. 有发炸弹机器到本平台的，若要退回需本人带身份证到本公司领取。</view>
      </view>
    </view>

    <!-- Bottom Fixed Actions - Dodges native bottom bar via --window-bottom -->
    <view
      class="fixed bottom-[var(--window-bottom,0px)] left-0 w-full bg-white border-t border-gray-100 flex flex-col z-50"
    >
      <!-- Agreement -->
      <view class="flex items-center px-4 py-2 border-b border-gray-50">
        <view class="w-4 h-4 rounded-full border border-gray-300 mr-2 flex-shrink-0"></view>
        <view class="text-[12px] text-gray-500">
          提交订单等同于同意
          <text class="text-[#ff3b3b]">《用户协议》</text>
          及
          <text class="text-[#ff3b3b]">《服务合同》</text>
        </view>
      </view>

      <!-- Action Buttons -->
      <view class="flex items-center justify-between p-3 gap-3">
        <button
          class="flex-1 bg-white !text-[#ff3b3b] border !border-[#ff3b3b] border-solid rounded-full text-[16px] m-0 h-11 flex items-center justify-center"
        >
          周边快递
        </button>
        <button
          class="flex-1 !bg-[#ff3b3b] !text-white rounded-full text-[16px] font-bold m-0 h-11 flex items-center justify-center"
        >
          立即下单
        </button>
      </view>
    </view>

    <!-- Region Picker Popup -->
    <view v-if="showRegionPicker" class="fixed inset-0 z-[999] flex flex-col justify-end">
      <!-- Mask -->
      <view class="absolute inset-0 bg-black/50 transition-opacity" @click="showRegionPicker = false"></view>

      <!-- Content -->
      <view class="bg-white rounded-t-xl w-full h-[60vh] flex flex-col relative z-10 transition-transform duration-300">
        <!-- Header -->
        <view class="flex items-center justify-center p-4 relative border-b border-gray-100">
          <text class="text-[16px] font-bold text-gray-800">请选择地区</text>
          <view class="absolute right-4 top-1/2 -translate-y-1/2 p-2" @click="showRegionPicker = false">
            <text class="text-gray-400 text-lg">✕</text>
          </view>
        </view>

        <!-- Tabs -->
        <view class="flex items-center px-4 border-b border-gray-100 h-10">
          <view
            v-for="(item, index) in selectedRegions"
            :key="index"
            class="mr-6 text-[14px] h-full flex items-center relative text-gray-800"
            @click="resetLevel(index)"
          >
            {{ item.name }}
          </view>
          <view
            class="text-[#ff3b3b] text-[14px] h-full flex items-center relative font-bold border-b-2 border-[#ff3b3b]"
          >
            请选择
          </view>
        </view>

        <!-- List -->
        <scroll-view scroll-y class="flex-1 w-full bg-white h-0">
          <view v-if="isLoading" class="flex flex-col items-center justify-center pt-20 h-full">
            <view class="w-8 h-8 border-4 border-gray-200 border-t-gray-500 rounded-full animate-spin mb-2"></view>
            <text class="text-gray-500 text-[14px]">加载中...</text>
          </view>
          <view v-else class="px-4 pb-4">
            <view
              v-for="(item, index) in currentRegionList"
              :key="index"
              class="flex items-center justify-between py-3 active:bg-gray-50"
              @click="selectRegion(item)"
            >
              <text class="text-[14px] text-gray-800">{{ item }}</text>
              <text class="text-gray-300 text-[12px]">></text>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>

    <!-- Time Picker Popup -->
    <view v-if="showTimePicker" class="fixed inset-0 z-[999] flex flex-col justify-end">
      <!-- Mask -->
      <view class="absolute inset-0 bg-black/50 transition-opacity" @click="showTimePicker = false"></view>

      <!-- Content -->
      <view class="bg-white rounded-t-xl w-full h-[50vh] flex flex-col relative z-10 transition-transform duration-300">
        <!-- Header -->
        <view class="flex items-center justify-between px-4 py-3 border-b border-gray-100 relative">
          <text class="text-[14px] text-gray-500" @click="showTimePicker = false">取消</text>
          <text class="text-[16px] font-bold text-gray-800">请选择</text>
          <text class="text-[14px] text-[#ff3b3b]" @click="confirmTime">确认</text>
        </view>

        <!-- Picker Body -->
        <view class="flex flex-1 h-0 flex-row">
          <!-- Left: Date List -->
          <scroll-view scroll-y class="w-[120px] bg-[#f7f8fa] h-full">
            <view
              v-for="(day, index) in timeSlots"
              :key="index"
              class="py-4 text-center text-[14px] relative"
              :class="tempSelectedDateIndex === Number(index) ? 'bg-white text-gray-800 font-bold' : 'text-gray-500'"
              @click="handleDateSelect(index)"
            >
              <view
                v-if="tempSelectedDateIndex === Number(index)"
                class="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-[#ff3b3b]"
              ></view>
              {{ day.date }}
            </view>
          </scroll-view>

          <!-- Right: Time List -->
          <scroll-view scroll-y class="flex-1 bg-white h-full">
            <view
              v-for="(time, index) in timeSlots[tempSelectedDateIndex]?.times || []"
              :key="index"
              class="py-4 px-6 text-[14px] flex items-center justify-between border-b border-gray-50 last:border-0"
              @click="handleTimeSelect(index)"
            >
              <text :class="tempSelectedTimeIndex === Number(index) ? 'text-[#ff3b3b] font-bold' : 'text-gray-800'">
                {{ time }}
              </text>
              <text v-if="tempSelectedTimeIndex === Number(index)" class="text-[#ff3b3b]">✔</text>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { onShow } from '@dcloudio/uni-app'

const shippingMethod = ref('delivery') // Default to match request context, or 'logistics' normally
const showRegionPicker = ref(false)
const isLoading = ref(false)
const selectedRegions = ref<{ name: string; code?: string }[]>([])
const currentLevel = ref(0) // 0: Province, 1: City, 2: District

const regionsData = {
  provinces: [
    '北京市',
    '天津市',
    '河北省',
    '山西省',
    '内蒙古自治区',
    '辽宁省',
    '吉林省',
    '黑龙江省',
    '上海市',
    '江苏省',
    '浙江省',
    '安徽省',
    '福建省',
    '江西省',
    '山东省'
  ],
  cities: {
    北京市: ['北京市'],
    天津市: ['天津市'],
    河北省: ['石家庄市', '唐山市', '秦皇岛市', '邯郸市', '邢台市'],
    山西省: ['太原市', '大同市', '阳泉市', '长治市', '晋城市'],
    default: ['示例城市1', '示例城市2', '示例城市3']
  },
  districts: {
    北京市: ['东城区', '西城区', '朝阳区', '丰台区', '石景山区', '海淀区', '通州区'],
    default: ['示例区县1', '示例区县2', '示例区县3']
  }
}

const currentRegionList = computed(() => {
  if (currentLevel.value === 0) {
    return regionsData.provinces
  } else if (currentLevel.value === 1) {
    const provinceName = selectedRegions.value[0]?.name
    return (regionsData.cities as any)[provinceName] || regionsData.cities.default
  } else if (currentLevel.value === 2) {
    // Ideally we would look up districts by city name
    // For mock, just return default or specific if defined
    const cityName = selectedRegions.value[1]?.name
    return (regionsData.districts as any)[cityName] || regionsData.districts.default
  }
  return []
})

const openRegionPicker = () => {
  showRegionPicker.value = true
  if (selectedRegions.value.length === 3) {
    selectedRegions.value = []
    currentLevel.value = 0
  }
}

const selectRegion = (item: string) => {
  isLoading.value = true
  // Mock loading delay
  setTimeout(() => {
    isLoading.value = false
    if (currentLevel.value < 2) {
      selectedRegions.value.push({ name: item })
      currentLevel.value++
    } else {
      selectedRegions.value.push({ name: item })
      showRegionPicker.value = false
      // Here you would save the full address selection
    }
  }, 300)
}

const resetLevel = (index: number) => {
  selectedRegions.value = selectedRegions.value.slice(0, index)
  currentLevel.value = index
}

const stores = [
  {
    name: '青创回收网深圳运营中心',
    distance: '6.99km',
    isDefault: true,
    address: '广东省深圳市福田区南园街道福田区上步南路国企大厦永富楼A栋16D',
    hours: '10:00-22:00'
  },
  {
    name: '安徽门店',
    distance: '1209.14km',
    isDefault: false,
    address: '安徽省阜阳市太和县双浮镇双北路1号青创回收网废旧手机回收中心（五星大桥南50米路）',
    hours: '早6:00 至 晚 18:00'
  }
]

const showTimePicker = ref(false)
const selectedTime = ref('')
const tempSelectedDateIndex = ref(0)
const tempSelectedTimeIndex = ref(-1)

const timeSlots = computed(() => {
  const slots = []
  const now = new Date()
  // Mocking the date as 2026-03-25 based on the user prompt's context date, normally use real date
  // But strictly speaking, `new Date()` uses system time.
  // If the system time is not 2026, it might look different.
  // I'll stick to `new Date()` which is safe.

  for (let i = 0; i < 7; i++) {
    const date = new Date(now)
    date.setDate(now.getDate() + i)
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const dateStr = `${month}月${day}日`

    const times = []
    // Example times: 9:00-18:00
    for (let h = 9; h < 18; h++) {
      times.push(`${h}:00-${h + 1}:00`)
    }
    slots.push({ date: dateStr, times })
  }
  return slots
})

const openStationPicker = () => {
  uni.showToast({ title: '选择附近站点', icon: 'none' })
}

const openTimePicker = () => {
  showTimePicker.value = true
  // Reset selection if needed, or keep previous
  if (!selectedTime.value) {
    tempSelectedDateIndex.value = 0
    tempSelectedTimeIndex.value = -1
  }
}

const handleDateSelect = (index: string | number) => {
  tempSelectedDateIndex.value = Number(index)
  tempSelectedTimeIndex.value = -1
}

const handleTimeSelect = (index: string | number) => {
  tempSelectedTimeIndex.value = Number(index)
}

const confirmTime = () => {
  if (tempSelectedTimeIndex.value === -1) {
    uni.showToast({
      title: '请选择具体时间段',
      icon: 'none'
    })
    return
  }
  const dateObj = timeSlots.value[tempSelectedDateIndex.value]
  const date = dateObj.date
  const time = dateObj.times[tempSelectedTimeIndex.value]
  const currentYear = new Date().getFullYear()

  selectedTime.value = `${currentYear}-${date.replace('月', '-').replace('日', '')} ${time}`
  showTimePicker.value = false
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
