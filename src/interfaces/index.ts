import LayoutEnum from '../constants/layoutEnum';

/**
 * Screen breakpoints.
 */
export interface ScreenBreakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

/**
 * Options for useWindowSize hook.
 */
export interface UseWindowSizeOptions {
  useDebounce?: boolean;
  debounceTimeMs?: number;
  breakpoints?: ScreenBreakpoints;
}

/**
 * Options for getCurrentLayout.
 */
export interface GetCurrentLayoutOptions {
  width: number;
  breakpoints: ScreenBreakpoints;
}

/**
 * Options for getWindowSize.
 */
export interface GetWindowSizeOptions {
  hasWindowObject: boolean;
  breakpoints: ScreenBreakpoints;
}

/**
 * Result for getWindowSize.
 */
export interface GetWindowSizeResult {
  width?: number;
  height?: number;
  screenLayout?: LayoutEnum;
}
