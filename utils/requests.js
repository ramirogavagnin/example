const API_URL = 'http://localhost:3000'

export const endpoints = {
    login: 'login',
    medicalRecord: 'medical-record-create',
}

export const put = async (endpoint, body, token) => {
    try {
        const result = await fetch(`${API_URL}/${endpoint}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'X-Auth-Token': token,
                'Content-Type': 'application/json',
            },
        })
        if (result.ok) {
            const response = await result.json()
            return { error: null, response }
        } else {
            return { error: true, response: result, message: result.message }
        }
    } catch (err) {
        return { error: true, message: err.message }
    }
}

export const get = async (endpoint, token, id) => {
    try {
        let url = `${API_URL}/${endpoint}/`

        if (id) {
            url = `${API_URL}/${endpoint}/${id}`
        }

        const result = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Auth-Token': token,
                'Content-Type': 'application/json',
            },
        })
        if (result.ok) {
            const response = await result.json()
            return { error: null, response }
        } else {
            return { error: true, response: result, message: result.message }
        }
    } catch (err) {
        return { error: true, message: err.message }
    }
}

export const post = async (endpoint, body, token) => {
    try {
        const result = await fetch(`${API_URL}/${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'X-Auth-Token': token,
                'Content-Type': 'application/json',
            },
        })
        if (result.ok) {
            const response = await result.json()
            return { error: null, response }
        } else {
            return { error: true, response: result, message: result.message }
        }
    } catch (err) {
        return { error: true, message: err.message }
    }
}
