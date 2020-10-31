import React from 'react'

import * as S from './Button.styles'

interface ButtonProps {
  children: React.ReactNode
}

export function Button(props: ButtonProps): JSX.Element {
  const {children} = props

  return <S.Container>{children}</S.Container>
}
