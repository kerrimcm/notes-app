"use strict";
class Note {
  constructor(text, id) {
    this.text = text
    this.twentyChars = this._getTwenty(text)
    this.id = id
  }

  getNote() {
    return this.text
  };
 
  _getTwenty(text) {
    return text.substring(0, 20);
  }
};
