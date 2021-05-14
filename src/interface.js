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


  function showNote(id) {
    console.log(8)
    console.log(id)
    let newBody = document.getElementById("page")
    let space = document.createElement("BR");
    let closeButton = document.createElement("a");
    closeButton.innerHTML = "Close";
    closeButton.id = "close-button";
    closeButton.href = "";
    newBody.innerHTML = noteArray[id].text;
    newBody.appendChild(space);
    newBody.appendChild(closeButton);
    console.log(9)
  };

  // document.addEventListener('click', (event) => {
  //   if(event.target.id == "close-button"){
  //   let currentPage = document.getElementById("page")
  //   currentPage.innerHTML = homePage
  //   }
  // });
});

