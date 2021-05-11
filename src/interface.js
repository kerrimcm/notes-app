"use strict";

document.addEventListener("DOMContentLoaded", function() {
  
  
  function createNote(text) {
    let note = new Note(text);
    return note;
  };


  function appendNote(newNote) {
    // let inputText = note.getNote();
    document.querySelector('#note-list').innerHTML = newNote;
  };
  console.log('hi');
  
  let submitButton = document.getElementById('add-note');
  let enteredText = document.querySelector('#note-text');
  submitButton.addEventListener('click', createNote(enteredText));
  //   event.preventDefault();
  //   enteredText = document.querySelector('#note-text');
  // });
    console.log('hi there');
    console.log(enteredText);
    // let newNote = createNote(enteredText);
    // appendNote(newNote);
});
