import { describe, expect, it } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should add two positive numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should add a positive and negative number correctly', () => {
    expect(sum(5, -3)).toBe(2);
    expect(sum(-3, 5)).toBe(2);
  });

  it('should add two negative numbers correctly', () => {
    expect(sum(-2, -4)).toBe(-6);
  });

  it('should handle zero correctly', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, 0)).toBe(0);
  });

  it('should handle decimal numbers correctly', () => {
    expect(sum(1.5, 2.7)).toBeCloseTo(4.2);
    expect(sum(-1.5, 2.7)).toBeCloseTo(1.2);
  });

  it('should handle large numbers correctly', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    expect(sum(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1);
  });
});
