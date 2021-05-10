function testNoteIsCreatedWithText() {
  let note = new Note();

  if(note.text === null) {
    console.log("FAIL");
  } else {
    console.log("PASS");
  }
};

testNoteIsCreatedWithText();


