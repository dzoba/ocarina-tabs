import React, { Component } from 'react';

import a1 from './images/f12hole/a1.png';
import a1flat from './images/f12hole/a1flat.png';
import a1sharp from './images/f12hole/a1sharp.png';
import a2 from './images/f12hole/a2.png';
import a2flat from './images/f12hole/a2flat.png';
import b1 from './images/f12hole/b1.png';
import b1flat from './images/f12hole/b1flat.png';
import b2 from './images/f12hole/b2.png';
import c1 from './images/f12hole/c1.png';
import c1flat from './images/f12hole/c1flat.png';
import c1sharp from './images/f12hole/c1sharp.png';
import d1 from './images/f12hole/d1.png';
import d1flat from './images/f12hole/d1flat.png';
import d1sharp from './images/f12hole/d1sharp.png';
import e1 from './images/f12hole/e1.png';
import e2 from './images/f12hole/e2.png';
import e2flat from './images/f12hole/e2flat.png';
import f1 from './images/f12hole/f1.png';
import f1sharp from './images/f12hole/f1sharp.png';
import f2 from './images/f12hole/f2.png';
import f2sharp from './images/f12hole/f2sharp.png';
import g1 from './images/f12hole/g1.png';
import g1flat from './images/f12hole/g1flat.png';
import g1sharp from './images/f12hole/g1sharp.png';
import g2 from './images/f12hole/g2.png';
import g2flat from './images/f12hole/g2flat.png';
import g2sharp from './images/f12hole/g2sharp.png';


const notes = {
  f12hole : {
    a1,
    a1flat,
    a1sharp,
    a2,
    a2flat,
    b1,
    b1flat,
    b2,
    c1,
    c1flat,
    c1sharp,
    d1,
    d1flat,
    d1sharp,
    e1,
    e2,
    e2flat,
    f1,
    f1sharp,
    f2,
    f2sharp,
    g1,
    g1flat,
    g1sharp,
    g2,
    g2flat,
    g2sharp,
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
    console.log(notes)
    console.log(notes.f12hole[fileName])
    console.log('fileName', fileName)
    return (
      <img key={idx} src={notes.f12hole[fileName]} alt={note} />
    );
  }
}

export default Note;
