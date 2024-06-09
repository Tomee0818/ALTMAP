function extractIPAddresses(text) {
  const regex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g;
  const lines = text.split('\n');
  return lines.map(line => {
    const match = line.match(regex);
    return match ? match[0] : null;
  }).filter(ip => ip !== null);
}

export default extractIPAddresses;