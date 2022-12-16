const thousandsSeparator = (n, separator) => {
  const arr = n.toString().split('');
  const l = arr.length;

  const res = arr.reverse().map((digit, i) => {
    let b = i !== l - 1;
    let c = (i + 1) % 3 === 0;

    if (b && c) return separator + digit;
    return digit;
  });
  return res.reverse().join('');
};

export default thousandsSeparator;
