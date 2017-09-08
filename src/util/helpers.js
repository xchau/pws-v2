export const filterArr = (kws, arr) => {
  const result = [];
  const keywords = kws.split(' ');
  let regex;

  for (const word of keywords) {
    regex = new RegExp(word, 'ig');

    for (const elem of arr) {
      if (regex.test(elem.projectName) ||
          regex.test(elem.blurb) ||
          regex.test(elem.stack) ||
          regex.test(elem.heading)
        ) {
          result.push(elem);
        }
    }
  }

  return result;
};
