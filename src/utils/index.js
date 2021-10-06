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

export function getInitialPosRotScale(isSelected, { position, rotation, scale }) {
  if (isSelected) {
    return {
      initialPosition: [0, 0, 0],
      initialRotation: [0, 0, 0],
      initialScale: [1, 1, 1],
    };
  }
  return {
    initialPosition: [position.x, position.y, position.z],
    initialRotation: [toRadians(rotation.x), toRadians(rotation.y), toRadians(rotation.z)],
    initialScale: [scale.x, scale.y, scale.z],
  };
}

export function spaceToDash(string) {
  return string.replace(' ', '-');
}
