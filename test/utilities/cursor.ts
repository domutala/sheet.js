import { $sheet, $rule } from '../../src';

const cursors = [
  $sheet('.cursor-default', $rule('cursor', 'default', true)),
  $sheet('.cursor-pointer', $rule('cursor', 'pointer', true)),
  $sheet('.cursor-text', $rule('cursor', 'text', true))
];

export default $sheet('', ...cursors);
