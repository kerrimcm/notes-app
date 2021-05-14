"use strict";

document.addEventListener("DOMContentLoaded", function() {

  let submitText = document.querySelector('#add-note');
  let idCount = 0

  submitText.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputText = document.querySelector('#note-text').value;
    getEmojiData(inputText);
  })

  // let linkID = document.querySelectorAll('#note-list');
  // linkID.forEach() => {
  //   addEventListener("hashchange", function()
  // });


  function createNote(inputText, id) {
    let note = new Note(inputText, id);
    idCount++
    return note;
  }

  function appendToList(newNote) {
    let shortNote = newNote.twentyChars;
    let listItem = document.createElement("LI");
    let link = document.createElement('a');
    let id = newNote.id;

    link.textContent = shortNote;
    link.href = `#${id}`;
    link.id = id;

    listItem.appendChild(link);
    document.getElementById("note-list").appendChild(listItem); 
  }

  function getEmojiData(inputText) {
    fetch("https://makers-emojify.herokuapp.com/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"text": inputText}),
    })
    .then((response) => response.json())
    .then(data => {
      const newNote = createNote(data.emojified_text, idCount);
      appendToList(newNote)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }



  function displayFullnote() {

  }


});

// function storeNoteToArray(newNote) {
//   noteList.push(newNote);
// };





// create element <li>note object</li> + id= n++ 
// let noteText = document.createTextNode(shortNote); //not currently in use