"use strict";

document.addEventListener("DOMContentLoaded", function() {

  let submitText = document.querySelector('#add-note');
  let idCount = 0
  let listOfNotes = document.querySelector('#note-list');
  const noteArray = [];

  console.log(noteArray);

  submitText.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputText = document.querySelector('#note-text').value;
    getEmojiData(inputText);
  })

  function createNote(inputText, id) {
    let note = new Note(inputText, id);
    noteArray.push(note);
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
  
  listOfNotes.addEventListener('click', () => {
    makeUrlChangeShowFullNote();
  });

  function makeUrlChangeShowFullNote() {
    document.addEventListener("hashchange", showNoteForCurrentPage());
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(document.location));
  };

  function getNoteFromUrl(location) {
    return location.hash.split("#")[1];
  };

  function showNote(id) {
    let newBody = document.getElementById("page")
    let closeButton = document.createElement("BUTTON");
    closeButton.innerHTML = "Close";
    newBody.innerHTML = noteArray[id].text;
    newBody.appendChild(closeButton);
  };

});






// function storeNoteToArray(newNote) {
//   noteList.push(newNote);
// };

// let linkID = document.querySelectorAll('#note-list');
// linkID.forEach(() => {
//   document.getElementById(noteObject.id)
//   // addEventListener("hashchange", function()
// });

// const noteObject = new Note(inputText, id);

// create element <li>note object</li> + id= n++ 
// let noteText = document.createTextNode(shortNote); //not currently in use