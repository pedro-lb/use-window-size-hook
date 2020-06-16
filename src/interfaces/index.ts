import LayoutEnum from '../constants/layoutEnum';

/**
 * Options for useWindowSize hook.
 */
export interface UseWindowSizeOptions {
  useDebounce?: boolean;
  debounceTimeMs?: number;
}

/**
 * Options for getCurrentLayout.
 */
export interface GetCurrentLayoutOptions {
  width: number;
}

/**
 * Result for getWindowSize.
 */
export interface GetWindowSizeResult {
  width?: number;
  height?: number;
  screenLayout?: LayoutEnum;
}
