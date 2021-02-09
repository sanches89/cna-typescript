import React from 'react'

import * as S from './Home.styles'

export function Home(): React.ReactElement {
  return (
    <S.Container>
      <S.Title>Welcome to CNA - TypeScript!</S.Title>
      <S.Subtitle>Boilerplate for Next.js projects</S.Subtitle>
    </S.Container>
  )
}
