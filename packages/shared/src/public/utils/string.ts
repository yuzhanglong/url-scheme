/**
 * 判断是否是 http/https 链接
 *
 * @param {string} url 待判断的 url
 * @returns {boolean} 是否是 http/https 链接
 */
export function isHttpOrHttpsURL(url: string) {
  return /^(http|https):/.test(url);
}

/**
 * 判断是否是 alipays 开头的 Scheme
 *
 * @param {string} url 待判断的 URL
 * @returns {boolean} 是否是 alipays 开头的 Scheme
 */
export function isAlipayURL(url: string) {
  return /^alipays:/.test(url);
}

/**
 * 判定域名是否相等
 *
 * @param {string} url 需要对比的url，如: https://www.alipay.com
 * @param {string} host 需要对比的host，如: 'alipay.com'
 * @returns {boolean} 域名是否相等
 * @example
 * isSameHostName(url, "render.alipay.com")
 * isSameHostName(url, "alipay.com")
 */
export function isSameHostName(url: string, host: string) {
  const hostname = new URL(url).hostname;
  return hostname.endsWith(host);
}

/**
 * 判断某个字符串是否被 encode
 *
 * @param {string} str 待判断的字符串
 * @returns {boolean} 是否被 encode
 * @author YuZhanglong <loveyzl1123@gmail.com>
 * @deprecated
 */
export const isEncoded = (str: string) => {
  return str !== decodeURIComponent(str);
};
