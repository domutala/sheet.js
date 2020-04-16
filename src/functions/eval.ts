`0.035cm --> 1px
xcm --> ?px
?px = 1px*xcm/0.035cm

0.035cm --> 1px
?cm --> Xpx
?cm = Xpx*0.035cm
`;
type cssUnits =
  | 'cm'
  | 'mm'
  | 'em'
  | 'rem'
  | 'pt'
  | '%'
  | 'ex'
  | 'in'
  | 'pc'
  | 'ch';
export const conversion = {
  cm: 0.035,
  mm: 0.0035,
  em: 0.063,
  rem: 0.0625,
  pt: 0.75,
  '%': 6.25,
  ex: 0.139,
  in: 0.014,
  pc: 0.063,
  ch: 0.125
};
export const operators = ['+', '-', '*', '/', '%'];

const ev = (value: string) => {
  value = value.trim();
  value = value.replace(/(( ){2,})/g, ' ');
  value = value.replace(/(([\n])+)/g, '');
  value = value.replace(/(([\t])+)/g, '');

  let choiceUnit = '';
  const withUnitRegex = /(((([0-9])+)+(([\.])?)+(([0-9])*)(([a-zA-Z])+))|((([\.]))+(([0-9])*)(([a-zA-Z])+)))/;
  let operation = '';

  value.split(' ').forEach(vl => {
    if (withUnitRegex.test(vl)) {
      let u = vl.replace(
        /(((([0-9])+)+(([\.])?)+(([0-9])*))|((([\.]))+(([0-9])*)))/,
        ''
      );
      let v = vl.replace(/((([a-zA-Z])+))/, '');

      if (!choiceUnit) {
        choiceUnit = u;
        operation += v;
      } else {
        let pxV = Number(v);
        if (u !== 'px') {
          pxV = pxV / conversion[u];
        }

        if (choiceUnit !== 'px') {
          pxV = pxV * conversion[choiceUnit];
        }

        operation += String(pxV);
      }
    } else {
      operation += vl;
    }
  });

  return `${eval(operation)}${choiceUnit}`;
};

export const $eval = (value: string) => {
  var go = false;
  while (!go) {
    value = value.replace(
      /(((([0-9])+)+(([\.])?)+(([0-9])*)(([a-zA-Z])*))|((([\.]))+(([0-9])*)(([a-zA-Z])*)))+(( (\+|\-|\*|\/|\%) (((([0-9])+)+(([\.])?)+(([0-9])*)(([a-zA-Z])*))|((([\.]))+(([0-9])*)(([a-zA-Z])*))))+)/,
      ev
    );

    value = value.replace(
      /\((((([0-9])+)+(([\.])?)+(([0-9])*)(([a-zA-Z])*))|((([\.]))+(([0-9])*)(([a-zA-Z])*)))\)/,
      ev
    );

    const canGo1 = /(((([0-9])+)+(([\.])?)+(([0-9])*)(([a-zA-Z])*))|((([\.]))+(([0-9])*)(([a-zA-Z])*)))+(( (\+|\-|\*|\/|\%) (((([0-9])+)+(([\.])?)+(([0-9])*)(([a-zA-Z])*))|((([\.]))+(([0-9])*)(([a-zA-Z])*))))+)/.test(
      value
    );

    const canGo2 = /\((((([0-9])+)+(([\.])?)+(([0-9])*)(([a-zA-Z])*))|((([\.]))+(([0-9])*)(([a-zA-Z])*)))\)/.test(
      value
    );

    const canGo = !canGo1 && !canGo2;

    if (canGo) {
      go = true;
    }
  }
  return value;
};
