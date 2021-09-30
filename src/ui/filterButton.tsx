import React, { useEffect } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Container = styled.TouchableOpacity`
  width: 42px;
  height: 22px;
  margin-bottom: 40px;
  margin-right: 16px;
`

const CustomText = styled.Text`
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  color: ${colors.purple};
`

export const FilterButton = ({ setIsVisible }) => {
  return (
    <Container onPress={() => setIsVisible(true)}>
      <CustomText>Filter</CustomText>
    </Container>
  )
}
