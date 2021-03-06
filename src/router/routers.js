import Main from '@/components/main'
// import parentView from '@/components/parent-view'

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

const Basic = () => import('@/view/basic/basic.vue')
const SIPBasic = () => import('@/view/basic/sip.vue')
const BasicDevice = () => import('@/view/basic/device.vue')
const MessageRegistry = () => import('@/view/basic/registry.vue')

const AdvancedSIP = () => import('@/view/advanced/sip.vue')
const AdvancedMessage = () => import('@/view/advanced/message.vue')
const AdvancedPort = () => import('@/view/advanced/port.vue')
const AdvancedImei = () => import('@/view/advanced/imei.vue')
const AdvancedCurrentBaseStation = () => import('@/view/advanced/current_base_station.vue')
const AdvancedRule = () => import('@/view/advanced/rule.vue')
const AdvancedFlowControll = () => import('@/view/advanced/flow_controll.vue')
const AdvancedMobile = () => import('@/view/advanced/mobile.vue')
const AdvancedUssd = () => import('@/view/advanced/ussd.vue')
const AdvancedPersonate = () => import('@/view/advanced/personate.vue')
const AdvancedCall = () => import('@/view/advanced/call.vue')
const AdvancedOCDL = () => import('@/view/advanced/outcall_duration_limit.vue')
const AdvancedPhoneNumber = () => import('@/view/advanced/phone_number.vue')
const AdvancedCallback = () => import('@/view/advanced/callback.vue')
const AdvancedGprs = () => import('@/view/advanced/gprs.vue')
const AdvancedLed = () => import('@/view/advanced/led.vue')
const AdvancedTest = () => import('@/view/advanced/test.vue')
const Save = () => import('@/view/advanced/save.vue')

const Page401 = () => import('@/view/error-page/401.vue')
const Page404 = () => import('@/view/error-page/404.vue')
const Page500 = () => import('@/view/error-page/500.vue')

