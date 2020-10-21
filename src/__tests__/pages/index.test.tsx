import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {Home} from '@/pages/index'

describe('App', () => {
  it('renders without crashing', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', {name: 'Welcome to Next.js!'}),
    ).toBeInTheDocument()
  })
})
