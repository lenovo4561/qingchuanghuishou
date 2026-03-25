<route type="page" lang="json">
{
  "style": {
    "navigationStyle": "custom",
    "navigationBarTextStyle": "white"
  }
}
</route>

<template>
  <view class="min-h-screen bg-[#f3f4f6] pb-24">
    <!-- Header with Background Gradient -->
    <view class="relative w-full rounded-b-3xl" style="background: linear-gradient(135deg, #ff2345 0%, #ff4b58 100%)">
      <view class="fixed z-50 top-0 left-0 right-0" style="padding-top: var(--status-bar-height, 0px)">
        <view class="h-11 flex items-center justify-between px-4 relative">
          <view class="text-white text-[24px] font-light z-10" @tap="goBack">
            <text class="text-[22px] leading-none">‹</text>
          </view>
          <view class="absolute inset-0 flex items-center justify-center text-white text-[17px] font-medium pointer-events-none">会员中心</view>
          <view class="flex items-center gap-4 text-white text-[20px] font-light z-10">
            <text>•••</text>
            <text>—</text>
            <text>◉</text>
          </view>
        </view>
      </view>

      <view class="pt-[calc(var(--status-bar-height,0px)+44px)] pb-16 px-4">
        <!-- VIP Card -->
        <view class="bg-gradient-to-br from-[#ffdca1] to-[#e4a956] rounded-2xl p-5 relative overflow-hidden shadow-lg mt-2">
          <!-- decorative text behind -->
          <view class="absolute right-[-10px] top-[-10px] text-[70px] text-white opacity-20 font-bold italic slant">VIP</view>
          
          <view class="flex items-center relative z-10">
            <view class="w-14 h-14 bg-gray-200 rounded-full border-2 border-white/50 flex items-center justify-center mr-3 overflow-hidden">
              <image src="https://via.placeholder.com/60/e5e7eb/a3a8b4?text=👤" class="w-full h-full object-cover" />
            </view>
            <view class="flex flex-col justify-center">
              <view class="flex items-center">
                <text class="text-[#554000] text-[18px] font-bold tracking-wide mr-2">微信用户</text>
                <view class="bg-[#ffffff] text-[#e4a956] text-[10px] px-2 py-0.5 rounded-full font-bold italic border border-[#e4a956]">VIP</view>
              </view>
              <text class="text-[#8b6f36] text-[12px] mt-1 mr-2 leading-relaxed">暂未开通报价会员，开通立享更多特权！</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- Content below header -->
    <view class="px-4 -mt-10 relative z-10">
      
      <!-- Scrolling Announcement -->
      <view class="bg-[#fff6e6] rounded-full py-2 px-3 flex items-center mb-6 shadow-sm border border-[#ffe0ad]">
        <view class="bg-[#e4a956] text-white text-[10px] px-1.5 py-0.5 rounded mr-2 h-4 flex items-center shadow-sm">赚</view>
        <text class="text-[#775a22] text-[12px] whitespace-nowrap overflow-hidden">王小陆开通年度报价会员 <text class="text-[#775a22]">累计获取收益</text><text class="text-[#ff3b3b] font-bold">13697</text>元</text>
      </view>

      <!-- VIP Privileges -->
      <view class="mb-8">
        <text class="text-[17px] font-bold text-black mb-5 block">会员专属特权</text>
        <view class="grid grid-cols-3 gap-y-6">
          <view class="flex flex-col items-center">
            <view class="w-12 h-12 relative flex items-center justify-center mb-1">
               <view class="absolute inset-0 bg-gradient-to-br from-[#ffd58e] to-[#ffba42] rounded-full opacity-30 transform scale-110 blur-sm"></view>
               <view class="w-12 h-12 bg-gradient-to-br from-[#ffd58e] to-[#ffba42] rounded-full flex items-center justify-center text-white text-[24px] shadow-sm">
                  <text class="text-[20px]">免</text>
               </view>
               <view class="absolute -top-1 -right-1 w-5 h-5 bg-[#ff3b3b] rounded-full text-white text-[10px] flex items-center justify-center font-bold border-2 border-white">免</view>
            </view>
            <text class="text-[#333] text-[12px]">免费查看报价</text>
          </view>
          
          <view class="flex flex-col items-center">
            <view class="w-12 h-12 relative flex items-center justify-center mb-1">
               <view class="w-12 h-12 bg-gradient-to-br from-[#ffd58e] to-[#ffba42] rounded-xl flex items-center justify-center text-white text-[24px] shadow-sm transform -rotate-6">
                 📈
               </view>
            </view>
            <text class="text-[#333] text-[12px]">行情抢先知道</text>
          </view>
          
          <view class="flex flex-col items-center">
            <view class="w-12 h-12 relative flex items-center justify-center mb-1">
               <view class="w-12 h-12 bg-gradient-to-br from-[#ffd58e] to-[#ffba42] rounded-lg flex items-center justify-center text-white text-[24px] shadow-sm">
                 📷
               </view>
            </view>
            <text class="text-[#333] text-[12px]">拍照查价不限次</text>
          </view>
          
          <view class="flex flex-col items-center">
            <view class="w-12 h-12 relative flex items-center justify-center mb-1">
               <view class="w-12 h-12 bg-gradient-to-br from-[#ffd58e] to-[#ffba42] rounded-full flex items-center justify-center text-white text-[24px] shadow-sm">
                 ⭐
               </view>
               <view class="absolute -bottom-1 -right-1 w-5 h-5 bg-[#ff3b3b] rounded-full flex items-center justify-center border-2 border-white shadow-sm"></view>
            </view>
            <text class="text-[#333] text-[12px]">专属收藏报价单</text>
          </view>
          
          <view class="flex flex-col items-center">
            <view class="w-12 h-12 relative flex items-center justify-center mb-1">
               <view class="w-12 h-12 bg-gradient-to-br from-[#ffd58e] to-[#ffba42] rounded-lg flex items-center justify-center text-white text-[22px] shadow-sm">
                 💬
               </view>
               <view class="absolute -bottom-1 -right-1 w-5 h-5 bg-[#ff3b3b] rounded flex items-center justify-center border-2 border-white shadow-sm"></view>
            </view>
            <text class="text-[#333] text-[12px]">报价短信通知</text>
          </view>

          <view class="flex flex-col items-center">
            <view class="w-12 h-12 relative flex items-center justify-center mb-1">
               <view class="w-12 h-12 bg-gradient-to-br from-[#ffd58e] to-[#ffba42] rounded flex items-center justify-center text-white text-[22px] shadow-sm transform -rotate-45">
                 <view class="transform rotate-45">✨</view>
               </view>
               <view class="absolute -bottom-1 -right-1 w-5 h-5 bg-[#ff3b3b] flex items-center justify-center border-2 border-white shadow-sm transform rotate-45"></view>
            </view>
            <text class="text-[#333] text-[12px]">专属VIP服务</text>
          </view>
        </view>
      </view>

      <!-- VIP Packages -->
      <view>
        <text class="text-[17px] font-bold text-black mb-4 block">选择会员套餐</text>
        
        <!-- Package 1 (Selected) -->
        <view class="bg-[#fffcf7] rounded-xl p-4 border border-[#e4a956] mb-3 flex justify-between items-center relative overflow-hidden shadow-sm">
          <view class="flex flex-col">
            <text class="text-[#333] text-[16px] font-bold mb-1">月度会员权限</text>
            <text class="text-[#999] text-[13px] line-through">¥99</text>
          </view>
          <view class="flex flex-col items-end">
            <view class="flex items-baseline text-[#554000]">
              <text class="text-[14px] font-bold mr-0.5">¥</text>
              <text class="text-[28px] font-extrabold leading-none">39</text>
            </view>
            <text class="text-[#c7a465] text-[11px] mt-1">57063人开通</text>
          </view>
        </view>

        <!-- Package 2 -->
        <view class="bg-white rounded-xl p-4 border border-gray-100 mb-3 flex justify-between items-center shadow-sm">
          <view class="flex flex-col">
            <text class="text-[#333] text-[16px] font-medium mb-1">季度会员权限</text>
            <text class="text-[#999] text-[13px] line-through">¥159</text>
          </view>
          <view class="flex flex-col items-end">
            <view class="flex items-baseline text-[#333]">
              <text class="text-[14px] font-bold mr-0.5">¥</text>
              <text class="text-[28px] font-extrabold leading-none">79</text>
            </view>
            <text class="text-[#999] text-[11px] mt-1">5532人开通</text>
          </view>
        </view>

        <!-- Package 3 -->
        <view class="bg-white rounded-xl p-4 border border-gray-100 mb-3 flex justify-between items-center shadow-sm">
          <view class="flex flex-col">
            <text class="text-[#333] text-[16px] font-medium mb-1">半年会员权限</text>
            <text class="text-[#999] text-[13px] line-through">¥299</text>
          </view>
          <view class="flex flex-col items-end">
            <view class="flex items-baseline text-[#333]">
              <text class="text-[14px] font-bold mr-0.5">¥</text>
              <text class="text-[28px] font-extrabold leading-none">110</text>
            </view>
            <text class="text-[#999] text-[11px] mt-1">2935人开通</text>
          </view>
        </view>

        <!-- Package 4 -->
        <view class="bg-white rounded-xl p-4 border border-gray-100 mb-3 flex justify-between items-center shadow-sm">
          <view class="flex flex-col">
            <text class="text-[#333] text-[16px] font-medium mb-1">两年会员权限</text>
            <text class="text-[#999] text-[13px] line-through">¥399</text>
          </view>
          <view class="flex flex-col items-end">
            <view class="flex items-baseline text-[#333]">
              <text class="text-[14px] font-bold mr-0.5">¥</text>
              <text class="text-[28px] font-extrabold leading-none">199</text>
            </view>
            <text class="text-[#999] text-[11px] mt-1">11076人开通</text>
          </view>
        </view>

        <!-- Package 5 -->
        <view class="bg-white rounded-xl p-4 border border-gray-100 mb-3 flex justify-between items-center shadow-sm">
          <view class="flex flex-col">
            <text class="text-[#333] text-[16px] font-medium mb-1">三年会员权限</text>
            <text class="text-[#999] text-[13px] line-through">¥599</text>
          </view>
          <view class="flex flex-col items-end">
            <view class="flex items-baseline text-[#333]">
              <text class="text-[14px] font-bold mr-0.5">¥</text>
              <text class="text-[28px] font-extrabold leading-none">299</text>
            </view>
            <text class="text-[#999] text-[11px] mt-1">1007人开通</text>
          </view>
        </view>
        
        <!-- Package 6 -->
        <view class="bg-white rounded-xl p-4 border border-gray-100 mb-4 flex justify-between items-center shadow-sm">
          <view class="flex flex-col">
            <text class="text-[#333] text-[16px] font-medium mb-1">一年会员权限</text>
            <text class="text-[#999] text-[13px] line-through">¥299</text>
          </view>
          <view class="flex flex-col items-end">
            <view class="flex items-baseline text-[#333]">
              <text class="text-[14px] font-bold mr-0.5">¥</text>
              <text class="text-[28px] font-extrabold leading-none">119</text>
            </view>
            <text class="text-[#999] text-[11px] mt-1">36147人开通</text>
          </view>
        </view>

      </view>

      <!-- Rules Description -->
      <view class="mt-4 pb-8">
        <text class="text-[#666] text-[14px] block mb-2 font-bold">规则说明</text>
        <text class="text-[#666] text-[13px] block mb-3">月度会员权限</text>
        <view class="flex flex-col gap-2">
          <text class="text-[#666] text-[13px]">1、会员免费无限次查看报价</text>
          <text class="text-[#666] text-[13px]">2、价格更新更及时、精准、更权威</text>
          <text class="text-[#666] text-[13px]">3、开通会员一手行情信息抢先知道</text>
          <text class="text-[#666] text-[13px]">4、拍照查价功能会员每日不限次数查询</text>
          <text class="text-[#666] text-[13px] leading-relaxed">5、会员专属收藏报价单，常见机型添加到一起，收货更高效</text>
        </view>
      </view>
    </view>

    <!-- Bottom Action Bar -->
    <view class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-2 pb-[calc(10px+env(safe-area-inset-bottom))] z-50 flex items-center justify-between px-4">
      <view class="text-[#666] text-[15px] flex-1">会员说明</view>
      <view class="w-[200px] h-11 rounded-full flex items-center justify-center text-[#554000] text-[16px] font-bold" style="background: linear-gradient(to right, #ffdca1, #e4a956)">
        立即购买
      </view>
    </view>
    
    <!-- Floating Side Bar -->
    <view class="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#4a4a4a] rounded-l-lg flex flex-col items-center py-2 shadow-lg opacity-90">
       <view class="flex flex-col items-center px-2 py-2 border-b border-gray-500/50">
         <text class="text-white text-[16px] mb-1">📞</text>
         <text class="text-white text-[10px]">电话</text>
       </view>
       <view class="flex flex-col items-center px-2 py-2">
         <text class="text-white text-[16px] mb-1">🎧</text>
         <text class="text-white text-[10px]">客服</text>
       </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const goBack = () => {
  uni.navigateBack()
}
</script>
