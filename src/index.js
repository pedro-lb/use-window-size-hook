import { useState, useEffect } from "react";
import { breakpoints } from "./breakpoints";
import { layout } from "./layout";

const getLayout = (width) => {
  if (width >= breakpoints.xl.width) {
    return layout.xl;
  }

  if (width >= breakpoints.lg.width) {
    return layout.lg;
  }

  if (width >= breakpoints.md.width) {
    return layout.md;
  }

  if (width >= breakpoints.sm.width) {
    return layout.sm;
  }

  return layout.xs;
};

const getSize = (isClient) => {
  const width = isClient
    ? "innerWidth" in window
      ? window.innerWidth
      : document.documentElement.offsetWidth
    : undefined;

  const height = isClient
    ? "innerHeight" in window
      ? window.innerHeight
      : document.documentElement.offsetHeight
    : undefined;

  return {
    screenLayout: getLayout(width),
    height,
    width,
  };
};

/**
 * Hook that monitors window size, and updates the object
 * at the end of each window resize. It also returns the
 * actual screen layout - one of xl, lg, md, sm, xs.
 */
export default function useWindowSize() {
  const isClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState(getSize(isClient));

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    let resizeId;

    const handleResize = () => {
      clearTimeout(resizeId);
      resizeId = setTimeout(() => setWindowSize(getSize(isClient)), 200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
