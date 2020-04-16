/**
 * L'idée est d'avoir accès à nos variable css dans
 * nos fichier javascript
 */

import { CssProps, Options } from './types';

export const $var = (name: string, value: string) => {
  return {
    type: 'var',
    function: ($vars: any) => {
      var key = value;

      const replaceVar = (key: string) => {
        if ($vars.hasOwnProperty(key)) {
          return $vars[key];
        } else {
          throw ReferenceError(`variable ${key} is not found`);
        }
      };
      const converter = (matches: string) => matches.replace(/\$/g, '');
      const calc = (e: string) => {
        try {
          eval(e);
        } catch (error) {
          throw Error(e);
        }
      };
      function doCalc() {
        var go = false;
        while (!go) {
          key = key.replace(
            /(((([0-9])+)+(([\.])?)+(([0-9])*)(([a-zA-Z])*))|((([\.]))+(([0-9])*)(([a-zA-Z])*)))+(( (\+|\-|\*|\/|\%) (((([0-9])+)+(([\.])?)+(([0-9])*)(([a-zA-Z])*))|((([\.]))+(([0-9])*)(([a-zA-Z])*))))+)/,
            '12'
          );

          key = key.replace(
            /\((((([0-9])+)+(([\.])?)+(([0-9])*)(([a-zA-Z])*))|((([\.]))+(([0-9])*)(([a-zA-Z])*)))\)/,
            '12'
          );

          const canGo1 = /(((([0-9])+)+(([\.])?)+(([0-9])*)(([a-zA-Z])*))|((([\.]))+(([0-9])*)(([a-zA-Z])*)))+(( (\+|\-|\*|\/|\%) (((([0-9])+)+(([\.])?)+(([0-9])*)(([a-zA-Z])*))|((([\.]))+(([0-9])*)(([a-zA-Z])*))))+)/.test(
            key
          );

          const canGo2 = /\((((([0-9])+)+(([\.])?)+(([0-9])*)(([a-zA-Z])*))|((([\.]))+(([0-9])*)(([a-zA-Z])*)))\)/.test(
            key
          );

          const canGo = !canGo1 && !canGo2;

          if (canGo) {
            go = true;
          }
        }
        return key;
      }

      if (/\$+[a-zA-Z0-9_-]/g.test(key)) {
        key = key.replace(/\$+[a-zA-Z0-9_-]/g, converter);

        key = key.replace(
          /(?<![0-9]|[a-zA-Z])([a-zA-B])([a-zA-Z0-9_-]*)/g,
          replaceVar
        );
      }

      return doCalc();
    }
  };
};

export const $render = (sheet: any, $cb?: Function) => {
  sheet({ $cb });
};

export const $sheet = (selector?: string, ...options: Options) => {
  return $builSelector({ selector, options });
};

export const $rule = (prop: CssProps, value: string, important?: boolean) => {
  if (prop === '@import') {
    return `@import url(${value});`;
  }
  return `${prop}:${value}${important ? ' !important' : ''};`;
};

export const $buildOptions = ({
  selector,
  options,
  $cb
}: {
  selector?: string;
  options: Options;
  $cb?: Function;
}) => {
  let sheet: any[] = [];
  options.forEach((option: any) => {
    if (typeof option === 'function') {
      option({ $parent: selector, $cb });
    } else if (typeof option === 'string') {
      sheet.push(option);
    }
  });

  if (selector) {
  }

  const p1 = selector && selector.replace(/( )+/, '') !== '' ? '{' : '';
  const p2 = selector && selector.replace(/( )+/, '') !== '' ? '}' : '';
  const select = selector.replace(/( )+/, '') != '' ? selector : '';
  const css = $mimify(`${select}${p1}${sheet.join('')}${p2}`);

  if ($cb) {
    $cb(css);
  }

  return css;
};

export const $builSelector = ({
  selector,
  options
}: { selector?: string; options?: Options } = {}) => {
  return ({ $parent, $cb }: { $parent?: string; $cb?: Function }) => {
    let select = ' ';
    if (selector.charAt(0) === '&') {
      select = selector.slice(1);
    } else {
      select = ' ' + selector;
    }
    $buildOptions({ selector: `${$parent || ''}${select}`, options, $cb });
  };
};

export const $media = ($prop: string, $val: string, ...options: Options) => {
  return ({
    $parent,
    opts,
    $cb
  }: {
    $parent?: string;
    opts?: Options;
    $cb?: Function;
  }) => {
    let sheet: string = '';
    const cb = (r: string) => {
      sheet += r || '';
    };

    options.forEach((option: any) => {
      if (typeof option === 'function') {
        option({ $parent, $cb: cb });
      } else if (typeof option === 'string') {
        sheet += `${$parent || ''}{${option}}`;
      }
    });

    let css = $mimify(`@media(${$prop}: ${$val}){${sheet}}`);

    if ($cb) {
      $cb(css);
    }

    return css;
  };
};

export const $keyframes = ($name: string, ...options: Options) => {
  return ({
    $parent,
    opts,
    $cb
  }: {
    $parent?: string;
    opts?: Options;
    $cb?: Function;
  }) => {
    let sheet: string = '';
    const cb = (r: string) => {
      sheet += r || '';
    };

    options.forEach((option: any) => {
      if (typeof option === 'function') {
        option({ $parent: '', $cb: cb });
      } else if (typeof option === 'string') {
        sheet += `${$parent || ''}{${option}}`;
      }
    });

    let css = $mimify(`@keyframes ${$name} {${sheet}}`);

    if ($cb) {
      $cb(css);
    }

    return css;
  };
};

export const $mimify = (str: string) => {
  str = str.replace(/((\})+( )+)/g, '}');
  str = str.replace(/((\{)+( )+)/g, '{');
  str = str.replace(/((\;)+( )+)/g, ';');
  str = str.replace(/(([\n])+)/g, '');
  str = str.replace(/(([\t])+)/g, '');
  str = str.replace(/(( ){2,})/g, ' ');
  str.trim();

  return str;
};
