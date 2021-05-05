export const splitTextInTwo = (text: string): [string, string] => {
  const words = text.split(" ");
  const nChars = text.length - (words.length - 1);
  var i = 0;
  var j = 0;
  for (const word of words) {
    i += word.length;
    j += 1;
    if (i >= nChars / 2) {
      break;
    }
  }
  return [words.slice(0, j).join(" "), words.slice(j, words.length).join(" ")];
};

export const debug = <T>(obj: T): T => {
  return obj;
};
