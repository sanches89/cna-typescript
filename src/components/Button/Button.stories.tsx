import React from 'react'

import {storiesOf} from '@storybook/react'

import {Button} from './Button'

storiesOf('Button', module).add('default', () => {
  return <Button>Hello Button!!</Button>
})
