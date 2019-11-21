import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Feather } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'
import STYLES from '../constants/Styles'

import Card from './Card'
import PartialDivider from './PartialDivider'
import { LatoText } from './StyledText'

export default function MessageCard(props) {
    const { greyIcon } = Colors
    const { smallIcon } = Sizes
    const { row, align, marginRight3 } = STYLES

    const { card, message, user, by } = styles

    return (
        <Card style={card}>
            <LatoText style={message}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Risus viverra adipiscing at in. Tortor pretium viverra
                suspendisse potenti nullam ac tortor. Amet consectetur
                adipiscing elit duis tristique sollicitudin nibh sit. Ligula
                ullamcorper malesuada proin libero nunc consequat. Tincidunt
                praesent semper feugiat nibh sed pulvinar proin gravida
                hendrerit. Id donec ultrices tincidunt arcu.
            </LatoText>
            <PartialDivider style={styles.partialDivider} />
            <View style={[row, align]}>
                <Feather
                    name="user"
                    size={wp(smallIcon)}
                    color={greyIcon}
                    style={marginRight3}
                    onPress={() => {}}
                />
                <LatoText style={user} fontWeight={'lato-bold'}>
                    <LatoText style={by} fontWeight={'lato-bold'}>
                        by
                    </LatoText>{' '}
                    User n
                </LatoText>
            </View>
        </Card>
    )
}

const { blackText, primaryColor, lightGreyText } = Colors
const { M_Text, SM_Text } = Sizes

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: wp(5),
        paddingVertical: wp(6),
    },
    message: {
        fontSize: wp(M_Text),
        color: blackText,
    },
    user: {
        fontSize: wp(SM_Text),
        color: primaryColor,
    },
    by: {
        color: lightGreyText,
    },
    partialDivider: {
        width: '100%',
        marginVertical: wp(3),
    },
})
