const solution = (s, n) => {
  let answer = '';
  for (let i = 0; i <= s.length - 1; i++) {
    let isMini;
    let ascii = s.charCodeAt(i);
    if (s.charCodeAt(i) !== 32) {
      if (ascii > 96 && ascii < 123) {
        inMini = false;
      } else {
        inMini = true
      }
      if (inMini) {
        // console.log(ascii);
        if ((ascii + n) > 122) {
          ascii = (ascii + n) % 122 + 96;
        } else {
          ascii = ascii + n;
        }
      } else {
        if ((ascii + n) > 90) {
          ascii = (ascii + n) % 90 + 65;
        } else {
          ascii = ascii + n;
        }
      }
    }
    console.log(ascii + n);
    const char = String.fromCharCode(ascii);
    answer += char;
  }
  console.log(answer);
  return answer;
}