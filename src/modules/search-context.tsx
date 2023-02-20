import React, { createContext, FC, useContext } from 'react'

import { SearchState } from 'src/types'

const initialState: SearchState = {
  results: [],
  value: '',
  setValue: () => undefined,
  reloader: () => undefined,
}

const SearchContex = createContext(initialState)

type Props = {
  value: SearchState
}

export const SearchProvider: FC<Props> = ({ children, value }) => (
  <SearchContex.Provider value={value}>{children}</SearchContex.Provider>
)

export const useSearchContex = () => useContext(SearchContex)