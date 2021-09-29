import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CharacterScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'
import { NavCharctIconDis } from 'src/resources/image/navigation/NavCharctIconDis'
import { NavEpisodeIconDis } from 'src/resources/image/navigation/NavEpisodeIconDis'
import { NavLocationIconDis } from 'src/resources/image/navigation/NavLocationIconDis'
import { colors } from 'src/theme/colors'
import { FilterButton } from 'src/ui/filterButton'

import { Routes } from './routes'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.CharacterScreen}>
      <Tab.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
        options={{
          headerTitle: 'Character',
          headerStyle: {
            backgroundColor: colors.lightGray,
            height: 140,
          },
          headerTitleStyle: {
            fontSize: 34,
            fontWeight: 'bold',
            lineHeight: 41,
            color: colors.gray,
            marginRight: 200,
            marginTop: 50,
          },
          headerRight: () => <FilterButton />,
          tabBarIcon: ({ focused }) => <NavCharctIconDis />,
        }}
      />
      <Tab.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{
          tabBarIcon: ({ focused }) => <NavLocationIconDis />,
        }}
      />
      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          headerTitle: 'Episode',
          tabBarIcon: ({ focused }) => <NavEpisodeIconDis />,
        }}
      />
    </Tab.Navigator>
  )
}
