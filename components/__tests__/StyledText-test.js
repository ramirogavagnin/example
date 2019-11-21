import React from 'react'
import renderer from 'react-test-renderer'

import { LatoText } from '../StyledText'

it(`renders correctly`, () => {
    const tree = renderer.create(<LatoText>Snapshot test!</LatoText>).toJSON()

    expect(tree).toMatchSnapshot()
})
