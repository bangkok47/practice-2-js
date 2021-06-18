export default function getPolynomial(...coefficients) {
  const filteredCoeff = coefficients.filter((el) => el !== 0);

  if (filteredCoeff.length === 0) {
    return '0';
  }

  let length = coefficients.length - 1;

  function funcForMap(num) {
    if (num === 0) {
      num = '';
    } else if (length === 0) {
      num = `${num}`;
    } else if (length === 1 && (num === 1 || num === -1)) {
      num = num === 1 ? 'x' : '-x';
    } else if (num === 1 || num === -1) {
      num = num === 1 ? `x^${length}` : `-x^${length}`;
    } else if (length === 1) {
      num = `${num}*x`;
    } else {
      num = `${num}*x^${length}`;
    }

    length--;

    return num;
  }

  const result = coefficients.map(funcForMap).reduce((acc, val) => {
    if (val[0] === '-') {
      acc += val;
    } else if (val !== '' && acc !== '') {
      acc += `+${val}`;
    } else {
      acc += val;
    }
    return acc;
  });
  return result;
}
