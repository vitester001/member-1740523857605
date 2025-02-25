import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
    it('should return default greeting with name', () => {
        expect(greet('John')).toBe('Hello, John!');
    });

    it('should return custom greeting with name', () => {
        expect(greet('John', 'Hi')).toBe('Hi, John!');
    });

    it('should handle empty name', () => {
        expect(greet('')).toBe('Hello, !');
    });

    // Modified test since empty greeting falls back to default
    it('should handle empty custom greeting', () => {
        expect(greet('John', '')).toBe('Hello, John!');
    });

    it('should handle special characters in name', () => {
        expect(greet('John@123')).toBe('Hello, John@123!');
    });

    it('should handle special characters in greeting', () => {
        expect(greet('John', 'Hey!!!')).toBe('Hey!!!, John!');
    });

    it('should handle whitespace in name', () => {
        expect(greet('   John   ')).toBe('Hello,    John   !');
    });

    it('should handle whitespace in greeting', () => {
        expect(greet('John', '   Hi   ')).toBe('   Hi   , John!');
    });

    it('should handle undefined greeting', () => {
        expect(greet('John', undefined)).toBe('Hello, John!');
    });
});
