const solution = (arr) => {
  var answer = [];
  answer[0] = arr[0];
  for (let i = 0; i < arr.length - 1; i++)
    if (arr[i + 1] !== arr[i])
      answer.push(arr[i + 1]);

  return answer;
}