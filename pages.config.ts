import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  // 你也可以定义 pages 字段，它具有最高的优先级。
  pages: [
    {
      path: 'pages/index/index',
      type: 'home',
      style: {
        navigationBarTitleText: '首页',
        navigationBarBackgroundColor: '#ff4d4f',
        navigationBarTextStyle: 'white'
      }
    },
    {
      path: 'pages/product/list',
      type: 'page',
      style: {
        navigationBarTitleText: '产品列表'
      }
    },
    {
      path: 'pages/product/recycle-list-webview',
      type: 'page',
      style: {
        navigationBarTitleText: '回收列表'
      }
    },
    {
      path: 'pages/order/index',
      type: 'page',
      style: {
        navigationBarTitleText: '去下单'
      }
    },
    {
      path: 'pages/cart/index',
      type: 'page',
      style: {
        navigationBarTitleText: '回收车'
      }
    },
    {
      path: 'pages/mine/index',
      type: 'page',
      style: {
        navigationBarTitleText: '我的'
      }
    }
  ],
  globalStyle: {
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: '青创回收'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#ff4d4f',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'static/tabbar/home.png',
        selectedIconPath: 'static/tabbar/home-active.png'
      },
      {
        pagePath: 'pages/order/index',
        text: '去下单',
        iconPath: 'static/tabbar/order.png',
        selectedIconPath: 'static/tabbar/order-active.png'
      },
      {
        pagePath: 'pages/cart/index',
        text: '回收车',
        iconPath: 'static/tabbar/cart.png',
        selectedIconPath: 'static/tabbar/cart-active.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'static/tabbar/mine.png',
        selectedIconPath: 'static/tabbar/mine-active.png'
      }
    ]
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)': 'z-paging/components/z-paging$1/z-paging$1.vue'
    }
  }
})
