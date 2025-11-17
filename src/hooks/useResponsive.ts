import { useMediaQuery } from 'react-responsive';

export function useResponsive() {
  const isMobile = useMediaQuery({
    query: `screen and (max-width: ${768 - 1}px)`,
  });

  return {
    isMobile,
  };
}
