export const REQUEST_TIME_OUT = 10000;

/** AccessToken 默认的 localStorage key */
export const ACCESS_TOKEN_MANAGER_DEFAULT_KEY = 'access-token';

/** 用 YES 和 NO 表示布尔值的枚举类型 */
export enum BOOLEAN_STRING_ENUM {
  YES = 'YES',
  NO = 'NO',
}

/** webOptions 基本数据 */
export const WEB_OPTIONS_META_DATA: Record<
  any,
  Partial<{
    name: string
    type: 'string' | 'bool' | 'int'
    description: string
    defaultValue: string | number
    isSupportPushWindow: string
    brief: string
    additionInfo: string
  }>
> = {
  url: {
    name: 'url',
    type: 'string',
    description: '起始url (重要警告：9.6以上客户端请勿使用u缩写！！)',
    defaultValue: '""',
    isSupportPushWindow: 'Y',
  },
  defaultTitle: {
    name: 'defaultTitle',
    type: 'string',
    description: '默认标题, 在页面第一次加载之前显示在标题栏上',
    defaultValue: '""',
    isSupportPushWindow: 'Y',
    brief: 'dt',
  },
  showLoading: {
    name: 'showLoading',
    type: 'string',
    description:
      'YES/NO, 是否在页面内容完全加载前显示全局菊花，期间阻止用户操作页面。**警告：尽量改用showProgress来弱提示用户，否则菊花一直会持续到首屏网络请求完全结束后才消失，期间用户无法操作。**',
    defaultValue: '"NO"',
    isSupportPushWindow: 'Y',
    brief: 'sl',
  },
  readTitle: {
    name: 'readTitle',
    type: 'string',
    description: 'YES/NO, 是否读取网页标题显示在titleBar上',
    defaultValue: '"YES"',
    isSupportPushWindow: 'Y',
    brief: 'rt',
  },
  bizScenario: {
    name: 'bizScenario',
    type: 'string',
    description:
      '业务场景来源，这个值会记录到每一个埋点中，可以用来区分不同来源。',
    defaultValue: '""',
    isSupportPushWindow: '-',
    brief: 'bz',
  },
  backBehavior: {
    name: 'backBehavior',
    type: 'string',
    description:
      'back/pop/auto. 指定后退按钮行为back: history.length > 0 ? history.back() : closeWebview()pop: popWindow()auto: 在iOS上相当于pop；在android上，toolbar可见时相当于back, toolbar不可见时相当于pop。note: 8.4及以后不再支持',
    defaultValue:
      '"back"8.4及以后, 非H5App的通用浏览器模式(appId为20000067)为back，H5App(用应用中心注册过的appId来启动)为pop',
    isSupportPushWindow: '-',
    brief: 'bb',
    additionInfo: 'since 8.1',
  },
  pullRefresh: {
    name: 'pullRefresh',
    type: 'string',
    description: 'YES / NO.是否支持下拉刷新只有集团域/本地文件允许设置为YES',
    defaultValue: '"NO"',
    isSupportPushWindow: 'Y',
    brief: 'pr',
    additionInfo: 'since 8.2',
  },
  showProgress: {
    name: 'showProgress',
    type: 'bool',
    description: 'YES/NO，是否显示加载的进度条',
    defaultValue: '"NO"',
    isSupportPushWindow: '-',
    brief: 'sp',
    additionInfo: 'since 8.2',
  },
  canPullDown: {
    name: 'canPullDown',
    type: 'string',
    description:
      'YES/NO，页面是否支持下拉（显示出黑色背景或者域名）只有*.alipay.com/*.alipay.net/本地文件允许设置为NO 9.9.5废弃， 使用\'allowsBounceVertical\'替代',
    defaultValue: '"YES"',
    isSupportPushWindow: 'YES',
    brief: 'pd',
    additionInfo: 'android since 8.3ios since 8.4',
  },
  showDomain: {
    name: 'showDomain',
    type: 'bool',
    description:
      'YES/NO，页面下拉时是否显示域名只有*.alipay.com/*.alipay.net/本地文件允许设置为NO,离线包强制设置为false,不容许显示',
    defaultValue: '"YES"',
    isSupportPushWindow: '-',
    brief: 'sd',
    additionInfo: 'android since 9.0.1ios since 9.0',
  },
  backgroundColor: {
    name: 'backgroundColor',
    type: 'int',
    description: '设置背景颜色（十进制，例如：bc=16775138）',
    defaultValue: '""',
    isSupportPushWindow: '-',
    brief: 'bc',
    additionInfo: 'since 8.4',
  },
  showOptionMenu: {
    name: 'showOptionMenu',
    type: 'bool',
    description: 'YES/NO，是否显示右上角点点点按钮',
    defaultValue:
      '对于H5App为NO对于非H5App的通用浏览器模式(例如appId为20000067)为YES',
    isSupportPushWindow: '',
    brief: 'so',
    additionInfo: 'since 8.4',
  },
  showTitleLoading: {
    name: 'showTitleLoading',
    type: 'bool',
    description: 'YES/NO，是否在TitleBar的标题左边显示小菊花）',
    defaultValue: 'NO',
    isSupportPushWindow: 'Y',
    brief: 'tl',
    additionInfo: 'since 8.6',
  },
  enableScrollBar: {
    name: 'enableScrollBar',
    type: 'bool',
    description:
      'YES/NO，是否使用webview的滚动条，包括垂直和水平。只对Android有效',
    defaultValue: '默认为"YES"',
    isSupportPushWindow: '-',
    brief: 'es',
    additionInfo: 'since 9.2',
  },
  gestureBack: {
    name: 'gestureBack',
    type: 'bool',
    description: 'YES/NO，是否支持手势返回',
    defaultValue: '"YES"',
    isSupportPushWindow: '-',
    brief: 'gb',
    additionInfo: 'since 8.4(only iOS)',
  },
  preSSOLogin: {
    name: 'preSSOLogin',
    type: 'string',
    description:
      'YES/NO, 离线H5APP是否需要在入口处强制免登, 一般与preSSOLoginUrl配合使用 （二期免登）(重要警告：Android 10.0.2之前请使用长名+短名参数！！)',
    defaultValue: '依赖入口url是否需要免登',
    isSupportPushWindow: '-',
    brief: 'ps',
    additionInfo: 'since 9.9.0',
  },
  preSSOLoginUrl: {
    name: 'preSSOLoginUrl',
    type: 'string',
    description:
      '强制免登URL, 未配置时使用主入口URL（二期免登）(重要警告：Android 10.0.2之前请使用长名+短名参数！！) 注意:仅主文档可支持配置同步免登,资源处为异步免登,若想配置同步免登,参数请务必跟随主文档url',
    defaultValue: '""',
    isSupportPushWindow: '-',
    brief: 'psu',
    additionInfo: 'since 9.9.0',
  },
  preSSOLoginBindingPage: {
    name: 'preSSOLoginBindingPage',
    type: 'string',
    description:
      '强制免登时是否出绑定界面 （二期免登）(重要警告：Android 10.0.2之前请使用长名+短名参数！！)',
    defaultValue: '10.1.2及以上默认"YES",10.1.2以下默认"NO"',
    isSupportPushWindow: '-',
    brief: 'psb',
    additionInfo: 'since 9.9.0',
  },
  safePayEnabled: {
    name: 'safePayEnabled',
    type: 'string',
    description: 'YES/NO, 是否拦截wap收银台唤快捷',
    defaultValue: '"YES"',
    isSupportPushWindow: '-',
    brief: 'pe',
    additionInfo: 'android 8.0有bug, 默认值为"NO"',
  },
  safePayContext: {
    name: 'safePayContext',
    type: 'string',
    description: '用于拦截wap收银台请求时构造bizcontext时追加的内容, 见下文',
    defaultValue: '""',
    isSupportPushWindow: '-',
    brief: 'sc',
  },
  customParams: {
    name: 'customParams',
    type: 'string',
    description: '自定义启动参数，字符串格式，这个值会记录到每一个埋点中',
    defaultValue: '""',
    isSupportPushWindow: '-',
    additionInfo: 'since 9.6.8',
  },
  closeAfterPayFinish: {
    name: 'closeAfterPayFinish',
    type: 'string',
    description:
      'YES/NO，拦截wap支付链接后，当closeAfterPay设置true的时候，或者收银台返回的redirectUrl不为空的时候，或者返回码不等于6001的时候（6001表示用户取消操作） 就关闭当前支付页面，跳转到redirectUrl。',
    defaultValue: '"YES"',
    isSupportPushWindow: '-',
    brief: 'cf',
    additionInfo: 'since 8.2',
  },
  allowsBounceVertical: {
    name: 'allowsBounceVertical',
    type: 'string',
    description:
      'YES/NO，页面是否支持纵向拽拉超出实际内容，android只支持下拉（显示出背景或者域名）只有*.alipay.com/*.alipay.net/本地文件允许设置为NO',
    defaultValue: '"YES"',
    isSupportPushWindow: 'YES',
    brief: 'abv',
    additionInfo: 'since 9.9.3',
  },
  bounceTopColor: {
    name: 'bounceTopColor',
    type: 'int',
    description: '下拉超出时，顶部间缝颜色（十进制，例如：bc=16775138）',
    defaultValue: '不设置时与9.9.3之前显示一致',
    isSupportPushWindow: 'YES',
    brief: 'btc',
    additionInfo: 'since 9.9.3',
  },
  bounceBottomColor: {
    name: 'bounceBottomColor',
    type: 'int',
    description: '上拉超出时，底部间缝颜色（十进制，例如：bc=16775138）',
    defaultValue: '不设置时与9.9.3之前显示一致',
    isSupportPushWindow: 'YES',
    brief: 'bbc',
    additionInfo: 'since 9.9.3(only IOS)',
  },
  waitRender: {
    name: 'waitRender',
    type: 'int',
    description: '等待的时间，单位：毫秒 [0,3000]',
    defaultValue: 0,
    isSupportPushWindow: '-',
    brief: 'wr',
    additionInfo: 'since 9.0',
  },
  isSsoLoginProMode: {
    name: 'isSsoLoginProMode',
    type: 'bool',
    description:
      'YES/NO，没有绑定淘宝的支付宝账号做免登时，是否跳转到淘宝会员名绑定页，默认是"NO"，不跳转到淘宝会员名绑定页面，直接打开原URL',
    defaultValue: '默认为"NO"',
    isSupportPushWindow: '-',
    brief: 'spm',
    additionInfo: 'since 9.0.1',
  },
  networkIndicator: {
    name: 'networkIndicator',
    type: 'bool',
    description: 'YES/NO,是否显示状态栏的网络请求菊花',
    defaultValue: '默认为YES',
    isSupportPushWindow: '',
    additionInfo: 'since 9.3',
  },
  canDestroy: {
    name: 'canDestroy',
    type: 'bool',
    description:
      'YES/NO,当为NO时，重新唤起已打开的APPID时，不销毁之前的应用实例(相当于PushWindow)。 要求同时带上url参数。',
    defaultValue: '默认YES',
    isSupportPushWindow: '',
    brief: 'cd',
    additionInfo: 'since 9.5.3',
  },
  delayRender: {
    name: 'delayRender',
    type: 'bool',
    description:
      'YES/NO 是否启动延迟渲染功能,在非魔法参数的startApp和pushWindow中有效。  \n'
      + ' 注：本功能目前由线上开关控制，若线上开关打开，且指定启动参数为YES或TRUE则生效',
    defaultValue: '"NO"',
    isSupportPushWindow: 'Y',
    additionInfo: 'since 9.3.1(only Android)',
  },
  transparentTitle: {
    name: 'transparentTitle',
    type: 'string',
    description:
      '(不能与titleBarColor同时使用)  \n'
      + 'always/auto 如果transparentTitle为字符串always，则当前页面上下滚动时，titlebar一直全透明；当transparentTitle值为auto，当页面往下滚动时，透明度不断增加，直到scrollTop等于80pt时变成完全不透明，此时页面再往上滚动则反之，透明度不断减小直到回到顶部时变成完全不透明。如果下个页面不需要透明效果，则需要用pushWindow的param参数重新指定transparentTitle为"none"使用注意：1. titlebar透明时，页面内容从屏幕最顶部开始布局，页面需要预留titlebar的高度防止title遮挡页面内容。2. Android 5.0以下由于不支持沉浸式状态栏，所以页面会从状态栏下开始布局。3. 可以通过 getTitleAndStatusbarHeight JSAPI 获取状态栏和titlebar的高度，用于页面调整预留高度。',
    defaultValue: '""',
    isSupportPushWindow: 'Y',
    brief: 'ttb',
    additionInfo: 'since 9.5.1',
  },
  titlePenetrate: {
    name: 'titlePenetrate',
    type: 'string',
    description: '设置导航栏点击穿透，YES/NO',
    defaultValue: '"NO"',
    isSupportPushWindow: 'Y',
    additionInfo: 'since 10.1.52',
  },
  transparentTitleAuto: {
    name: 'transparentTitleAuto',
    type: 'string',
    description:
      '标题跟titleBar背景透明度保持一致。   仅当transparentTitle=auto && transparentTitleTextAuto=YES时才生效，且只有主标题和副标题会有透明效果',
    defaultValue: '默认为"NO"',
    isSupportPushWindow: 'Y',
    brief: 'ttta',
    additionInfo: 'since 10.0.3',
  },
  titleBarColor: {
    name: 'titleBarColor',
    type: 'int',
    description:
      '(9.9版本以下不能与transparentTitle同时使用)自定义titlebar的背景色，（十进制，例如：bc=16775138）',
    defaultValue: '',
    isSupportPushWindow: 'Y',
    brief: 'tbc',
    additionInfo: 'since 9.5.2',
  },
  scrollDistance: {
    name: 'scrollDistance',
    type: 'int',
    description: '在 transparentTitle auto的情况下，滑动到透明度为0.96的距离',
    defaultValue: 'iOS(80);',
    isSupportPushWindow: 'Y',
    brief: 'sds',
    additionInfo: 'since 9.9',
  },
  startMultApp: {
    name: 'startMultApp',
    type: 'string',
    description:
      '是否启动相同appID的应用(Android需要和appClearTop一起使用，举例：appClearTop=false&startMultApp=YES )',
    defaultValue: '"NO"',
    isSupportPushWindow: 'Y',
    brief: 'sms',
    additionInfo: 'since 9.9',
  },
  titleImage: {
    name: 'titleImage',
    type: 'string',
    description:
      '所要使用的title图片地址，请上传一张3X PNG 图，只影响当前的VC,此参数和defaultTitle冲突，若设置titleImage不生效，确定是否有设置defaultTitle；pushWindow不会自动传递此参数，为了更好的体验可以把图放在全局运营资源包中',
    defaultValue: '""',
    isSupportPushWindow: 'Y',
    brief: 'ti',
    additionInfo: 'since 9.9.5',
  },
  fullscreen: {
    name: 'fullscreen',
    type: 'bool',
    description:
      '是否开启全屏模式(集团以外域名需申请白名单方可使用)，全屏后状态栏、时间栏均隐藏，容器会默认在左上角添加一个返回按钮，可通过调用hideTransBack接口隐藏该返回按钮。警告：此为特定业务使用的非稳定功能，可能存在一些未知问题，使用时请做好全量功能回归。注：Android fullscreen 仅支持魔法参数或者scheme参数配置，不支持离线包拓展参数(launchParams)配置',
    defaultValue: '"NO"',
    isSupportPushWindow: 'N',
    brief: 'fs',
    additionInfo: 'since 9.9.7',
  },
  landscape: {
    name: 'landscape',
    type: 'string',
    description:
      '值为空时表示默认的固定竖屏； "landscape" 表示固定横屏； "auto" 表示自动切换横竖屏。**警告：绝大部分JSAPI未做横屏适配，使用前需全量测试界面相关的功能是否正常**',
    defaultValue: '""',
    isSupportPushWindow: 'N',
    brief: 'ls',
    additionInfo: 'since 9.9.7',
  },
  landscapeOrientation: {
    name: 'landscapeOrientation',
    type: 'string',
    description:
      '在启动参数landscape配置了landscape的情况下，可以传入left控制屏幕向左旋转，默认向右旋转 **警告：绝大部分JSAPI未做横屏适配，使用前需全量测试界面相关的功能是否正常**',
    defaultValue: '"right"',
    isSupportPushWindow: 'N',
    brief: 'ls',
    additionInfo: 'since 10.1.20',
  },
  snapshot: {
    name: 'snapshot',
    type: 'string',
    description:
      'snapshot=no 表示禁止截屏，注意：只支持在startApp的时候调用，pushwindow不支持，设置以后当前h5app都不能截屏,退出H5App恢复',
    defaultValue: 'yes',
    isSupportPushWindow: 'Y',
    brief: '',
    additionInfo: 'since 10.0.5',
  },
  transAnimate: {
    name: 'transAnimate',
    type: 'string',
    description:
      '[BETA功能]全屏蒙层功能, 参数配合transparent使用, 二者需同时配置为YES. 仅支持10.0.18及以上, 低版本不建议配置, 需前端兼容注意: 实现方式为启动全屏容器盖住导航栏, 如果页面内请求的资源过多, 有可能导致页面loading时间较长。异常场景补充:1. 业务内建议资源采用内联形式,图片采用base64,主文档加载完成同时资源也加载完成,避免主文档成功但资源失败的场景,导致用户无法正常关闭。2. 业务方需自己处理业务异常, 如404, 否则无关闭按钮3.不支持push/pop4.入口多次点击可能触发异常, 需入口控制不允许重复点击5.使用startApp启动, 使用jspai:closeWebview退出6.不触发前一个界面resume等事件',
    defaultValue: 'NO',
    isSupportPushWindow: 'N',
    brief: '',
    additionInfo: 'since 10.0.18',
  },
  hideCloseButton: {
    name: 'hideCloseButton',
    type: 'string',
    description: '是否隐藏左上角的X',
    defaultValue: 'NO',
    isSupportPushWindow: 'N',
    brief: '',
    additionInfo: 'since 10.1.10',
  },
  nbupdate: {
    name: 'nbupdate',
    type: 'string',
    description: '强制更新版本',
    defaultValue: '',
    isSupportPushWindow: 'Y',
    brief: '',
    additionInfo: 'since 10.1.10',
  },
  appClearTop: {
    name: 'appClearTop',
    type: 'string',
    description: '是否清除前面打开的应用实例',
    defaultValue: '',
    isSupportPushWindow: 'N',
    brief: '',
    additionInfo: 'since 10.1.10',
  },
  nbversion: {
    name: 'nbversion',
    type: 'string',
    description: '最低版本号',
    defaultValue: '',
    isSupportPushWindow: 'Y',
    brief: '',
    additionInfo: 'since 10.1.10',
  },
  transparentTitleTextAuto: {
    name: 'transparentTitleTextAuto',
    type: 'string',
    description: '副标题透明',
    defaultValue: 'N',
    isSupportPushWindow: 'Y',
    brief: '',
    additionInfo: 'since 10.1.10',
  },
};

export const NEBULA_SCHEME = 'alipays://platformapi/startapp?appId=20000067';
