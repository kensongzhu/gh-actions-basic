import { expect, test } from 'vitest'
import { echo } from '../src'

test('fn', () => {
  expect(echo()).toBe('Hello, tsdown!')
})
