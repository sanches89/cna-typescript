import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  background-color: ${p => p.theme.colors.background};

  overflow: hidden;
`

export const Title = styled.h1`
  color: ${p => p.theme.colors.primary};
`

export const Subtitle = styled.p`
  color: ${p => p.theme.colors.text};
`
