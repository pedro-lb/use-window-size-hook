import { ScreenBreakpoints } from '../interfaces';

/**
 * Defines default breakpoint values according to Bootstrap 4.
 * Refer to https://getbootstrap.com/docs/4.0/layout/overview/.
 */
const defaultBreakpoints: ScreenBreakpoints = {
  // Extra small devices (portrait phones, less than 576px)
  xs: 0,

  // Small devices (landscape phones, 576px and up)
  sm: 576,

  // Medium devices (tablets, 768px and up)
  md: 768,

  // Large devices (desktops, 992px and up)
  lg: 992,

  // Extra large devices (large desktops, 1200px and up)
  xl: 1200,
};

export default defaultBreakpoints;
