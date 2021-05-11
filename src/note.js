"use strict";
class Note {
  constructor(text) {
    this.text = text
    this.twentyChars = this._getTwenty(text)
  }

  getNote() {
    return this.text
  };
 
  _getTwenty(text) {
    return text.substring(0, 20);
  }
};
