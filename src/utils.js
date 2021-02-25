// A small function to format bytes into appropriate sizes
// returns a string with formatted size
export function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  // If no number was passed or it's 0 in then return empty
  if (bytes === 0 || bytes === undefined) return '';

  // Get i to use when selecting from size array
  // will be 0, 1, 2, 3, 4 and so on depending on size of bytes
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);

  // If it's just bytes then no further conversion is required
  if (i === 0) return `(${bytes} ${sizes[i]})`;

  // Otherwise calculate using i to select from sizes array
  // toFixed(0) removes the decimal and rounds up
  return `(${(bytes / 1024 ** i).toFixed(0)} ${sizes[i]})`;
}
