import types from '../types'
import { routes } from '../utils/routes'
import { endpoints, post } from '../utils/requests'

export const postMedicalRecord = payload => ({
    type: types.POST_MEDICAL_RECORD,
    payload,
})
/*  try {
        dispatch({
            type: types.LOADING,
            payload: true,
        })

        const { form } = payload

        const { medicalRecord } = endpoints

        const postResponse = await post(medicalRecord, form, '1234')

        const { error, response } = postResponse
        console.warn(response)
        if (!error) {
            dispatch({
                type: types.POST_MEDICAL_RECORD,
                payload: form,
            })
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
    } */
/* } */
