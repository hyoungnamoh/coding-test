function solution(n) {
  let answer = '';
  let isOdd = n % 2 !== 0;
  let mog = parseInt(n / 2);

  for (let i = 0; i < mog; i++) {
    answer += '수박';
  }
  if (isOdd) {
    answer += '수';
  }
  return answer;
}