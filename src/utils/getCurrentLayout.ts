import { GetCurrentLayoutOptions, GetCurrentLayoutResult } from '../interfaces';
import LayoutEnum from '../constants/layoutEnum';

/**
 * Default return options.
 */
const defaultReturn: GetCurrentLayoutResult = {
  layout: LayoutEnum.xs,
  isXsOrBelow: false,
  isSmOrBelow: false,
  isMdOrBelow: false,
  isLgOrBelow: false,
  isXlOrBelow: false,
};

/**
 * Returns the current layout.
 * @param param0 options
 */
const getCurrentLayout = ({
  breakpoints,
  width,
}: GetCurrentLayoutOptions): GetCurrentLayoutResult => {
  if (width <= breakpoints.sm) {
    return {
      ...defaultReturn,
      layout: LayoutEnum.xs,
      isXsOrBelow: true,
      isSmOrBelow: true,
      isMdOrBelow: true,
      isLgOrBelow: true,
      isXlOrBelow: true,
    };
  }

  if (width < breakpoints.md) {
    return {
      ...defaultReturn,
      layout: LayoutEnum.sm,
      isSmOrBelow: true,
      isMdOrBelow: true,
      isLgOrBelow: true,
      isXlOrBelow: true,
    };
  }

  if (width < breakpoints.lg) {
    return {
      ...defaultReturn,
      layout: LayoutEnum.md,
      isMdOrBelow: true,
      isLgOrBelow: true,
      isXlOrBelow: true,
    };
  }

  if (width < breakpoints.xl) {
    return {
      ...defaultReturn,
      layout: LayoutEnum.lg,
      isLgOrBelow: true,
      isXlOrBelow: true,
    };
  }

  return {
    ...defaultReturn,
    layout: LayoutEnum.xl,
    isXlOrBelow: true,
  };
};

export default getCurrentLayout;
