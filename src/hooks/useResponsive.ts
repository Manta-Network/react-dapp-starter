import { useMediaQuery } from 'react-responsive';

/**
 * Tailwind CSS Default Breakpoints
 *
 * Breakpoint | Prefix | Minimum width | CSS
 * -----------|--------|---------------|----------------------------------
 * sm         | sm:    | 40rem (640px) | @media (width >= 40rem) { ... }
 * md         | md:    | 48rem (768px) | @media (width >= 48rem) { ... }
 * lg         | lg:    | 64rem (1024px)| @media (width >= 64rem) { ... }
 * xl         | xl:    | 80rem (1280px)| @media (width >= 80rem) { ... }
 * 2xl        | 2xl:   | 96rem (1536px)| @media (width >= 96rem) { ... }
 */

/**
 * Custom Breakpoints Based on Design System
 *
 * Mobile design:  390px
 * Desktop design: 1440px
 * Tablet: 768px (industry standard)
 * Large Desktop: 2560px (optional)
 */

/**
 * Responsive Design Guidelines
 *
 * Basic Approach - Tailwind Breakpoint Classes (Recommended for Daily Use):
 * --------------------------------------------------------------------------
 * For most scenarios, use Tailwind's responsive prefixes:
 *
 * @example
 * // Different styles for mobile and desktop
 * <h1 className="text-2xl md:text-4xl">Title</h1>
 *
 * // Use max-md for mobile-specific styles
 * <div className="block max-md:hidden">Desktop only</div>
 * <div className="hidden max-md:block">Mobile only</div>
 *
 * Advanced Approach - Fluid Typography (Optional):
 * --------------------------------------------------------------------------
 * When smooth transitions across viewport range are needed, use clamp():
 *
 * @example
 * // Smooth scaling between 390px-1440px
 * <h1 className="text-[clamp(1rem,0.8143rem+0.7619vw,1.5rem)]">
 *   Title smoothly scales from 16px to 24px
 * </h1>
 *
 * Clamp calculator tool:
 * @link https://utopia.fyi/type/calculator?c=390,16,1.5,1440,24,1.5,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
 *
 * Usage recommendations:
 * - Layout/Spacing: Use Tailwind responsive classes (md:, lg:)
 * - Heading fonts: Consider clamp() for smoother experience
 * - Body text: Usually fixed breakpoints are sufficient (readability first)
 */

export function useResponsive() {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // < 768
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 }); // 768 ~ 1439
  const isDesktop = useMediaQuery({ minWidth: 1440 }); // >= 1440
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 }); // Optional

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };
}
