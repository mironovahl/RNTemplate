import React from 'react'
import { FlatList, Text } from 'react-native'
import { ICharacter } from 'interfaces/character/ICharacter'

import { useCharactersQuery } from 'src/generated/graphql'

import { CharacterCard } from './CharacterCard'

export const CharactersList = () => {
  interface IRenderItem {
    item: ICharacter
  }

  const { data, loading } = useCharactersQuery()

  const renderItem = ({ item }: IRenderItem) => (
    <CharacterCard name={item.name} status={item.status} image={item.image} />
  )

  if (loading) {
    return <Text>Loading</Text>
  }

  return (
    <FlatList
      data={data?.characters?.results}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      // onEndReachedThreshold={0.5}
      // onEndReached={onEndReached}
      // maxToRenderPerBatch={10}
    />
  )
}
