import Color from 'color';

export const $lighten = (color: string, ratio: number) => {
  try {
    return Color(color).lighten(ratio).toString();
  } catch (e) {
    throw RangeError(e);
  }
};
export const $darken = (color: string, ration: number) => {
  try {
    return Color(color).darken(ration).toString();
  } catch (e) {
    throw RangeError(e);
  }
};

export default Color;
