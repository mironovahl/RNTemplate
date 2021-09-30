import React from 'react'
import styled from 'styled-components/native'

import { CharactersList } from 'src/components/characters/CharactersList'

export const CharacterScreen = () => {
  const Content = styled.View`
    flex: 1;
    padding-left: 9px;
    padding-right: 23px;
  `

  return (
    <Content>
      <CharactersList />
    </Content>
  )
}
