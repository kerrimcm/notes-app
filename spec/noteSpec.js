it('stores text', function() {
  let note = new Note('Hello World');
  expect(note.text).toEqual('Hello World')
});

it('returns a note', function() {
  let note = new Note('Hi');
  expect(note.getNote()).toEqual(note.text)
});

// it('returns the first 20 characters of the note', function() {
//   let note = new Note('Hello, welcome to our notes app, we are very happy to be here')
//   expect(note._getTwenty('Hello, welcome to our notes app, we are very happy to be here')).toEqual('Hello, welcome to ou')
// });