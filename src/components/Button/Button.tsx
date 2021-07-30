import React from 'react'

import * as S from './Button.styles'

export interface ButtonProps {
  children: React.ReactNode
}

export function Button(props: ButtonProps): React.ReactElement {
  const {children} = props

  return <S.Container>{children}</S.Container>
}
