const SERVER_HOSTS = {
  online: 'https://paytm.antfin-inc.com',
  pre: 'https://paytm-pre.antfin-inc.com',
  local: 'http://paytm-local.alipay.net',
};

const CLIENT_LINKS = {
  online: ['tools.antfin-inc.com'],
  pre: ['utm-pre.antfin-inc.com', 'utm-__tests__.antfin-inc.com'],
  local: ['utm-local.alipay.net'],
};

/**
 * 获取请求服务端的 BASE URL
 *
 * @returns {string} BASE URL
 * @author YuZhanglong <loveyzl1123@gmail.com>
 */
export const getServerBaseURL = () => {
  if (typeof window !== 'undefined') {
    const origin = window.location.origin;

    // 正式环境
    if (CLIENT_LINKS.online.some((link) => origin.endsWith(link))) {
      return SERVER_HOSTS.online;
    }

    // 预发环境
    if (CLIENT_LINKS.pre.some((link) => origin.endsWith(link))) {
      return SERVER_HOSTS.pre;
    }

    // 本地测试
    if (CLIENT_LINKS.local.some((link) => origin.endsWith(link))) {
      return SERVER_HOSTS.local;
    }

    return SERVER_HOSTS.online;
  } else {
    return process.env.NODE_ENV === 'development'
      ? SERVER_HOSTS.local
      : SERVER_HOSTS.pre;
  }
};
