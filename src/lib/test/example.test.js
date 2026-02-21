import { describe, it, expect } from 'vitest'
import { generateName } from '../utils.js'

describe('generateName', () => {
  it('should prepend Hero', () => {
    expect(generateName('Aragorn')).toBe('Hero Aragorn')
  })
})
