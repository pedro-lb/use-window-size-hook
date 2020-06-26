import { ScreenLayout } from '../interfaces';

/**
 * Default screen layout.
 */
const defaultScreenLayout: ScreenLayout = {
  layout: undefined,

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

export default defaultScreenLayout;
