import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { colors } from 'src/theme/colors'

export const BackArrow = () => {
  return (
    <Svg width={13} height={21} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.037 20.583L.792 11.446a.975.975 0 010-1.392L10.037.917a1.456 1.456 0 012.04 0c.563.557.563 1.46 0 2.016L4.17 10.751l7.909 7.815c.562.557.562 1.46 0 2.017a1.456 1.456 0 01-2.04 0z"
        fill={colors.indigo}
      />
    </Svg>
  )
}
