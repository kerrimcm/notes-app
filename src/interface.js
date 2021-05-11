"use strict";

document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('#add-note').addEventListener('submit', function(event) {
    createNote(text)
    event.preventDefault();
  });


  function createNote(text) {
    let note = new Note(text);
    return note;
  };
});