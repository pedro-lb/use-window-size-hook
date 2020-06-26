import { GetWindowSizeResult, GetWindowSizeOptions } from '../interfaces';
import getCurrentLayout from './getCurrentLayout';

/**
 * Returns the current window size state.
 * @param isClientSide Defines if the window object is present.
 * @param breakpoints Defines custom breakpoints.
 */
const getWindowSize = ({
  isClientSide,
  breakpoints,
}: GetWindowSizeOptions): GetWindowSizeResult => {
  if (!isClientSide) {
    return {
      width: undefined,
      height: undefined,
      screenLayout: undefined,
    };
  }

  const width = (
    'innerWidth' in window
      ? window.innerWidth
      : document?.documentElement?.offsetWidth
  );

  const height = (
    'innerHeight' in window
      ? window.innerHeight
      : document?.documentElement?.offsetHeight
  );

  const screenLayout = getCurrentLayout({
    breakpoints,
    width,
  });

  return {
    screenLayout,
    height,
    width,
  };
};

export default getWindowSize;
