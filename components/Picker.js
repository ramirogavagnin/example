import React from 'react'
import { DatePicker } from 'native-base'

export default function Picker(props) {
    return (
        <DatePicker
            {...props}
            defaultDate={new Date()}
            minimumDate={new Date(1900, 0, 1)}
            maximumDate={new Date()}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText="Birth Date"
            disabled={false}
        />
    )
}
