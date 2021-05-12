"use strict";

document.addEventListener("DOMContentLoaded", function() {



let submitText = document.querySelector('#add-note');

submitText.addEventListener('submit', (event) => {
  event.preventDefault();
  let inputText = document.querySelector('#note-text').value;
  let newNote = createNote(inputText);
  appendToList(newNote);
})

function createNote(inputText) {
  let note = new Note(inputText);
  return note;
}

function appendToList(newNote) {
  // create element <li>note object</li> + id= n++ 
  let shortNote = newNote.twentyChars;
  let listItem = document.createElement("LI");
  let noteText = document.createTextNode(shortNote);
  listItem.appendChild(noteText);
  document.getElementById("note-list").appendChild(listItem);
}

});

