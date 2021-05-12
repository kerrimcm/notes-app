"use strict";

document.addEventListener("DOMContentLoaded", function() {
  
  

  function createNote() {
    
    let enteredText = document.querySelector("#noteText");
    let note = new Note(enteredText);
    let noteText = note.getNote();
    appendNote(noteText);
    return note;
  };


  function appendNote(newNote) {
    // let inputText = note.getNote();
    document.querySelector('#note-list').innerHTML = newNote;
  };
 
  
  let submitButton = document.getElementById('addNote');
  let enteredText = document.querySelector('#noteText');
  console.log(enteredText.value);
  submitButton.addEventListener('click', createNote());
  //   event.preventDefault();
  //   enteredText = document.querySelector('#note-text');
  // });

    // let newNote = createNote(enteredText);
    // appendNote(newNote);
});
