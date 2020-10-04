const solution = (s) => {
  let answer = '';
  if (s.length % 2 === 0) {
    const preStr = s[s.length / 2 - 1];
    const nextStr = s[s.length / 2 + 1];
    answer = preStr + nextStr;
  } else {
    answer = s[(s.length / 2).round()];
  }
  console.log(answer)
  return answer;
}