import { getLocalStorage } from './crud_functions'

const isNotApi = import.meta.env.VITE_REACT_APP_IS_API_ACTIVE === 'true'

// init store data from local storage
export const initStore = (key) => {
  if (isNotApi) {
    return getLocalStorage(key)
  } else {
    return null
  }
}
