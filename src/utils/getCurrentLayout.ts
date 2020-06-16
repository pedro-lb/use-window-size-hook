import { GetCurrentLayoutOptions } from '../interfaces';
import LayoutEnum from '../constants/layoutEnum';

/**
 * Returns the current layout.
 * @param param0 options
 */
const getCurrentLayout = ({
  breakpoints,
  width,
}: GetCurrentLayoutOptions): LayoutEnum => {
  if (width < breakpoints.sm) {
    return LayoutEnum.xs;
  }

  if (width < breakpoints.md) {
    return LayoutEnum.sm;
  }

  if (width < breakpoints.lg) {
    return LayoutEnum.md;
  }

  if (width < breakpoints.xl) {
    return LayoutEnum.lg;
  }

  return LayoutEnum.xl;
};

export default getCurrentLayout;
