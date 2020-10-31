import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {Home} from './Home'

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', {name: 'Welcome to Next.js 10!'}),
    ).toBeInTheDocument()
  })
})
