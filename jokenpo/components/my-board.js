import React from 'react'
import { View } from 'react-native'
import { theme } from '../theme'

export function MyBoard(props) {
	return <View style={[theme.components.board]}>{props.children}</View>
}
