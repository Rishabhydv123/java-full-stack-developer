const searchParams = require('./params');

test('params test', () => {
  expect(
    searchParams(
      'https://jsonplaceholder.typicode.com/todos?_limit=100&_page=10',
      '_limit',
    )
  ).toBe(100);
});
