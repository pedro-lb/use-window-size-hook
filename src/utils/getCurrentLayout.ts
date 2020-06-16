import { GetCurrentLayoutOptions } from '../interfaces';
import defaultBreakpoints from '../constants/defaultBreakpoints';
import layout from '../constants/layout';

/**
 * Returns the current layout.
 * @param param0 options
 */
const getCurrentLayout = ({
  width,
}: GetCurrentLayoutOptions) => {
  if (width < defaultBreakpoints.sm) {
    return layout.xs;
  }

  if (width < defaultBreakpoints.md) {
    return layout.sm;
  }

  if (width < defaultBreakpoints.lg) {
    return layout.md;
  }

  if (width < defaultBreakpoints.xl) {
    return layout.lg;
  }

  return layout.xl;
};

export default getCurrentLayout;
