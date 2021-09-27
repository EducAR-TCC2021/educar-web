export default function parseSketchfabUrl(url) {
  const pieces = url.split('-');
  return pieces[pieces.length - 1];
}
