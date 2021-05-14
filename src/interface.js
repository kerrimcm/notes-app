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
  
  listOfNotes.addEventListener('click', (event) => {
    console.log(1)
    console.log(event.target.id)
    //here I am selecting the id of the clicked note, as opposed to waiting for the url to change first
    let clickedNoteId = event.target.id
    makeUrlChangeShowFullNote(clickedNoteId);
    console.log(2)
  });

  function makeUrlChangeShowFullNote(clickedNoteId) {
    console.log(3)
    document.addEventListener("hashchange", showNoteForCurrentPage(clickedNoteId));
    console.log(4)
  };

  function showNoteForCurrentPage(clickedNoteId) {
    console.log(5)
    showNote(clickedNoteId);
    console.log(6)
  };
//removed this function because we are no longer getting the note from the URL because this means the link has to be clicked twice.
  // function getNoteFromUrl(location) {
  //   console.log(7)
  //   return location.hash.split("#")[1];
  // };

  function showNote(id) {
    console.log(8)
    console.log(id)
    let newBody = document.getElementById("page")
    let closeButton = document.createElement("BUTTON");
    closeButton.innerHTML = "Close";
    newBody.innerHTML = noteArray[id].text;
    newBody.appendChild(closeButton);
    console.log(9)
  };

});

// document.addEventListener('click', (event) => {
//   console.log(event.target.tagName)
//   if(event.target.tagName == "A"){
//   makeUrlChangeShowFullNote();
//   }
// });