import { useState, useEffect, useMemo } from 'react';

import { UseWindowSizeOptions } from '../interfaces';
import getWindowSize from '../utils/getWindowSize';

/**
 * Hook that monitors window size, and updates the object
 * at the end of each window resize. It also returns the
 * actual screen layout - one of xl, lg, md, sm, xs.
 * @param {*} onlyOnResizeEnd If true, fires the event only when the user stops resizing.
 */
const useWindowSize = ({
  useDebounce = true,
  debounceTimeMs = 200,
}: UseWindowSizeOptions) => {
  const hasWindowObject = useMemo(() => (
    typeof window === 'object'
  ), []);

  const [windowSize, setWindowSize] = useState(getWindowSize(hasWindowObject));

  useEffect(() => {
    if (!hasWindowObject) {
      return () => {};
    }

    let resizeHandler: any;

    const handleResize = () => {
      if (!useDebounce) {
        setWindowSize(getWindowSize(hasWindowObject));
        return;
      }

      clearTimeout(resizeHandler);

      resizeHandler = setTimeout(() => {
        setWindowSize(getWindowSize(hasWindowObject));
      }, debounceTimeMs);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [
    hasWindowObject,
    debounceTimeMs,
    useDebounce,
  ]);

  return windowSize;
};

export default useWindowSize;
