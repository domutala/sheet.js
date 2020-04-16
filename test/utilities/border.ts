import { $sheet, $rule } from '../../src';
import { borders, themeColors } from '../variables';

const sheets = [
  $sheet(
    '.border',
    $rule('border', `${borders.width} ${borders.style} ${borders.color}`, true)
  ),
  $sheet(
    '.border-top',
    $rule(
      'border-top',
      `${borders.width} ${borders.style} ${borders.color}`,
      true
    )
  ),
  $sheet(
    '.border-bottom',
    $rule(
      'border-bottom',
      `${borders.width} ${borders.style} ${borders.color}`,
      true
    )
  ),
  $sheet(
    '.border-left',
    $rule(
      'border-left',
      `${borders.width} ${borders.style} ${borders.color}`,
      true
    )
  ),
  $sheet(
    '.border-right',
    $rule(
      'border-right',
      `${borders.width} ${borders.style} ${borders.color}`,
      true
    )
  )
];

for (const key in themeColors) {
  if (themeColors.hasOwnProperty(key)) {
    const color = themeColors[key];
    sheets.push(
      $sheet(`.border-${key}`, $rule('border-color', `${color}`, true))
    );
  }
}

export default $sheet('', ...sheets);
