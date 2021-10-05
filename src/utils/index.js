export function parseSketchfabUrl(url) {
  const pieces = url.split('-');
  return pieces[pieces.length - 1];
}

const EPSILON = 1e-6;

export function toDegrees(angle) {
  const degrees = angle * (180 / Math.PI);
  const rounded = Math.round(degrees);
  return Math.abs(rounded - degrees) <= EPSILON ? rounded : degrees;
}

export function toRadians(angle) {
  return angle * (Math.PI / 180);
}
