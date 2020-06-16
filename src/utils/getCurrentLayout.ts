import defaultBreakpoints from '../constants/defaultBreakpoints';
import { GetCurrentLayoutOptions } from '../interfaces';
import LayoutEnum from '../constants/layoutEnum';

/**
 * Returns the current layout.
 * @param param0 options
 */
const getCurrentLayout = ({
  width,
}: GetCurrentLayoutOptions): LayoutEnum => {
  if (width < defaultBreakpoints.sm) {
    return LayoutEnum.xs;
  }

  if (width < defaultBreakpoints.md) {
    return LayoutEnum.sm;
  }

  if (width < defaultBreakpoints.lg) {
    return LayoutEnum.md;
  }

  if (width < defaultBreakpoints.xl) {
    return LayoutEnum.lg;
  }

  return LayoutEnum.xl;
};

export default getCurrentLayout;
