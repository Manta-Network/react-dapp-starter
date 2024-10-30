// Device breakpoints configuration
export const DEVICE_BREAKPOINTS = {
  MOBILE: 390, // mobile mockup width
  TABLET: 768,
  DESKTOP: 1440, // desktop mockup width
  LARGE_DESKTOP: 2560,
} as const;

// Base font size (px)
const BASE_FONT_SIZE = 16;

/**
 * Calculate the ratio between current screen width and mockup width
 */
const calculateScreenRatio = (): number => {
  const width = document.documentElement.clientWidth;
  const base =
    width < DEVICE_BREAKPOINTS.TABLET
      ? DEVICE_BREAKPOINTS.MOBILE
      : DEVICE_BREAKPOINTS.DESKTOP;

  // Keep 1:1 ratio for desktop within reasonable range
  if (
    width >= DEVICE_BREAKPOINTS.DESKTOP &&
    width <= DEVICE_BREAKPOINTS.LARGE_DESKTOP
  ) {
    return 1;
  }

  return Math.min(width / base, 2);
};

export const px2rem = (px: number, withUnit = true): string => {
  const value = px / BASE_FONT_SIZE;
  return withUnit ? `${value}rem` : String(value);
};

const updateRootFontSize = (): void => {
  const ratio = calculateScreenRatio();
  document.documentElement.style.fontSize = `${BASE_FONT_SIZE * ratio}px`;
};

const throttle = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): T => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return ((...args: Parameters<T>) => {
    if (timeoutId) return;

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  }) as T;
};

export const initResponsive = (): void => {
  updateRootFontSize();
  window.addEventListener('resize', throttle(updateRootFontSize, 16));
};
