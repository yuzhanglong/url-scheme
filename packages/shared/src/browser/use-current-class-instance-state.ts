import { useState } from 'react';

/**
 * class 实例状态管理 hooks
 *
 * @param {object} initialValue 初始状态值
 * @returns {[object, Function]} 状态值和更新函数
 * @author YuZhanglong <loveyzl1123@gmail.com>
 */
export const useCurrentClassInstanceState = <T>(
  initialValue: T,
): [T, (callback: (currentState: T) => T) => void] => {
  const [currentState, setCurrentState] = useState<{
    current: T
  }>({
    current: initialValue,
  });

  const updateCurrentObjectState = (callback: (currentState: T) => T) => {
    const newState = callback(currentState.current);
    if (newState) {
      setCurrentState({
        current: newState,
      });
    }
  };

  return [currentState.current, updateCurrentObjectState];
};
