# use-window-size

> React Hook to monitor window size &amp; layout according to Bootstrap 4 breakpoints.

[![NPM](https://img.shields.io/npm/v/use-window-size.svg)](https://www.npmjs.com/package/use-window-size) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-window-size
```

or

```bash
yarn add use-window-size
```

## Usage

```jsx
import React, { Component } from 'react'

import { useWindowSize } from 'use-window-size'

const App = () => {
  const {
    width,
    height,
    screenLayout,
  } = useWindowSize();

  return (
    <>
      <p>
        {`Window width: ${width}`}
      </p>
      <p>
        {`Window height: ${height}`}
      </p>
      <p>
        {`Screen layout according to Bootstrap 4: ${screenLayout}`}
      </p>
    </>
  )
}
```

## License

MIT © [pedro-lb](https://github.com/pedro-lb)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
