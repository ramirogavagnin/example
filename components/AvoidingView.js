import React from 'react'
import { KeyboardAvoidingView } from 'react-native'

export const AvoidingView = props => {
    const { children, style } = props
    return (
        <KeyboardAvoidingView style={style} behavior="padding" enabled>
            {children}
        </KeyboardAvoidingView>
    )
}
