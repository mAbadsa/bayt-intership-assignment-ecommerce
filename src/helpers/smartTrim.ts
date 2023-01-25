export const smartTrim = (str: string, length: number, delim: string, appendix: string) => {
  if (str.length <= length) return str;

  let strTrimmed = str.substring(0, length + delim.length);

  let lastDelimIndex = strTrimmed.lastIndexOf(delim);

  if (lastDelimIndex >= 0) strTrimmed = strTrimmed.substring(0, lastDelimIndex);

  if (strTrimmed) strTrimmed += appendix;

  return strTrimmed;
};
