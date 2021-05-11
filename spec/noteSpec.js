it('stores text', function() {
  let note = new Note('Hello World');
  expect(note.text).toEqual('Hello World')
});

it('returns a note', function() {
  let note = new Note('Hi');
  expect(note.getNote()).toEqual(note.text)
});