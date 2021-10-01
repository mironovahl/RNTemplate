import React, { useState } from 'react'
import styled from 'styled-components/native'

import { CharactersFilterModal } from 'src/components/characters/characters-filter-modal'
import { CharactersList } from 'src/components/characters/characters-list'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'
import { ModalMenu } from 'src/ui/modal'

const Content = styled.View`
  flex: 1;
  padding-left: 9px;
  padding-right: 23px;
`

const CustomText = styled.Text`
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  color: ${colors.purple};
`

export const CharacterScreen = () => {
  const [visible, setIsVisible] = useState(false)
  const navigation = useNavigation()
  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() => setIsVisible(true)}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ width: 42, height: 22, marginBottom: 40, marginRight: 16 }}>
        <CustomText>Filter</CustomText>
      </Button>
    ),
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
