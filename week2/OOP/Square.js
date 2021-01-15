const Straight = require('./Straight.js');

class Square extends Straight {
  getPointSavedSet(location) {
    return location.reduce(({ xSet, ySet }, { x, y }) => {
      xSet.add(x);
      ySet.add(y);
      return { xSet, ySet };
    }, { xSet: new Set(), ySet: new Set() })
  }

  checkSquare(location) {
    return Object.entries(super.getPointSavedSet(location))
      .filter(([_, value]) => value.size === 2)
      .length === 2;
  }

  getSquareArea(location) {
    const { xSet, ySet } = super.getPointSavedSet(location);
    const [x1, x2] = [...xSet];
    const [y1, y2] = [...ySet];
    return Math.abs((x1 - x2) * (y1 - y2));
  }
}

module.exports = Square;