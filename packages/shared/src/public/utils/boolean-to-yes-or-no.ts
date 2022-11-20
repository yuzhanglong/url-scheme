import { BOOLEAN_STRING_ENUM } from '../../constants/common';

/**
 * 将布尔值转换成 YES 或 NO 字符串
 *
 * @param {boolean} value 待转换的布尔值
 * @returns {string} YES 或 NO 字符串
 */
export const booleanToYesOrNo = (value: boolean) => {
  return value ? BOOLEAN_STRING_ENUM.YES : BOOLEAN_STRING_ENUM.NO;
};
