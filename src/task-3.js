export default function boundingRect(coordsList) {
  const corX = coordsList.map((el) => el.x);
  const corY = coordsList.map((el) => el.y);

  if (coordsList.length === 0) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    };
  }
  return {
    top: Math.max(...corY),
    right: Math.max(...corX),
    bottom: Math.min(...corY),
    left: Math.min(...corX),
  };
}
