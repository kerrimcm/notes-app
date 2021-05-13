"use strict";

document.addEventListener("DOMContentLoaded", function() {

  let submitText = document.querySelector('#add-note');

  submitText.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputText = document.querySelector('#note-text').value;
    const newNote = createNote(inputText);
    console.log(newNote);
    //appendToList(newNote);
    getPostData(newNote.getNote());
  })

  function createNote(inputText) {
    let note = new Note(inputText);
    return note;
  }

  function appendToList(newNote) {
    //let shortNote = newNote.twentyChars;
    let listItem = document.createElement("LI");
    let link = document.createElement('a');
    
    link.textContent = newNote;
    link.href = '#';
    link.id = newNote;

    listItem.appendChild(link);
    document.getElementById("note-list").appendChild(listItem); 
  }

  function getPostData(inputText) {
    fetch("https://makers-emojify.herokuapp.com/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"text": inputText}),
    })
    .then((response) => response.json())
    .then(data => {
      appendToList(data.emojified_text);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
});

// create element <li>note object</li> + id= n++ 
// let noteText = document.createTextNode(shortNote); //not currently in use