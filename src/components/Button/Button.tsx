import React from 'react'

import * as S from './Button.styles'

interface ButtonProps {}

export const Button: React.FC<ButtonProps> = props => {
  const {children} = props

  return <S.Container>{children}</S.Container>
}
