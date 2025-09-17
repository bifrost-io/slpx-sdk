import { describe, it, expect } from 'bun:test'

describe('entry point', () => {
  it('should compute correctly', () => {
    const result = 1 + 1;
    expect(result).toBe(2);
  })
})