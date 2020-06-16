import getCurrentLayout from './getCurrentLayout';

/**
 * Returns the current window size state.
 * @param hasWindowObject Defines if the window object is present.
 */
const getWindowSize = (hasWindowObject: boolean) => {
  if (!hasWindowObject) {
    return {
      width: undefined,
      height: undefined,
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
    width,
  });

  return {
    screenLayout,
    height,
    width,
  };
};

export default getWindowSize;
