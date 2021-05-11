it('stores text', function() {
  let note = new Note('Hello World');
  expect(note.text).toEqual('Hello World')
});