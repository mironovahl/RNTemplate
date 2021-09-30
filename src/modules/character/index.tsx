import React, { useState } from 'react'
import styled from 'styled-components/native'

import { CharactersFilterModal } from 'src/components/characters/CharactersFilterModal'
import { CharactersList } from 'src/components/characters/CharactersList'
import { FilterButton } from 'src/ui/filterButton'
import { ModalMenu } from 'src/ui/modal'

const Content = styled.View`
  flex: 1;
  padding-left: 9px;
  padding-right: 23px;
`

export const CharacterScreen = ({ navigation }) => {
  const [visible, setIsVisible] = useState(false)
  navigation.setOptions({
    headerRight: () => <FilterButton setIsVisible={setIsVisible} />,
  })

  return (
    <>
      <ModalMenu showModal={visible} setShowModal={setIsVisible}>
        <CharactersFilterModal />
      </ModalMenu>
      <Content>
        <CharactersList />
      </Content>
    </>
  )
}
