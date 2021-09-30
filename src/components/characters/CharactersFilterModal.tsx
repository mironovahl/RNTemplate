import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'

const Container = styled.View`
  background: ${colors.white};
`

const Header = styled.View`
  width: 100%;
  height: 570px;
  align-items: center;
  padding-top: 21px;
`

const CustomText = styled.Text``

export const CharactersFilterModal = () => {
  return (
    <Container>
      <Header>
        <CustomText>Filter</CustomText>
        <Button title={'APPLY'} style={{ backgroundColor: '#5856d6' }} />
      </Header>
    </Container>
  )
}
