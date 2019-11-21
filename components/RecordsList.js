import React, { Fragment, useState } from 'react'
import { FlatList, Text } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import moment from 'moment'

import RecordsCard from './RecordsCard'
import Date from './Date'

import Sizes from '../constants/Sizes'

import { routes } from '../utils/routes'

export default function RecordsList(props) {
    const keyExtractor = (item, index) => item._id.toString()

    let date = null

    const renderItem = ({ item }) => {
        const { navigation, onPress } = props

        const currentDate = moment(item.date).format('MMM Do YY')

        const daysAgo =
            moment(item.date).fromNow() +
            ` (${moment(item.date).format('YYYY/MM/DD')})`

        if (date !== currentDate) {
            date = currentDate
            return (
                <Fragment>
                    <Date {...props} date={daysAgo} days />
                    <RecordsCard {...item} _id={item._id} onPress={onPress} />
                </Fragment>
            )
        }
        return <RecordsCard {...item} _id={item._id} onPress={onPress} />
    }
    const { doubleCard } = Sizes

    const { data, isLoading } = props

    return (
        <FlatList
            data={data}
            extraData={data}
            contentContainerStyle={{
                paddingBottom:
                    hp(100) > 670
                        ? data.length <= 3
                            ? wp(doubleCard)
                            : wp(5)
                        : data.length <= 2
                        ? wp(doubleCard)
                        : wp(5),
            }}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            onRefresh={data}
            refreshing={isLoading}
        />
    )
}
