Number.prototype.round = function (decimals) {
  'use strict';
  return Number(Math.round(this + 'e' + decimals) + 'e-' + decimals);
};
