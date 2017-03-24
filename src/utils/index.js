import { map } from 'lodash';

const valsWithKeys = snapshot => {
  return map(snapshot.val(), (val, key) => {
    val.key = key;
    return val;
  })
}

const symbolMap = {
  '#': '#',
  '>': 'b',
  'b': '>'
};

const notesConvertToTransposer = notes => {
  return notes.toUpperCase().split(' ').map((note) => {
    if (note.indexOf('#') > -1 || note.indexOf('>') > -1) {
      return '' + note.substr(0, 1) + symbolMap[note.substr(2, 1)] +  note.substr(1, 1);
    }
    return note;
  });
}

const notesConvertFromTransposer = notes => {
  return notes.map((note) => {
    if (note.indexOf('#') > -1 || note.indexOf('b') > -1) {
      return '' + note.substr(0, 1) + note.substr(2, 1) + symbolMap[note.substr(1, 1)];
    }
    return note;
  }).join(' ').toLowerCase();
}

export { valsWithKeys, notesConvertToTransposer, notesConvertFromTransposer };

export default { valsWithKeys, notesConvertToTransposer, notesConvertFromTransposer };
