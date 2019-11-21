import React, { useState } from 'react'
import { View, TouchableOpacity, Modal } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import Styles from '../constants/Styles'
import Colors from '../constants/Colors'
import Sizes from '../constants/Sizes'

import ModalHeader from './ModalHeader'
import CustomCheckBox from './CustomCheckBox'
import { LatoText } from './StyledText'

export default function OrderModal(props) {
    const [checked, setChecked] = useState({
        date: false,
        category: false,
        user: false,
    })

    const {
        modal,
        checkText,
        row,
        align,
        spaceBetween,
        marginRight3,
        marginTop6,
    } = Styles

    const { date, category, user } = checked

    return (
        <Modal {...props} animationType="slide" transparent={false}>
            <View style={modal}>
                <ModalHeader {...props} />
                <TouchableOpacity
                    style={[row, align, spaceBetween, marginTop6]}
                    activeOpacity={0.8}
                    onPress={() => setChecked({ ...checked, date: !date })}
                >
                    <LatoText style={checkText} fontWeight="lato-bold">
                        By Date
                    </LatoText>

                    <CustomCheckBox
                        checked={date}
                        style={marginRight3}
                        onPress={() => setChecked({ ...checked, date: !date })}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[row, align, spaceBetween, marginTop6]}
                    activeOpacity={0.8}
                    onPress={() =>
                        setChecked({ ...checked, category: !category })
                    }
                >
                    <LatoText style={checkText} fontWeight="lato-bold">
                        By Category
                    </LatoText>
                    <CustomCheckBox
                        checked={category}
                        style={marginRight3}
                        onPress={() =>
                            setChecked({ ...checked, category: !category })
                        }
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[row, align, spaceBetween, marginTop6]}
                    activeOpacity={0.8}
                    onPress={() => setChecked({ ...checked, user: !user })}
                >
                    <LatoText style={checkText} fontWeight="lato-bold">
                        By User
                    </LatoText>

                    <CustomCheckBox
                        checked={user}
                        style={marginRight3}
                        onPress={() => setChecked({ ...checked, user: !user })}
                    />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
