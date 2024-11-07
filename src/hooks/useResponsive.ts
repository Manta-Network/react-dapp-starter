import { useMediaQuery } from 'react-responsive';
import { DEVICE_BREAKPOINTS } from '@/lib/responsive';

export function useResponsive() {
  const isMobile = useMediaQuery({
    query: `screen and (max-width: ${DEVICE_BREAKPOINTS.TABLET - 1}px)`,
  });

  return {
    isMobile,
  };
}
