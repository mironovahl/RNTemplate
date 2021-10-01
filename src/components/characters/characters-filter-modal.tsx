import React from 'react'
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
        <Button
          title={'APPLY'}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: colors.purple,
            paddingVertical: 5,
            paddingHorizontal: 12,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}
        />
      </Header>
    </Container>
  )
}
