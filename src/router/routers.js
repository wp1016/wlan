import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

 const Login = () => import('@/view/login/login.vue')

 const Basic = () => import('@/view/basic/basic.vue')
 const SIP = () => import('@/view/sip/sip.vue')
 const Gateway = () => import('@/view/gateway/gateway.vue')
 const Message = () => import('@/view/message/message.vue')
 const Application = () => import('@/view/application/application.vue')
 const Advanced = () => import('@/view/advanced/advanced.vue')
 const System = () => import('@/view/system/system.vue')
 const Status = () => import('@/view/status/status.vue')
 const Save = () => import('@/view/save/save.vue')

 const Page401 = () => import('@/view/error-page/401.vue')
 const Page404 = () => import('@/view/error-page/404.vue')
 const Page500 = () => import('@/view/error-page/500.vue')


export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: Login
  },
  {
    path: '/',
    name: '_basic',
    redirect: '/basic/basic_page',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
  },
  {
    path: '/basic',
    name: 'basic',
    component: Main,
    meta: {
      title: '基础设置',
      icon: 'md-home'
    },
    children: [
      {
        path: 'basic_page',
        name: 'basic_setting',
        meta: {
          title: '基础设置',
          icon: 'ios-book'
        },
        component: Basic
      },
    ]
  },
  {
    path: '/sip',
    name: 'sip',
    component: Main,
    meta: {
      title: 'SIP设置',
      icon: 'md-home'
    },
    children: [
      {
        path: 'sip_setting',
        name: 'sip_setting',
        meta: {
          title: 'SIP设置',
          icon: 'ios-book'
        },
        component: SIP
      }
    ]
  },
  {
    path: '/gateway',
    name: 'gateway',
    component: Main,
    meta: {
      title: '网关设置',
      icon: 'md-home'
    },
    children: [
      {
        path: 'gateway_setting',
        name: 'gateway',
        meta: {
          title: '网关设置',
          icon: 'ios-book'
        },
        component: Gateway
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      title: '短信设置',
      icon: 'md-home'
    },
    children: [
      {
        path: 'message_setting',
        name: 'message_setting',
        meta: {
          title: '短信设置',
          icon: 'ios-book'
        },
        component: Message
      }
    ]
  },
  {
    path: '/application',
    name: 'application',
    component: Main,
    meta: {
      title: '应用设置',
      icon: 'md-home'
    },
    children: [
      {
        path: 'application_setting',
        name: 'application_setting',
        meta: {
          title: '应用设置',
          icon: 'ios-book'
        },
        component: Application
      }
    ]
  },
  {
    path: '/advanced',
    name: 'advanced',
    component: Main,
    meta: {
      title: '应用设置',
      icon: 'md-home'
    },
    children: [
      {
        path: 'advanced_setup',
        name: 'advanced_setup',
        meta: {
          title: '高级设置',
          icon: 'ios-book'
        },
        component: Advanced
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    component: Main,
    meta: {
      title: '系统设置',
      icon: 'md-home'
    },
    children: [
      {
        path: 'system_setting',
        name: 'system_setting',
        meta: {
          title: '系统设置',
          icon: 'ios-book'
        },
        component: System
      }
    ]
  },
  {
    path: '/status',
    name: 'status',
    component: Main,
    meta: {
      title: '运行状态',
      icon: 'md-home'
    },
    children: [
      {
        path: 'runtime_status',
        name: 'runtime_status',
        meta: {
          title: '运行状态',
          icon: 'ios-book'
        },
        component: Status
      }
    ]
  },
  {
    path: '/save',
    name: 'save',
    component: Main,
    meta: {
      title: '保存重启',
      icon: 'md-home'
    },
    children: [
      {
        path: 'save_restart',
        name: 'save_restart',
        meta: {
          title: '保存重启',
          icon: 'ios-book'
        },
        component: Save
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: Page401
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: Page500
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: Page404
  }
]
