export default function findPath(obj) {
  let result = [];

  for (let item in obj) {
    if (obj[item] === 15) {
      return item;
    } else if (typeof obj[item] === 'object') {
      let path = findPath(obj[item]);
      if (path) {
        result.push(item, path);

        //result.push(item, findPath(obj[item]));
      }
    }
  }
  if (result.join('.') === '') {
    return null;
  } else if (result.join('.').length !== 0) {
    return result.join('.');
  }
  // return result.join('.') === '' ? null
  //: result.join('.').length !== 0
  //? result.join('.') : null;
}

/* 
function findPath(obj) {
    let str = "";

    if (Object.keys(obj).length === 0) {
        return null;
    }

    for (const key in obj) {
        if (obj[key] === 15) {
            str = `${key}`;
        } else if (typeof obj[key] === "object") {
            str = `${key}.${findPath(obj[key])}`;
        }
    }
    if (str !== "" && str.lastIndexOf(".") === str.length - 1) {
        str = null;
    }

    return str;
}


*/
