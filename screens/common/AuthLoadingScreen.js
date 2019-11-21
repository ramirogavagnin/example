import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import { routes } from '../../utils/routes'

import Colors from '../../constants/Colors'

function AuthLoadingScreen({ session, navigation }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            if (session.length > 0) {
                setIsLoading(false)
                navigation.navigate(routes.app)
            } else {
                setIsLoading(false)
                navigation.navigate(routes.auth)
            }
        }, 1500)
    }, [])

    const { container, logo } = styles

    return (
        <View style={container}>
            <ActivityIndicator
                animating={isLoading}
                size="large"
                color={Colors.primaryColor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        justifyContent: 'center',
    },
})

const mapStateToProps = state => {
    return {
        session: state.session,
    }
}

export default connect(
    mapStateToProps,
    null
)(AuthLoadingScreen)
