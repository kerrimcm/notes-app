"use strict";

document.addEventListener("DOMContentLoaded", function() {
  function createNote(text) {
    let note = new Note(text);
    return note;
  };

  debugger;

  function appendNote(newNote) {
    // let inputText = note.getNote();
    document.querySelector('#note-list').innerHTML = newNote;
  };
  console.log('hi');
  
  document.querySelector('#add-note').addEventListener('submit', function(event) {
    // event.preventDefault();
    const enteredText = document.querySelector('#note-text').value;
  });
    console.log('hi there');
    // let newNote = createNote(enteredText);
    // appendNote(newNote);
});
