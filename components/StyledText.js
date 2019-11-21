import React from 'react'
import { Text } from 'react-native'

export function LatoText(props) {
    const { fontWeight } = props
    return (
        <Text
            {...props}
            style={[
                props.style,
                { fontFamily: fontWeight ? fontWeight : 'lato' },
            ]}
        />
    )
}
