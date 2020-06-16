import { GetCurrentLayoutOptions, ScreenLayout } from '../interfaces';
import LayoutEnum from '../constants/layoutEnum';

/**
 * Default return options.
 */
const defaultReturn: ScreenLayout = {
  layout: LayoutEnum.xs,

  isXs: false,
  isSm: false,
  isMd: false,
  isLg: false,
  isXl: false,

  isXsOrBelow: false,
  isSmOrBelow: false,
  isMdOrBelow: false,
  isLgOrBelow: false,
  isXlOrBelow: false,

  isXsOrAbove: false,
  isSmOrAbove: false,
  isMdOrAbove: false,
  isLgOrAbove: false,
  isXlOrAbove: false,
};

/**
 * Returns the current layout.
 * @param param0 options
 */
const getCurrentLayout = ({
  breakpoints,
  width,
}: GetCurrentLayoutOptions): ScreenLayout => {
  if (width <= breakpoints.sm) {
    return {
      ...defaultReturn,

      // Current layout
      layout: LayoutEnum.xs,

      // Layout conditions
      isXs: true,

      // Below conditions
      isXsOrBelow: true,
      isSmOrBelow: true,
      isMdOrBelow: true,
      isLgOrBelow: true,
      isXlOrBelow: true,

      // Above conditions
      isXsOrAbove: true,
    };
  }

  if (width < breakpoints.md) {
    return {
      ...defaultReturn,

      // Current layout
      layout: LayoutEnum.sm,

      // Layout conditions
      isSm: true,

      // Below conditions
      isSmOrBelow: true,
      isMdOrBelow: true,
      isLgOrBelow: true,
      isXlOrBelow: true,

      // Above conditions
      isXsOrAbove: true,
      isSmOrAbove: true,
    };
  }

  if (width < breakpoints.lg) {
    return {
      ...defaultReturn,

      // Current layout
      layout: LayoutEnum.md,

      // Layout conditions
      isMd: true,

      // Below conditions
      isMdOrBelow: true,
      isLgOrBelow: true,
      isXlOrBelow: true,

      // Above conditions
      isXsOrAbove: true,
      isSmOrAbove: true,
      isMdOrAbove: true,
    };
  }

  if (width < breakpoints.xl) {
    return {
      ...defaultReturn,

      // Current layout
      layout: LayoutEnum.lg,

      // Layout conditions
      isLg: true,

      // Below conditions
      isLgOrBelow: true,
      isXlOrBelow: true,

      // Above conditions
      isXsOrAbove: true,
      isSmOrAbove: true,
      isMdOrAbove: true,
      isLgOrAbove: true,
    };
  }

  return {
    ...defaultReturn,

    // Current layout
    layout: LayoutEnum.xl,

    // Layout conditions
    isXl: true,

    // Below conditions
    isXlOrBelow: true,

    // Above conditions
    isXsOrAbove: true,
    isSmOrAbove: true,
    isMdOrAbove: true,
    isLgOrAbove: true,
    isXlOrAbove: true,
  };
};

export default getCurrentLayout;
