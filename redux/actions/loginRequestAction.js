import types from '../types'
import { routes } from '../../utils/routes'
import { endpoints, post } from '../../utils/requests'

export const loginRequest = payload => async dispatch => {
    try {
        dispatch({
            type: types.LOADING,
            payload: true,
        })

        const { form, navigation } = payload

        const response = await fetch('http://localhost:30000/login')

        if (response.ok) {
            const data = await response.json()

            dispatch({
                type: types.IS_AUTH,
            })

            dispatch({
                type: types.USER_SESSION,
                payload: data,
            })

            navigation.navigate(routes.app)
        } else {
            dispatch({
                type: types.ERROR,
                payload: `There was an error: ${response.statusText}`,
            })
        }
    } catch (error) {
        dispatch({
            type: types.ERROR,
            payload: `There was an error: ${error.message}`,
        })
    }
}
