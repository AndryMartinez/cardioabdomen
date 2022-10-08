export default function removeSpaces(url) {
    return encodeURIComponent(decodeURIComponent(url).replace(/\s+/g, ''));
  }