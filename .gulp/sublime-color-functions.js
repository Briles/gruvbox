function colorFn(content) {
  if (!content) {
    throw new Error('Expected a color value');
  }

  return `color(${content})`;
}

function parseAmount(amount) {
  let opStr = amount;

  if (typeof amount === 'number' && amount >= 0 && amount <= 100) {
    opStr = `${amount}%`;
  } else if (typeof amount === 'string') {
    const operator = amount.slice(0, 1);
    opStr = (`${amount.replace(operator, `${operator} `)}%`).replace('%%', '%');
  } else {
    return false;
  }

  return opStr;
}

function saturation(color, amount) {
  const opStr = parseAmount(amount);

  if (opStr === false) {
    throw new Error('Invalid saturation amount');
  }

  return colorFn(`${color} s(${opStr})`);
}

function greyscale(color) {
  return saturation(color, 0);
}

function lightness(color, amount) {
  const opStr = parseAmount(amount);

  if (opStr === false) {
    throw new Error('Invalid lightness amount');
  }

  return colorFn(`${color} l(${opStr})`);
}

function alpha(color, amount) {
  if (amount < 0 || amount > 1) {
    throw new Error('Expected alpha() adjustment amount to be between 0.0 and 1.0');
  }

  return colorFn(`${color} a(${amount})`);
}

function blend(color1, color2, amount, hsl) {
  if (amount < 0 || amount > 100) {
    throw new Error('Expected blend() amount to be between 0 and 100');
  }

  return colorFn(`${color1} blend(${color2} ${amount}%${hsl ? ' hsl' : ''})`);
}

function blenda(color1, color2, amount, hsl) {
  if (amount < 0 || amount > 100) {
    throw new Error('Expected blenda() amount to be between 0 and 100');
  }

  return colorFn(`${color1} blenda(${color2} ${amount}%${hsl ? ' hsl' : ''})`);
}

function minContrast(foreground, background, ratio) {
  if (ratio <= 0) {
    throw new Error('Expected minContrast() ratio to be greater than 0');
  }

  return colorFn(`${foreground} min-contrast(${background} ${ratio})`);
}

function minContrastAaNormal(foreground, background) {
  return minContrast(foreground, background, 4.5);
}

function minContrastAaLarge(foreground, background) {
  return minContrast(foreground, background, 3.1);
}

function minContrastAaaNormal(foreground, background) {
  return minContrast(foreground, background, 7.1);
}

function minContrastAaaLarge(foreground, background) {
  return minContrast(foreground, background, 4.5);
}

module.exports = {
  color: colorFn,
  alpha,
  blend,
  blenda,
  greyscale,
  lightness,
  saturation,
  minContrast,
  minContrastAaNormal,
  minContrastAaLarge,
  minContrastAaaNormal,
  minContrastAaaLarge,
};
