import React from 'react'
import styled from 'styled-components/native'

import { CharactersList } from 'src/components/characters/CharactersList'

export const CharacterScreen = () => {
  const Content = styled.View`
    flex: 1;
  `

  return (
    <Content>
      <CharactersList />
    </Content>
  )
}
