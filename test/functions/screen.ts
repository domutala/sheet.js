import { screenWidths } from '../variables';
import { $media, $sheet } from '../../src';

export const screenBuilder = (fn: Function) => {
  let sheets: any[] = [];

  for (const sw in screenWidths) {
    if (screenWidths.hasOwnProperty(sw)) {
      const scr = screenWidths[sw];
      let shts: any[] = [];
      // ----
      const param = `${sw !== 'all' ? `-${sw}` : ''}`;
      fn(param, shts);
      // ----
      let ms: any;
      if (scr.size !== 0) {
        ms = $media(scr.prop, `${scr.size}px`, $sheet('', ...shts));
      } else {
        ms = $sheet('', ...shts);
      }
      sheets.push(ms);
    }
  }

  return sheets;
};
