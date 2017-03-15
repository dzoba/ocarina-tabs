import { map } from 'lodash';

const valsWithKeys = snapshot => {
  return map(snapshot.val(), (val, key) => {
    val.key = key;
    return val;
  })
}

export default valsWithKeys;
