import React, { Fragment, useState } from 'react'
import { FlatList, Text } from 'react-native'
import moment from 'moment'

import CriticalCard from './CriticalCard'

import { routes } from '../utils/routes'

export default function CriticalList(props) {
    const data = [{ _id: 1 }, { _id: 2 }, { _id: 3 }]
    const keyExtractor = (item, index) => item._id.toString()
    const renderItem = ({ item }) => <CriticalCard {...item} id={item._id} />

    return (
        <FlatList
            data={data}
            //extraData={props.medicalRecords}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            // onRefresh={props.medicalRecords}
            // refreshing={props.isLoading}
        />
    )
}
