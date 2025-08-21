const { convertToAPStyle } = require('./apStyleConverter');

describe('convertToAPStyle', () => {
  it('should return the input string', () => {
    const input = 'hello world';
    const result = convertToAPStyle(input);
    expect(result).toBe('hello world');
  });
});