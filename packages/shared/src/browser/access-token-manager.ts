/**
 * 初始化 token 管理器
 *
 * @param {string} tokenKey token 在 localstorage 对应的 key，可选，默认值为 access-token
 * @returns {{
 *   setAccessToken,
 *   getAccessToken,
 * }} 工具函数，一个对象，setAccessToken 表示设置一个 token，getAccessToken 表示获取 accessToken
 * @author YuZhanglong <loveyzl1123@gmail.com>
 */

import { ACCESS_TOKEN_MANAGER_DEFAULT_KEY } from '../constants/common';

export const createAccessTokenManager = (tokenKey?: string) => {
  const finalTokenKey = tokenKey || ACCESS_TOKEN_MANAGER_DEFAULT_KEY;

  const setAccessToken = (accessToken: string) => {
    if (window && window.localStorage) {
      window.localStorage.setItem(finalTokenKey, accessToken);
    }
  };

  const getAccessToken = () => {
    if (window && window.localStorage) {
      return window.localStorage.getItem(finalTokenKey);
    }

    return undefined;
  };

  return {
    setAccessToken,
    getAccessToken,
  };
};
