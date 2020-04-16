export const $camelToKebab = (string: string) => {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

export const $kebabToCamel = (string: string, pascal?: boolean) => {
  var converter = (matches: string) => matches[1].toUpperCase();
  var result = string.replace(/(\-\w)/g, converter);

  if (pascal) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }

  return result;
};
