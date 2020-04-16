import { $render } from '../../src';
import boxShadow from './box-shadow';
import rounded from './rounded';
import heading from './heading';
import flex from './flex';
import cursor from './cursor';
import spacer from './spacer';
import border from './border';
import display from './display';
import column from './column';
import container from './container';
import grids from './grids';

export default (cb: Function) => {
  $render(container, cb);
  $render(boxShadow, cb);
  $render(heading, cb);
  $render(rounded, cb);
  $render(flex, cb);
  $render(cursor, cb);
  $render(spacer, cb);
  $render(border, cb);
  $render(display, cb);
  $render(column, cb);
  $render(grids, cb);
};
