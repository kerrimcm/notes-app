"use strict";

document.addEventListener("DOMContentLoaded", function() {

  let submitText = document.querySelector('#add-note');

  submitText.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputText = document.querySelector('#note-text').value;
    const newNote = createNote(inputText);
    appendToList(newNote);
  })

  function createNote(inputText) {
    let note = new Note(inputText);
    return note;
  }

  function appendToList(newNote) {
    let shortNote = newNote.twentyChars;
    let listItem = document.createElement("LI");
    let link = document.createElement('a');
    
    link.textContent = shortNote;
    link.href = '#';
    link.id = shortNote;

    listItem.appendChild(link);
    document.getElementById("note-list").appendChild(listItem); 
  }
});

// create element <li>note object</li> + id= n++ 
// let noteText = document.createTextNode(shortNote); //not currently in use