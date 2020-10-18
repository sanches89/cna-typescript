import React from 'react'

import * as S from './Button.styles'

export const Button: React.FC = props => {
  const {children} = props

  return <S.Container>{children}</S.Container>
}
