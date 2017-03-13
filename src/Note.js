import React, { Component } from 'react';

import a4 from './images/f12hole/a4.png';
import a4flat from './images/f12hole/a4flat.png';
import a4sharp from './images/f12hole/a4sharp.png';
import a5 from './images/f12hole/a5.png';
import a5flat from './images/f12hole/a5flat.png';
import b4 from './images/f12hole/b4.png';
import b4flat from './images/f12hole/b4flat.png';
import b5 from './images/f12hole/b5.png';
import c5 from './images/f12hole/c5.png';
import c5flat from './images/f12hole/c5flat.png';
import c5sharp from './images/f12hole/c5sharp.png';
import d5 from './images/f12hole/d5.png';
import d5flat from './images/f12hole/d5flat.png';
import d5sharp from './images/f12hole/d5sharp.png';
import e4 from './images/f12hole/e4.png';
import e5 from './images/f12hole/e5.png';
import e5flat from './images/f12hole/e5flat.png';
import f4 from './images/f12hole/f4.png';
import f4sharp from './images/f12hole/f4sharp.png';
import f5 from './images/f12hole/f5.png';
import f5sharp from './images/f12hole/f5sharp.png';
import g4 from './images/f12hole/g4.png';
import g4flat from './images/f12hole/g4flat.png';
import g4sharp from './images/f12hole/g4sharp.png';
import g5 from './images/f12hole/g5.png';
import g5flat from './images/f12hole/g5flat.png';
import g5sharp from './images/f12hole/g5sharp.png';


const notes = {
  f12hole : {
    a4,
    a4flat,
    a4sharp,
    a5,
    a5flat,
    b4,
    b4flat,
    b5,
    c5,
    c5flat,
    c5sharp,
    d5,
    d5flat,
    d5sharp,
    e4,
    e5,
    e5flat,
    f4,
    f4sharp,
    f5,
    f5sharp,
    g4,
    g4flat,
    g4sharp,
    g5,
    g5flat,
    g5sharp,
  }
}

class Note extends Component {
  render() {
    const {
      note,
      idx
    } = this.props || {};
    const fileName = note.replace(/>/, 'flat').replace(/#/, 'sharp');

    // Can't get dynamic require to work
    // imgLoc = require('./images/f12hole/' + fileName + '.png');
    return (
      <img key={idx} src={notes.f12hole[fileName]} alt={note} />
    );
  }
}

export default Note;
