import React from 'react'

import styled from 'styled-components'

type Props = {
  text: string
}

const ButtonStyled = styled.button`
  padding: 15px;

  background: ${p => p.theme.colors.primary};

  color: ${p => p.theme.colors.text};
  font-size: 20px;
`

export const Button: React.FC<Props> = ({text}) => (
  <ButtonStyled>{text}</ButtonStyled>
)

export default Button
