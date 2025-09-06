import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavigationItem } from '../../types';

export function useNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems: NavigationItem[] = [
    {
      key: '/',
      label: 'Home',
    },
    {
      key: '/playground',
      label: 'Playground',
    },
  ];

  const handleMenuClick = useCallback(({ key }: { key: string }) => {
    navigate(key);
  }, [navigate]);

  const navigateToHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const navigateToPlayground = useCallback(() => {
    navigate('/playground');
  }, [navigate]);

  const isCurrentPath = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  return {
    menuItems,
    currentPath: location.pathname,
    handleMenuClick,
    navigateToHome,
    navigateToPlayground,
    isCurrentPath,
  };
}
