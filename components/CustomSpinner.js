import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import Colors from '../constants/Colors'

export default function CustomSpinner(props) {
    const { primaryColor } = Colors
    return (
        <Spinner
            {...props}
            overlayColor={'rgba(0, 0, 0, 0.25)'}
            color={primaryColor}
        />
    )
}
