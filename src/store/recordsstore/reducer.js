
import * as actionTypes from './constans'

const defaultState = {
    records: []
}
function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_RECORD:
            return { ...state, records: [] }
        default:
            return state;
    }

}
export default reducer