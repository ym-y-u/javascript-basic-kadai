//numの値を指定する
let num = 15;  // 1以上の正の数を入力

//変数numの値を出力する
console.log(num);

//変数numの値が3と5の倍数であれば、「3と5の倍数です」と出力する
if (num % 3 ===0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

//変数numの値が3の倍数であれば、「3の倍数です」と出力する
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

//変数numの値が5の倍数であれば、「5の倍数です」と出力する
else if (num % 5 === 0) {
  console.log('5の倍数です');
}

//それ以外の場合、変数を出力する
else {
  console.log(num);
}