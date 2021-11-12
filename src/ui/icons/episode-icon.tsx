import * as React from 'react'
import { Path, Svg } from 'react-native-svg'

import { colors } from 'src/theme/colors'

export const EpisodeIcon = ({ focused, ...props }) => {
  const ActiveIcon = (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...props}>
      <Path
        d="M23.3333 8.16667H4.66665C3.37798 8.16667 2.33331 9.21134 2.33331 10.5V23.3333C2.33331 24.622 3.37798 25.6667 4.66665 25.6667H23.3333C24.622 25.6667 25.6666 24.622 25.6666 23.3333V10.5C25.6666 9.21134 24.622 8.16667 23.3333 8.16667Z"
        fill={colors.purple}
      />
      <Path
        d="M19.8334 2.33333L14 8.16666L8.16669 2.33333"
        stroke={colors.purple}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )

  const InactiveIcon = (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...props}>
      <Path
        d="M23.3333 8.16666H4.66665C3.37798 8.16666 2.33331 9.21133 2.33331 10.5V23.3333C2.33331 24.622 3.37798 25.6667 4.66665 25.6667H23.3333C24.622 25.6667 25.6666 24.622 25.6666 23.3333V10.5C25.6666 9.21133 24.622 8.16666 23.3333 8.16666Z"
        stroke={colors.grey}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.8334 2.33334L14 8.16667L8.16669 2.33334"
        stroke={colors.grey}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )

  return focused ? ActiveIcon : InactiveIcon
}
