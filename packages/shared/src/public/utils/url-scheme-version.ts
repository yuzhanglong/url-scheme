import moment from 'moment';

/**
 * 获取初始 URL Scheme 版本号
 *
 * @returns {string} 初始 URL Scheme 版本号
 * @author YuZhanglong <loveyzl1123@gmail.com>
 */
export const getInitialVersion = () => {
  // noinspection SpellCheckingInspection
  const currentDateStr = moment().format('YYYYMMDD');
  return `${currentDateStr}.1`;
};

/**
 * 更新版本
 *
 * @param {string} oldVersion 旧版本号
 * @returns {string} 新版本号
 * @author YuZhanglong <loveyzl1123@gmail.com>
 */
export const upgradeVersion = (oldVersion: string) => {
  const [date, id] = oldVersion.split('.');
  // noinspection SpellCheckingInspection
  const currentDateStr = moment().format('YYYYMMDD');
  if (currentDateStr === date) {
    return `${date}.${parseInt(id, 10) + 1}`;
  } else {
    return `${currentDateStr}.1`;
  }
};

export const mapVersionToColor = (version: string) => {
  // TODO: 颜色映射
  console.log(version);
  return version;
};
