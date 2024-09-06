import { useMediaQuery } from 'react-responsive';

const isServer = typeof window === 'undefined';
export function useResponsive() {
  if (isServer) {
    return {
      isMobile: false,
    };
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isMobile = useMediaQuery({ query: 'screen and (max-width: 767px)' });

  return {
    isMobile,
  };
}
