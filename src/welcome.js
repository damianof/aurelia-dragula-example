import {ArrayExtensions} from './arrayextensions';
import {Letter} from './letter';

export class Welcome {

  constructor() {
    this.firstName = '';
    this.haveName = false;
  }

  submit() {
    this.nameLetters = [];
    for(let i = 0; i < this.firstName.length; i++) {
      this.nameLetters.push(new Letter(this.firstName.charAt(i)));
    }

    ArrayExtensions.shuffle(this.nameLetters);
    this.haveName = true;
  }

  dragStart(item, source) {

  }

  dragEnd(item) {

  }

  drop(item, target, source, sibling) {

  }

}