export default [
  {
    path: '/',
    name: '_basic',
    redirect: '/basic/network',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    }
  },
  {
    path: '/basic',
    name: 'basic_setting',
    component: Main,
    meta: {
      title: '基本设置',
      icon: 'md-home'
    },
    children: [
      {
        path: 'network',
        name: 'network_setting',
        meta: {
          title: '网络设置',
          icon: 'ios-book'
        },
        component: Basic
      },
      {
        path: 'sip',
        name: 'sip_setting',
        meta: {
          title: 'SIP设置',
          icon: 'ios-book'
        },
        component: SIPBasic
      },
      {
        path: 'message_registry',
        name: 'message_registry',
        meta: {
          title: '短信注册',
          icon: 'ios-book'
        },
        component: MessageRegistry
      },
      {
        path: 'device',
        name: 'device_control',
        meta: {
          title: '设备管理',
          icon: 'ios-book'
        },
        component: BasicDevice
      }
    ]
  },
  {
    path: '/advanced',
    name: 'advanced_setup',
    component: Main,
    meta: {
      title: '高级设置',
      icon: 'md-home'
    },
    children: [
      {
        path: 'sip',
        name: 'advanced_sip',
        meta: {
          title: 'SIP高级设置',
          icon: 'ios-book'
        },
        component: AdvancedSIP
      },
      {
        path: 'message',
        name: 'advanced_message',
        meta: {
          title: '短信高级设置',
          icon: 'ios-book'
        },
        component: AdvancedMessage
      },
      {
        path: 'port',
        name: 'port_setting',
        meta: {
          title: '端口设置',
          icon: 'ios-book'
        },
        component: AdvancedPort
      },
      {
        path: 'imei',
        name: 'imei_setting',
        meta: {
          title: 'IMEI设置',
          icon: 'ios-book'
        },
        component: AdvancedImei
      },
      {
        path: 'cur_station',
        name: 'current_base_station',
        meta: {
          title: '当前基站',
          icon: 'ios-book'
        },
        component: AdvancedCurrentBaseStation
      },
      {
        path: 'rule',
        name: 'rule_setting',
        meta: {
          title: '规则设置',
          icon: 'ios-book'
        },
        component: AdvancedRule
      },
      {
        path: 'flow_controll',
        name: 'call_flow_controll',
        meta: {
          title: '呼叫流量控制',
          icon: 'ios-book'
        },
        component: AdvancedFlowControll
      },
      {
        path: 'mobile',
        name: 'mobile_setting',
        meta: {
          title: 'Mobile设置',
          icon: 'ios-book'
        },
        component: AdvancedMobile
      },
      {
        path: 'ussd',
        name: 'ussd_setting',
        meta: {
          title: 'USSD设置',
          icon: 'ios-book'
        },
        component: AdvancedUssd
      },
      {
        path: 'personate',
        name: 'personate',
        meta: {
          title: '拟人化',
          icon: 'ios-book'
        },
        component: AdvancedPersonate
      },
      {
        path: 'call',
        name: 'call_setting',
        meta: {
          title: '互打设置',
          icon: 'ios-book'
        },
        component: AdvancedCall
      },
      {
        path: 'number',
        name: 'number_control',
        meta: {
          title: 'SIM卡号码设置',
          icon: 'ios-book'
        },
        component: AdvancedPhoneNumber
      },
      {
        path: 'callback',
        name: 'callback_setting',
        meta: {
          title: '回拨设置',
          icon: 'ios-book'
        },
        component: AdvancedCallback
      },
      {
        path: 'ocdl',
        name: 'outcall_duration_limit',
        meta: {
          title: '呼叫时长限制',
          icon: 'ios-book'
        },
        component: AdvancedOCDL
      },
      {
        path: 'gprs',
        name: 'gprs_setting',
        meta: {
          title: '上网设置',
          icon: 'ios-book'
        },
        component: AdvancedGprs
      },
      {
        path: 'led',
        name: 'led_setting',
        meta: {
          title: 'LED设置',
          icon: 'ios-book'
        },
        component: AdvancedLed
      },
      {
        path: 'test',
        name: 'net_test',
        meta: {
          title: '网络测试',
          icon: 'ios-book'
        },
        component: AdvancedTest
      },
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
// {
//   path: 'user',
//   name: 'user_control',
//   meta: {
//     title: '用户管理',
//     icon: 'ios-book'
//   },
//   component: SystemUser
// }
// {
//   path: 'auto',
//   name: 'auto_charge',
//   meta: {
//     title: '自动充值',
//     icon: 'ios-book'
//   },
//   component: ApplicationAutoCharge
// },
// {
//   path: 'message_setting',
//   name: 'message_setting',
//   meta: {
//     title: '短信设置',
//     icon: 'ios-book'
//   },
//   component: MessageSetting
// },
// {
//   path: 'control',
//   name: 'message_control',
//   meta: {
//     title: '短信控制',
//     icon: 'ios-book'
//   },
//   component: MessageControl
// },
// {
//   path: 'prefix',
//   name: 'prefix_match',
//   meta: {
//     title: '前缀匹配',
//     icon: 'ios-book'
//   },
//   component: MessagePrefix
// },
// {
//   path: 'encode',
//   name: 'encode_select',
//   meta: {
//     title: '编码选择',
//     icon: 'ios-book'
//   },
//   component: AdvancedEncode
// },
// {
//   path: '/gateway',
//   name: 'gateway',
//   component: Main,
//   meta: {
//     title: '网关设置',
//     icon: 'md-home'
//   },
//   children: [
//
//     {
//       path: 'bsc',
//       name: 'bsc_setting',
//       meta: {
//         title: '基站设置',
//         icon: 'ios-book'
//       },
//       component: GatewayBsc
//     },
//     {
//       path: 'pin',
//       name: 'pin_setting',
//       meta: {
//         title: 'PIN设置',
//         icon: 'ios-book'
//       },
//       component: GatewayPin
//     },
//     {
//       path: 'sim',
//       name: 'sim_control',
//       meta: {
//         title: 'SIM管理',
//         icon: 'ios-book'
//       },
//       component: GatewaySim
//     },
//     {
//       path: 'number',
//       name: 'number_control',
//       meta: {
//         title: '号码管理',
//         icon: 'ios-book'
//       },
//       component: GatewayPhoneNumber
//     },
//     {
//       path: 'price',
//       name: 'price_control',
//       meta: {
//         title: '计费管理',
//         icon: 'ios-book'
//       },
//       component: GatewayPrice
//     },
//     // {
//     //   path: 'at',
//     //   name: 'at_command',
//     //   meta: {
//     //     title: 'AT命令',
//     //     icon: 'ios-book'
//     //   },
//     //   component: GatewayAt
//     // },
//     {
//       path: 'ussd',
//       name: 'ussd_command',
//       meta: {
//         title: 'USSD命令',
//         icon: 'ios-book'
//       },
//       component: GatewayUssd
//     },
//     {
//       path: 'card',
//       name: 'card_setting',
//       meta: {
//         title: '切卡设置',
//         icon: 'ios-book'
//       },
//       component: GatewayCard
//     },
//     {
//       path: 'communication',
//       name: 'call_setting',
//       meta: {
//         title: '互打设置',
//         icon: 'ios-book'
//       },
//       component: GatewayCall
//     },
//     {

//     // {
//     //   path: 'ocfl',
//     //   name: 'outcall_freq_limit',
//     //   meta: {
//     //     title: '呼叫频率限制',
//     //     icon: 'ios-book'
//     //   },
//     //   component: GatewayOCFL
//     // }
//   ]
// },
// {
//   path: '/message',
//   name: 'message_setting',
//   component: Main,
//   meta: {
//     title: '短信设置',
//     icon: 'md-home'
//   },
//   children: [
//     {
//       path: 'port',
//       name: 'sms_port_setting',
//       meta: {
//         title: '端口设置',
//         icon: 'ios-book'
//       },
//       component: MessagePort
//     },
//     {
//       path: 'send',
//       name: 'message_send',
//       meta: {
//         title: '短信发送',
//         icon: 'ios-book'
//       },
//       component: MessageSend
//     },
//     {
//       path: 'receive',
//       name: 'message_receive',
//       meta: {
//         title: '短信接收',
//         icon: 'ios-book'
//       },
//       component: MessageRecieve
//     },
//     // {
//     //   path: 'transmit',
//     //   name: 'message_transmit',
//     //   meta: {
//     //     title: '短信转发',
//     //     icon: 'ios-book'
//     //   },
//     //   component: MessageTransmit
//     // },
//     {
//       path: 'send_each',
//       name: 'message_send_each',
//       meta: {
//         title: '短信互发',
//         icon: 'ios-book'
//       },
//       component: MessageSendEach
//     },
//     {
//       path: 'smpp',
//       name: 'smpp_setting',
//       meta: {
//         title: 'SMPP设置',
//         icon: 'ios-book'
//       },
//       component: MessageSmpp
//     },
//     {
//       path: 'eims',
//       name: 'eims_setting',
//       meta: {
//         title: 'EIMS设置',
//         icon: 'ios-book'
//       },
//       component: MessageEims
//     },
//     {

//     // {
//     //   path: 'filter',
//     //   name: 'message_filter',
//     //   meta: {
//     //     title: '短信过滤',
//     //     icon: 'ios-book'
//     //   },
//     //   component: MessageFilter
//     // },
//     // {
//     //   path: 'mms',
//     //   name: 'mms_config',
//     //   meta: {
//     //     title: '彩信配置',
//     //     icon: 'ios-book'
//     //   },
//     //   component: MessageMMs
//     // }

//   ]
// },
// {
//   path: '/application',
//   name: 'application_setting',
//   component: Main,
//   meta: {
//     title: '应用设置',
//     icon: 'md-home'
//   },
//   children: [
//     // {
//     //   path: 'tel_dir',
//     //   name: 'telephone_directory',
//     //   meta: {
//     //     title: '电话簿',
//     //     icon: 'ios-book'
//     //   },
//     //   component: ApplicationTelDir
//     // },
//     // {
//     //   path: 'rule',
//     //   name: 'dialing_rules',
//     //   meta: {
//     //     title: '拨号规则',
//     //     icon: 'ios-book'
//     //   },
//     //   component: ApplicationDialingRules
//     // },
//     // {
//     //   path: 'exchange',
//     //   name: 'exchange_setting',
//     //   meta: {
//     //     title: '替换设置',
//     //     icon: 'ios-book'
//     //   },
//     //   component: ApplicationExchange
//     // },
//     // {
//     //   path: 'in_black',
//     //   name: 'incoming_black_list',
//     //   meta: {
//     //     title: '呼入黑名单',
//     //     icon: 'ios-book'
//     //   },
//     //   component: ApplicationInBlack
//     // },
//     // {
//     //   path: 'in_white',
//     //   name: 'incoming_white_list',
//     //   meta: {
//     //     title: '呼入白名单',
//     //     icon: 'ios-book'
//     //   },
//     //   component: ApplicationInWhite
//     // },
//     // {
//     //   path: 'change_online',
//     //   name: 'change_card_online',
//     //   meta: {
//     //     title: '远程换卡',
//     //     icon: 'ios-book'
//     //   },
//     //   component: ApplicationChangeOnline
//     // },
//     // {
//     //   path: 'report',
//     //   name: 'status_report',
//     //   meta: {
//     //     title: '状态报告',
//     //     icon: 'ios-book'
//     //   },
//     //   component: ApplicationStatusReport
//     // }
//   ]
// },

// {
//   path: '/system',
//   name: 'system_setting',
//   component: Main,
//   meta: {
//     title: '系统设置',
//     icon: 'md-home'
//   },
//   children: [

//     {
//       path: 'role',
//       name: 'role_control',
//       meta: {
//         title: '角色管理',
//         icon: 'ios-book'
//       },
//       component: SystemRole
//     },

//     {
//       path: 'log',
//       name: 'log_control',
//       meta: {
//         title: '日志管理',
//         icon: 'ios-book'
//       },
//       component: SystemLog
//     },
//     {
//       path: 'update',
//       name: 'system_recovery',
//       meta: {
//         title: '系统升级或恢复',
//         icon: 'ios-book'
//       },
//       component: SystemUpdate
//     },
//     {
//       path: 'monitor',
//       name: 'system_monitor',
//       meta: {
//         title: '系统监控',
//         icon: 'ios-book'
//       },
//       component: SystemMonitor
//     },
//     {
//       path: 'warning',
//       name: 'system_warning',
//       meta: {
//         title: '系统告警',
//         icon: 'ios-book'
//       },
//       component: SystemWarning
//     }
//   ]
// },
// {
//   path: '/status',
//   name: 'runtime_status',
//   component: Main,
//   meta: {
//     title: '运行状态',
//     icon: 'md-home'
//   },
//   children: [
//     {
//       path: 'port',
//       name: 'port_status',
//       meta: {
//         title: '端口状态',
//         icon: 'ios-book'
//       },
//       component: PortStatus
//     },
//     {
//       path: 'call',
//       name: 'call_status',
//       meta: {
//         title: '呼叫状态',
//         icon: 'ios-book'
//       },
//       component: CallStatus
//     },
//     {
//       path: 'system',
//       name: 'system_status',
//       meta: {
//         title: '系统状态',
//         icon: 'ios-book'
//       },
//       component: SystemStatus
//     },
//     {
//       path: 'call_statistics',
//       name: 'call_statistics',
//       meta: {
//         title: '呼叫统计',
//         icon: 'ios-book'
//       },
//       component: CallStatistics
//     },
//     {
//       path: 'call_each_statistics',
//       name: 'call_each_statistics',
//       meta: {
//         title: '互打统计',
//         icon: 'ios-book'
//       },
//       component: CallEachStatistics
//     },
//     {
//       path: 'media',
//       name: 'media_statistics',
//       meta: {
//         title: '媒体统计',
//         icon: 'ios-book'
//       },
//       component: MediaStatistics
//     },
//     {
//       path: 'message',
//       name: 'message_statistics',
//       meta: {
//         title: '短信统计',
//         icon: 'ios-book'
//       },
//       component: MessageStatistics
//     },
//     {
//       path: 'gprs',
//       name: 'gprs_statistics',
//       meta: {
//         title: '流量统计',
//         icon: 'ios-book'
//       },
//       component: GprsStatistics
//     },
//     {
//       path: 'cdr',
//       name: 'crd_search',
//       meta: {
//         title: 'CDR查询',
//         icon: 'ios-book'
//       },
//       component: Cdr
//     },
//     {
//       path: 'sms',
//       name: 'sms_search',
//       meta: {
//         title: 'SMS查询',
//         icon: 'ios-book'
//       },
//       component: Sms
//     }
//   ]
// },
