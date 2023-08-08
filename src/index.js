module.exports = function check(str, bracketsConfig) {
  const res = [];

  for (const bracket of str) {
      const [start, end] = bracketsConfig.find(pair => pair.includes(bracket));

      if (bracket === start && !res.includes(start)) {
        res.push(end);
          continue;
      }
      
      const stackedBracket = res.pop();
      if (bracket === stackedBracket) {
          continue;
      }
      return false;
  }

  return !res.length;
};


