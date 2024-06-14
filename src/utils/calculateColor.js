function calculateColor(count, threshold) {
  if (count > threshold) {
    return 'rgb(255, 0, 0)';
  }

  const countRatio = count / threshold;
  const green = Math.round(255 * (1 - countRatio));

  return `rgb(255, ${green}, 0)`;
}

export default calculateColor;