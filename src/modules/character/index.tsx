import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { useCharactersQuery } from 'src/generated/graphql'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { ModalMenu } from 'src/ui/modal'

import { CharacterCard } from './character-card'
import { ModalFilter } from './modal-filter'

const Container = styled.View`
  background-color: ${colors.white};
`
const TextFilter = styled.Text`
  padding-right: 16px;
  color: ${colors.indigo};
  font-size: 17px;
  line-height: 22px;
`

export const CharacterScreen = () => {
  const navigation = useNavigation()
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <TextFilter>Filter</TextFilter>
      </TouchableOpacity>
    ),
  })

  const { data, loading, fetchMore } = useCharactersQuery({
    variables: {
      page: 1,
    },
  })

  const loadMore = () => {
    fetchMore({
      variables: {
        page: currentPage + 1,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          characters: {
            results: [
              ...(previousResult?.characters?.results ?? []),
              ...(fetchMoreResult?.characters?.results ?? []),
            ],
          },
        }
      },
    })
    setCurrentPage(currentPage + 1)
  }

  const renderItem = ({ item }) => (
    <CharacterCard name={item.name} status={item.status} image={item.image} />
  )

  if (loading) return <Text>Loading...</Text>

  return (
    <Container>
      <FlatList
        key={'#'}
        keyExtractor={(item) => String(item?.name)}
        data={data?.characters?.results ?? []}
        numColumns={2}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
        renderItem={renderItem}
      />
      <ModalMenu showModal={showModal} setShowModal={setShowModal}>
        <ModalFilter />
      </ModalMenu>
    </Container>
  )
}
