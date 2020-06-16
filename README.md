# use-window-size-hook

> React Hook to monitor window size &amp; layout according to Bootstrap 4 breakpoints.

[![NPM](https://img.shields.io/npm/v/use-window-size-hook.svg)](https://www.npmjs.com/package/use-window-size-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-window-size-hook
```

or

```bash
yarn add use-window-size-hook
```

## Usage

```jsx
import React from 'react';

import { useWindowSize } from 'use-window-size-hook';

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
        {`Screen layout according to Bootstrap 4: ${screenLayout.layout}`}
      </p>

      <p>
        {`Is md layout: ${screenLayout.isMd}`}
      </p>

      <p>
        {`Is xs layout or below: ${screenLayout.isXsOrBelow}`}
      </p>

      <p>
        {`Is lg layout or above: ${screenLayout.isLgOrAbove}`}
      </p>
    </>
  );
};
```

### Compare layout breakpoints

```js
import React from 'react';

import { useWindowSize, layout } from "use-window-size-hook";

const App = () => {
  const { screenLayout } = useWindowSize();

  const isBiggerThanMd = screenLayout > layout.md;

  return (
    <>
      <p>
        {isBiggerThanMd ? "Layout is bigger than md" : "Layout is md or smaller"}
      </p>
    </>
  );
};
```

## Props

Name | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`useDebounce` | `boolean` | _optional_ | `true` | Defines if the callback is going to be executed when the user finishes resizing the screen or not
`debounceTimeMs` | `number` | _optional_ | `200` | Debounce time to check when the user finishes resizing the screen
`breakpoints` | `ScreenBreakpoints` | _optional_ | Check types below | Defines the breakpoints to be used, you can override and choose your own

## Types

### useWindowSize result

```ts
{
  width?: number;
  height?: number;
  screenLayout?: {
    layout: xs | sm | md | lg | xl;

    isXs: boolean;
    isSm: boolean;
    isMd: boolean;
    isLg: boolean;
    isXl: boolean;

    isXsOrBelow: boolean;
    isSmOrBelow: boolean;
    isMdOrBelow: boolean;
    isLgOrBelow: boolean;
    isXlOrBelow: boolean;

    isXsOrAbove: boolean;
    isSmOrAbove: boolean;
    isMdOrAbove: boolean;
    isLgOrAbove: boolean;
    isXlOrAbove: boolean;
  };
}
```

### Screen Breakpoints

```ts
{
  xs: number; // defaults to 0px
  sm: number; // defaults to 576px
  md: number; // defaults to 768px
  lg: number; // defaults to 992px
  xl: number; // defaults to 1200px
}
```

## License

MIT © [pedro-lb](https://github.com/pedro-lb)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
