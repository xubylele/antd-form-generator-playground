import { useCallback, useState } from 'react';

export function useLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleCollapsed = useCallback(() => {
    setIsCollapsed(prev => !prev);
  }, []);

  const setMobile = useCallback((mobile: boolean) => {
    setIsMobile(mobile);
  }, []);

  const resetLayout = useCallback(() => {
    setIsCollapsed(false);
  }, []);

  return {
    isCollapsed,
    isMobile,
    toggleCollapsed,
    setMobile,
    resetLayout,
  };
}
