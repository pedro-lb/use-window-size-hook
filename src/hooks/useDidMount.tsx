/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react';

/**
 * Hook that executes a callback when the component mounts.
 */
const useDidMount = (callback: () => void) => {
  React.useEffect(callback, []);
};

export default useDidMount;
