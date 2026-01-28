const searchParams = require('./params');

test('params test', () => {
  expect(
    searchParams(
      'https://jsonplaceholder.typicode.com/todos?_limit=10&_page=10',
      '_page'
    )
  ).toBe(10);
});
