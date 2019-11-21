import axios from 'axios'

import types from '../types'
import { routes } from '../../utils/routes'
import { endpoints, post } from '../../utils/requests'
import { navigateToScreen } from '../../utils/helpers'

export const setSession = payload => ({
    type: types.USER_SESSION,
    payload: payload,
})

export const setNewMedicalRecord = payload => ({
    type: types.NEW_MEDICAL_RECORD,
    payload: payload,
})

export const setFavorite = payload => ({
    type: types.SET_FAVORITE,
    payload: payload,
})

export const setChildrenFavorite = payload => ({
    type: types.SET_CHILDREN_FAVORITE,
    payload: payload,
})

export const setCurrentRecord = payload => ({
    type: types.SET_CURRENT_RECORD,
    payload: payload,
})

export const setCurrentChildrenRecord = payload => ({
    type: types.SET_CURRENT_CHILDREN_RECORD,
    payload: payload,
})

export const setCurrentChildren = payload => ({
    type: types.SET_CURRENT_CHILDREN,
    payload: payload,
})

export const setCurrentUser = payload => ({
    type: types.SET_CURRENT_USER,
    payload: payload,
})

// handle states response

export const setSuccess = payload => ({
    type: types.SUCCESS,
    payload,
})

export const setError = payload => ({
    type: types.ERROR,
    payload,
})

export const setIsLoading = payload => ({
    type: types.IS_LOADING,
    payload,
})

export const handleCurrentRecord = payload => {
    return dispatch => {
        const { _id, currentRole } = payload
        if (currentRole.role === 'user') {
            dispatch(setCurrentRecord(_id))
        } else {
            dispatch(setCurrentChildrenRecord(_id))
        }
    }
}

export const handleFavorite = payload => {
    return dispatch => {
        const { _id, currentRole } = payload

        dispatch(setIsLoading(true))

        if (currentRole.role === 'user') {
            dispatch(setFavorite(_id))
        } else {
            dispatch(setChildrenFavorite(_id))
        }

        setTimeout(() => {
            dispatch(setIsLoading(false))
        }, 500)
    }
}

export const handleCurrentChildren = payload => {
    return dispatch => {
        const { _id, currentRole } = payload
        if (currentRole.role === 'children' && currentRole._id === _id) {
            navigateToScreen(routes.childrenHome, payload)
        } else {
            dispatch(setCurrentChildren(_id))
            navigateToScreen(routes.childrenHome, payload)
        }
    }
}

export const handleCurrentUser = payload => {
    return dispatch => {
        const { currentRole } = payload
        if (currentRole.role === 'user') {
            navigateToScreen(routes.parentHome, payload)
        } else {
            dispatch(setCurrentUser())
            navigateToScreen(routes.parentHome, payload)
        }
    }
}

export const handleOnPressNotification = payload => {
    return dispatch => {
        const { currentRole, onPress } = payload
        if (currentRole.role === 'user') {
            onPress()
            navigateToScreen(routes.parentRecords, payload)
        } else {
            dispatch(setCurrentUser())
            onPress()
            navigateToScreen(routes.parentRecords, payload)
        }
    }
}

export const loginUser = ({ email, password }, navigation) => {
    return dispatch => {
        dispatch(setIsLoading(true))
        setTimeout(() => {
            dispatch(setSession({}))
            navigation.navigate(routes.app)
        }, 300)
    }
}

export const postMedicalRecord = (form, navigation) => {
    return dispatch => {
        dispatch(setIsLoading(true))
        setTimeout(() => {
            dispatch(setNewMedicalRecord(form))
            dispatch(
                setSuccess(
                    `Congrats! Your file "${form.file.name}" was succesfuly uploaded`
                )
            )
        }, 300)
        /*   axios

            .get('https://jsonplaceholder.typicode.com/todos/1')

            .then(({ data }) => {
                dispatch(setNewMedicalRecord(form))
            })
            .then(() => {
                dispatch(
                    setSuccess(
                        `Congrats! Your file "${form.file.name}" was succesfuly uploaded`
                    )
                )
            })
            .catch(error => {
                dispatch(
                    setError(
                        `Ups! Couldn't upload your file now. Try again later.\nerror: ${
                            error.message
                        }\nid: ${Math.floor(Math.random() * 100)}`
                    )
                )
            }) */
    }
}
