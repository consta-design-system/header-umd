import React from 'react';
import { useState, useCallback } from 'react';
import { render } from 'react-dom';

import { Header, HeaderProps } from '@consta/header/Header';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Init } from './types';

const App = (
  initProps: HeaderProps & { onLoad: (setter: (newProps: HeaderProps) => void) => void },
) => {
  const { onLoad, ...otherProps } = initProps;
  const [props, setProps] = useState(otherProps);

  const set = useCallback(
    (newProps: HeaderProps) => setProps((state) => ({ ...state, ...newProps })),
    [],
  );

  onLoad(set);

  return (
    <Theme preset={presetGpnDefault}>
      <Header {...props} />
    </Theme>
  );
};

const constaHeaderInit = (props: HeaderProps, element: HTMLElement | null) => {
  let setter: (newProps: HeaderProps) => void = () => {};

  render(
    <App
      {...props}
      onLoad={(s) => {
        setter = s as (newProps: HeaderProps) => void;
      }}
    />,
    element,
  );

  return setter;
};

export default constaHeaderInit as Init;

// use ESM
// import constaHeaderInit from '../dist/index.js';
// import '../dist/styles.css';

// const set = constaHeaderInit(
//   {
//     logo: 'Logo',
//     style: { width: '100%' },
//     className: 'my-classname',
//     menu: [{ label: 'ddd', onClick: () => set({ menu: [{ label: 'ddd2' }] }) }],
//     languages: [{ label: 'ru' }, { label: 'en' }],
//   },
//   document.getElementById('root'),
// );

// use script
//  <script>
//    window.onload = function () {
//      var set = constaHeaderInit(
//        {
//          logo: 'Logo',
//          style: { width: '100%' },
//          className: 'my-classname',
//          menu: [{ label: 'ddd', onClick: () => set({ menu: [{ label: 'ddd2' }] }) }],
//          languages: [{ label: 'ru' }, { label: 'en' }],
//        },
//        document.getElementById('root'),
//      );
//    };
// </script>
