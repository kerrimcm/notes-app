function testNoteIsCreatedWithText() {
  let note = new Note();

  if(note.text === undefined) {
    console.log("FAIL");
  } else {
    console.log("PASS");
  }
};

testNoteIsCreatedWithText();


