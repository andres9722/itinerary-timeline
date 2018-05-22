export const GET_DATA = 'itinerary-timeline/LOAD'
export const GET_DATA_SUCCESS = 'itinerary-timeline/LOAD_SUCCESS'
export const GET_DATA_FAIL = 'itinerary-timeline/LOAD_FAIL'

export default function reducer (state = { itinerary: {} }, action) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, loading: true }
    case GET_DATA_SUCCESS:
      return { ...state, loading: false, itinerary: action.payload.data }
    case GET_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching data'
      }
    default:
      return state
  }
}

export function getData (id) {
  return {
    type: GET_DATA,
    payload: {
      request: {
        url: `/${id}`
      }
    }
  }
}
