import { useState, useEffect, useMemo } from 'react';

import { breakpoints } from './breakpoints';
import { layout } from './layout';
import {
  ParseLayoutResultOptions,
  UseWindowSizeOptions,
} from './interfaces';

const parseLayoutResult = ({
  width,
}: ParseLayoutResultOptions) => {
  if (width < breakpoints.sm) {
    return layout.xs;
  }

  if (width < breakpoints.md) {
    return layout.sm;
  }

  if (width < breakpoints.lg) {
    return layout.md;
  }

  if (width < breakpoints.xl) {
    return layout.lg;
  }

  return layout.xl;
};

const parseWindowSizeResult = (
  hasWindowObject: boolean,
) => {
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

  const screenLayout = parseLayoutResult({
    width,
  });

  return {
    screenLayout,
    height,
    width,
  };
};

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

  const [windowSize, setWindowSize] = useState(parseWindowSizeResult(hasWindowObject));

  useEffect(() => {
    if (!hasWindowObject) {
      return () => {};
    }

    let resizeHandler: any;

    const handleResize = () => {
      if (!useDebounce) {
        setWindowSize(parseWindowSizeResult(hasWindowObject));
        return;
      }

      clearTimeout(resizeHandler);

      resizeHandler = setTimeout(() => {
        setWindowSize(parseWindowSizeResult(hasWindowObject));
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
