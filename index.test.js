const { bus, batch } = require('./index');

describe('event-bus', () => {
  test('should process string input', () => {
    expect(bus('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => bus(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = bus('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
