import React from 'react'
import { Button as CustomButton } from 'native-base'

import Shadows from '../constants/Shadows'

export const Button = props => {
    const { children, style, bordered } = props

    if (bordered) {
        return (
            <CustomButton {...props} style={style} bordered>
                {children}
            </CustomButton>
        )
    }

    return (
        <CustomButton {...props} style={[Shadows.button, style]}>
            {children}
        </CustomButton>
    )
}
