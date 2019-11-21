import React, { Fragment, useState } from 'react'
import { FlatList, Text } from 'react-native'
import moment from 'moment'

import MessageCard from './MessageCard'
import Date from './Date'

import { routes } from '../utils/routes'

export default function CommentsList(props) {
    const keyExtractor = (item, index) => item._id.toString()

    let date = null

    const renderItem = ({ item }) => {
        const { navigation } = props

        const currentDate = moment(item.date).format('MMM Do YY')

        const daysAgo =
            moment(item.date).fromNow() +
            ` (${moment(item.date).format('YYYY/MM/DD')})`

        if (date !== currentDate) {
            date = currentDate
            return (
                <Fragment>
                    <Date date={daysAgo} days />
                    <MessageCard {...item} />
                </Fragment>
            )
        }
        return <MessageCard {...item} />
    }

    const { data } = props

    return (
        <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    )
}
