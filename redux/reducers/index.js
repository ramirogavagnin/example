import types from '../types'
import moment from 'moment'
import _ from 'lodash'

const reducers = (state, action) => {
    switch (action.type) {
        case types.USER_SESSION:
            return {
                ...state,
                isLoading: false,
                session: action.payload,
            }

        case types.NEW_MEDICAL_RECORD:
            return {
                ...state,
                isLoading: false,
                medicalRecords: _.orderBy(
                    [...state.medicalRecords, action.payload],
                    ['date'],
                    ['desc']
                ),
            }

        case types.SET_FAVORITE:
            return {
                ...state,
                medicalRecords: _.forEach(state.medicalRecords, item => {
                    if (action.payload === item._id) {
                        item.favorite = !item.favorite
                    }
                }),
            }

        case types.SET_CHILDREN_FAVORITE:
            _.forEach(state.currentChildren[0].medicalRecords, item => {
                if (action.payload === item._id) {
                    item.favorite = !item.favorite
                }
            })
            return {
                ...state,
            }

        case types.SET_CURRENT_RECORD:
            return {
                ...state,
                currentRecord: _.filter(
                    state.medicalRecords,
                    item => item._id === action.payload
                ),
            }

        case types.SET_CURRENT_CHILDREN_RECORD:
            return {
                ...state,
                currentChildrenRecord: _.filter(
                    state.currentChildren[0].medicalRecords,
                    item => item._id === action.payload
                ),
            }

        case types.SET_CURRENT_CHILDREN:
            return {
                ...state,
                currentChildren: _.filter(
                    state.childrens,
                    item => item._id === action.payload
                ),
                currentRole: { role: 'children', _id: action.payload },
            }

        case types.SET_CURRENT_USER:
            const childrenFiltered = _.filter(
                state.childrens,
                item => item._id !== state.currentChildren[0]._id
            )
            return {
                ...state,
                childrens: _.sortBy(
                    [...childrenFiltered, state.currentChildren[0]],
                    item => item.firstName
                ),
                // aqui iria el role y el id que viene de session
                currentRole: { role: 'user', _id: 'none' },
            }

        // handle states
        case types.IS_LOADING:
            return { ...state, isLoading: action.payload }

        case types.ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }

        case types.SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: action.payload,
            }

        default:
            return state
    }
}

export default reducers
