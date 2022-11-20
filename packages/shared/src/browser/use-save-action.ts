import { useCallback, useEffect } from 'react';

/**
 * 保存行为 hooks
 *
 * @param {(e: KeyboardEvent) => void} callback 回调函数
 * @param {any[]} deps 依赖
 * @author YuZhanglong <loveyzl1123@gmail.com>
 */
export const useSaveAction = (
  callback: (e: KeyboardEvent) => Promise<void>,
  deps: any[],
) => {
  const handleKeyDown = useCallback(
    async (e: KeyboardEvent) => {
      if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
        await callback(e);
      }
    },
    [...deps],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [...deps]);
};
