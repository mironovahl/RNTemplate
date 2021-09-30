import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import { useQuery } from '@apollo/client'
import { ICharacter } from 'interfaces/character/ICharacter'
import styled from 'styled-components/native'

import { useCharactersQuery } from 'src/generated/graphql'
import { GET_ALL_CHARACTERS } from 'src/graphql/characters/queries'

import { CharacterCard } from './CharacterCard'

const CustomFlatList = styled.FlatList`
  width: 100%;
  flex-direction: column;
`

export const CharactersList = () => {
  interface IRenderItem {
    item: ICharacter
  }

  const [currentPage, setCurrentPage] = useState(1)

  const { data, loading, fetchMore } = useCharactersQuery({
    variables: {
      page: 1,
    },
  })

  const onEndReached = () => {
    fetchMore({
      variables: {
        page: currentPage + 1,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          characters: {
            results: [
              ...previousResult.characters.results,
              ...fetchMoreResult.characters.results,
            ],
          },
        }
      },
    })
    setCurrentPage(currentPage + 1)
  }

  console.log(currentPage)
  console.log(data)

  const renderItem = ({ item }: IRenderItem) => (
    <CharacterCard name={item.name} status={item.status} image={item.image} />
  )

  if (loading) {
    return <Text>Loading</Text>
  }

  return (
    <CustomFlatList
      key={'#'}
      numColumns={2}
      data={data.characters.results}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      onEndReachedThreshold={0.5}
      onEndReached={onEndReached}
    />
  )
}
