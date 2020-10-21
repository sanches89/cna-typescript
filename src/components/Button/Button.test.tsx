import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {Button} from './Button'

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button>Hello world!!!</Button>)
    expect(screen.getByText(/Hello world!!!/)).toBeInTheDocument()
  })
})
