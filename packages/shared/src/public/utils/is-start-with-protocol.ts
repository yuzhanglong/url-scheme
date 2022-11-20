/**
 * 判断一个字符串是否为某个协议开头(例如 alipays:// https:// http://)
 *
 * @param {string} url URL 字符串
 * @returns {boolean} 是否为合法的 URL
 * @author YuZhanglong <loveyzl1123@gmail.com>
 */
export const isStartWithProtocol = (url: string) => {
  const Expression = /(.*):\/\//;
  const objExp = new RegExp(Expression);
  return objExp.test(url);
};
