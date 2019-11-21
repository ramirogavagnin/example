import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import Colors from './Colors'
import Sizes from './Sizes'

export default function Layout(props) {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={[styles.contentContainer, props.style]}
            >
                {props.children}
            </ScrollView>
        </View>
    )
}

const { containerPT, containerPH } = Sizes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    contentContainer: {
        paddingTop: wp(containerPT),
        paddingHorizontal: wp(containerPH),
    },
})
